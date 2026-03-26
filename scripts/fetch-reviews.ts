/**
 * Fetch 5-star App Store reviews via App Store Connect API.
 *
 * Required environment variables (set in .env.local, never commit these):
 *   ASC_KEY_ID       – Key ID from App Store Connect → Users & Access → Integrations
 *   ASC_ISSUER_ID    – Issuer ID from the same page
 *   ASC_PRIVATE_KEY  – Contents of the downloaded .p8 file (including header/footer)
 *
 * Usage:
 *   npm run fetch-reviews
 *
 * Output:
 *   app/content/reviews.json
 */

import * as fs from "fs";
import * as path from "path";
import * as crypto from "crypto";
import { config as dotenvConfig } from "dotenv";

// Load env from .env.local when running outside Next.js
dotenvConfig({ path: path.resolve(process.cwd(), ".env.local") });

const KEY_ID = process.env.ASC_KEY_ID;
const ISSUER_ID = process.env.ASC_ISSUER_ID;
const PRIVATE_KEY_RAW = process.env.ASC_PRIVATE_KEY;
const APP_ID = "6756604756";
const MAX_REVIEWS = 198;
const OUTPUT_PATH = path.resolve(process.cwd(), "app/content/reviews.json");
const REVIEWS_PAGE_URL =
    "https://apps.apple.com/nl/app/bijdehand-klantenpassen/id6756604756?see-all=reviews";

if (!KEY_ID || !ISSUER_ID || !PRIVATE_KEY_RAW) {
    console.error(
        "Missing environment variables: ASC_KEY_ID, ASC_ISSUER_ID and/or ASC_PRIVATE_KEY.\n" +
        "Add them to .env.local (see script header for instructions)."
    );
    process.exit(1);
}

// Normalise the private key into a valid PKCS#8 PEM block.
// Handles keys stored: with/without newlines, with/without END footer,
// with literal \n sequences, or as raw base64.
function normaliseKey(raw: string): string {
    // 1. Replace literal \n sequences with real newlines
    let key = raw.replace(/\\n/g, "\n").trim();

    // 2. Strip any existing PEM headers/footers and collect the raw base64
    const stripped = key
        .split("\n")
        .filter((line) => !line.startsWith("-----"))
        .join("")
        .replace(/\s/g, "");

    // 3. Re-wrap into a valid PEM block (64-char lines)
    const wrapped = (stripped.match(/.{1,64}/g) ?? [stripped]).join("\n");
    return `-----BEGIN PRIVATE KEY-----\n${wrapped}\n-----END PRIVATE KEY-----`;
}

const PRIVATE_KEY = normaliseKey(PRIVATE_KEY_RAW);

// ---------------------------------------------------------------------------
// DER → IEEE P1363 conversion (required for ES256 JWT)
// ---------------------------------------------------------------------------
function derToIeeeP1363(der: Buffer, coordSize: number): Buffer {
    // DER structure: 30 <total-len> 02 <r-len> <r> 02 <s-len> <s>
    let offset = 2; // skip 0x30 and total length byte(s)
    // Handle multi-byte length
    if (der[1] & 0x80) offset += (der[1] & 0x7f);

    const parseInteger = (): Buffer => {
        // expect 0x02
        offset++; // skip 0x02
        const len = der[offset++];
        const val = der.slice(offset, offset + len);
        offset += len;
        // Remove leading zero padding that DER adds for sign
        return val[0] === 0 ? val.slice(1) : val;
    };

    const r = parseInteger();
    const s = parseInteger();

    const result = Buffer.alloc(coordSize * 2, 0);
    r.copy(result, coordSize - r.length);
    s.copy(result, coordSize * 2 - s.length);
    return result;
}

// ---------------------------------------------------------------------------
// JWT (ES256)
// ---------------------------------------------------------------------------
function base64url(input: Buffer | string): string {
    const buf = typeof input === "string" ? Buffer.from(input) : input;
    return buf.toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}

function makeJwt(): string {
    const header = base64url(JSON.stringify({ alg: "ES256", kid: KEY_ID, typ: "JWT" }));
    const now = Math.floor(Date.now() / 1000);
    const payload = base64url(
        JSON.stringify({
            iss: ISSUER_ID,
            iat: now,
            exp: now + 1200,
            aud: "appstoreconnect-v1",
        })
    );
    const data = `${header}.${payload}`;
    const sign = crypto.createSign("SHA256");
    sign.update(data);
    // Apple uses ES256 (P-256). JWT requires IEEE P1363 format (r||s, each 32 bytes).
    const signature = base64url(
        sign.sign({ key: PRIVATE_KEY, dsaEncoding: "ieee-p1363" } as Parameters<typeof sign.sign>[0])
    );
    return `${data}.${signature}`;
}

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
interface ReviewAttributes {
    rating: number;
    title: string;
    body: string;
    reviewerNickname: string;
    createdDate: string;
    territory: string;
}

interface ReviewItem {
    id: string;
    attributes: ReviewAttributes;
}

interface ReviewOutput {
    id: string;
    rating: number;
    title: string;
    body: string;
    reviewerNickname: string;
    createdDate: string;
    territory: string;
    url: string;
}

// ---------------------------------------------------------------------------
// Fetch reviews
// ---------------------------------------------------------------------------
async function fetchReviews(): Promise<ReviewOutput[]> {
    const jwt = makeJwt();
    const url =
        `https://api.appstoreconnect.apple.com/v1/apps/${APP_ID}/customerReviews` +
        `?filter[rating]=5&sort=-createdDate&limit=200`;

    console.log("Fetching reviews from App Store Connect API…");

    const response = await fetch(url, {
        headers: {
            Authorization: `Bearer ${jwt}`,
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        const body = await response.text();
        throw new Error(`API request failed (${response.status}): ${body}`);
    }

    const json = (await response.json()) as { data: ReviewItem[] };
    const items = json.data.slice(0, MAX_REVIEWS);

    console.log(`Received ${json.data.length} reviews, keeping ${items.length}.`);

    return items.map((item) => ({
        id: item.id,
        rating: item.attributes.rating,
        title: item.attributes.title,
        body: item.attributes.body,
        reviewerNickname: item.attributes.reviewerNickname,
        createdDate: item.attributes.createdDate,
        territory: item.attributes.territory,
        url: REVIEWS_PAGE_URL,
    }));
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
(async () => {
    try {
        const reviews = await fetchReviews();
        fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
        fs.writeFileSync(OUTPUT_PATH, JSON.stringify(reviews, null, 2), "utf-8");
        console.log(`Written ${reviews.length} reviews to ${OUTPUT_PATH}`);
    } catch (err) {
        console.error("Error fetching reviews:", err);
        process.exit(1);
    }
})();

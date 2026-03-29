import type { NextConfig } from "next";

const repoName = "BijdehandApp";

// Vercel: always root (VERCEL=1 during build). Do not set GITHUB_PAGES in the Vercel dashboard.
// GitHub Pages: set GITHUB_PAGES=1 in .github/workflows only (not on Vercel).
const onVercel = process.env.VERCEL === "1";
const useGitHubPagesBase =
  process.env.NODE_ENV === "production" &&
  !onVercel &&
  process.env.GITHUB_PAGES === "1";
const basePath = useGitHubPagesBase ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;

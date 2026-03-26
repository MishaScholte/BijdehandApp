import { ExternalLink } from "lucide-react";

export interface Review {
    id: string;
    rating: number;
    title: string;
    body: string;
    reviewerNickname: string;
    createdDate: string;
    territory: string;
    url: string;
}

function formatDate(iso: string): string {
    return new Date(iso).toLocaleDateString("nl-NL", {
        day: "numeric",
        month: "short",
        year: "numeric",
    });
}

export function TestimonialCard({ review }: { review: Review }) {
    return (
        <div className="flex flex-col gap-2 md:gap-3 px-1 py-1 md:py-2 h-full">
            {/* Stars */}
            <div className="flex gap-0.5" aria-label={`${review.rating} van 5 sterren`}>
                {Array.from({ length: 5 }).map((_, i) => (
                    <span
                        key={i}
                        className={
                            i < review.rating
                                ? "text-yellow-400 text-base md:text-lg leading-none"
                                : "text-neutral-600 text-base md:text-lg leading-none"
                        }
                        aria-hidden
                    >
                        ★
                    </span>
                ))}
            </div>

            {/* Title */}
            {review.title ? (
                <p className="text-sm md:text-base font-semibold text-neutral-200 leading-snug">
                    {review.title}
                </p>
            ) : null}

            {/* Body */}
            <p className="text-sm md:text-base lg:text-lg italic text-neutral-400 leading-relaxed line-clamp-2 md:line-clamp-3 flex-1">
                &ldquo;{review.body}&rdquo;
            </p>

            {/* Footer: name + date + link */}
            <div className="flex items-center justify-between gap-2 mt-auto pt-1">
                <div className="flex flex-col gap-0.5 min-w-0">
                    <span className="text-xs md:text-sm text-neutral-400 truncate">
                        {review.reviewerNickname}
                    </span>
                    <span className="text-xs md:text-sm text-neutral-600">
                        {formatDate(review.createdDate)}
                    </span>
                </div>

                {review.url ? (
                    <a
                        href={review.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Bekijk review in de App Store"
                        className="shrink-0 text-neutral-600 hover:text-neutral-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded-sm"
                    >
                        <ExternalLink className="size-3.5 md:size-4" aria-hidden />
                    </a>
                ) : null}
            </div>
        </div>
    );
}

import Image from "next/image";
import Link from "next/link";

interface ContentCardProps {
    title: string;
    category: string;
    type: "Read" | "Listen" | "Watch";
    author?: string;
    imageUrl: string;
    href: string;
    featured?: boolean;
}

export function ContentCard({
    title,
    category,
    type,
    author,
    imageUrl,
    href,
    featured = false,
}: ContentCardProps) {
    return (
        <Link
            href={href}
            className={`group relative block overflow-hidden bg-zinc-900 ${featured ? "row-span-2" : ""
                }`}
        >
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative flex h-full min-h-[300px] flex-col justify-between p-6">
                {/* Top: Category */}
                <div className="flex items-center justify-between">
                    <span className="text-xs font-medium uppercase tracking-wider text-white/80">
                        {category}
                    </span>
                    <span className="text-xs font-medium uppercase tracking-wider text-white/80">
                        {type}
                    </span>
                </div>

                {/* Bottom: Title & Author */}
                <div>
                    <h3 className="font-serif text-xl leading-tight text-white sm:text-2xl">
                        {title}
                    </h3>
                    {author && (
                        <p className="mt-2 text-sm text-white/70">by {author}</p>
                    )}
                </div>
            </div>
        </Link>
    );
}

interface SolidCardProps {
    title: string;
    description?: string;
    href: string;
    bgColor: string;
    textColor?: string;
}

export function SolidCard({
    title,
    description,
    href,
    bgColor,
    textColor = "text-zinc-900",
}: SolidCardProps) {
    return (
        <Link
            href={href}
            className={`group block p-8 transition-all hover:shadow-lg ${bgColor}`}
        >
            <h3 className={`font-serif text-2xl leading-tight ${textColor}`}>
                {title}
            </h3>
            {description && (
                <p className={`mt-3 text-sm opacity-80 ${textColor}`}>{description}</p>
            )}
            <span
                className={`mt-6 inline-flex items-center gap-2 text-sm font-medium ${textColor}`}
            >
                Explore
                <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                </svg>
            </span>
        </Link>
    );
}

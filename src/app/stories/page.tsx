import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";

const story = {
    title: "2026: This is AGI",
    category: "Perspective",
    type: "Read",
    author: "Last Ventures Team",
    date: "February 2026",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
    href: "/stories/agi-2026",
    excerpt:
        "We are living through the most consequential technological transition in human history. Artificial General Intelligence is no longer a distant horizon — it is here, and it is reshaping every industry, every institution, and every assumption we held about the future of work and human potential.",
};

export default function StoriesPage() {
    return (
        <div className="min-h-screen bg-[#f2f0e9]">
            <Header />

            {/* Page Header */}
            <section className="bg-[#f2f0e9] px-6 pb-0 pt-36">
                <div className="mx-auto max-w-7xl">
                    <h1
                        className="font-sans text-6xl font-light text-zinc-900 sm:text-7xl md:text-8xl"
                        style={{ letterSpacing: "0.15em" }}
                    >
                        STORIES
                    </h1>
                    <div className="mt-4 h-px bg-zinc-300" />
                </div>
            </section>

            {/* Featured Story */}
            <section className="bg-[#f2f0e9] px-6 py-12">
                <div className="mx-auto max-w-7xl">
                    <Link href={story.href} className="group block">
                        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
                            {/* Image */}
                            <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                                <img
                                    src={story.imageUrl}
                                    alt={story.title}
                                    className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            {/* Text */}
                            <div className="flex flex-col justify-center">
                                <div className="mb-4 flex items-center gap-3">
                                    <span className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
                                        {story.category}
                                    </span>
                                    <span className="text-zinc-300">·</span>
                                    <span className="text-xs uppercase tracking-widest text-zinc-500">
                                        {story.type}
                                    </span>
                                </div>

                                <h2 className="font-serif text-4xl leading-tight text-zinc-900 transition-colors group-hover:text-emerald-800 sm:text-5xl">
                                    {story.title}
                                </h2>

                                <p className="mt-6 text-base leading-relaxed text-zinc-600">
                                    {story.excerpt}
                                </p>

                                <div className="mt-8 flex items-center gap-4">
                                    <div>
                                        <p className="text-sm font-medium text-zinc-900">{story.author}</p>
                                        <p className="text-xs text-zinc-500">{story.date}</p>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-zinc-900 transition-colors group-hover:text-emerald-700">
                                        Read Story
                                        <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
}

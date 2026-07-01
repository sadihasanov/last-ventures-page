import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";

const values = [
    {
        title: "We back the daring, not the obvious.",
        body: "The best companies rarely look like sure things at the start. We choose to work with founders who are willing to pursue ideas that seem impossible to most — because that's where the real value is created. We think more about how big the outcome can be than all the ways it can fail.",
    },
    {
        title: "We are in the relationship business.",
        body: "We take a long view. When we take on a founder, we're committing to a relationship that outlasts any single project or engagement. We show up in the hard moments, not just the good ones. Our word is our bond — we don't make commitments we don't intend to keep.",
    },
    {
        title: "We tell the truth, even when it's hard.",
        body: "Founders deserve honest feedback, not comfortable platitudes. We give our real opinion on contracts, raises, and technical decisions — because that's what actually helps. We never publicly criticize an entrepreneur or their company. We save hard truths for private conversations.",
    },
    {
        title: "We do first-class work, always.",
        body: "We respond to every founder, even when we're not the right fit. We show up prepared. We follow through on what we say we'll do. The standard we hold ourselves to is the same standard we expect from the companies we work with.",
    },
    {
        title: "We play to win — together.",
        body: "We are not passive advisors. When we take on an engagement, we bring our full network, expertise, and energy to help a company succeed. We celebrate wins loudly and work through setbacks quietly. We want to see every founder we work with build something that lasts.",
    },
    {
        title: "We embrace what we don't yet understand.",
        body: "The most important ideas always sound strange at first. We never dismiss something because it's unfamiliar. If we don't understand a new technology or market, we assume we're the ones who need to learn — not that the founder is wrong.",
    },
];

const stats = [
    { value: "2020", label: "Founded" },
    { value: "3", label: "Core verticals" },
    { value: "150+", label: "Startups supported" },
    { value: "€80M+", label: "Raised by clients" },
];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#f2f0e9]">
            <Header />

            {/* Hero */}
            <section className="flex min-h-[60vh] items-end bg-zinc-900 px-6 pb-20 pt-40">
                <div className="mx-auto max-w-7xl w-full">
                    <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-emerald-400">
                        About Last Ventures
                    </p>
                    <h1 className="font-serif text-5xl leading-tight text-white sm:text-6xl md:text-7xl lg:text-8xl max-w-5xl">
                        It&apos;s time to build.
                    </h1>
                </div>
            </section>

            {/* Mission */}
            <section className="bg-[#f2f0e9] px-6 py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-16 md:grid-cols-[1fr_2fr]">
                        <div>
                            <h2 className="font-serif text-2xl text-zinc-900 sm:text-3xl">
                                Who We Are
                            </h2>
                        </div>
                        <div className="space-y-6 text-lg leading-relaxed text-zinc-600">
                            <p>
                                Last Ventures helps bold founders build companies that matter.
                                We work with tech startups and scaleups from the earliest
                                stages — when an idea is still rough and the team is still
                                small — and we stay committed through every phase of growth.
                            </p>
                            <p>
                                We are operators and entrepreneurs ourselves. We know what it
                                feels like to build from nothing, to face rejection, to make
                                payroll when you shouldn&apos;t be able to. That experience shapes
                                everything about how we work with founders.
                            </p>
                            <p>
                                We work across three verticals — Legal, Fundraising, and
                                Technical Due Diligence — because great companies need more than
                                a good idea. They need solid foundations, the right investors,
                                and technology they can trust. We help with all three.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="border-y border-zinc-200 bg-white px-6 py-16">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
                        {stats.map((stat) => (
                            <div key={stat.label} className="text-center">
                                <p className="font-serif text-4xl text-zinc-900 sm:text-5xl">
                                    {stat.value}
                                </p>
                                <p className="mt-2 text-sm uppercase tracking-wider text-zinc-500">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="bg-[#f2f0e9] px-6 py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-16">
                        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-emerald-700">
                            Our Culture
                        </p>
                        <h2 className="font-serif text-4xl text-zinc-900 sm:text-5xl max-w-2xl leading-tight">
                            What we believe and how we operate.
                        </h2>
                        <p className="mt-6 max-w-2xl text-lg text-zinc-600">
                            Culture isn&apos;t a slide deck. It&apos;s how we show up every day —
                            for founders, for each other, and for the companies we build together.
                        </p>
                    </div>

                    <div className="divide-y divide-zinc-200">
                        {values.map((value, i) => (
                            <div
                                key={value.title}
                                className="grid gap-8 py-12 md:grid-cols-[auto_1fr_2fr] md:gap-16"
                            >
                                <span className="font-mono text-xs text-zinc-400 md:pt-1">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <h3 className="font-serif text-xl text-zinc-900 sm:text-2xl leading-snug">
                                    {value.title}
                                </h3>
                                <p className="text-base leading-relaxed text-zinc-600">
                                    {value.body}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team CTA */}
            <section className="bg-zinc-900 px-6 py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-12 md:grid-cols-2 md:items-center">
                        <div>
                            <h2 className="font-serif text-4xl leading-tight text-white sm:text-5xl">
                                Meet the people behind Last Ventures.
                            </h2>
                            <p className="mt-6 text-lg text-zinc-400">
                                Our team is made up of founders, operators, lawyers, and
                                engineers who have built and scaled companies across Europe and
                                beyond.
                            </p>
                            <div className="mt-10 flex flex-wrap gap-4">
                                <Link
                                    href="/team"
                                    className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-zinc-900 transition-all hover:bg-zinc-100"
                                >
                                    Our Team
                                    <svg
                                        className="h-4 w-4"
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
                                </Link>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
                                >
                                    Get in Touch
                                </Link>
                            </div>
                        </div>

                        {/* Decorative grid of placeholder team cards */}
                        <div className="grid grid-cols-3 gap-3">
                            {Array.from({ length: 9 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="aspect-square rounded-lg bg-zinc-800"
                                    style={{
                                        opacity: 0.3 + (i % 3) * 0.2,
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

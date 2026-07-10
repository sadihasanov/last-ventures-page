import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";

const support = [
    "Legal due diligence",
    "Technical due diligence",
    "Cap table review",
    "Founder and shareholder structure review",
    "Term sheet support",
    "Investment structuring",
    "Governance review",
    "Red flag analysis",
    "Deal documentation support",
];

export default function InvestorsPage() {
    return (
        <div className="min-h-screen bg-[#f2f0e9]">
            <Header />

            {/* Hero */}
            <section className="flex min-h-[60vh] items-end bg-zinc-900 px-6 pb-20 pt-40">
                <div className="mx-auto w-full max-w-7xl">
                    <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-sky-400">
                        For Investors
                    </p>
                    <h1 className="max-w-4xl font-serif text-5xl leading-tight text-white sm:text-6xl md:text-7xl">
                        Look under the hood before you invest.
                    </h1>
                </div>
            </section>

            {/* Intro */}
            <section className="bg-[#f2f0e9] px-6 py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-16 md:grid-cols-[1fr_2fr]">
                        <div>
                            <h2 className="font-serif text-2xl text-zinc-900 sm:text-3xl">
                                How We Help
                            </h2>
                        </div>
                        <div className="space-y-6 text-lg leading-relaxed text-zinc-600">
                            <p>
                                We help investors, funds and corporate venture teams assess the
                                legal and technical foundations of early-stage and growth
                                companies before making investment decisions.
                            </p>
                            <p>
                                Our work helps identify key risks around structure, ownership,
                                governance, cap tables, founder arrangements, contracts and
                                technical foundations, so investors can move faster and make
                                better-informed decisions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What we support */}
            <section className="border-y border-zinc-200 bg-white px-6 py-24">
                <div className="mx-auto max-w-7xl">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-sky-700">
                        What We Support
                    </p>
                    <h2 className="mb-12 max-w-2xl font-serif text-3xl leading-tight text-zinc-900 sm:text-4xl">
                        We support investors with:
                    </h2>
                    <ul className="grid gap-x-12 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
                        {support.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                                <span className="text-base text-zinc-700">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Outcome + CTA */}
            <section className="bg-zinc-900 px-6 py-24 text-white">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:items-center">
                        <div>
                            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-sky-400">
                                Outcome
                            </p>
                            <p className="font-serif text-2xl leading-snug sm:text-3xl">
                                You get a clearer view of the company&apos;s legal, ownership
                                and technical position before committing capital.
                            </p>
                        </div>
                        <div className="md:justify-self-end">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-zinc-900 transition-all hover:bg-zinc-100"
                            >
                                Evaluating a deal? Let&apos;s talk
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
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

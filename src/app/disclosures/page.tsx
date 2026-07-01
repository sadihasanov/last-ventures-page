import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";

const relatedLinks = [
    { href: "/terms", label: "Terms of Use" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/conduct", label: "Conduct" },
];

export default function DisclosuresPage() {
    return (
        <div className="min-h-screen bg-[#f2f0e9]">
            <Header />

            {/* Hero */}
            <section className="bg-zinc-900 px-6 pb-16 pt-36">
                <div className="mx-auto max-w-4xl">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-emerald-400">
                        Legal
                    </p>
                    <h1 className="font-serif text-5xl leading-tight text-white sm:text-6xl">
                        Disclosures
                    </h1>
                    <p className="mt-4 text-sm text-zinc-500">Last updated: February 2026</p>
                </div>
            </section>

            {/* Content */}
            <section className="bg-[#f2f0e9] px-6 py-20">
                <div className="mx-auto max-w-4xl">
                    <div className="space-y-6 text-base leading-relaxed text-zinc-600">
                        <p>
                            Views expressed in &ldquo;posts&rdquo; (including podcasts, videos, and social
                            media) are those of the individual Last Ventures personnel quoted therein and are
                            not necessarily the views of Last Ventures or its respective affiliates. Nothing
                            on this website constitutes legal, financial, tax, or other professional advice,
                            and you should not rely on any information here as such.
                        </p>

                        <p>
                            Last Ventures provides advisory and support services to tech startups and
                            scaleups. General information published on this website is provided for
                            educational purposes only. It does not create an advisory, attorney-client, or
                            other professional relationship, and it is not a substitute for tailored advice
                            from a suitably qualified professional engaged to address your specific
                            circumstances.
                        </p>

                        <p>
                            The contents here — and available on any associated distribution platforms and
                            any public Last Ventures online social media accounts, platforms, and sites
                            (collectively, &ldquo;content distribution outlets&rdquo;) — should not be
                            construed as or relied upon in any manner as legal, tax, financial, or other
                            advice. You should consult your own advisers as to legal, business, tax, and
                            other related matters concerning your company.
                        </p>

                        <p>
                            Any projections, estimates, forecasts, targets, prospects and/or opinions
                            expressed in these materials are subject to change without notice and may differ
                            or be contrary to opinions expressed by others. Any charts provided here or on
                            Last Ventures content distribution outlets are for informational purposes only.
                        </p>

                        <p>
                            Certain information contained here has been obtained from third-party sources.
                            While taken from sources believed to be reliable, Last Ventures has not
                            independently verified such information and makes no representations about the
                            enduring accuracy of the information or its appropriateness for a given
                            situation. All content speaks only as of the date indicated.
                        </p>

                        <p>
                            Last Ventures is not a venture capital fund, investment adviser, or broker, and
                            does not offer, solicit, or manage investments. Nothing on this website — or on
                            associated content distribution outlets — should be construed as an offer to buy
                            or sell any security or interest in any investment vehicle.
                        </p>

                        <p>
                            Engaging Last Ventures does not guarantee any particular outcome. Building and
                            scaling a company involves significant risk, and results depend on many factors
                            outside our control. Past results of any engagement are not necessarily
                            indicative of future results.
                        </p>

                        <p>
                            For questions regarding these disclosures, please contact us at{" "}
                            <a
                                href="mailto:compliance@lastventures.com"
                                className="text-emerald-700 underline hover:text-emerald-900"
                            >
                                compliance@lastventures.com
                            </a>
                            .
                        </p>
                    </div>

                    {/* Related Links */}
                    <div className="mt-16 border-t border-zinc-200 pt-12">
                        <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                            Related
                        </p>
                        <div className="flex flex-wrap gap-4">
                            {relatedLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-6 py-2.5 text-sm font-medium text-zinc-700 transition-all hover:border-zinc-900 hover:text-zinc-900"
                                >
                                    {link.label}
                                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

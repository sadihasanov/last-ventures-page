import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";

const relatedLinks = [
    { href: "/terms", label: "Terms of Use" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/disclosures", label: "Disclosures" },
];

export default function ConductPage() {
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
                        Conduct
                    </h1>
                    <p className="mt-4 text-sm text-zinc-500">Last updated: February 2026</p>
                </div>
            </section>

            {/* Content */}
            <section className="bg-[#f2f0e9] px-6 py-20">
                <div className="mx-auto max-w-4xl">

                    {/* Highlight box */}
                    <div className="mb-12 rounded-lg border border-emerald-200 bg-emerald-50 p-6">
                        <p className="text-sm leading-relaxed text-emerald-800">
                            Everyone engaging with Last Ventures in any manner — including employees,
                            founders, clients, customers, and vendors — is required to adhere to our code
                            of conduct to ensure a safe and inclusive environment for all.
                        </p>
                    </div>

                    <div className="space-y-8 text-base leading-relaxed text-zinc-600">

                        <div>
                            <h2 className="mb-3 font-serif text-2xl text-zinc-900">Our Commitment</h2>
                            <p>
                                We are committed to providing a welcoming and respectful environment for
                                everyone, regardless of gender, gender identity and expression, age, sexual
                                orientation, disability, physical appearance, body size, race, ethnicity,
                                religion (or lack thereof), or technology choices.
                            </p>
                        </div>

                        <div>
                            <h2 className="mb-3 font-serif text-2xl text-zinc-900">Zero Tolerance for Harassment</h2>
                            <p>
                                We do not tolerate harassment of any kind. Harassment includes, but is not
                                limited to, offensive verbal comments, deliberate intimidation, stalking,
                                following, harassing photography or recording, sustained disruption, and
                                unwelcome sexual attention.
                            </p>
                            <p className="mt-4">
                                Participants asked to stop any harassing behavior are expected to comply
                                immediately. If a participant engages in harassing behavior, Last Ventures
                                may take any action it deems appropriate, including warning the offender or
                                expulsion from any Last Ventures event or platform.
                            </p>
                        </div>

                        <div>
                            <h2 className="mb-3 font-serif text-2xl text-zinc-900">Expected Behavior</h2>
                            <ul className="ml-6 list-disc space-y-2">
                                <li>Be respectful and considerate in all interactions</li>
                                <li>Refrain from demeaning, discriminatory, or harassing behavior and speech</li>
                                <li>Be mindful of your surroundings and your fellow participants</li>
                                <li>Alert Last Ventures staff if you notice a dangerous situation or someone in distress</li>
                                <li>Respect the privacy and confidentiality of others</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="mb-3 font-serif text-2xl text-zinc-900">Reporting</h2>
                            <p>
                                To report an issue or concern, please contact us by email at{" "}
                                <a
                                    href="mailto:conduct@lastventures.com"
                                    className="text-emerald-700 underline hover:text-emerald-900"
                                >
                                    conduct@lastventures.com
                                </a>
                                . Reports will be reviewed promptly and handled in confidence, as well as
                                investigated and/or otherwise escalated and acted upon as appropriate.
                            </p>
                            <p className="mt-4">
                                All reports are taken seriously. We are committed to protecting the
                                confidentiality of those who report concerns in good faith.
                            </p>
                        </div>

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

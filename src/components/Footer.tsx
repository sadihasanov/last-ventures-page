import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-emerald-800 px-6 py-16 text-white">
            <div className="mx-auto max-w-7xl">
                {/* Newsletter Section */}
                <div className="mb-16 border-b border-white/20 pb-16">
                    <h2 className="font-serif text-3xl sm:text-4xl">
                        Practical insights for founders, straight to your inbox.
                    </h2>
                    <form className="mt-8 flex max-w-md gap-4">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="flex-1 rounded-full bg-white/10 px-6 py-3 text-sm text-white placeholder-white/60 outline-none ring-1 ring-white/20 transition-all focus:bg-white/20 focus:ring-white/40"
                        />
                        <button
                            type="submit"
                            className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-emerald-800 transition-all hover:bg-white/90"
                        >
                            Submit
                        </button>
                    </form>
                </div>

                {/* Links Grid */}
                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
                    {/* What We Do */}
                    <div>
                        <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/60">
                            What We Do
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/#services" className="text-sm hover:underline">
                                    Legal
                                </Link>
                            </li>
                            <li>
                                <Link href="/#services" className="text-sm hover:underline">
                                    Fundraising
                                </Link>
                            </li>
                            <li>
                                <Link href="/#services" className="text-sm hover:underline">
                                    Technical Due Diligence
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Who We Help */}
                    <div>
                        <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/60">
                            Who We Help
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/founders" className="text-sm hover:underline">
                                    For Founders
                                </Link>
                            </li>
                            <li>
                                <Link href="/investors" className="text-sm hover:underline">
                                    For Investors
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/60">
                            Company
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/about" className="text-sm hover:underline">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/team" className="text-sm hover:underline">
                                    Team
                                </Link>
                            </li>
                            <li>
                                <Link href="/insights" className="text-sm hover:underline">
                                    Insights
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-sm hover:underline">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/60">
                            Connect
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm hover:underline"
                                >
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm hover:underline"
                                >
                                    Twitter
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-8 sm:flex-row">
                    <p className="text-sm text-white/60">
                        © {new Date().getFullYear()} Last Ventures. All rights reserved.
                    </p>
                    <div className="flex flex-wrap gap-6">
                        <Link href="/privacy" className="text-sm text-white/60 hover:text-white">
                            Privacy
                        </Link>
                        <Link href="/terms" className="text-sm text-white/60 hover:text-white">
                            Terms
                        </Link>
                        <Link href="/disclosures" className="text-sm text-white/60 hover:text-white">
                            Disclosures
                        </Link>
                        <Link href="/conduct" className="text-sm text-white/60 hover:text-white">
                            Conduct
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

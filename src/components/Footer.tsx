import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-emerald-800 px-6 py-16 text-white">
            <div className="mx-auto max-w-7xl">
                {/* Newsletter Section */}
                <div className="mb-16 border-b border-white/20 pb-16">
                    <h2 className="font-serif text-3xl sm:text-4xl">
                        Get the best stories from the Last Ventures community.
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
                    {/* About */}
                    <div>
                        <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/60">
                            About
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/team" className="text-sm hover:underline">
                                    Team
                                </Link>
                            </li>
                            <li>
                                <Link href="/careers" className="text-sm hover:underline">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-sm hover:underline">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/60">
                            Resources
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/stories" className="text-sm hover:underline">
                                    Stories
                                </Link>
                            </li>
                            <li>
                                <Link href="/podcast" className="text-sm hover:underline">
                                    Podcast
                                </Link>
                            </li>
                            <li>
                                <Link href="/research" className="text-sm hover:underline">
                                    Research
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Portfolio */}
                    <div>
                        <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/60">
                            Portfolio
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/companies" className="text-sm hover:underline">
                                    Companies
                                </Link>
                            </li>
                            <li>
                                <Link href="/founders" className="text-sm hover:underline">
                                    Founders
                                </Link>
                            </li>
                            <li>
                                <Link href="/jobs" className="text-sm hover:underline">
                                    Jobs
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
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm hover:underline"
                                >
                                    Twitter
                                </a>
                            </li>
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
                                    href="https://youtube.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm hover:underline"
                                >
                                    YouTube
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

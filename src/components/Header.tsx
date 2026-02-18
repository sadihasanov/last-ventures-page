import Link from "next/link";

export function Header() {
    const navLinks = [
        { href: "/about", label: "About" },
        { href: "/founders", label: "Our Founders" },
        { href: "/companies", label: "Our Companies" },
        { href: "/team", label: "Our Team" },
        { href: "/stories", label: "Stories" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#f2f0e9]/90 backdrop-blur-sm">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <svg
                        className="h-6 w-6 text-emerald-700"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                    <span className="text-sm font-semibold uppercase tracking-widest text-zinc-900">
                        Last Ventures
                    </span>
                </Link>

                {/* Navigation */}
                <div className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-xs font-medium uppercase tracking-wider text-zinc-600 transition-colors hover:text-zinc-900"
                        >
                            {link.label}
                        </Link>
                    ))}
                    {/* <button className="text-zinc-600 transition-colors hover:text-zinc-900">
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
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </button> */}
                </div>

                {/* Mobile menu button */}
                <button className="md:hidden">
                    <svg
                        className="h-6 w-6 text-zinc-900"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </nav>
        </header>
    );
}

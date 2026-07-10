"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
    { href: "/#services", label: "What We Do" },
    { href: "/founders", label: "For Founders" },
    { href: "/investors", label: "For Investors" },
    { href: "/about", label: "About" },
    { href: "/insights", label: "Insights" },
    { href: "/contact", label: "Contact" },
];

export function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#f2f0e9]/90 backdrop-blur-sm">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
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

                {/* Desktop navigation */}
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
                </div>

                {/* Mobile menu button */}
                <button
                    className="md:hidden"
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                    onClick={() => setOpen((v) => !v)}
                >
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
                            d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>
            </nav>

            {/* Mobile navigation panel */}
            {open && (
                <div className="border-t border-zinc-900/10 bg-[#f2f0e9] md:hidden">
                    <div className="mx-auto flex max-w-7xl flex-col px-6 py-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="py-3 text-sm font-medium uppercase tracking-wider text-zinc-700 transition-colors hover:text-zinc-900"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}

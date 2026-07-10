"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useState } from "react";

const reasons = [
    "For founders preparing to raise",
    "For investors evaluating a deal",
    "For partnership and network enquiries",
];

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        // TODO: wire this form up to an email service or backend endpoint.
        setSubmitted(true);
    }

    return (
        <div className="min-h-screen bg-[#f2f0e9]">
            <Header />

            <section className="px-6 pb-24 pt-36">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
                        {/* Left: intro */}
                        <div>
                            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-emerald-700">
                                Contact
                            </p>
                            <h1 className="font-serif text-5xl leading-tight text-zinc-900 sm:text-6xl">
                                Let&apos;s talk.
                            </h1>
                            <p className="mt-8 max-w-md text-lg leading-relaxed text-zinc-600">
                                Last Ventures is a boutique venture advisory firm helping
                                European tech founders become investor-ready. Tell us what
                                you&apos;re working on and we&apos;ll get back to you.
                            </p>
                            <ul className="mt-10 space-y-3">
                                {reasons.map((reason) => (
                                    <li key={reason} className="flex items-start gap-3">
                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                                        <span className="text-base text-zinc-700">{reason}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right: form */}
                        <div>
                            {submitted ? (
                                <div className="flex min-h-[300px] flex-col items-start justify-center rounded-2xl bg-white p-10 ring-1 ring-zinc-200">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                                        <svg
                                            className="h-6 w-6 text-emerald-700"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                    </div>
                                    <h2 className="font-serif text-2xl text-zinc-900">
                                        Thanks for reaching out.
                                    </h2>
                                    <p className="mt-3 text-base text-zinc-600">
                                        We&apos;ve received your message and will get back to you
                                        shortly.
                                    </p>
                                </div>
                            ) : (
                                <form
                                    onSubmit={handleSubmit}
                                    className="rounded-2xl bg-white p-8 ring-1 ring-zinc-200"
                                >
                                    <div className="space-y-5">
                                        <div>
                                            <label
                                                htmlFor="name"
                                                className="mb-2 block text-xs font-semibold uppercase tracking-wider text-zinc-500"
                                            >
                                                Name
                                            </label>
                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                required
                                                className="w-full rounded-lg border border-zinc-200 bg-[#f2f0e9]/40 px-4 py-3 text-sm text-zinc-900 outline-none transition-all focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="mb-2 block text-xs font-semibold uppercase tracking-wider text-zinc-500"
                                            >
                                                Email
                                            </label>
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                className="w-full rounded-lg border border-zinc-200 bg-[#f2f0e9]/40 px-4 py-3 text-sm text-zinc-900 outline-none transition-all focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="role"
                                                className="mb-2 block text-xs font-semibold uppercase tracking-wider text-zinc-500"
                                            >
                                                I am a
                                            </label>
                                            <select
                                                id="role"
                                                name="role"
                                                defaultValue="Founder"
                                                className="w-full rounded-lg border border-zinc-200 bg-[#f2f0e9]/40 px-4 py-3 text-sm text-zinc-900 outline-none transition-all focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                                            >
                                                <option>Founder</option>
                                                <option>Investor</option>
                                                <option>Other</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="message"
                                                className="mb-2 block text-xs font-semibold uppercase tracking-wider text-zinc-500"
                                            >
                                                Message
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={5}
                                                required
                                                className="w-full resize-none rounded-lg border border-zinc-200 bg-[#f2f0e9]/40 px-4 py-3 text-sm text-zinc-900 outline-none transition-all focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full rounded-full bg-emerald-800 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-emerald-900"
                                        >
                                            Send message
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

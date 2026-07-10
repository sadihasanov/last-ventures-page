const verticals = [
    {
        number: "01",
        title: "Legal",
        description:
            "Solid legal foundations prevent expensive problems later. We help founders get the essentials right — from founders' agreements to the contracts that underpin a growing company — so you can move fast without leaving landmines behind.",
        bullets: [
            "Founders' agreements, equity, and vesting structures",
            "Company formation, governance, and cap table hygiene",
            "Commercial contracts, NDAs, and customer/supplier terms",
            "Employment, IP assignment, and data protection essentials",
        ],
    },
    {
        number: "02",
        title: "Fundraising",
        description:
            "Raising capital is a process, not an event. We help founders prepare, connect with the right investors, and navigate every stage of a round — from the first conversations to a signed term sheet.",
        bullets: [
            "Pitch deck, narrative, and data room preparation",
            "Targeted introductions to relevant investors",
            "Round strategy, valuation, and timeline planning",
            "Term sheet review and negotiation support",
        ],
    },
    {
        number: "03",
        title: "Technical Due Diligence",
        description:
            "Whether you're raising, being acquired, or simply want an honest read on your stack, we give founders and investors a clear, objective picture of the technology — what's solid, what's risky, and what to fix first.",
        bullets: [
            "Architecture, scalability, and code quality review",
            "Security, infrastructure, and technical debt assessment",
            "Team, process, and delivery capability evaluation",
            "Clear, prioritized findings and a remediation roadmap",
        ],
    },
];

export function Verticals() {
    return (
        <section id="services" className="bg-zinc-900 px-6 py-24 scroll-mt-20">
            <div className="mx-auto max-w-7xl">
                {/* Section Header */}
                <div className="mb-16 max-w-2xl">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-emerald-400">
                        What We Do
                    </p>
                    <h2 className="font-serif text-4xl leading-tight text-white sm:text-5xl">
                        Three core services.
                    </h2>
                    <p className="mt-6 text-lg text-zinc-400">
                        Last Ventures is a boutique venture advisory firm for European tech
                        founders. We&apos;re not a traditional VC fund — we roll up our
                        sleeves across legal, fundraising, and technical due diligence to
                        get companies investor-ready.
                    </p>
                </div>

                {/* Verticals */}
                <div className="divide-y divide-zinc-800">
                    {verticals.map((v) => (
                        <div
                            key={v.number}
                            className="group grid gap-8 py-12 transition-colors md:grid-cols-[1fr_2fr] md:gap-16"
                        >
                            {/* Left: Number + Title */}
                            <div>
                                <span className="font-mono text-xs text-zinc-600">{v.number}</span>
                                <h3 className="mt-2 font-serif text-2xl text-white sm:text-3xl">
                                    {v.title}
                                </h3>
                            </div>

                            {/* Right: Description + Bullets */}
                            <div>
                                <p className="text-base leading-relaxed text-zinc-400">
                                    {v.description}
                                </p>
                                <ul className="mt-8 space-y-3">
                                    {v.bullets.map((bullet) => (
                                        <li key={bullet} className="flex items-start gap-3">
                                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                                            <span className="text-sm text-zinc-300">{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Subtle: Angel investing + partner network */}
                <div className="mt-16 grid gap-10 border-t border-zinc-800 pt-12 md:grid-cols-2 md:gap-16">
                    <div>
                        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-emerald-400">
                            Selective angel investing
                        </p>
                        <p className="text-sm leading-relaxed text-zinc-400">
                            Last Ventures is not a traditional VC fund. Where there is strong
                            conviction and strategic fit, we may selectively invest or
                            introduce companies to trusted angels and investors in our
                            network.
                        </p>
                    </div>
                    <div>
                        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                            Partner network
                        </p>
                        <p className="text-sm leading-relaxed text-zinc-400">
                            Through our trusted partner network, we can also connect selected
                            founders with support for international expansion, growth through
                            marketing and market entry where relevant.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

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
        accent: "bg-amber-100",
        accentText: "text-amber-800",
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
        accent: "bg-emerald-100",
        accentText: "text-emerald-800",
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
        accent: "bg-sky-100",
        accentText: "text-sky-800",
    },
];

export function Verticals() {
    return (
        <section id="services" className="bg-zinc-900 px-6 py-24 scroll-mt-20">
            <div className="mx-auto max-w-7xl">
                {/* Section Header */}
                <div className="mb-16 max-w-2xl">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-emerald-400">
                        How We Help
                    </p>
                    <h2 className="font-serif text-4xl leading-tight text-white sm:text-5xl">
                        Three ways we support your team.
                    </h2>
                    <p className="mt-6 text-lg text-zinc-400">
                        We&apos;re not a fund and we don&apos;t write checks. We roll up our
                        sleeves and work alongside founders across three core verticals.
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
                            <div className="flex flex-col justify-between gap-4">
                                <div>
                                    <span className="font-mono text-xs text-zinc-600">{v.number}</span>
                                    <h3 className="mt-2 font-serif text-2xl text-white sm:text-3xl">
                                        {v.title}
                                    </h3>
                                </div>
                                <span
                                    className={`inline-block self-start rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider ${v.accent} ${v.accentText}`}
                                >
                                    {v.title}
                                </span>
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
            </div>
        </section>
    );
}

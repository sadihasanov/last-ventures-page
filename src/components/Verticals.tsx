const verticals = [
    {
        number: "01",
        title: "Business Development",
        description:
            "We open doors that take years to knock on. Our network spans enterprise buyers, strategic partners, and distribution channels across Europe and beyond — giving our companies an unfair advantage from day one.",
        bullets: [
            "Introductions to enterprise clients & strategic partners",
            "Go-to-market strategy and market entry support",
            "Partnership structuring and commercial negotiations",
            "Access to our curated founder & operator community",
        ],
        accent: "bg-amber-100",
        accentText: "text-amber-800",
    },
    {
        number: "02",
        title: "Funding",
        description:
            "Capital is table stakes. We help founders raise the right money from the right people at the right time — whether that's the first check or a Series B. We've been on both sides of the table.",
        bullets: [
            "Seed to growth-stage fundraising support",
            "Investor introductions across Europe and the US",
            "Pitch deck, data room, and narrative coaching",
            "Term sheet review and deal structuring guidance",
        ],
        accent: "bg-emerald-100",
        accentText: "text-emerald-800",
    },
    {
        number: "03",
        title: "Technical Consultancy",
        description:
            "Great ideas deserve great execution. Our technical advisors and CTOs-in-residence work hands-on with founding teams to architect scalable systems, hire the right engineers, and avoid costly mistakes early.",
        bullets: [
            "Architecture reviews and technology stack decisions",
            "CTO advisory and fractional technical leadership",
            "Engineering team building and hiring support",
            "AI/ML integration and product roadmap planning",
        ],
        accent: "bg-sky-100",
        accentText: "text-sky-800",
    },
];

export function Verticals() {
    return (
        <section className="bg-zinc-900 px-6 py-24">
            <div className="mx-auto max-w-7xl">
                {/* Section Header */}
                <div className="mb-16 max-w-2xl">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-emerald-400">
                        How We Help
                    </p>
                    <h2 className="font-serif text-4xl leading-tight text-white sm:text-5xl">
                        Three ways we accelerate your growth.
                    </h2>
                    <p className="mt-6 text-lg text-zinc-400">
                        We don&apos;t just write checks. We roll up our sleeves and work alongside
                        founders across three core verticals.
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

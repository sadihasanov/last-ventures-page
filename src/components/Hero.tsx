export function Hero() {
    return (
        <section className="flex min-h-[70vh] items-center justify-center bg-[#f2f0e9] px-6 pt-20">
            <div className="max-w-4xl text-center">
                <h1 className="font-serif text-4xl leading-tight text-zinc-900 sm:text-5xl md:text-6xl lg:text-7xl">
                    Venture support for European tech{" "}
                    <span className="relative inline-block">
                        <span className="relative z-10">founders</span>
                        {/* Hand-drawn circle accent */}
                        <svg
                            className="absolute -inset-2 -z-0 h-[calc(100%+16px)] w-[calc(100%+16px)]"
                            viewBox="0 0 100 50"
                            preserveAspectRatio="none"
                        >
                            <ellipse
                                cx="50"
                                cy="25"
                                rx="48"
                                ry="22"
                                fill="none"
                                stroke="#28714b"
                                strokeWidth="1.5"
                                className="animate-draw"
                                strokeDasharray="200"
                                strokeDashoffset="0"
                            />
                        </svg>
                    </span>
                    .
                </h1>
                <p className="mx-auto mt-8 max-w-2xl text-lg text-zinc-600">
                    We help ambitious tech companies get ready for funding, diligence and
                    scale through venture legal, fundraising support and technical due
                    diligence.
                </p>
            </div>
        </section>
    );
}

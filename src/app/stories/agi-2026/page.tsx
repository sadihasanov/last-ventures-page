import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export default function AgiStoryPage() {
    return (
        <div className="min-h-screen bg-[#f2f0e9]">
            <Header />

            {/* Hero Image */}
            <div className="relative h-[70vh] min-h-[500px] overflow-hidden bg-zinc-900 pt-20">
                <img
                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&q=80"
                    alt="2026: This is AGI"
                    className="absolute inset-0 h-full w-full object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />

                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 right-0 px-6 pb-16">
                    <div className="mx-auto max-w-4xl">
                        <div className="mb-4 flex items-center gap-3">
                            <Link
                                href="/stories"
                                className="text-xs font-semibold uppercase tracking-widest text-emerald-400 hover:text-emerald-300"
                            >
                                ← Stories
                            </Link>
                            <span className="text-zinc-600">·</span>
                            <span className="text-xs uppercase tracking-widest text-zinc-400">Perspective</span>
                            <span className="text-zinc-600">·</span>
                            <span className="text-xs uppercase tracking-widest text-zinc-400">February 2026</span>
                        </div>
                        <h1 className="font-serif text-5xl leading-tight text-white sm:text-6xl lg:text-7xl">
                            2026: This is AGI
                        </h1>
                        <p className="mt-4 text-sm text-zinc-400">By Last Ventures Team</p>
                    </div>
                </div>
            </div>

            {/* Article Body */}
            <section className="bg-[#f2f0e9] px-6 py-20">
                <div className="mx-auto max-w-3xl">
                    <div className="prose prose-zinc prose-lg max-w-none">
                        <p className="lead text-xl leading-relaxed text-zinc-700">
                            We are living through the most consequential technological transition in human
                            history. Artificial General Intelligence is no longer a distant horizon — it is
                            here, and it is reshaping every industry, every institution, and every assumption
                            we held about the future of work and human potential.
                        </p>

                        <h2 className="mt-12 font-serif text-3xl text-zinc-900">The Shift Has Arrived</h2>
                        <p className="mt-4 text-base leading-relaxed text-zinc-600">
                            For decades, AGI was the subject of academic debate and science fiction. The
                            question was never &ldquo;if&rdquo; but &ldquo;when.&rdquo; In 2026, that question
                            has been answered. Systems capable of reasoning across domains, learning from
                            minimal examples, and operating autonomously at superhuman levels are no longer
                            theoretical — they are deployed, scaled, and compounding.
                        </p>
                        <p className="mt-4 text-base leading-relaxed text-zinc-600">
                            At Last Ventures, we have spent the last several years working alongside
                            founders at the intersection of this transition. We helped teams who understood
                            that the real opportunity was not in building AI tools, but in rebuilding entire
                            industries with AI as the foundational layer.
                        </p>

                        <h2 className="mt-12 font-serif text-3xl text-zinc-900">What This Means for Founders</h2>
                        <p className="mt-4 text-base leading-relaxed text-zinc-600">
                            The playbook has changed. The companies that will define the next decade are not
                            those that bolt AI onto existing workflows — they are those that reimagine the
                            workflow entirely. The cost of intelligence has collapsed. The cost of execution
                            has not. That gap is where the next generation of great companies will be built.
                        </p>
                        <p className="mt-4 text-base leading-relaxed text-zinc-600">
                            We are actively looking to work with founders who understand this moment with
                            clarity — who can see past the hype and into the structural changes that AGI
                            enables. If that is you, we want to hear from you.
                        </p>

                        <h2 className="mt-12 font-serif text-3xl text-zinc-900">What We Believe</h2>
                        <p className="mt-4 text-base leading-relaxed text-zinc-600">
                            Last Ventures was built on a simple belief: the best time to build is when the
                            world is being rewritten. AGI is rewriting the world. We are here for it — as
                            advisors, as operators, and as partners to the founders who will shape what comes
                            next.
                        </p>
                        <p className="mt-4 text-base leading-relaxed text-zinc-600">
                            This is not a moment to be cautious. This is a moment to build.
                        </p>
                    </div>

                    {/* Back link */}
                    <div className="mt-16 border-t border-zinc-200 pt-10">
                        <Link
                            href="/stories"
                            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-zinc-700 hover:text-zinc-900"
                        >
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                            </svg>
                            All Stories
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

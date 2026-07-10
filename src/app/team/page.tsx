"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const team = [
    {
        name: "Noor Al Rubaiy",
        role: "Founder & Managing Director",
        imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
    },
    {
        name: "Sadi Hasanov",
        role: "Cofounder",
        imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80",
    },
];

const filters = ["All", "Partners", "Advisors", "Operations"];

export default function TeamPage() {
    return (
        <div className="min-h-screen bg-[#f2f0e9]">
            <Header />

            {/* Page Header */}
            <section className="bg-[#f2f0e9] px-6 pb-0 pt-36">
                <div className="mx-auto max-w-7xl">
                    <h1
                        className="font-sans text-6xl font-light tracking-[0.2em] text-zinc-900 sm:text-7xl md:text-8xl"
                        style={{ letterSpacing: "0.15em" }}
                    >
                        OUR TEAM
                    </h1>

                    {/* Filter Tabs */}
                    <div className="mt-10 flex flex-wrap gap-2 border-b border-zinc-300 pb-0">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                disabled={filter !== "All"}
                                className={`px-6 py-3 text-xs font-semibold uppercase tracking-widest transition-all ${filter === "All"
                                    ? "border-b-2 border-zinc-900 text-zinc-900"
                                    : "cursor-not-allowed text-zinc-300"
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Grid */}
            <section className="bg-[#f2f0e9] py-10">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {team.map((member) => (
                            <div
                                key={member.name}
                                className="group relative block aspect-[3/4] overflow-hidden"
                            >
                                {/* Photo */}
                                <img
                                    src={member.imageUrl}
                                    alt={member.name}
                                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Gradient overlay — always present, deepens on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 group-hover:from-black/80" />

                                {/* Text */}
                                <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                                    <p
                                        className="font-sans text-xl font-light tracking-[0.15em] text-white sm:text-2xl"
                                        style={{ letterSpacing: "0.12em" }}
                                    >
                                        {member.name.toUpperCase()}
                                    </p>
                                    <p className="mt-1 text-xs font-light tracking-widest text-white/70">
                                        {member.role.toUpperCase()}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

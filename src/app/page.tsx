import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Verticals } from "@/components/Verticals";
import { ContentCard, SolidCard } from "@/components/ContentCard";
import { Footer } from "@/components/Footer";

const story = {
  title: "2026: This is AGI",
  category: "Perspective",
  type: "Read" as const,
  author: "Last Ventures Team",
  imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
  href: "/stories/agi-2026",
  featured: true,
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f2f0e9]">
      <Header />
      <Hero />
      <Verticals />

      {/* Content Grid */}
      <section className="bg-[#f2f0e9] px-6 py-16">
        <div className="mx-auto max-w-7xl">
          {/* Featured Story — full width */}
          <div className="grid gap-1">
            <ContentCard {...story} />
          </div>

          {/* Solid Cards Row */}
          <div className="mt-1 grid gap-1 sm:grid-cols-2">
            <SolidCard
              title="Explore our companies"
              description="Discover the innovators in our portfolio."
              href="/companies"
              bgColor="bg-amber-100"
            />
            <SolidCard
              title="Find jobs at portfolio companies"
              description="Join a rocket ship."
              href="/jobs"
              bgColor="bg-teal-100"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

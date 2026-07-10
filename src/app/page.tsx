import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Verticals } from "@/components/Verticals";
import { SolidCard } from "@/components/ContentCard";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f2f0e9]">
      <Header />
      <Hero />
      <Verticals />

      {/* Who we work with */}
      <section className="bg-[#f2f0e9] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-emerald-700">
              Who We Work With
            </p>
            <h2 className="font-serif text-4xl leading-tight text-zinc-900 sm:text-5xl">
              Built for both sides of the table.
            </h2>
            <p className="mt-6 text-lg text-zinc-600">
              Whether you&apos;re raising your next round or evaluating a company to
              invest in, we help you move with more confidence.
            </p>
          </div>

          <div className="grid gap-1 sm:grid-cols-2">
            <SolidCard
              title="For Founders"
              description="Raise with more confidence. Get investment-ready across legal, structure and technical foundations."
              href="/founders"
              bgColor="bg-amber-100"
            />
            <SolidCard
              title="For Investors"
              description="Look under the hood before you invest. Assess legal and technical foundations before committing capital."
              href="/investors"
              bgColor="bg-sky-100"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

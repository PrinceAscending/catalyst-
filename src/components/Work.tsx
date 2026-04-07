import { SectionReveal } from "@/components/SectionReveal";
import { WorkCard } from "@/components/WorkCard";

const work = [
  {
    title: "Aether Coffee Co.",
    category: "Brand Elevation",
    summary:
      "A midnight-luxury reposition for an artisan coffee company, combining premium packaging visuals, a cinematic content suite, and a social launch system built to move from local favorite to category signal.",
    image: "/images/aether-coffee.png",
    metrics: ["3.4× engagement", "Luxury rebrand", "Launch assets", "Paid-ready content"],
    href: "#cta",
  },
  {
    title: "Velora Skin Studio",
    category: "Identity System",
    summary:
      "An elegant identity refinement for a skincare founder ready to trade generic visuals for a brand language that felt trusted, elevated, and instantly memorable.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
    metrics: ["Brand system", "Photo direction", "Client retention", "Premium positioning"],
    href: "#cta",
  },
  {
    title: "Northline Atelier",
    category: "Growth Engine",
    summary:
      "A strategy-led growth sprint for a product business that needed sharper storytelling, more authority in-feed, and a paid-social foundation designed to scale.",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80",
    metrics: ["Paid social", "Creative testing", "Content engine", "Monthly growth"],
    href: "#cta",
  },
] as const;

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-28">
      <SectionReveal>
        <p className="section-label">Selected Work</p>
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="section-title max-w-3xl">
            We don&apos;t make brands look bigger.
            <br />
            <em>We make them feel inevitable.</em>
          </h2>
          <p className="max-w-lg text-sm leading-8 text-white/55 md:text-base">
            Every case study is built around authority, aesthetic control, and measurable momentum. The visuals are beautiful. The system behind them is what compounds.
          </p>
        </div>
      </SectionReveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {work.map((item, index) => (
          <SectionReveal key={item.title} delay={0.08 * index}>
            <WorkCard {...item} />
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}

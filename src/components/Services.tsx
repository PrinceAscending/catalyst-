import { ArrowRight, Camera, Rocket, Sparkles } from "lucide-react";
import { SectionReveal } from "@/components/SectionReveal";

const services = [
  {
    number: "01",
    icon: Camera,
    title: "The Visual Pack",
    tag: "Product Photography & Film",
    description:
      "Your product deserves more than a quick snap. We shoot in 8K, sculpt every frame with luxury-grade lighting, and direct cinematic video that transforms products into objects of desire.",
    href: "#cta",
    cta: "Deploy The Visual Pack",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "The Identity Pack",
    tag: "Logo · Typography · Brand Soul",
    description:
      "We build precision-crafted identities with logos, type systems, art direction, and a brand soul your customers can feel before they even read the first line.",
    href: "#cta",
    cta: "Uncover Your Brand Soul",
  },
  {
    number: "03",
    icon: Rocket,
    title: "The Nexa Growth Pack",
    tag: "Social Media Scaling",
    description:
      "Posting is not a strategy. Scaling is. We engineer content systems, audience targeting, paid amplification, and measurable growth loops that compound month after month.",
    href: "#cta",
    cta: "Activate The Growth Pack",
  },
] as const;

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-28">
      <SectionReveal>
        <p className="section-label">What We Deploy</p>
        <h2 className="section-title max-w-3xl">
          Three packs.
          <br />
          <em>One relentless outcome.</em>
        </h2>
      </SectionReveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <SectionReveal key={service.title} delay={0.08 * index}>
              <article className="glass-panel service-card h-full rounded-[2rem] p-7 md:p-8">
                <div className="font-display text-6xl leading-none text-white/6">{service.number}</div>
                <div className="mt-6 inline-flex rounded-full border border-[var(--gold)]/25 bg-[rgba(201,168,76,0.08)] p-3 text-[var(--gold)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-[1.8rem] uppercase tracking-[0.09em] text-[var(--paper)]">{service.title}</h3>
                <p className="mt-2 text-[0.72rem] uppercase tracking-[0.26em] text-[var(--ember)]">{service.tag}</p>
                <p className="mt-6 text-[0.98rem] leading-8 text-white/60">{service.description}</p>
                <a
                  href={service.href}
                  className="mt-8 inline-flex items-center gap-2 text-[0.76rem] font-medium uppercase tracking-[0.2em] text-[var(--gold)] transition hover:gap-3"
                >
                  {service.cta}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            </SectionReveal>
          );
        })}
      </div>
    </section>
  );
}

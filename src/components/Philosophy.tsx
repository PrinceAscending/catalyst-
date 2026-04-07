import { ArrowUpRight } from "lucide-react";
import { SectionReveal } from "@/components/SectionReveal";

const pillars = [
  "AI-Augmented Strategy",
  "High-End Design Craft",
  "Behavioural Insight",
  "Iterative Precision",
] as const;

export function Philosophy() {
  return (
    <section id="philosophy" className="bg-[var(--smoke)]/88 py-24 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <SectionReveal className="relative">
          <div className="pointer-events-none absolute -top-8 left-0 hidden font-display text-[clamp(6rem,15vw,14rem)] leading-none tracking-[-0.03em] text-white/[0.04] lg:block">
            METHOD
          </div>
          <p className="section-label relative z-10">Our Foundation</p>
          <h2 className="section-title relative z-10 max-w-lg">
            The
            <br />
            <em>Catalyst</em>
            <br />
            Method.
          </h2>

          <div className="relative z-10 mt-10 space-y-4">
            {pillars.map((pillar, index) => (
              <SectionReveal key={pillar} delay={0.08 * index}>
                <div className="flex items-center gap-4 text-[0.82rem] font-medium uppercase tracking-[0.18em] text-white/55 transition hover:text-white">
                  <span className="block h-px w-8 bg-[var(--ember)]" />
                  {pillar}
                </div>
              </SectionReveal>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal delay={0.08}>
          <div className="max-w-2xl">
            <p className="text-lg leading-9 text-white/70 md:text-[1.08rem]">
              Most agencies have a process. We have a <strong className="font-medium text-[var(--paper)]">philosophy</strong>.
            </p>
            <div className="mt-6 space-y-5 text-[0.98rem] leading-8 text-white/60 md:text-[1.03rem]">
              <p>
                The Catalyst Method bridges the gap between <em className="text-[var(--gold)]">who you are today</em> and <em className="text-[var(--gold)]">who you&apos;re destined to become</em>. It doesn&apos;t guess. It calculates.
              </p>
              <p>
                We deploy <strong className="font-medium text-[var(--paper)]">cutting-edge AI tools</strong> to decode your market, anticipate your audience, and expose creative angles your competitors haven&apos;t even considered yet.
              </p>
              <p>
                Then our designers execute with <strong className="font-medium text-[var(--paper)]">high-end craft</strong> so the strategy doesn&apos;t just make sense on paper — it feels magnetic in the market.
              </p>
              <p>
                The result is a brand that doesn&apos;t look like a small business. It looks like an <strong className="font-medium text-[var(--paper)]">industry leader</strong> in motion.
              </p>
            </div>

            <p className="mt-8 text-sm italic tracking-[0.04em] text-white/35">“Ambition is the vision. The Catalyst Method is the vehicle.”</p>

            <a href="#cta" className="btn-primary mt-8 inline-flex items-center gap-2 px-7 py-4 text-[0.78rem]">
              Start The Method
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

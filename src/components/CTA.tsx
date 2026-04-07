import { ArrowUpRight, Mail } from "lucide-react";
import { brand } from "@/brand.config";
import { SectionReveal } from "@/components/SectionReveal";

export function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden px-4 py-28 text-center md:px-8 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,rgba(232,71,10,0.12)_0%,transparent_70%)]" />
      <div className="relative z-10 mx-auto max-w-4xl">
        <SectionReveal>
          <p className="section-label justify-center">Your Inflection Point</p>
          <h2 className="mx-auto max-w-3xl font-serif text-[clamp(2.7rem,6vw,5rem)] leading-[1.1] text-[var(--paper)]">
            The gap between
            <br />
            <em className="text-[var(--ember)]">invisible and iconic</em>
            <br />
            is one decision.
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.08}>
          <p className="mx-auto mt-6 max-w-2xl text-[1rem] leading-8 text-white/55 md:text-[1.08rem]">
            You&apos;ve built something real. Now let the world see it in full resolution — with a brand that commands authority and a growth engine that never sleeps.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.16}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={`mailto:${brand.email}`} className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-[0.8rem]">
              Begin Your Ascent Today
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href={`mailto:${brand.email}`} className="btn-ghost inline-flex items-center gap-2 px-8 py-4 text-[0.8rem]">
              <Mail className="h-4 w-4" />
              {brand.email}
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

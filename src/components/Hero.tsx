import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { SectionReveal } from "@/components/SectionReveal";

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden px-4 pt-32 pb-16 md:px-8 md:pt-36 md:pb-20">
      <div className="hero-radial absolute inset-0" />
      <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[rgba(232,71,10,0.3)] to-transparent md:block" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-end gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div className="text-center lg:text-left">
          <SectionReveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(232,71,10,0.35)] bg-[rgba(232,71,10,0.08)] px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.35em] text-[var(--ember)]">
              <Sparkles className="h-3.5 w-3.5" />
              Digital Growth Agency
            </div>
          </SectionReveal>

          <SectionReveal delay={0.08}>
            <h1 className="font-display text-[clamp(4.4rem,15vw,11rem)] uppercase leading-[0.9] tracking-[0.03em] text-[var(--paper)]">
              We Ignite
              <span className="block text-[var(--ember)]">Unstoppable Growth.</span>
            </h1>
          </SectionReveal>

          <SectionReveal delay={0.16}>
            <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-white/60 lg:mx-0 lg:text-lg">
              Small businesses don&apos;t stay small. Not here.
              <strong className="font-medium text-[var(--paper)]"> CatalystNexa </strong>
              arms you with studio-grade visuals, a commanding identity, and a growth engine that compounds until the world sees you exactly as you were meant to be seen.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.24}>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <a href="#services" className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-[0.78rem]">
                Explore Our Packs
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href="#philosophy" className="btn-ghost inline-flex items-center gap-2 px-8 py-4 text-[0.78rem]">
                The Catalyst Method
              </a>
            </div>
          </SectionReveal>
        </div>

        <SectionReveal delay={0.32} className="justify-self-center lg:justify-self-end">
          <div className="glass-panel relative max-w-md overflow-hidden rounded-[2rem] border border-white/10 p-6 md:p-7">
            <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/70 to-transparent" />
            <div className="mb-8 flex items-start justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-[var(--ember)]">Midnight Luxury System</p>
                <h2 className="mt-3 font-serif text-3xl leading-tight text-[var(--paper)]">Your next chapter should look like market leadership.</h2>
              </div>
              <div className="rounded-full border border-[var(--gold)]/25 bg-[rgba(201,168,76,0.08)] p-3 text-[var(--gold)]">
                <ArrowUpRight className="h-5 w-5" />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Visual Authority", "8K visuals, premium motion, product storytelling"],
                ["Identity Precision", "Logo systems, typography, positioning, tone"],
                ["Growth Architecture", "AI-guided social scaling and paid amplification"],
                ["Conversion Focus", "Luxury positioning engineered to compound trust"],
              ].map(([title, description], index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.65, delay: 0.08 * index }}
                  className="rounded-[1.4rem] border border-white/10 bg-white/[0.035] p-4"
                >
                  <p className="font-display text-xl uppercase tracking-[0.08em] text-[var(--paper)]">{title}</p>
                  <p className="mt-2 text-sm leading-7 text-white/55">{description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>

      <SectionReveal delay={0.42} className="absolute bottom-10 left-1/2 z-10 hidden -translate-x-1/2 md:block">
        <a href="#services" className="flex flex-col items-center gap-3 text-[0.7rem] uppercase tracking-[0.24em] text-white/30 transition hover:text-white/60">
          Scroll
          <span className="flex h-12 w-px justify-center overflow-hidden bg-gradient-to-b from-white/30 to-transparent">
            <span className="scroll-line block h-8 w-px bg-white/70" />
          </span>
          <ArrowDown className="h-3.5 w-3.5" />
        </a>
      </SectionReveal>
    </section>
  );
}

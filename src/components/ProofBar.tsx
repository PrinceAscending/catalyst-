import { proofItems } from "@/brand.config";
import { SectionReveal } from "@/components/SectionReveal";

export function ProofBar() {
  return (
    <SectionReveal className="mx-auto max-w-7xl px-4 md:px-8">
      <div className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-[rgba(255,255,255,0.02)] md:grid-cols-4">
        {proofItems.map((item, index) => (
          <div
            key={item.label}
            className={`px-8 py-10 text-center ${index < proofItems.length - 1 ? "border-b border-white/8 md:border-r md:border-b-0" : ""}`}
          >
            <div className="font-display text-5xl uppercase tracking-[0.05em] text-[var(--paper)] md:text-6xl">{item.value}</div>
            <div className="mt-3 text-[0.72rem] font-medium uppercase tracking-[0.22em] text-white/40">{item.label}</div>
          </div>
        ))}
      </div>
    </SectionReveal>
  );
}

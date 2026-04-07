import { marqueeItems } from "@/brand.config";

const items = [...marqueeItems, ...marqueeItems, ...marqueeItems];

export function Marquee() {
  return (
    <div className="overflow-hidden border-y border-white/8 bg-[rgba(232,71,10,0.05)] py-5">
      <div className="flex min-w-max animate-marquee gap-12 whitespace-nowrap pr-12">
        {items.map((item, index) => (
          <div key={`${item}-${index}`} className="font-display text-base uppercase tracking-[0.24em] text-white/35">
            <span className="mr-4 text-[var(--ember)]">◆</span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

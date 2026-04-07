import { brand, navigation, socialLinks } from "@/brand.config";
import { Camera } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/8 px-4 py-8 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="text-xs tracking-[0.08em] text-white/25">
          © 2026 {brand.name}. All rights reserved. Ambition amplified.
        </div>

        <div className="flex flex-wrap items-center gap-5 md:gap-8">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.72rem] uppercase tracking-[0.18em] text-white/35 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[0.72rem] uppercase tracking-[0.18em] text-white/35 transition hover:text-[var(--paper)]"
          >
            <Camera className="h-3.5 w-3.5" />
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}

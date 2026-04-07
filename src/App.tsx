import { useEffect, type CSSProperties } from "react";
import { brand } from "@/brand.config";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Navbar } from "@/components/Navbar";
import { NoiseOverlay } from "@/components/NoiseOverlay";
import { Philosophy } from "@/components/Philosophy";
import { ProofBar } from "@/components/ProofBar";
import { Services } from "@/components/Services";
import { Work } from "@/components/Work";

const rootStyle = {
  "--ink": brand.colors.ink,
  "--paper": brand.colors.paper,
  "--ember": brand.colors.ember,
  "--gold": brand.colors.gold,
  "--smoke": brand.colors.smoke,
  "--ghost": brand.colors.ghost,
} as CSSProperties;

function updateMeta(name: string, content: string, attribute: "name" | "property" = "name") {
  let element = document.querySelector<HTMLMetaElement>(`meta[${attribute}='${name}']`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

export default function App() {
  useEffect(() => {
    document.title = brand.seo.title;
    updateMeta("description", brand.seo.description);
    updateMeta("theme-color", brand.colors.ink);
    updateMeta("og:title", brand.seo.title, "property");
    updateMeta("og:description", brand.seo.description, "property");
    updateMeta("og:type", "website", "property");
  }, []);

  return (
    <div style={rootStyle} className="relative min-h-screen overflow-x-hidden bg-[var(--ink)] text-[var(--paper)]">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_top,rgba(232,71,10,0.12),transparent_28%),radial-gradient(circle_at_80%_25%,rgba(201,168,76,0.08),transparent_22%),radial-gradient(circle_at_10%_90%,rgba(255,255,255,0.03),transparent_18%)]" />
      <NoiseOverlay />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Marquee />
        <div className="mt-8 space-y-0 md:mt-10">
          <ProofBar />
          <Services />
          <Work />
          <Philosophy />
          <CTA />
        </div>
      </main>

      <Footer />
    </div>
  );
}

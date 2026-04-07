export const brand = {
  name: "CatalystNexa",
  email: "catalystnexa@gmail.com",
  seo: {
    title: "CatalystNexa — The Growth Engine for Small Business",
    description:
      "CatalystNexa is a midnight-luxury growth agency for ambitious small businesses, blending cinematic visuals, brand identity, and scalable digital growth systems.",
  },
  colors: {
    ink: "#080810",
    paper: "#f4f0e8",
    ember: "#e8470a",
    gold: "#c9a84c",
    smoke: "#1a1a2e",
    ghost: "rgba(244,240,232,0.06)",
  },
} as const;

export const navigation = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Method", href: "#philosophy" },
  { label: "Contact", href: "#cta" },
] as const;

export const socialLinks = {
  instagram: "https://www.instagram.com/catalystnexa?igsh=MTlpNHh0cDd3NGoyOQ==",
} as const;

export const marqueeItems = [
  "Studio-Grade Visuals",
  "Brand Identity",
  "Social Scaling",
  "AI-Powered Growth",
  "The Catalyst Method",
  "Cinematic Production",
] as const;

export const proofItems = [
  { value: "500+", label: "Small Businesses Transformed" },
  { value: "12×", label: "Average Social Growth" },
  { value: "8K", label: "Production Standard" },
  { value: "3 Packs", label: "One Decisive Choice" },
] as const;

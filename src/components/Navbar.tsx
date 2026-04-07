import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { brand, navigation } from "@/brand.config";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-[80] px-4 py-4 md:px-8"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-[rgba(12,12,22,0.55)] px-4 py-3 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:px-6">
          <a href="#hero" className="font-display text-2xl uppercase tracking-[0.18em] text-[var(--paper)] md:text-[1.7rem]">
            Catalyst<span className="text-[var(--ember)]">Nexa</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs font-medium uppercase tracking-[0.28em] text-white/60 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a href={`mailto:${brand.email}`} className="btn-primary inline-flex items-center gap-2 px-5 py-3 text-[0.72rem]">
              Begin Your Ascent
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[var(--paper)] transition hover:border-white/20 hover:bg-white/10 md:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[75] bg-[rgba(6,6,14,0.96)] px-4 pt-24 pb-8 md:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: -24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.4 }}
              className="glass-panel mx-auto flex max-w-xl flex-col gap-3 rounded-[2rem] p-5"
            >
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium uppercase tracking-[0.22em] text-white/80 transition hover:border-[var(--gold)]/40 hover:bg-[rgba(201,168,76,0.08)] hover:text-white"
                >
                  {item.label}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              ))}

              <a
                href={`mailto:${brand.email}`}
                onClick={closeMenu}
                className="btn-primary mt-3 inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-4 text-[0.78rem]"
              >
                Contact CatalystNexa
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

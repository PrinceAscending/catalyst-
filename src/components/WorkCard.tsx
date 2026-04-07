import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type WorkCardProps = {
  title: string;
  category: string;
  summary: string;
  image: string;
  metrics: string[];
  href: string;
};

export function WorkCard({ title, category, summary, image, metrics, href }: WorkCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="glass-panel group overflow-hidden rounded-[2rem]"
    >
      <a href={href} className="block">
        <div className="relative aspect-[16/10] overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            loading="lazy"
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,8,16,0.75)] via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(201,168,76,0.18),transparent_55%)] opacity-0 transition duration-500 group-hover:opacity-100" />
          <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-[rgba(8,8,16,0.5)] px-3 py-2 text-[0.68rem] uppercase tracking-[0.24em] text-white/75 backdrop-blur-md">
            {category}
          </div>
        </div>

        <div className="p-6 md:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-serif text-3xl leading-tight text-[var(--paper)]">{title}</h3>
              <p className="mt-3 max-w-xl text-[0.96rem] leading-8 text-white/60">{summary}</p>
            </div>
            <div className="hidden rounded-full border border-[var(--gold)]/25 bg-[rgba(201,168,76,0.08)] p-3 text-[var(--gold)] md:block">
              <ArrowUpRight className="h-5 w-5" />
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {metrics.map((metric) => (
              <span
                key={metric}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[0.68rem] uppercase tracking-[0.2em] text-white/60"
              >
                {metric}
              </span>
            ))}
          </div>
        </div>
      </a>
    </motion.article>
  );
}

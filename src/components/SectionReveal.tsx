import { motion, type Variants } from "framer-motion";
import type { PropsWithChildren } from "react";
import { cn } from "@/utils/cn";

type RevealDirection = "up" | "down";

type SectionRevealProps = PropsWithChildren<{
  className?: string;
  delay?: number;
  amount?: number;
  direction?: RevealDirection;
}>;

const variantsByDirection: Record<RevealDirection, Variants> = {
  up: {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  },
  down: {
    hidden: { opacity: 0, y: -18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
    },
  },
};

export function SectionReveal({
  children,
  className,
  delay = 0,
  amount = 0.24,
  direction = "up",
}: SectionRevealProps) {
  return (
    <motion.div
      className={cn("will-change-transform", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      transition={{ delay }}
      variants={variantsByDirection[direction]}
    >
      {children}
    </motion.div>
  );
}

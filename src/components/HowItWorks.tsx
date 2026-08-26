"use client";

import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    text: "take it tonight. then take it again tomorrow.",
  },
  {
    n: "02",
    text: "most people notice something around week three.",
  },
  {
    n: "03",
    text: "set a reminder, keep the jar where you'll see it, and give it a month before you decide.",
  },
];

/**
 * How it works — plain three-step text sequence. A thin Royal Purple
 * rule draws in once per step as it scrolls into view. No gloss, no
 * animated connecting lines.
 */
export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-halfwhite px-6 py-32 md:py-44">
      <div className="mx-auto max-w-2xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8 }}
          className="label mb-16 text-royal"
        >
          how it works
        </motion.p>

        <div className="space-y-16">
          {steps.map((s) => (
            <div key={s.n}>
              {/* thin royal rule, draws in once */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.9 }}
                transition={{ duration: 0.9, ease: [0.33, 1, 0.68, 1] }}
                className="mb-6 h-px w-full origin-left bg-royal/60"
              />
              <div className="flex gap-6">
                <span className="data text-[12px] text-royal pt-1">{s.n}</span>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.7, delay: 0.15, ease: [0.33, 1, 0.68, 1] }}
                  className="font-fraunces font-light lowercase tracking-[.06em] text-deeppurple text-[20px] md:text-[24px] leading-snug"
                >
                  {s.text}
                </motion.p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

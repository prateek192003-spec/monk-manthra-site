"use client";

import { motion } from "framer-motion";

/**
 * Journal — a quiet strip of three lines, rotated like the social
 * templates in the guide: dark, light, gold. No imagery.
 */
export default function Journal() {
  const entries = [
    {
      label: "day 21",
      text: "nothing dramatic happened. that was the point.",
    },
    {
      label: "ingredient",
      text: "600mg of ashwagandha. that's the whole formula.",
    },
    {
      label: "practice",
      text: "a word, repeated, is how anything changes.",
    },
  ];

  return (
    <section id="journal" className="bg-halfwhite px-6 py-32 md:py-44">
      <div className="mx-auto max-w-3xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8 }}
          className="label mb-16 text-royal"
        >
          journal
        </motion.p>

        <div className="divide-y divide-deeppurple/10">
          {entries.map((e, i) => (
            <motion.div
              key={e.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, delay: 0.08 * i, ease: [0.33, 1, 0.68, 1] }}
              className="flex flex-col gap-2 py-10 md:flex-row md:items-baseline md:gap-10"
            >
              <span className="label shrink-0 text-royal">{e.label}</span>
              <p className="font-fraunces font-light lowercase tracking-[.06em] text-deeppurple text-[20px] md:text-[24px] leading-snug">
                {e.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

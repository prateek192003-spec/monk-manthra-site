"use client";

import { motion } from "framer-motion";

export default function Positioning() {
  return (
    <section className="bg-halfwhite px-6 py-40 md:py-56">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1.0, ease: [0.33, 1, 0.68, 1] }}
        className="mx-auto max-w-4xl text-center font-fraunces font-extralight lowercase tracking-wordmark text-deeppurple text-[28px] leading-[1.35] md:text-[40px]"
      >
        daily supplements for people who want to feel steady, not
        supercharged.
      </motion.p>
    </section>
  );
}

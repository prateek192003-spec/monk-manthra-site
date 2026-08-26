"use client";

import { motion } from "framer-motion";
import Mark from "./Mark";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center bg-halfwhite px-6 pt-24"
    >
      {/* the mark draws in once */}
      <div className="mb-14">
        <Mark draw size={148} />
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1.1, ease: [0.33, 1, 0.68, 1] }}
        className="max-w-3xl text-center font-fraunces font-extralight lowercase tracking-wordmark text-deeppurple text-[34px] leading-[1.25] md:text-[52px]"
      >
        a word, repeated, is how anything changes.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1.45, ease: [0.33, 1, 0.68, 1] }}
        className="mt-8 max-w-xl text-center font-karla font-light text-[16px] leading-relaxed text-deeppurple/90"
      >
        a manthra is one word, repeated until it changes something. that is
        also how a supplement works — a small dose, taken daily, until the
        effect compounds.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 1.8 }}
        className="mt-12"
      >
        <a
          href="#products-grid"
          className="label inline-block bg-gold px-8 py-3 text-ink rounded-[3px] hover:bg-deeppurple hover:text-halfwhite transition-colors"
        >
          see the range
        </a>
      </motion.div>
    </section>
  );
}

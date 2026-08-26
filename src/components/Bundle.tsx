"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { eveningThree } from "@/lib/products";

/**
 * Bundle — "The Evening Three" (rest, calm, ease) as the deep gift
 * carton with the gold spine, per the packaging section of the guide.
 */
export default function Bundle() {
  return (
    <section className="bg-halfwhite px-6 py-32 md:py-44">
      <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: [0.33, 1, 0.68, 1] }}
          className="relative aspect-square w-full max-w-[460px] justify-self-center"
        >
          <Image
            src={eveningThree.image}
            alt="the evening three — gift carton with rest, calm and ease"
            fill
            sizes="(max-width: 768px) 90vw, 460px"
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.33, 1, 0.68, 1] }}
          className="flex flex-col items-center gap-5 text-center md:items-start md:text-left"
        >
          <span className="label text-royal">the bundle</span>
          <h3 className="font-fraunces font-extralight lowercase tracking-wordmark text-deeppurple text-[34px] md:text-[44px] leading-none">
            {eveningThree.name}
          </h3>
          <p className="data text-[13px] text-ink">{eveningThree.contents}</p>
          <p className="max-w-sm font-karla font-light text-[16px] leading-relaxed text-deeppurple/90">
            three evening formulas in one deep carton with a gold spine.
            taken together, one at a time, with the evening meal.
          </p>
          <span className="mt-2 h-px w-16 bg-gold" aria-hidden />
        </motion.div>
      </div>
    </section>
  );
}

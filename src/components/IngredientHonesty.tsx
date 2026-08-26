"use client";

import { motion } from "framer-motion";
import { products } from "@/lib/products";

/**
 * Ingredient honesty — one row per product. No icons, no illustrations,
 * no mortar-and-pestle. The guide explicitly bans them.
 */
export default function IngredientHonesty() {
  return (
    <section id="ingredients" className="bg-halfwhite px-6 py-32 md:py-44">
      <div className="mx-auto max-w-3xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8 }}
          className="label mb-16 text-royal"
        >
          ingredients
        </motion.p>

        <div className="divide-y divide-deeppurple/10">
          {products.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, delay: 0.05 * (i % 3), ease: [0.33, 1, 0.68, 1] }}
              className="flex flex-col gap-2 py-8 md:flex-row md:items-baseline md:justify-between md:gap-8"
            >
              <p className="font-karla font-light text-[16px] leading-relaxed text-deeppurple">
                {p.honesty}
              </p>
              <p className="data shrink-0 text-[12px] text-ink/80">{p.dose}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-14 font-karla font-light text-[15px] leading-relaxed text-deeppurple/70"
        >
          single-ingredient formulas at doses you can check. nothing else
          added.
        </motion.p>
      </div>
    </section>
  );
}

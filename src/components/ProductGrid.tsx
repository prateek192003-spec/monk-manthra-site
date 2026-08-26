"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Mark from "@/components/Mark";
import { products } from "@/lib/products";

/**
 * Product grid — shows all six products at once in a clean grid.
 * This is the section linked from nav and from the CTA button.
 * The pinned showcase above is still there for the hero experience.
 */
export default function ProductGrid() {
  return (
    <section id="products-grid" className="bg-halfwhite px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
          className="mb-16 flex items-center gap-4"
        >
          <Mark size={28} />
          <span className="label text-royal">the range</span>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: i * 0.07,
                ease: [0.33, 1, 0.68, 1],
              }}
              className="flex flex-col items-center gap-5 border-b border-deeppurple/10 pb-10 last:border-0"
            >
              {/* photograph — flat, matte, no gloss treatment */}
              <div className="relative aspect-square w-full max-w-[320px]">
                <Image
                  src={p.image}
                  alt={`${p.state} — ${p.ingredient}`}
                  fill
                  sizes="(max-width: 640px) 90vw, 320px"
                  className="object-cover"
                  priority={i < 3}
                />
              </div>

              {/* packaging front reads: mark / wordmark / state / ingredient / dose */}
              <div className="flex flex-col items-center text-center">
                <Mark size={28} />
                <h3 className="mt-3 font-fraunces font-extralight lowercase tracking-wordmark text-deeppurple text-[28px] md:text-[32px]">
                  {p.state}
                </h3>
                <p className="label text-deeppurple/80">{p.ingredient}</p>
                <p className="data mt-2 text-[12px] text-ink">{p.dose}</p>
                <span className="mt-3 h-px w-12 bg-gold" aria-hidden />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

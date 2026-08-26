"use client";

import { motion } from "framer-motion";

/**
 * Facts — the facts panel is a legal document, not a design surface.
 * Set in Plex Mono at full contrast on white. Never tinted purple.
 * Example shown is the calm (ashwagandha KSM-66) back-of-pack panel.
 */
export default function Facts() {
  return (
    <section className="bg-halfwhite px-6 py-32 md:py-44">
      <div className="mx-auto max-w-2xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8 }}
          className="label mb-12 text-royal"
        >
          supplement facts
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="border border-ink/80 bg-white p-8"
        >
          <div className="data text-[12px] leading-relaxed text-ink">
            <p className="text-[14px] font-medium">supplement facts</p>
            <div className="my-3 h-[3px] w-full bg-ink" />
            <div className="flex justify-between">
              <span>serving size</span>
              <span>1 capsule</span>
            </div>
            <div className="flex justify-between">
              <span>servings per container</span>
              <span>60</span>
            </div>
            <div className="my-3 h-px w-full bg-ink" />
            <div className="flex justify-between">
              <span>amount per serving</span>
              <span>%DV</span>
            </div>
            <div className="my-2 h-[6px] w-full bg-ink" />
            <div className="flex justify-between">
              <span>ashwagandha root extract (KSM-66, 5% withanolides)</span>
              <span>600mg</span>
            </div>
            <div className="flex justify-between">
              <span>organic black pepper</span>
              <span>5mg</span>
            </div>
            <div className="my-3 h-px w-full bg-ink" />
            <p className="mt-3">
              other ingredients: hypromellose capsule, rice flour.
            </p>
            <p>contains no gluten, dairy, or soy.</p>
            <p className="mt-3">directions: one capsule with the evening meal.</p>
            <p>not for use during pregnancy. keep out of reach of children.</p>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 font-karla font-light text-[14px] leading-relaxed text-deeppurple/70"
        >
          every panel ships at full contrast on white, in mono, with the rule
          weights the market requires. the arithmetic is never hidden.
        </motion.p>
      </div>
    </section>
  );
}

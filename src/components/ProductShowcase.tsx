"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { products } from "@/lib/products";

gsap.registerPlugin(ScrollTrigger);

/**
 * Product showcase — the one place GSAP ScrollTrigger is used.
 *
 * The section pins for the length of the range. Each product's
 * photograph fades up and settles into place ONCE as its scroll
 * threshold is crossed. No scrub-rotation, no continuous motion,
 * no bounce. Reduced-motion users get a plain stacked list.
 */
export default function ProductShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray<HTMLElement>(".slide", track);
      const vh = () => window.innerHeight;

      // every slide starts hidden except the first
      gsap.set(slides, { autoAlpha: 0, y: 48 });
      gsap.set(slides[0], { autoAlpha: 1, y: 0 });

      // absolute top of the section in document flow (pre-pin)
      const sectionTop =
        section.getBoundingClientRect().top + window.scrollY;

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${(slides.length - 1) * vh()}`,
        pin: true,
        anticipatePin: 1,
      });

      // one one-time reveal per product, fired at an absolute scroll
      // position: pin start + i viewports into the pin.
      slides.forEach((slide, i) => {
        if (i === 0) return;
        ScrollTrigger.create({
          start: () => sectionTop + i * vh() - vh() * 0.5,
          end: () => sectionTop + i * vh() - vh() * 0.5 + 1,
          once: true,
          onEnter: () => {
            gsap.to(slide, {
              autoAlpha: 1,
              y: 0,
              duration: 0.9,
              ease: "power2.out",
            });
            gsap.to(slides[i - 1], {
              autoAlpha: 0,
              y: -32,
              duration: 0.7,
              ease: "power2.out",
            });
          },
        });
      });

      ScrollTrigger.refresh();
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="products" ref={sectionRef} className="bg-halfwhite">
      <div
        ref={trackRef}
        className="relative flex h-screen items-center justify-center overflow-hidden"
      >
        {products.map((p) => (
          <article
            key={p.slug}
            className="slide absolute inset-0 flex items-center justify-center px-6"
          >
            <div className="mx-auto grid w-full max-w-5xl items-center gap-12 md:grid-cols-2">
              {/* photograph — flat, matte, no gloss treatment */}
              <div className="relative aspect-square w-full max-w-[440px] justify-self-center">
                <Image
                  src={p.image}
                  alt={`${p.state} — ${p.ingredient}`}
                  fill
                  sizes="(max-width: 768px) 90vw, 440px"
                  className="object-cover"
                  priority={p.slug === "rest"}
                />
              </div>

              {/* packaging front reads: mark / wordmark / state / ingredient / dose */}
              <div className="flex flex-col items-center gap-5 text-center md:items-start md:text-left">
                <span className="label text-royal">monk manthra</span>
                <h3 className="font-fraunces font-extralight lowercase tracking-wordmark text-deeppurple text-[40px] md:text-[56px] leading-none">
                  {p.state}
                </h3>
                <p className="label text-deeppurple/80">{p.ingredient}</p>
                <p className="data text-[13px] text-ink">{p.dose}</p>
                <span className="mt-2 h-px w-16 bg-gold" aria-hidden />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

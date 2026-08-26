"use client";

import Mark from "./Mark";

const links = [
  { label: "products", href: "#products-grid" },
  { label: "ingredients", href: "#ingredients" },
  { label: "how it works", href: "#how-it-works" },
  { label: "journal", href: "#journal" },
];

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-halfwhite/95 backdrop-blur-[2px] border-b border-deeppurple/10">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* lockup left */}
        <a href="#top" className="flex items-center gap-4">
          <Mark size={34} />
          <span className="font-fraunces font-extralight lowercase tracking-wordmark text-[17px] text-deeppurple">
            monk manthra
          </span>
        </a>

        {/* links center */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="label text-deeppurple/80 hover:text-deeppurple transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* shop right */}
        <a
          href="#products-grid"
          className="label text-deeppurple border-b border-gold pb-[2px] hover:border-deeppurple transition-colors"
        >
          shop
        </a>
      </nav>
    </header>
  );
}

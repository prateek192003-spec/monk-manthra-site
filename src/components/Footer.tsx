import Mark from "./Mark";

const links = [
  { label: "products", href: "#products-grid" },
  { label: "ingredients", href: "#ingredients" },
  { label: "how it works", href: "#how-it-works" },
  { label: "journal", href: "#journal" },
];

/**
 * Footer — deep purple ground, reversed mark, wordmark, nav links,
 * and the required regulatory disclaimer.
 */
export default function Footer() {
  return (
    <footer className="bg-deeppurple px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          {/* reversed lockup */}
          <div className="flex items-center gap-4">
            <Mark size={34} reversed />
            <span className="font-fraunces font-extralight lowercase tracking-wordmark text-halfwhite text-[17px]">
              monk manthra
            </span>
          </div>

          <div className="flex flex-wrap gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="label text-halfwhite/70 hover:text-halfwhite transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-14 h-px w-full bg-halfwhite/15" />

        <p className="mt-8 max-w-3xl font-karla font-light text-[12px] leading-relaxed text-halfwhite/60">
          these statements have not been evaluated by the FDA. this product is
          not intended to diagnose, treat, cure, or prevent any disease.
        </p>

        <p className="data mt-6 text-[11px] text-halfwhite/40">
          © 2026 monk manthra · monkmanthra.com
        </p>
      </div>
    </footer>
  );
}

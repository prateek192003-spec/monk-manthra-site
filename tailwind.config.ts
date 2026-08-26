import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // brand palette — section five of the guide
        halfwhite: "#F4F1EC", // default ground, ~60%
        deeppurple: "#3A1F5C", // body text, caps, pouch
        royal: "#7A5CA8", // mark, rules, small sub-labels only
        lilac: "#CBBFE0", // tint blocks, table fills
        gold: "#C2A053", // foil accents, max 10% of any surface
        ink: "#241B33", // alternate body text
      },
      fontFamily: {
        fraunces: ["var(--font-fraunces)", "serif"],
        karla: ["var(--font-karla)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      letterSpacing: {
        wordmark: ".14em",
        label: ".2em",
      },
    },
  },
  plugins: [],
};
export default config;

// Product architecture — exact names, ingredients, doses and pack counts
// from the monk manthra brand guide, section seven. Nothing invented.

export type Product = {
  slug: string;
  state: string; // the state it supports — one word only
  ingredient: string; // the actual ingredient, set in small caps
  dose: string; // dose + count, set in Plex Mono
  image: string;
  honesty: string; // ingredient-honesty line, section five of the page
};

export const products: Product[] = [
  {
    slug: "rest",
    state: "rest",
    ingredient: "magnesium glycinate",
    dose: "400mg · 60 capsules",
    image: "/products/rest.jpg",
    honesty: "400mg of magnesium glycinate. That's the whole formula.",
  },
  {
    slug: "calm",
    state: "calm",
    ingredient: "ashwagandha ksm-66",
    dose: "600mg · 60 capsules",
    image: "/products/calm.jpg",
    honesty: "600mg of ashwagandha. That's the whole formula.",
  },
  {
    slug: "ease",
    state: "ease",
    ingredient: "turmeric + piperine",
    dose: "500mg · 90 capsules",
    image: "/products/ease.jpg",
    honesty: "500mg of turmeric, with piperine. That's the whole formula.",
  },
  {
    slug: "clarity",
    state: "clarity",
    ingredient: "omega-3 · algal",
    dose: "1000mg · 60 capsules",
    image: "/products/clarity.jpg",
    honesty: "1000mg of algal omega-3. That's the whole formula.",
  },
  {
    slug: "sun",
    state: "sun",
    ingredient: "vitamin d3 + k2",
    dose: "2000 IU · 90 capsules",
    image: "/products/sun.jpg",
    honesty: "2000 IU of vitamin D3, with K2. That's the whole formula.",
  },
  {
    slug: "build",
    state: "build",
    ingredient: "plant protein · vanilla",
    dose: "24g · 900g pouch",
    image: "/products/build.jpg",
    honesty: "24g of plant protein, vanilla. That's the whole formula.",
  },
];

export const eveningThree = {
  name: "the evening three",
  contents: "rest · calm · ease",
  image: "/products/evening-three.jpg",
};

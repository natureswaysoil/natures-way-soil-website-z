export type Product = { id: string; slug: string; name: string; priceCents: number };

export const products: Product[] = [
  { id: "dog-urine-1g",  slug: "dog-urine-neutralizer-1-gal",  name: "Dog Urine Neutralizer — 1 gal",  priceCents: 5999 },
 
  { id: "liquid-bone-meal-1g", slug: "liquid-bone-meal-1-gal", name: "Liquid Bone Meal Fertilizer — 1 gal", priceCents: 3999 },
  { id: "liquid-kelp-1g", slug: "liquid-kelp-1-gal", name: "Liquid Kelp Fertilizer — 1 gal", priceCents: 3499 },
  { id: "hay-pasture-1g", slug: "hay-and-pasture-1-gal", name: "Hay & Pasture Liquid Fertilizer — 1 gal", priceCents: 3999 }
];

export function getProductBySlug(slug: string) {
  return products.find(p => p.slug === slug);
}

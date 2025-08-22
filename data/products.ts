export type Product = {
  id: string;
  name: string;
  slug: string;
  priceCents: number;
  image: string;
  description: string;
  features: string[];
  brand: string;
  weight: string;
  volume: string;
  form?: string;
  coverage?: string;
};

export const products: Product[] = [
  // Paste your product objects here (see previous answers)
];

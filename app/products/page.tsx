// app/products/page.tsx
import { AddToCartButton } from "@/components/ui/AddToCartButton"
import Link from "next/link"
import { products } from "../../data/products"
import { AddToCartButton } from "@/components/ui/AddToCartButton"
import { CheckoutButton } from "@/components/CheckoutButton"
import { formatUSD } from "@/lib/cart" // keep if this exists; otherwise remove

export default function ProductsPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Products</h1>
      <ul className="grid gap-4">
        {products.map((p) => (
          <li key={p.id} className="border p-4 rounded-md">
            <div className="flex items-center justify-between">
              <Link href={`/products/${p.slug}`} className="font-medium underline">
                {p.name}
              </Link>
              <span>{typeof formatUSD === "function" ? formatUSD(p.priceCents) : `$${(p.priceCents/100).toFixed(2)}`}</span>
            </div>
            <div className="mt-3 flex gap-3">
              <AddToCartButton id={p.id} name={p.name} amount={p.priceCents} />
              <CheckoutButton />
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}

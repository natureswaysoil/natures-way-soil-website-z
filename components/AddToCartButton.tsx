// components/AddToCartButton.tsx
"use client"
import { useCart } from "@/context/CartContext"

type AddToCartButtonProps = {
  id: string
  name: string
  amount: number
  quantity?: number
  className?: string
}

export function AddToCartButton({
  id,
  name,
  amount,
  quantity = 1,
  className,
}: AddToCartButtonProps) {
  const { addItem } = useCart()

  return (
    <button
      onClick={() => addItem({ id, name, amount, quantity })}
      className={`px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 ${className ?? ""}`}
    >
      Add to Cart
    </button>
  )
}

export default AddToCartButton


cat > components/AddToCartButton.tsx <<'TSX'
// components/AddToCartButton.tsx
"use client"
import { useCart } from "@/context/CartContext"

type AddToCartButtonProps = {

}: {
  id: string; name: string; amount: number; quantity?: number; className?: string;
}) {
  const { addItem } = useCart();
  const [loading, setLoading] = React.useState(false);

  const onAdd = () => {
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
TSX

mkdir -p context
cat > context/CartContext.tsx <<'TSX'
// context/CartContext.tsx
"use client"
import React, { createContext, useContext } from "react"

type Item = { id: string; name: string; amount: number; quantity?: number }
type CartContextType = { addItem: (item: Item) => void }

const CartContext = createContext<CartContextType>({ addItem: () => {} })

export function CartProvider({ children }: { children: React.ReactNode }) {
  const addItem = (item: Item) => console.log("Added to cart", item)
  return <CartContext.Provider value={{ addItem }}>{children}</CartContext.Provider>
}

export function useCart() { return useContext(CartContext) }
TSX

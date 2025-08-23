// context/CartContext.tsx
"use client"
import React, { createContext, useContext } from "react"

type Item = { id: string; name: string; amount: number; quantity?: number }
type CartContextType = { addItem: (item: Item) => void }

const CartContext = createContext<CartContextType>({ addItem: () => {} })

export function CartProvider({ children }: { children: React.ReactNode }) {
  const addItem = (item: Item) => {
    console.log("Added to cart", item)
  }
  return <CartContext.Provider value={{ addItem }}>{children}</CartContext.Provider>
}

export function useCart() {
  return useContext(CartContext)
}

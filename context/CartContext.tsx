"use client";

import React, { createContext, useState, useContext } from 'react';
import { Product } from '../data/products';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export const CartContext = createContext<any>(null);

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart(prev => [...prev, product]);
  };

  const handleCheckout = async () => {
    const stripe = await stripePromise;
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        items: cart.map(item => ({
          id: item.id,
          name: item.name,
          price: item.priceCents,
          quantity: 1,
        })),
      }),
    });
    const session = await res.json();
    await stripe?.redirectToCheckout({ sessionId: session.id });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, handleCheckout }}>
      {children}
    </CartContext.Provider>
  );
}

// app/layout.tsx
import "./globals.css"
import type { Metadata } from "next"
import { CartProvider } from "@/context/CartContext"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Nature's Way Soil",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}

import { CartProvider } from '../lib/cart';
import Link from 'next/link';

export const metadata = {
  title: "Nature's Way Soil",
  description: 'Organic soil & lawn products'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={{padding:'12px',borderBottom:'1px solid #e5e7eb',display:'flex',justifyContent:'space-between'}}>
          <Link href="/" style={{fontWeight:600}}>Nature&apos;s Way Soil</Link>
          <nav style={{display:'flex',gap:12}}>
            <Link href="/products">Products</Link>
            <Link href="/cart">Cart</Link>
            <Link href="/chat">Chat</Link>
          </nav>
        </header>
        <CartProvider>
          <main style={{padding:'16px'}}>{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
import "./globals.css"
import { CartProvider } from "@/context/CartContext"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}

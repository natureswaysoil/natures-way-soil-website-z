
// app/layout.tsx
import "./globals.css"
import type { Metadata } from "next"
import { CartProvider } from "@/lib/cart"

export const metadata: Metadata = { title: "Nature's Way Soil" }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}

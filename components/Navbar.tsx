'use client';

import Link from 'next/link';
import { CartButton } from './CartButton';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-background border-b">
      <Link href="/" className="text-lg font-semibold">Nature&apos;s Way Soil</Link>
      <div className="flex items-center gap-4">
        <Link href="/products" className="hover:underline">Products</Link>
        <CartButton className="border" />
      </div>
    </nav>
  );
}

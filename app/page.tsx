"use client";

import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <HeroSection />
      <section className="flex flex-col items-center text-center py-8 px-4 max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Nature&apos;s Way Soil
        </h1>
        <p className="text-lg mb-6 text-muted-foreground">
          Premium soil and gardening supplies delivered to your door.
        </p>
        <Link href="/products">
          <Button>Shop Products</Button>
        </Link>
      </section>
    </main>
  );
}

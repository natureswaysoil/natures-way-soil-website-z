import { Button } from "@/components/ui/Button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4 text-foreground">
      <h1 className="text-4xl font-bold mb-6">Welcome to Nature's Way Soil</h1>
      <p className="text-lg mb-6 text-muted-foreground">
        This is a Next.js + Tailwind + shadcn/ui starter page.
      </p>

      <div className="flex gap-4">
        <Button>Default Button</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline" size="lg">
          Large Outline
        </Button>
      </div>
    </main>
  )
}


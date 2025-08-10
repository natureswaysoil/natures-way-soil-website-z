import dynamic from 'next/dynamic';
const ChatWidget = dynamic(() => import('../components/ChatWidgetStreaming'), { ssr: false });

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">Welcome to Nature&apos;s Way Soil</h1>
        <p>Browse products, add to cart, check out with Stripe, or ask us anything below.</p>
      </div>
      <div className="flex gap-3 flex-wrap">
        <a href="/products" className="px-4 py-2 rounded bg-emerald-700 text-white">Shop Products</a>
        <a href="/cart" className="px-4 py-2 rounded border">View Cart</a>
      </div>
      <ChatWidget />
    </div>
  );
}

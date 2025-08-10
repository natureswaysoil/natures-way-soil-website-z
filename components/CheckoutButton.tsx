'use client';
import * as React from 'react';

export function CheckoutButton({
  items
}: {
  items?: { name: string; amount: number; quantity?: number }[];
}) {
  const [loading, setLoading] = React.useState(false);

  const handle = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: items?.length ? items : [{ name: "Dog Urine Neutralizer — 1 gal", amount: 3999, quantity: 1 }]
        })
      });
      const data = await res.json();
      if (data?.url) location.href = data.url;
      else alert(data?.error || 'Checkout failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={handle} disabled={loading} className="px-4 py-2 rounded bg-green-700 text-white">
      {loading ? 'Redirecting…' : 'Buy Now (Stripe)'}
    </button>
  );
}

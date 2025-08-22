"use client"
import * as React from "react"

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={"inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-black text-white hover:bg-black/90 " + (props.className ?? "")}
    />
  )
}

}: {
  id: string; name: string; amount: number; quantity?: number; className?: string;
}) {
  const { addItem } = useCart();
  const [loading, setLoading] = React.useState(false);

  const onAdd = () => {
    setLoading(true);
    addItem({ id, name, amount, quantity });
    setLoading(false);
  };

  return (
    <button onClick={onAdd} disabled={loading} className={`px-4 py-2 rounded bg-emerald-700 text-white ${className}`}>
      {loading ? 'Adding…' : 'Add to Cart'}
    </button>
  );
}

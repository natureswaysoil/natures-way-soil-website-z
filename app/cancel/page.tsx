export default function CancelPage() {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-semibold">Payment canceled</h1>
      <p>No worries—your cart is saved. You can try again anytime.</p>
      <a href="/cart" className="underline">Back to cart</a>
    </div>
  );
}

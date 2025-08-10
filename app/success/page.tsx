export default function SuccessPage() {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-semibold">Thank you!</h1>
      <p>Your order was successful. A receipt has been sent to your email.</p>
      <a href="/products" className="underline">Continue shopping</a>
    </div>
  );
}

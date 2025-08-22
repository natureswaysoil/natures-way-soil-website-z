
import Stripe from "stripe"

if (!process.env.STRIPE_SECRET_KEY) {
  // Avoid crashing builds if env not set; your API route can handle missing key at runtime.
  console.warn("STRIPE_SECRET_KEY is not set")
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "sk_test_placeholder", {
  apiVersion: "2024-06-20"
})

import { NextRequest, NextResponse } from 'next/server'
import { stripe } from "@/lib/stripe"


export async function POST(req: NextRequest) {
  try {
    if (!stripe) {
      return NextResponse.json({ error: 'Stripe not configured' }, { status: 500 })
    }

    const body = await req.json().catch(() => ({}))
    const items = Array.isArray(body?.items) ? body.items : null
    if (!items || items.length === 0) {
      return NextResponse.json({ error: 'No items to purchase' }, { status: 400 })
    }

    const origin =
      process.env.NEXT_PUBLIC_SITE_URL ||
      `${req.nextUrl.protocol}//${req.headers.get('host')}`

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: items.map((i: any) => ({
        price_data: {
          currency: 'usd',
          product_data: { name: i.name },
          unit_amount: i.amount
        },
        quantity: i.quantity || 1
      })),
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cancel`
    })

    return NextResponse.json({ url: session.url }, { status: 200 })
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Server error' }, { status: 500 })
  }
}

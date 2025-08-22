// components/ui/Button.tsx
"use client"
import * as React from "react"

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={
        "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-black text-white hover:bg-black/90 " +
        (props.className ?? "")
      }
    />
  )
}

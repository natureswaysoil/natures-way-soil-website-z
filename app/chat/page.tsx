"use client"
import dynamic from "next/dynamic"

const ChatWidget = dynamic(() => import("../../components/ChatWidgetStreaming"), { ssr: false })

export default function ChatPage() {
  return (
    <main className="p-6">
      <ChatWidget />
    </main>
  )
}


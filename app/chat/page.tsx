import dynamic from 'next/dynamic';
const ChatWidget = dynamic(() => import('../../components/ChatWidgetStreaming'), { ssr: false });

export default function ChatPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Chat with us</h1>
      <ChatWidget />
    </div>
  );
}

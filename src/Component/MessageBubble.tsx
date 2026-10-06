import type { Message } from "@/lib/data";

export default function MessageBubble({ message }: { message: Message }) {
  return (
    <div className={`chat ${message.sent ? "chat-end" : "chat-start"}`}>
      <div
        className={`chat-bubble max-w-[70%] shadow ${
          message.sent ? "chat-bubble-primary" : "bg-base-100"
        }`}
      >
        <p>{message.text}</p>
        <div className="flex items-center justify-end gap-1 mt-1">
          <span className={`text-[10px] ${message.sent ? "text-primary-content/70" : "text-base-content/50"}`}>
            {message.time}
          </span>
          {message.sent && <span className="text-[10px]">✓✓</span>}
        </div>
      </div>
    </div>
  );
}
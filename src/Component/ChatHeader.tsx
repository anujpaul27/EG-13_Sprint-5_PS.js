"use client";

import type { Chat } from "@/lib/data";

export default function ChatHeader({ chat }: { chat: Chat }) {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-base-100 border-b border-base-300">
      <div className="flex items-center gap-3">
        <div className="avatar online">
          <div className="w-10 rounded-full">
            <img src={chat.avatar} alt={chat.name} />
          </div>
        </div>
        <div>
          <h2 className="font-semibold leading-tight">{chat.name}</h2>
          <p className="text-xs text-green-500">online</p>
        </div>
      </div>

      <div className="flex gap-1">
        <button className="btn btn-ghost btn-sm btn-circle">📹</button>
        <button className="btn btn-ghost btn-sm btn-circle">📞</button>
        <button className="btn btn-ghost btn-sm btn-circle">⋮</button>
      </div>
    </div>
  );
}
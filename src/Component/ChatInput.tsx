"use client";

import { useState } from "react";

export default function ChatInput() {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;
    console.log("Sending:", text);
    setText("");
  };

  return (
    <div className="flex items-center gap-2 p-3 bg-base-100 border-t border-base-300">
      <button className="btn btn-ghost btn-circle">😊</button>
      <button className="btn btn-ghost btn-circle hidden sm:btn-circle">📎</button>

      <input
        type="text"
        placeholder="Type a message"
        className="input input-bordered flex-1 rounded-full"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />

      <button
        onClick={handleSend}
        className="btn btn-primary btn-circle"
      >
        {text.trim() ? (
          // Send icon
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
               fill="currentColor" className="w-5 h-5">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
          </svg>
        ) : (
          // Mic icon
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
               fill="currentColor" className="w-5 h-5">
            <path d="M12 14a3 3 0 003-3V5a3 3 0 10-6 0v6a3 3 0 003 3zm5-3a5 5 0 01-10 0H5a7 7 0 006 6.92V21h2v-3.08A7 7 0 0019 11h-2z" />
          </svg>
        )}
      </button>
    </div>
  );
}
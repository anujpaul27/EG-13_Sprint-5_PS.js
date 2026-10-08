"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Chat } from "@/lib/data";

export default function ChatListItem({ chat }: { chat: Chat }) {
    const pathname = usePathname();
    const isActive = pathname === `/chat/${chat.id}`;

    return (
        <Link href={`/chat/${chat.id}`}>
            <div
                className={`flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-base-200 ${isActive ? "bg-base-200 border-l-4 border-primary" : ""
                    }`}
            >
                {/* Avatar with online dot */}
                <div className="avatar online">
                    <div className="w-12 rounded-full">
                        <img src={chat.avatar} alt={chat.name} />
                    </div>
                </div>

                {/* Name + last message */}
                <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline">
                        <h3 className="font-semibold truncate">{chat.name}</h3>
                        <span className={`text-xs ${chat.unread > 0 ? "text-primary font-bold" : "text-base-content/50"}`}>
                            {chat.time}
                        </span>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="text-sm text-base-content/60 truncate">{chat.lastMessage}</p>
                        {chat.unread > 0 && (
                            <span className="badge badge-primary badge-sm rounded-full">{chat.unread}</span>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
}
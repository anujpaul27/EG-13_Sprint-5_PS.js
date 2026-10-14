import ChatHeader from "@/Component/ChatHeader";
import ChatInput from "@/Component/ChatInput";
import MessageBubble from "@/Component/MessageBubble";
import Sidebar from "@/Component/Sidebar";
import { chats } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function ChatPage({ params }: { params: Promise<{ id: string }> }) {
    const {id} = await params;

    const chat = chats.find((c) => c.id === Number(id));
    if (!chat) notFound();

    return (
        <div className="flex h-screen">
            {/* Sidebar - hidden on mobile when a chat is open */}
            <div className="hidden md:flex h-full">
                <Sidebar />
            </div>

            {/* Chat area */}
            <div className="flex-1 flex flex-col">
                <ChatHeader chat={chat} />

                {/* Messages */}
                <div
                    className="flex-1 overflow-y-auto p-4 space-y-2"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.06) 1px, transparent 0)",
                        backgroundSize: "20px 20px",
                    }}
                >
                    {chat.messages.map((msg) => (
                        <MessageBubble key={msg.id} message={msg} />
                    ))}
                </div>

                <ChatInput />
            </div>
        </div>
    );
}
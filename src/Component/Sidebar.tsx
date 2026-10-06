import { chats } from "@/lib/data";
import ChatListItem from "./ChatListItem";

export default function Sidebar() {
    return (
        <div className="w-full md:w-80 lg:w-96 bg-base-100 flex flex-col h-full border-r border-base-300">
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-white text-primary-content">
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://i.pravatar.cc/150?img=10" alt="me" />
                        </div>
                    </div>
                    <span className="font-bold text-black text-lg">My Chats</span>
                </div>
                <div className="flex gap-1">
                    <button className="btn btn-ghost btn-sm btn-circle">💬</button>
                    <button className="btn btn-ghost btn-sm btn-circle">⋮</button>
                </div>
            </div>

            {/* Search */}
            <div className="p-3">
                <label className="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                        fill="currentColor" className="w-4 h-4 opacity-70">
                        <path fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754zM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"
                            clipRule="evenodd" />
                    </svg>
                    <input type="text" className="grow" placeholder="Search chats..." />
                </label>
            </div>

            {/* Chat list */}
            <div className="flex-1 overflow-y-auto">
                {chats.map((chat) => (
                    <ChatListItem key={chat.id} chat={chat} />
                ))}
            </div>
        </div>
    );
}
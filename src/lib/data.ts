export interface Message {
  id: number;
  text: string;
  time: string;
  sent: boolean; // true = from me
}

export interface Chat {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread: number;
  online: boolean;
  messages: Message[];
}

export const chats: Chat[] = [
  {
    id: 1,
    name: "Rahul Sharma",
    avatar: "https://i.pravatar.cc/150?img=12",
    lastMessage: "See you tomorrow! 👋",
    time: "10:30 AM",
    unread: 2,
    online: true,
    messages: [
      { id: 1, text: "Hey bro, what's up?", time: "10:25 AM", sent: false },
      { id: 2, text: "All good! Working on the new project 🚀", time: "10:27 AM", sent: true },
      { id: 3, text: "Nice! Let's catch up sometime", time: "10:29 AM", sent: false },
      { id: 4, text: "See you tomorrow! 👋", time: "10:30 AM", sent: false },
    ],
  },
  {
    id: 2,
    name: "Priya Patel",
    avatar: "https://i.pravatar.cc/150?img=47",
    lastMessage: "Thanks a lot! 😊",
    time: "Yesterday",
    unread: 0,
    online: false,
    messages: [
      { id: 1, text: "Can you share the file?", time: "6:10 PM", sent: false },
      { id: 2, text: "Sure, here you go 📎", time: "6:15 PM", sent: true },
      { id: 3, text: "Thanks a lot! 😊", time: "6:16 PM", sent: false },
    ],
  },
  {
    id: 3,
    name: "Dev Team 💻",
    avatar: "https://i.pravatar.cc/150?img=68",
    lastMessage: "Deploy is done ✅",
    time: "Monday",
    unread: 5,
    online: true,
    messages: [
      { id: 1, text: "Push the latest fix please", time: "9:00 AM", sent: false },
      { id: 2, text: "Deploy is done ✅", time: "9:05 AM", sent: false },
    ],
  },
];
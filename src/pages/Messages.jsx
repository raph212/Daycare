import { useState } from "react";
import { Send, Paperclip, Image } from "lucide-react";

const contacts = [
  {
    id: 1, initials: "TS", name: "Teacher Sarah", role: "Lead Teacher",
    lastMsg: "Emma had a great day!", time: "2:30 PM", unread: 2, online: true,
    messages: [
      { from: "them", text: "Good morning! Emma arrived safely and is already playing with her friends.", time: "9:00 AM" },
      { from: "me", text: "Thank you! How is she doing today?", time: "9:15 AM" },
      { from: "them", text: "She's doing wonderfully! Very engaged in art activities this morning.", time: "10:30 AM" },
      { from: "them", text: "Emma had a great day!", time: "2:30 PM" },
    ]
  },
  {
    id: 2, initials: "TM", name: "Teacher Mike", role: "Assistant Teacher",
    lastMsg: "Thank you for the update", time: "Yesterday", unread: 0, online: false,
    messages: [
      { from: "them", text: "Hello! Just a quick update — Aarav did well in outdoor play today.", time: "11:00 AM" },
      { from: "me", text: "Thank you for the update!", time: "11:30 AM" },
    ]
  },
  {
    id: 3, initials: "AO", name: "Admin Office", role: "Administration",
    lastMsg: "Payment received", time: "Apr 5", unread: 0, online: true,
    messages: [
      { from: "them", text: "We have received your April payment. Thank you!", time: "Apr 5" },
      { from: "me", text: "Great, thank you for confirming.", time: "Apr 5" },
    ]
  },
];

export default function Messages() {
  const [selected, setSelected] = useState(contacts[0]);
  const [input, setInput] = useState("");
  const [allContacts, setAllContacts] = useState(contacts);

  const sendMessage = () => {
    if (!input.trim()) return;
    const updated = allContacts.map(c => {
      if (c.id === selected.id) {
        const newMsg = { from: "me", text: input, time: "Now" };
        return { ...c, messages: [...c.messages, newMsg], lastMsg: input };
      }
      return c;
    });
    setAllContacts(updated);
    setSelected(updated.find(c => c.id === selected.id));
    setInput("");
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden flex" style={{ height: "calc(100vh - 140px)" }}>
      {/* Contact List */}
      <div className="w-72 border-r border-gray-100 flex flex-col shrink-0">
        <div className="p-4 border-b border-gray-100">
          <h3 className="font-semibold text-gray-900">Messages</h3>
        </div>
        <div className="flex-1 overflow-auto">
          {allContacts.map(c => (
            <button key={c.id} onClick={() => setSelected(c)}
              className={`w-full flex items-start gap-3 p-4 text-left border-b border-gray-50 transition-colors ${
                selected.id === c.id ? "bg-orange-50" : "hover:bg-gray-50"
              }`}>
              <div className="relative shrink-0">
                <div className="w-10 h-10 rounded-full bg-orange-400 text-white text-sm font-semibold flex items-center justify-center">
                  {c.initials}
                </div>
                {c.online && (
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-0.5">
                  <p className="text-sm font-semibold text-gray-900">{c.name}</p>
                  <p className="text-xs text-gray-400">{c.time}</p>
                </div>
                <p className="text-xs text-gray-400 mb-1">{c.role}</p>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-gray-500 truncate">{c.lastMsg}</p>
                  {c.unread > 0 && (
                    <span className="w-5 h-5 bg-orange-400 text-white text-xs rounded-full flex items-center justify-center shrink-0 ml-1">
                      {c.unread}
                    </span>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="flex-1 flex flex-col">
        <div className="flex items-center gap-3 p-4 border-b border-gray-100">
          <div className="w-10 h-10 rounded-full bg-orange-400 text-white text-sm font-semibold flex items-center justify-center">
            {selected.initials}
          </div>
          <div>
            <p className="font-semibold text-gray-900">{selected.name}</p>
            <p className="text-xs text-gray-400">{selected.role}</p>
          </div>
        </div>

        <div className="flex-1 overflow-auto p-4 space-y-4">
          {selected.messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.from === "me" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-xs lg:max-w-md ${msg.from === "me" ? "items-end" : "items-start"} flex flex-col gap-1`}>
                <div className={`px-4 py-3 rounded-2xl text-sm ${
                  msg.from === "me"
                    ? "bg-orange-400 text-white rounded-br-sm"
                    : "bg-gray-100 text-gray-800 rounded-bl-sm"
                }`}>
                  {msg.text}
                </div>
                <p className="text-xs text-gray-400">{msg.time}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-gray-100">
          <div className="flex items-center gap-2 bg-gray-50 rounded-xl px-3 py-2">
            <button className="text-gray-400 hover:text-gray-600 p-1"><Paperclip size={18} /></button>
            <button className="text-gray-400 hover:text-gray-600 p-1"><Image size={18} /></button>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && sendMessage()}
              placeholder="Type a message..."
              className="flex-1 bg-transparent text-sm outline-none text-gray-700 placeholder-gray-400"
            />
            <button onClick={sendMessage}
              className="w-8 h-8 bg-orange-400 hover:bg-orange-500 text-white rounded-lg flex items-center justify-center transition-colors">
              <Send size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
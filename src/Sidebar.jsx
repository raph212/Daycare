import { useState } from "react";
import {
  LayoutDashboard, Activity, Heart, Image,
  Video, MessageSquare, CreditCard, Settings, Bell
} from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Activities", icon: Activity },
  { label: "Health", icon: Heart },
  { label: "Gallery", icon: Image },
  { label: "Live View", icon: Video },
  { label: "Messages", icon: MessageSquare },
  { label: "Payments", icon: CreditCard },
  { label: "Settings", icon: Settings },
];

export default function Layout({ children }) {
  const [active, setActive] = useState("Dashboard");

  return (
    <div className="flex h-screen bg-gray-50">
      <aside className="w-60 bg-white border-r border-gray-100 flex flex-col shrink-0">
        <div className="flex items-center gap-2.5 px-5 py-5 border-b border-gray-100">
          <div className="w-10 h-10 rounded-xl bg-orange-400 flex items-center justify-center text-xl">
            🐣
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">LittleSteps</p>
            <p className="text-xs text-gray-400">Parent</p>
          </div>
        </div>

        <nav className="p-3 flex-1">
          {navItems.map(({ label, icon: Icon }) => (
            <button
              key={label}
              onClick={() => setActive(label)}
              className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm mb-0.5 transition-colors
                ${active === label
                  ? "bg-orange-400 text-white"
                  : "text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                }`}
            >
              <Icon size={17} />
              {label}
            </button>
          ))}
        </nav>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-[60px] bg-white border-b border-gray-100 flex items-center justify-between px-6 shrink-0">
          <h1 className="text-xl font-medium text-gray-900">{active}</h1>
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center cursor-pointer">
              <Bell size={17} className="text-gray-500" />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-orange-400 text-white text-[10px] font-medium rounded-full flex items-center justify-center border-2 border-white">
                3
              </span>
            </div>
            <div className="flex items-center gap-2 pl-1 pr-3 py-1 rounded-full border border-gray-200 hover:bg-gray-50 cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-orange-400 text-white text-xs font-medium flex items-center justify-center">
                PS
              </div>
              <div>
                <p className="text-[13px] font-medium text-gray-900 leading-tight">Priya Sharma</p>
                <p className="text-[11px] text-gray-400">Parent</p>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
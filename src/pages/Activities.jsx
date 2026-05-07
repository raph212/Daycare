import { Utensils, Palette } from "lucide-react";

const items = [
  { icon: Utensils, color: "orange", label: "Morning Snack", desc: "Apple slices and crackers", tag: "Meal", time: "9:00 AM" },
  { icon: Palette, color: "purple", label: "Art & Craft", desc: "Made colorful butterflies with paper", tag: "Activity", time: "10:30 AM" },
  { icon: Utensils, color: "orange", label: "Lunch Time", desc: "Chicken, rice, vegetables, and fruit", tag: "Meal", time: "12:00 PM" },
];

export default function Activities() {
  return (
    <div className="space-y-4">
      <div className="bg-white rounded-2xl p-5">
        <h3 className="font-semibold text-gray-900 mb-4">Daily Activities</h3>
        <div className="flex bg-gray-100 rounded-full p-1 mb-5">
          {["All","Meals","Activities","Rest"].map((t,i) => (
            <button key={t} className={`flex-1 py-2 rounded-full text-sm font-medium transition-colors ${i===0 ? "bg-white shadow text-gray-900" : "text-gray-500"}`}>{t}</button>
          ))}
        </div>
        <p className="text-gray-400 font-medium mb-3">April 6, 2026</p>
        <div className="space-y-3">
          {items.map(({ icon: Icon, color, label, desc, tag, time }) => (
            <div key={label} className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl">
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${color === "orange" ? "bg-orange-100" : "bg-purple-100"}`}>
                <Icon size={18} className={color === "orange" ? "text-orange-400" : "text-purple-500"} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900">{label}</p>
                <p className="text-xs text-gray-400">{desc}</p>
              </div>
              <span className="text-xs border border-gray-200 rounded-full px-2 py-0.5 text-gray-500">{tag}</span>
              <span className="text-xs text-gray-400">{time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
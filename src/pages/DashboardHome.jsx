import { Calendar, Utensils } from "lucide-react";

export default function DashboardHome() {
  return (
    <div className="space-y-4">
      {/* Child Card */}
      <div className="bg-white rounded-2xl p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-orange-400 text-white text-xl font-bold flex items-center justify-center">AS</div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Aarav Sharma</h2>
            <p className="text-gray-400 text-sm mb-2">3 years 4 months</p>
            <div className="flex items-center gap-2">
              <span className="bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full">Toddler Group A</span>
              <span className="text-gray-500 text-sm">😊 Happy</span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="flex items-center gap-1 text-gray-400 text-sm mb-1"><Calendar size={14}/> Check-in Today</div>
          <p className="text-3xl font-bold text-orange-400">8:30 AM</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "Weight", value: "14.5 kg" },
          { label: "Height", value: "95 cm" },
          { label: "Last Checkup", value: "Mar 15" },
        ].map(({ label, value }) => (
          <div key={label} className="bg-white rounded-2xl p-5">
            <p className="text-gray-400 text-sm mb-1">{label}</p>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
          </div>
        ))}
      </div>

      {/* Today's Activities */}
      <div className="bg-white rounded-2xl p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-900">Today's Activities</h3>
          <button className="text-sm text-gray-400 hover:text-orange-400">View All →</button>
        </div>
        <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl">
          <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
            <Utensils size={18} className="text-orange-400" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">Morning Snack</p>
            <p className="text-xs text-gray-400">Banana slices and biscuits</p>
          </div>
          <span className="text-xs text-gray-400">9:00 AM</span>
        </div>
      </div>
    </div>
  );
}
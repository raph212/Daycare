import { useState, useEffect } from "react";
import { Pause, VolumeX, Maximize2 } from "lucide-react";

const cameras = [
  { id: 1, name: "Toddler Room A", sub: "Main Play Area" },
  { id: 2, name: "Outdoor Playground", sub: "Backyard" },
  { id: 3, name: "Dining Area", sub: "Cafeteria" },
  { id: 4, name: "Nap Room", sub: "Rest Area" },
];

export default function LiveView() {
  const [active, setActive] = useState(1);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const fmt = time.toLocaleTimeString("en-US", {
    hour: "2-digit", minute: "2-digit", second: "2-digit"
  });
  const cam = cameras.find(c => c.id === active);

  return (
    <div className="space-y-5">
      <div className="bg-white rounded-2xl p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-900">Live View</h3>
          <span className="flex items-center gap-1.5 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
            Live
          </span>
        </div>

        <div className="relative bg-gray-900 rounded-2xl overflow-hidden" style={{ height: "340px" }}>
          <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-2 rounded-xl z-10">
            <p className="font-semibold text-sm">{cam.name}</p>
            <p className="text-xs text-gray-300">{cam.sub}</p>
          </div>
          <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-2 rounded-xl text-sm font-mono z-10">
            {fmt}
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#4b5563" strokeWidth="1">
              <rect x="2" y="7" width="15" height="10" rx="2" />
              <path d="m17 9 5-2v10l-5-2" />
            </svg>
          </div>
          <div className="absolute bottom-4 left-4 flex items-center gap-3 z-10">
            <button className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg transition-colors">
              <Pause size={16} />
            </button>
            <button className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg transition-colors">
              <VolumeX size={16} />
            </button>
          </div>
          <div className="absolute bottom-4 right-4 z-10">
            <button className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg transition-colors">
              <Maximize2 size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-5">
        <h3 className="font-semibold text-gray-900 mb-4">Available Cameras</h3>
        <div className="grid grid-cols-4 gap-3">
          {cameras.map(c => (
            <button key={c.id} onClick={() => setActive(c.id)}
              className={`border-2 rounded-xl p-3 text-left transition-colors ${
                active === c.id ? "border-orange-400 bg-orange-50" : "border-gray-200 hover:border-gray-300"
              }`}>
              <div className="relative bg-gray-100 rounded-lg h-20 flex items-center justify-center mb-2">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5">
                  <rect x="2" y="7" width="15" height="10" rx="2" />
                  <path d="m17 9 5-2v10l-5-2" />
                </svg>
                <span className="absolute top-2 right-2 w-2 h-2 bg-green-500 rounded-full" />
              </div>
              <p className="text-xs font-semibold text-gray-800">{c.name}</p>
              <p className="text-xs text-gray-400">{c.sub}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
        <p className="text-sm text-orange-800">
          <span className="font-semibold">Note:</span> Live video streaming is available during
          daycare hours (8:00 AM - 6:00 PM). Footage is encrypted and stored securely for 7 days.
        </p>
      </div>
    </div>
  );
}
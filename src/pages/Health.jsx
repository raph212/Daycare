export default function Health() {
  const stats = [
    { label: "Current Weight", value: "14.5 kg" },
    { label: "Current Height", value: "95 cm" },
    { label: "BMI", value: "16.1" },
    { label: "Health Status", value: "Excellent" },
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        {stats.map(({ label, value }) => (
          <div key={label} className="bg-white rounded-2xl p-5">
            <p className="text-gray-400 text-sm mb-1">{label}</p>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-2xl p-5">
        <h3 className="font-semibold text-gray-900 mb-4">Weight Tracking (6 Months)</h3>
        <div className="relative h-40 flex items-end gap-4 px-4">
          {[13.2, 13.5, 13.8, 14.0, 14.3, 14.5].map((w, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <span className="text-xs text-gray-400">{w}</span>
              <div className="w-full bg-orange-400 rounded-t-md" style={{ height: `${(w - 12) * 20}px` }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
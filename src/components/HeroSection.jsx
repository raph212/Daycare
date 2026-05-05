export default function HeroSection({ onLogin }) {
  return (
    <div className="min-h-[90vh] bg-gradient-to-br from-orange-50 via-white to-green-50 flex items-center">
      <div className="w-full max-w-7xl mx-auto px-16 flex items-center justify-between">
        <div className="max-w-xl">
          <h1 className="text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
            India's Most Trusted<br />
            <span className="text-orange-400">Daycare Platform</span>
          </h1>
          <p className="text-gray-500 text-lg mb-8">
            Find verified, safe, and nurturing daycare centers near you. Track your child's activities, health, and development in real-time.
          </p>
          <div className="flex items-center gap-4 mb-10">
            <button onClick={() => document.getElementById("explore")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-orange-400 text-white font-semibold px-6 py-3 rounded-full hover:bg-orange-500 transition-colors flex items-center gap-2">
              Explore Daycares →
            </button>
            <button onClick={onLogin}
              className="border border-gray-300 text-gray-800 font-semibold px-6 py-3 rounded-full hover:bg-gray-50 transition-colors">
              Register as Parent
            </button>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              {["bg-orange-300","bg-green-300","bg-blue-300","bg-pink-300"].map((c,i) => (
                <div key={i} className={`w-10 h-10 rounded-full ${c} border-2 border-white`} />
              ))}
            </div>
            <div>
              <div className="flex text-orange-400 text-lg">★★★★★</div>
              <p className="text-sm text-gray-500">Trusted by 10,000+ parents</p>
            </div>
          </div>
        </div>
        {/* Illustration */}
        <div className="w-[420px] h-[420px] bg-gradient-to-br from-orange-100 to-amber-50 rounded-3xl flex items-center justify-center text-[160px]">
          👶
        </div>
      </div>
    </div>
  );
}
export default function AboutSection() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">About LittleSteps</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Connecting parents with verified daycare centers across India.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl">🔍</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Verified Centers</h3>
            <p className="text-gray-500">Every center undergoes strict verification including background checks and facility inspections.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl">📱</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Real-time Updates</h3>
            <p className="text-gray-500">Live CCTV, daily activity reports, health tracking - everything in your pocket.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl">🛡️</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Parent First</h3>
            <p className="text-gray-500">Rated 4.9/5 by 10,000+ parents. Your peace of mind is our priority.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

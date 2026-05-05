export default function ProgramsSection() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Our Programs</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Tailored learning and development for every age group.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8">
            <div className="w-16 h-16 bg-orange-400 rounded-xl flex items-center justify-center mx-auto mb-6 text-2xl">👶</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Infant Care (0-12m)</h3>
            <p className="text-gray-600 mb-4 text-center">Safe sleeping, feeding schedules, sensory play, and milestone tracking.</p>
            <div className="flex justify-center"><span className="bg-orange-400 text-white text-xs px-3 py-1 rounded-full font-medium">24/7 Care</span></div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
            <div className="w-16 h-16 bg-green-400 rounded-xl flex items-center justify-center mx-auto mb-6 text-2xl">🧒</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Toddler (1-3y)</h3>
            <p className="text-gray-600 mb-4 text-center">Potty training, language development, motor skills, and social play.</p>
            <div className="flex justify-center"><span className="bg-green-400 text-white text-xs px-3 py-1 rounded-full font-medium">Montessori</span></div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <div className="w-16 h-16 bg-blue-400 rounded-xl flex items-center justify-center mx-auto mb-6 text-2xl">👧</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Pre-School (3-5y)</h3>
            <p className="text-gray-600 mb-4 text-center">Pre-literacy, numeracy, creative arts, and school readiness programs.</p>
            <div className="flex justify-center"><span className="bg-blue-400 text-white text-xs px-3 py-1 rounded-full font-medium">Play-based</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

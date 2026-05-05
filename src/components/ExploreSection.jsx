export default function ExploreSection() {
  return (
    <div className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Explore Verified Daycares</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">Find the perfect daycare near you</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <input placeholder="Enter city or pincode" className="flex-1 px-5 py-4 rounded-xl border border-gray-200 focus:border-orange-400 outline-none text-lg" />
            <button className="bg-orange-400 text-white font-semibold px-8 py-4 rounded-xl hover:bg-orange-500 transition-all whitespace-nowrap">Find Daycares</button>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { img: "🏢", name: "Bright Beginnings", rating: 4.9, reviews: 247, price: "₹12,000", age: "0-3y", loc: "Koramangala, Bangalore" },
            { img: "🌈", name: "Little Stars", rating: 4.8, reviews: 189, price: "₹15,000", age: "1-4y", loc: "Indiranagar, Bangalore" },
            { img: "⭐", name: "Happy Nest", rating: 5.0, reviews: 156, price: "₹10,500", age: "0-5y", loc: "Whitefield, Bangalore" }
          ].map((daycare, i) => (
            <div key={i} className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden border hover:border-orange-200">
              <div className="h-48 bg-gradient-to-r from-orange-400/10 to-pink-400/10 flex items-center justify-center text-5xl">{daycare.img}</div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex text-orange-400 text-lg">{'★'.repeat(5)}</div>
                  <span className="text-sm text-gray-500">({daycare.reviews})</span>
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-2 leading-tight">{daycare.name}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span>{daycare.price}/mo</span>
                  <span>•</span>
                  <span>{daycare.age}</span>
                </div>
                <p className="text-sm text-gray-500 mb-4 line-clamp-2">High-quality infant care with 24/7 CCTV, certified staff and daily progress reports.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-900">{daycare.loc}</span>
                  <button className="bg-orange-400 text-white text-sm font-semibold px-6 py-2 rounded-full hover:bg-orange-500 transition-colors group-hover:scale-105">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-orange-400 text-white font-bold px-10 py-4 rounded-2xl hover:bg-orange-500 transition-all text-lg shadow-lg">Load More Daycares</button>
        </div>
      </div>
    </div>
  );
}

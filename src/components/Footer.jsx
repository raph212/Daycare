export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-14 pb-6">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 rounded-xl bg-orange-400 flex items-center justify-center text-xl">🐣</div>
              <span className="text-lg font-bold text-gray-900">LittleSteps</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">India's trusted daycare management and discovery platform. Making childcare safe, transparent, and accessible.</p>
            <div className="flex gap-3">
              {["f","in","𝕏"].map(icon => (
                <div key={icon} className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-sm text-gray-500 hover:bg-gray-50 cursor-pointer">
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              {["Home","About Us","Programs","Explore Daycares"].map(l => (
                <li key={l} className="hover:text-orange-400 cursor-pointer">{l}</li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Support</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              {["Contact Us","FAQ","Privacy Policy","Terms of Service"].map(l => (
                <li key={l} className="hover:text-orange-400 cursor-pointer">{l}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li className="flex items-start gap-2">📍 123, MG Road, Bangalore, Karnataka - 560001</li>
              <li>📞 +91 98765 43210</li>
              <li>✉️ support@littlesteps.in</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-6 text-center text-sm text-gray-400">
          © 2026 LittleSteps. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
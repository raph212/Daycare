import { useState } from "react";
import { Phone, Mail } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (!form.name || !form.email) return;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-4">Contact Us</h2>
        <p className="text-gray-400 text-center mb-12">We'd love to hear from you</p>

        <div className="grid grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="font-bold text-gray-900 text-xl mb-6">Send us a Message</h3>
            <div className="space-y-4">
              <input value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                placeholder="Your Name" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-400 bg-white" />
              <input value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                placeholder="Email Address" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-400 bg-white" />
              <input value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
                placeholder="Phone Number" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-400 bg-white" />
              <textarea value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                placeholder="Your Message" rows={4} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-400 bg-white resize-none" />
              <button onClick={handleSubmit}
                className="w-full bg-orange-400 text-white font-semibold py-3 rounded-xl hover:bg-orange-500 transition-colors">
                {sent ? "✅ Message Sent!" : "Send Message"}
              </button>
            </div>
          </div>

          {/* Quick Contact */}
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="font-bold text-gray-900 text-xl mb-6">Quick Contact</h3>
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                    <Phone size={20} className="text-orange-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Call us directly</p>
                    <p className="font-semibold text-orange-400">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Mail size={20} className="text-green-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email us</p>
                    <p className="font-semibold text-green-500">support@littlesteps.in</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 rounded-2xl p-8 text-center">
              <h3 className="font-bold text-gray-900 text-lg mb-2">Looking for Quick Answers?</h3>
              <p className="text-gray-400 text-sm mb-4">Check out our frequently asked questions for instant help</p>
              <button onClick={() => document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })}
                className="border border-gray-300 text-gray-700 font-semibold px-6 py-2.5 rounded-full hover:bg-white transition-colors text-sm">
                View FAQ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
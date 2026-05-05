import { useState } from "react";
import { ChevronDown, CreditCard, Shield } from "lucide-react";

const faqs = {
  "Pricing & Payments": {
    icon: <CreditCard size={20} className="text-orange-400" />,
    bg: "bg-orange-50",
    questions: [
      { q: "How much does daycare cost in India?", a: "Daycare costs vary by city and facilities. Our partner centers range from ₹8,000 to ₹25,000 per month. You can filter by budget on our Explore page." },
      { q: "Are there any registration fees?", a: "Registration fees depend on the individual daycare center. Most centers charge a one-time registration fee of ₹2,000–₹5,000." },
      { q: "Can I pay monthly or need to pay annually?", a: "Most centers on LittleSteps offer monthly payment options. Some offer discounts for quarterly or annual payments." },
      { q: "Is there a refund policy?", a: "Refund policies vary by center. LittleSteps recommends reviewing each center's refund policy before enrollment." },
    ]
  },
  "Safety & Security": {
    icon: <Shield size={20} className="text-orange-400" />,
    bg: "bg-orange-50",
    questions: [
      { q: "How does LittleSteps verify daycare centers?", a: "All centers undergo a thorough verification process including document checks, physical inspection, staff background verification, and safety audits." },
      { q: "Can I access live CCTV of my child?", a: "Yes! Centers with live CCTV allow parents to view feeds in real-time through our app, giving you complete peace of mind." },
      { q: "What happens in case of a medical emergency?", a: "All our partner centers have trained staff, first-aid kits, and emergency protocols. Parents are notified immediately in case of any incident." },
    ]
  },
};

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors">
        <span className="text-sm font-medium text-gray-800">{q}</span>
        <ChevronDown size={18} className={`text-gray-400 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="px-5 pb-4 text-sm text-gray-500 leading-relaxed border-t border-gray-100">{a}</div>}
    </div>
  );
}

export default function FAQSection() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-8">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-400 text-center mb-12">Everything you need to know about LittleSteps</p>

        <div className="space-y-10">
          {Object.entries(faqs).map(([section, { icon, bg, questions }]) => (
            <div key={section}>
              <div className={`flex items-center gap-3 mb-4 ${bg} w-fit px-4 py-2 rounded-xl`}>
                {icon}
                <h3 className="font-bold text-gray-900">{section}</h3>
              </div>
              <div className="space-y-3">
                {questions.map(item => <FAQItem key={item.q} {...item} />)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
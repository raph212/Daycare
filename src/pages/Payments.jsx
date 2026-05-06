import { useState } from "react";
import { CreditCard, Download, Calendar } from "lucide-react";

const transactions = [
  { month: "March 2026", date: "March 5, 2026", method: "UPI", txn: "TXN-2026-003", amount: "₹12,000" },
  { month: "February 2026", date: "February 5, 2026", method: "Debit Card", txn: "TXN-2026-002", amount: "₹12,000" },
  { month: "January 2026", date: "January 5, 2026", method: "Net Banking", txn: "TXN-2026-001", amount: "₹12,000" },
  { month: "December 2025", date: "December 5, 2025", method: "UPI", txn: "TXN-2025-012", amount: "₹12,000" },
];

export default function Payments() {
  const [paid, setPaid] = useState(false);

  return (
    <div className="space-y-5">
      {/* Current Due */}
      <div className={`rounded-2xl p-6 ${paid ? "bg-green-50 border border-green-200" : "bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-100"}`}>
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-gray-500 mb-1">Current Due</p>
            <p className={`text-5xl font-extrabold mb-2 ${paid ? "text-green-600" : "text-gray-900"}`}>
              {paid ? "₹0" : "₹12,000"}
            </p>
            <p className="text-gray-500 text-sm mb-3">{paid ? "Paid for April 2026" : "For April 2026"}</p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Calendar size={14} />
              {paid ? "Paid on May 6, 2026" : "Due by April 10, 2026"}
            </div>
          </div>
          {!paid && (
            <button onClick={() => setPaid(true)}
              className="flex items-center gap-2 bg-orange-400 hover:bg-orange-500 text-white font-semibold px-5 py-3 rounded-xl transition-colors">
              <CreditCard size={16} />
              Pay Now
            </button>
          )}
          {paid && (
            <span className="bg-green-500 text-white text-sm font-semibold px-4 py-2 rounded-full">
              ✓ Paid
            </span>
          )}
        </div>
      </div>

      {/* Payment Methods */}
      <div className="bg-white rounded-2xl p-5">
        <h3 className="font-semibold text-gray-900 mb-4">Payment Methods</h3>
        <div className="border border-gray-200 rounded-xl p-4 flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
              <CreditCard size={18} className="text-gray-500" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800">Visa •••• 4532</p>
              <p className="text-xs text-gray-400">Expires 12/2027</p>
            </div>
          </div>
          <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">Default</span>
        </div>
        <button className="w-full border border-dashed border-gray-300 rounded-xl py-3 text-sm text-gray-500 hover:bg-gray-50 transition-colors font-medium">
          + Add Payment Method
        </button>
      </div>

      {/* Transaction History */}
      <div className="bg-white rounded-2xl p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-900">Transaction History</h3>
          <button className="flex items-center gap-1.5 border border-gray-200 text-sm text-gray-600 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors">
            <Download size={14} />
            Export
          </button>
        </div>
        <div className="space-y-3">
          {transactions.map(({ month, date, method, txn, amount }) => (
            <div key={txn} className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl">
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center shrink-0">
                <CreditCard size={16} className="text-gray-400" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900">{month}</p>
                <p className="text-xs text-gray-400">{date}</p>
                <p className="text-xs text-gray-400">{method} • {txn}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-gray-900">{amount}</p>
                <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 text-xs font-medium px-2 py-0.5 rounded-full mt-1">
                  ✓ Completed
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
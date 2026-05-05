import { useState } from "react";
import { Phone } from "lucide-react";

export default function LoginPage({ onBack, onOtp }) {
  const [role, setRole] = useState("Parent");
  const [method, setMethod] = useState("OTP Login");

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-green-50 flex flex-col">
      <button onClick={onBack} className="flex items-center gap-2 text-sm text-gray-600 p-6 hover:text-gray-900">
        ← Back to Home
      </button>
      <div className="flex-1 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
          <div className="flex flex-col items-center mb-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-12 h-12 rounded-2xl bg-orange-400 flex items-center justify-center text-2xl">🐣</div>
              <span className="text-2xl font-bold text-gray-900">LittleSteps</span>
            </div>
            <p className="text-gray-400 text-sm">Login to your account</p>
          </div>

          <p className="text-sm font-medium text-gray-700 mb-3">I am a</p>
          <div className="flex items-center gap-4 mb-6">
            {["Parent", "Staff", "Admin"].map(r => (
              <button key={r} onClick={() => setRole(r)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${role === r ? "bg-orange-400 text-white" : "text-gray-500 hover:text-gray-800"}`}>
                {r}
              </button>
            ))}
          </div>

          <div className="flex bg-gray-100 rounded-full p-1 mb-6">
            {["OTP Login", "Password"].map(m => (
              <button key={m} onClick={() => setMethod(m)}
                className={`flex-1 py-2 rounded-full text-sm font-medium transition-colors ${method === m ? "bg-white shadow text-gray-900" : "text-gray-500"}`}>
                {m}
              </button>
            ))}
          </div>

          <label className="text-sm font-medium text-gray-700 mb-1 block">Phone Number *</label>
          <div className="flex items-center border border-gray-200 rounded-xl px-3 py-3 mb-5 bg-gray-50">
            <Phone size={16} className="text-gray-400 mr-2" />
            <input className="bg-transparent text-sm text-gray-500 outline-none w-full" placeholder="+91 98765 43210" />
          </div>

          <button onClick={onOtp} className="w-full bg-orange-400 text-white font-semibold py-3 rounded-xl hover:bg-orange-500 transition-colors mb-4">
            Send OTP
          </button>
          <p className="text-center text-sm text-orange-400 cursor-pointer hover:underline">Forgot Password?</p>
        </div>
      </div>
    </div>
  );
}
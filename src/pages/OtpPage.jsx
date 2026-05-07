import { useState } from "react";

const CORRECT_OTP = "123456"; // ← change this to whatever OTP you want

export default function OtpPage({ onBack, onVerify }) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [shake, setShake] = useState(false);

  const handleChange = (val, i) => {
    if (!/^\d*$/.test(val)) return; // numbers only
    const next = [...otp];
    next[i] = val.slice(-1);
    setOtp(next);
    setError("");
    if (val && i < 5) document.getElementById(`otp-${i + 1}`)?.focus();
  };

  const handleKeyDown = (e, i) => {
    if (e.key === "Backspace" && !otp[i] && i > 0) {
      document.getElementById(`otp-${i - 1}`)?.focus();
    }
  };

  const handleVerify = () => {
    const entered = otp.join("");
    if (entered.length < 6) {
      setError("Please enter all 6 digits.");
      triggerShake();
      return;
    }
    if (entered !== CORRECT_OTP) {
      setError("Incorrect OTP. Please try again.");
      setOtp(["", "", "", "", "", ""]);
      document.getElementById("otp-0")?.focus();
      triggerShake();
      return;
    }
    onVerify(); // ✅ only navigates if correct
  };

  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-green-50 flex flex-col">
      <button onClick={onBack} className="flex items-center gap-2 text-sm text-gray-600 p-6 hover:text-gray-900">
        ← Back
      </button>
      <div className="flex-1 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-400 flex items-center justify-center text-2xl">🐣</div>
            <span className="text-2xl font-bold text-gray-900">LittleSteps</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Verify OTP</h2>
          <p className="text-gray-400 text-sm mb-1">Enter the 6-digit code sent to</p>
          <p className="font-semibold text-gray-800 mb-6">9123456789</p>

          {/* OTP hint for testing */}
          <p className="text-xs text-orange-400 mb-4">Use OTP: <strong>123456</strong> to login</p>

          {/* OTP Inputs */}
          <div className={`flex justify-center gap-3 mb-2 ${shake ? "animate-shake" : ""}`}>
            {otp.map((d, i) => (
              <input
                key={i}
                id={`otp-${i}`}
                value={d}
                onChange={e => handleChange(e.target.value, i)}
                onKeyDown={e => handleKeyDown(e, i)}
                className={`w-11 h-12 text-center text-lg font-semibold border-2 rounded-xl bg-gray-50 outline-none transition-colors
                  ${error ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-orange-400"}`}
                maxLength={1}
                inputMode="numeric"
              />
            ))}
          </div>

          {/* Error message */}
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          {!error && <div className="mb-4" />}

          <button
            onClick={handleVerify}
            className="w-full bg-orange-400 text-white font-semibold py-3 rounded-xl hover:bg-orange-500 transition-colors mb-4"
          >
            Verify OTP
          </button>
          <p className="text-gray-400 text-sm mb-1">Didn't receive the code?</p>
          <p className="text-orange-400 text-sm cursor-pointer hover:underline font-medium">Resend OTP</p>
        </div>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-8px); }
          40% { transform: translateX(8px); }
          60% { transform: translateX(-6px); }
          80% { transform: translateX(6px); }
        }
        .animate-shake { animation: shake 0.5s ease-in-out; }
      `}</style>
    </div>
  );
}

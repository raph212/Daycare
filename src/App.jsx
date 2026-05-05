import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import OtpPage from "./pages/OtpPage";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const [page, setPage] = useState("landing");

  if (page === "login") return <LoginPage onBack={() => setPage("landing")} onOtp={() => setPage("otp")} />;
  if (page === "otp") return <OtpPage onBack={() => setPage("login")} onVerify={() => setPage("dashboard")} />;
  if (page === "dashboard") return <Dashboard activePage="Dashboard" onLogout={() => setPage("landing")} />;
  return <LandingPage onLogin={() => setPage("login")} />;
}
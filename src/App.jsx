import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import OtpPage from "./pages/OtpPage";
import Dashboard from "./pages/Dashboard";
import StaffDashboard from "./pages/StaffDashboard";
import AdminDashboard from "./pages/AdminDashboard";

export default function App() {
  const [page, setPage] = useState("landing");
  const [role, setRole] = useState("Parent");

  if (page === "login") return <LoginPage onBack={() => setPage("landing")} onOtp={(selectedRole) => { setRole(selectedRole); setPage("otp"); }} role={role} setRole={setRole} />;
  if (page === "otp") return <OtpPage onBack={() => setPage("login")} onVerify={() => setPage("dashboard")} />;
  if (page === "dashboard") {
    if (role === "Staff") {
      return <StaffDashboard onLogout={() => setPage("landing")} />;
    } else if (role === "Admin") {
      return <AdminDashboard onLogout={() => setPage("landing")} />;
    } else {
      return <Dashboard activePage="Dashboard" onLogout={() => setPage("landing")} />;
    }
  }

  return <LandingPage onLogin={() => setPage("login")} />;
}

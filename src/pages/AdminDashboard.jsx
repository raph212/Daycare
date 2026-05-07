import { useState } from "react";
import {
  LayoutDashboard, Users, Baby, CreditCard, Settings, Bell, LogOut,
  TrendingUp, AlertCircle, CheckCircle, Clock, Plus, Search,
  X, Check, Edit3, Trash2, ChevronRight, MoreVertical,
  UserPlus, DollarSign, FileText, Shield, BarChart2,
  Calendar, Download, Filter, Eye, EyeOff, Phone, Mail,
  MapPin, Star, Activity, Layers, ArrowUp, ArrowDown
} from "lucide-react";

// ─── Mock Data ─────────────────────────────────────────────────────

const stats = [
  { label: "Total Children",    value: "48",    sub: "+3 this month",  trend: "up",   icon: Baby,        color: "orange" },
  { label: "Staff Members",     value: "12",    sub: "8 active today", trend: "up",   icon: Users,       color: "blue" },
  { label: "Revenue (May)",     value: "₹5.76L", sub: "+12% vs last",  trend: "up",   icon: DollarSign,  color: "green" },
  { label: "Pending Payments",  value: "7",     sub: "₹84,000 due",   trend: "down", icon: CreditCard,  color: "red" },
];

const allChildren = [
  { id: 1, name: "Aarav Sharma",  initials: "AS", age: "3y 4m", group: "Toddler A", parent: "Priya Sharma",  fee: 12000, status: "paid",    joined: "Jan 2025" },
  { id: 2, name: "Meera Patel",   initials: "MP", age: "2y 8m", group: "Toddler B", parent: "Raj Patel",    fee: 12000, status: "paid",    joined: "Mar 2025" },
  { id: 3, name: "Rishi Nair",    initials: "RN", age: "4y 1m", group: "Pre-K",     parent: "Anita Nair",   fee: 14000, status: "pending", joined: "Jun 2024" },
  { id: 4, name: "Aria Gupta",    initials: "AG", age: "3y 9m", group: "Toddler A", parent: "Vikram Gupta", fee: 12000, status: "overdue", joined: "Sep 2024" },
  { id: 5, name: "Kabir Singh",   initials: "KS", age: "2y 5m", group: "Toddler B", parent: "Sonia Singh",  fee: 12000, status: "paid",    joined: "Nov 2024" },
  { id: 6, name: "Zara Ahmed",    initials: "ZA", age: "4y 3m", group: "Pre-K",     parent: "Omar Ahmed",   fee: 14000, status: "paid",    joined: "Feb 2025" },
];

const staffList = [
  { id: 1, name: "Sarah Johnson", initials: "SJ", role: "Lead Teacher",      group: "Toddler A & Pre-K", phone: "+91 98765 00001", status: "active",   joined: "Jan 2023" },
  { id: 2, name: "Mike Thomas",   initials: "MT", role: "Asst. Teacher",     group: "Toddler B",          phone: "+91 98765 00002", status: "active",   joined: "Mar 2023" },
  { id: 3, name: "Preethi Rao",   initials: "PR", role: "Nurse",             group: "All Groups",         phone: "+91 98765 00003", status: "active",   joined: "Jun 2023" },
  { id: 4, name: "Deepa Menon",   initials: "DM", role: "Cook",              group: "Kitchen",            phone: "+91 98765 00004", status: "on leave", joined: "Aug 2022" },
  { id: 5, name: "Rahul Verma",   initials: "RV", role: "Security",          group: "Gate",               phone: "+91 98765 00005", status: "active",   joined: "Jan 2024" },
];

const revenueMonths = [
  { month: "Dec", value: 4.8 },
  { month: "Jan", value: 5.1 },
  { month: "Feb", value: 5.0 },
  { month: "Mar", value: 5.3 },
  { month: "Apr", value: 5.5 },
  { month: "May", value: 5.76 },
];

const pendingPayments = [
  { child: "Rishi Nair",   parent: "Anita Nair",   amount: "₹14,000", due: "May 10", daysLate: 0, initials: "RN" },
  { child: "Aria Gupta",   parent: "Vikram Gupta",  amount: "₹12,000", due: "Apr 10", daysLate: 27, initials: "AG" },
  { child: "Ishan Mehta",  parent: "Raj Mehta",     amount: "₹12,000", due: "May 10", daysLate: 0, initials: "IM" },
];

const recentActivity = [
  { text: "New enrollment: Aarav Sharma",       time: "10 min ago",  type: "success" },
  { text: "Payment received: Zara Ahmed ₹14,000", time: "45 min ago", type: "success" },
  { text: "Leave request: Deepa Menon (Cook)",  time: "2 hrs ago",   type: "warning" },
  { text: "Fee overdue: Aria Gupta (27 days)",  time: "Today",       type: "danger" },
  { text: "Gallery updated by Sarah Johnson",    time: "Yesterday",   type: "info" },
];

// ─── Sub-pages ─────────────────────────────────────────────────────

function AdminHome() {
  const maxRevenue = Math.max(...revenueMonths.map(m => m.value));

  return (
    <div className="space-y-5">
      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-4">
        {stats.map(s => {
          const Icon = s.icon;
          const colorMap = {
            orange: "bg-orange-100 text-orange-500",
            blue:   "bg-blue-100 text-blue-500",
            green:  "bg-green-100 text-green-600",
            red:    "bg-red-100 text-red-500",
          };
          return (
            <div key={s.label} className="bg-white rounded-2xl p-5">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${colorMap[s.color]}`}>
                <Icon size={18} />
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-0.5">{s.value}</p>
              <p className="text-xs text-gray-400 mb-2">{s.label}</p>
              <div className={`flex items-center gap-1 text-xs font-medium ${s.trend === "up" ? "text-green-600" : "text-red-500"}`}>
                {s.trend === "up" ? <ArrowUp size={11} /> : <ArrowDown size={11} />}
                {s.sub}
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* Revenue Chart */}
        <div className="bg-white rounded-2xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Revenue (6 Months)</h3>
            <span className="text-xs text-gray-400">in Lakhs ₹</span>
          </div>
          <div className="flex items-end gap-3 h-32">
            {revenueMonths.map((m, i) => (
              <div key={m.month} className="flex-1 flex flex-col items-center gap-1">
                <span className="text-xs text-gray-400">{m.value}</span>
                <div
                  className={`w-full rounded-t-lg transition-all ${i === revenueMonths.length - 1 ? "bg-orange-400" : "bg-orange-100"}`}
                  style={{ height: `${(m.value / maxRevenue) * 96}px` }}
                />
                <span className="text-xs text-gray-400">{m.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl p-5">
          <h3 className="font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {recentActivity.map((a, i) => {
              const dotColor = { success: "bg-green-500", warning: "bg-yellow-400", danger: "bg-red-400", info: "bg-blue-400" }[a.type];
              return (
                <div key={i} className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${dotColor}`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-700 leading-relaxed">{a.text}</p>
                    <p className="text-xs text-gray-400">{a.time}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Pending Payments Alert */}
      <div className="bg-white rounded-2xl p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-900">Pending Payments</h3>
          <span className="text-xs bg-red-100 text-red-600 font-medium px-2 py-0.5 rounded-full">{pendingPayments.length} pending</span>
        </div>
        <div className="space-y-3">
          {pendingPayments.map((p, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-xl border border-gray-100">
              <div className="w-9 h-9 rounded-full bg-orange-400 text-white text-xs font-bold flex items-center justify-center shrink-0">{p.initials}</div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900">{p.child}</p>
                <p className="text-xs text-gray-400">{p.parent}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-sm font-bold text-gray-900">{p.amount}</p>
                {p.daysLate > 0
                  ? <span className="text-xs text-red-500 font-medium">{p.daysLate}d overdue</span>
                  : <span className="text-xs text-orange-400">Due {p.due}</span>
                }
              </div>
              <button className="text-xs bg-orange-400 text-white px-3 py-1.5 rounded-lg hover:bg-orange-500 transition-colors font-medium ml-2">
                Remind
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Group Summary */}
      <div className="bg-white rounded-2xl p-5">
        <h3 className="font-semibold text-gray-900 mb-4">Group Summary</h3>
        <div className="grid grid-cols-3 gap-3">
          {[
            { group: "Toddler A", count: 16, capacity: 20, color: "bg-orange-400" },
            { group: "Toddler B", count: 14, capacity: 20, color: "bg-blue-400" },
            { group: "Pre-K",     count: 18, capacity: 20, color: "bg-green-400" },
          ].map(g => (
            <div key={g.group} className="border border-gray-100 rounded-xl p-4">
              <p className="text-sm font-semibold text-gray-900 mb-1">{g.group}</p>
              <p className="text-2xl font-bold text-gray-900">{g.count}<span className="text-sm text-gray-400 font-normal">/{g.capacity}</span></p>
              <div className="w-full bg-gray-100 rounded-full h-1.5 mt-2">
                <div className={`h-1.5 rounded-full ${g.color}`} style={{ width: `${(g.count / g.capacity) * 100}%` }} />
              </div>
              <p className="text-xs text-gray-400 mt-1">{g.capacity - g.count} seats available</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ChildrenManagement() {
  const [search, setSearch] = useState("");
  const [showAdd, setShowAdd] = useState(false);
  const [newChild, setNewChild] = useState({ name: "", age: "", group: "Toddler A", parent: "", fee: "" });

  const filtered = allChildren.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.parent.toLowerCase().includes(search.toLowerCase())
  );

  const statusStyle = {
    paid:    "bg-green-100 text-green-700",
    pending: "bg-yellow-100 text-yellow-700",
    overdue: "bg-red-100 text-red-600",
  };

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-2xl p-4 flex items-center gap-3">
        <Search size={16} className="text-gray-400 shrink-0" />
        <input value={search} onChange={e => setSearch(e.target.value)}
          placeholder="Search by child or parent name..."
          className="flex-1 text-sm outline-none text-gray-700 placeholder-gray-400" />
        <button onClick={() => setShowAdd(true)}
          className="flex items-center gap-1.5 bg-orange-400 text-white text-sm font-semibold px-4 py-2 rounded-xl hover:bg-orange-500 transition-colors shrink-0">
          <UserPlus size={15} /> Enroll Child
        </button>
      </div>

      <div className="bg-white rounded-2xl overflow-hidden">
        <div className="grid grid-cols-[auto_1fr_auto_auto_auto_auto] gap-4 px-5 py-3 border-b border-gray-100 text-xs font-semibold text-gray-400 uppercase tracking-wider">
          <span>#</span><span>Child / Parent</span><span>Group</span><span>Fee</span><span>Status</span><span>Actions</span>
        </div>
        {filtered.map((child, i) => (
          <div key={child.id} className="grid grid-cols-[auto_1fr_auto_auto_auto_auto] gap-4 items-center px-5 py-4 border-b border-gray-50 hover:bg-gray-50 transition-colors">
            <div className="w-9 h-9 rounded-full bg-orange-400 text-white text-xs font-bold flex items-center justify-center shrink-0">{child.initials}</div>
            <div>
              <p className="text-sm font-semibold text-gray-900">{child.name}</p>
              <p className="text-xs text-gray-400">{child.parent} · {child.age}</p>
            </div>
            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full font-medium whitespace-nowrap">{child.group}</span>
            <span className="text-sm font-semibold text-gray-900 whitespace-nowrap">₹{child.fee.toLocaleString()}</span>
            <span className={`text-xs px-2 py-1 rounded-full font-medium capitalize whitespace-nowrap ${statusStyle[child.status]}`}>{child.status}</span>
            <div className="flex items-center gap-2">
              <button className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-orange-100 flex items-center justify-center transition-colors">
                <Edit3 size={13} className="text-gray-500 hover:text-orange-500" />
              </button>
              <button className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-red-100 flex items-center justify-center transition-colors">
                <Trash2 size={13} className="text-gray-500 hover:text-red-500" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Modal */}
      {showAdd && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-semibold text-gray-900">Enroll New Child</h3>
              <button onClick={() => setShowAdd(false)}><X size={16} className="text-gray-400" /></button>
            </div>
            <div className="space-y-3">
              {[
                { label: "Child's Name *", key: "name", placeholder: "e.g. Arjun Mehta" },
                { label: "Age", key: "age", placeholder: "e.g. 3y 2m" },
                { label: "Parent/Guardian Name *", key: "parent", placeholder: "e.g. Ramesh Mehta" },
                { label: "Monthly Fee (₹) *", key: "fee", placeholder: "e.g. 12000" },
              ].map(f => (
                <div key={f.key}>
                  <label className="text-xs font-medium text-gray-600 mb-1 block">{f.label}</label>
                  <input value={newChild[f.key]} onChange={e => setNewChild(p => ({ ...p, [f.key]: e.target.value }))}
                    className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-orange-400" placeholder={f.placeholder} />
                </div>
              ))}
              <div>
                <label className="text-xs font-medium text-gray-600 mb-1 block">Group</label>
                <select value={newChild.group} onChange={e => setNewChild(p => ({ ...p, group: e.target.value }))}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-orange-400 bg-white">
                  {["Toddler A", "Toddler B", "Pre-K"].map(g => <option key={g}>{g}</option>)}
                </select>
              </div>
            </div>
            <div className="flex gap-3 mt-5">
              <button onClick={() => setShowAdd(false)} className="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600">Cancel</button>
              <button onClick={() => setShowAdd(false)} className="flex-1 py-2.5 rounded-xl bg-orange-400 text-white text-sm font-medium hover:bg-orange-500 transition-colors">Enroll</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function StaffManagement() {
  const [showAdd, setShowAdd] = useState(false);

  const statusStyle = {
    active:    "bg-green-100 text-green-700",
    "on leave": "bg-yellow-100 text-yellow-700",
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="bg-white rounded-2xl px-4 py-3 flex items-center gap-2 flex-1 mr-4">
          <Search size={15} className="text-gray-400" />
          <input placeholder="Search staff..." className="text-sm outline-none text-gray-700 placeholder-gray-400 flex-1" />
        </div>
        <button onClick={() => setShowAdd(true)}
          className="flex items-center gap-1.5 bg-orange-400 text-white text-sm font-semibold px-4 py-3 rounded-xl hover:bg-orange-500 transition-colors whitespace-nowrap">
          <UserPlus size={15} /> Add Staff
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {staffList.map(s => (
          <div key={s.id} className="bg-white rounded-2xl p-5">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-400 text-white text-sm font-bold flex items-center justify-center">{s.initials}</div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{s.name}</p>
                  <p className="text-xs text-gray-400">{s.role}</p>
                </div>
              </div>
              <div className="flex gap-1.5">
                <button className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-orange-100 flex items-center justify-center">
                  <Edit3 size={12} className="text-gray-500" />
                </button>
                <button className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-red-100 flex items-center justify-center">
                  <Trash2 size={12} className="text-gray-500" />
                </button>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Layers size={12} className="text-gray-400" />
                <span className="text-xs text-gray-600">{s.group}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={12} className="text-gray-400" />
                <span className="text-xs text-gray-600">{s.phone}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">Joined {s.joined}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium capitalize ${statusStyle[s.status]}`}>{s.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showAdd && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-semibold text-gray-900">Add Staff Member</h3>
              <button onClick={() => setShowAdd(false)}><X size={16} className="text-gray-400" /></button>
            </div>
            <div className="space-y-3">
              {[
                { label: "Full Name *", placeholder: "e.g. Kavya Sharma" },
                { label: "Role *", placeholder: "e.g. Assistant Teacher" },
                { label: "Phone *", placeholder: "+91 98765 XXXXX" },
                { label: "Email", placeholder: "kavya@littlesteps.com" },
              ].map(f => (
                <div key={f.label}>
                  <label className="text-xs font-medium text-gray-600 mb-1 block">{f.label}</label>
                  <input className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-orange-400" placeholder={f.placeholder} />
                </div>
              ))}
              <div>
                <label className="text-xs font-medium text-gray-600 mb-1 block">Assigned Group</label>
                <select className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-orange-400 bg-white">
                  {["Toddler A", "Toddler B", "Pre-K", "All Groups", "Kitchen", "Gate"].map(g => <option key={g}>{g}</option>)}
                </select>
              </div>
            </div>
            <div className="flex gap-3 mt-5">
              <button onClick={() => setShowAdd(false)} className="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600">Cancel</button>
              <button onClick={() => setShowAdd(false)} className="flex-1 py-2.5 rounded-xl bg-orange-400 text-white text-sm font-medium hover:bg-orange-500 transition-colors">Add Staff</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function FeesManagement() {
  const [activeTab, setActiveTab] = useState("Pending");
  const tabs = ["Pending", "Paid", "Overdue", "All"];
  const filtered = allChildren.filter(c => {
    if (activeTab === "Pending") return c.status === "pending";
    if (activeTab === "Paid")    return c.status === "paid";
    if (activeTab === "Overdue") return c.status === "overdue";
    return true;
  });

  const statusStyle = {
    paid:    "bg-green-100 text-green-700",
    pending: "bg-yellow-100 text-yellow-700",
    overdue: "bg-red-100 text-red-600",
  };

  const total   = allChildren.reduce((s, c) => s + c.fee, 0);
  const paid    = allChildren.filter(c => c.status === "paid").reduce((s, c) => s + c.fee, 0);
  const pending = total - paid;

  return (
    <div className="space-y-4">
      {/* Summary */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "Total Expected",  value: `₹${(total / 1000).toFixed(0)}K`,  color: "text-gray-900",  bg: "bg-white" },
          { label: "Collected",       value: `₹${(paid / 1000).toFixed(0)}K`,   color: "text-green-600", bg: "bg-green-50" },
          { label: "Outstanding",     value: `₹${(pending / 1000).toFixed(0)}K`,color: "text-red-500",   bg: "bg-red-50" },
        ].map(s => (
          <div key={s.label} className={`${s.bg} rounded-2xl p-5`}>
            <p className="text-xs text-gray-400 mb-1">{s.label}</p>
            <p className={`text-3xl font-bold ${s.color}`}>{s.value}</p>
            <p className="text-xs text-gray-400 mt-1">May 2026</p>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-900">Fee Records</h3>
          <button className="flex items-center gap-1.5 border border-gray-200 text-sm text-gray-600 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors">
            <Download size={13} /> Export
          </button>
        </div>
        <div className="flex bg-gray-100 rounded-full p-1 mb-5">
          {tabs.map(t => (
            <button key={t} onClick={() => setActiveTab(t)}
              className={`flex-1 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === t ? "bg-white shadow text-gray-900" : "text-gray-500"}`}>
              {t}
            </button>
          ))}
        </div>
        <div className="space-y-3">
          {filtered.map(child => (
            <div key={child.id} className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-orange-400 text-white text-xs font-bold flex items-center justify-center shrink-0">{child.initials}</div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900">{child.name}</p>
                <p className="text-xs text-gray-400">{child.parent} · {child.group}</p>
              </div>
              <p className="text-sm font-bold text-gray-900">₹{child.fee.toLocaleString()}</p>
              <span className={`text-xs px-2.5 py-1 rounded-full font-medium capitalize ${statusStyle[child.status]}`}>{child.status}</span>
              {child.status !== "paid" && (
                <button className="text-xs bg-orange-400 text-white px-3 py-1.5 rounded-lg hover:bg-orange-500 transition-colors font-medium">
                  Mark Paid
                </button>
              )}
            </div>
          ))}
          {filtered.length === 0 && (
            <p className="text-center text-sm text-gray-400 py-8">No records for this category</p>
          )}
        </div>
      </div>
    </div>
  );
}

function AdminSettings() {
  const sections = [
    { label: "Daycare Name",        value: "LittleSteps Daycare",        icon: Star },
    { label: "Location",            value: "Koramangala, Bengaluru",      icon: MapPin },
    { label: "Admin Email",         value: "admin@littlesteps.com",       icon: Mail },
    { label: "Admin Phone",         value: "+91 98765 99999",             icon: Phone },
    { label: "Operating Hours",     value: "7:30 AM – 6:00 PM",          icon: Clock },
    { label: "Monthly Fee (Default)", value: "₹12,000",                  icon: DollarSign },
  ];
  return (
    <div className="space-y-4">
      <div className="bg-white rounded-2xl p-5">
        <h3 className="font-semibold text-gray-900 mb-4">Daycare Settings</h3>
        <div className="space-y-3">
          {sections.map(s => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="flex items-center gap-4 p-3 border border-gray-100 rounded-xl">
                <div className="w-9 h-9 rounded-xl bg-orange-100 flex items-center justify-center shrink-0">
                  <Icon size={15} className="text-orange-500" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-400">{s.label}</p>
                  <p className="text-sm font-medium text-gray-900">{s.value}</p>
                </div>
                <button className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-orange-100 flex items-center justify-center">
                  <Edit3 size={12} className="text-gray-500" />
                </button>
              </div>
            );
          })}
        </div>
        <button className="w-full mt-4 bg-orange-400 text-white font-semibold py-3 rounded-xl hover:bg-orange-500 transition-colors text-sm">
          Save Changes
        </button>
      </div>

      <div className="bg-white rounded-2xl p-5">
        <h3 className="font-semibold text-gray-900 mb-4">Notification Preferences</h3>
        <div className="space-y-3">
          {["Payment reminders to parents", "Daily attendance summary", "New enrollment alerts", "Staff leave notifications"].map(n => (
            <div key={n} className="flex items-center justify-between py-2">
              <p className="text-sm text-gray-700">{n}</p>
              <div className="w-10 h-5 bg-orange-400 rounded-full relative cursor-pointer">
                <div className="w-4 h-4 bg-white rounded-full absolute right-0.5 top-0.5 shadow" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Main Admin Dashboard ──────────────────────────────────────────
const navItems = [
  { label: "Overview",    icon: LayoutDashboard },
  { label: "Children",    icon: Baby },
  { label: "Staff",       icon: Users },
  { label: "Fees",        icon: CreditCard },
  { label: "Reports",     icon: BarChart2 },
  { label: "Settings",    icon: Settings },
];

export default function AdminDashboard({ onLogout }) {
  const [active, setActive] = useState("Overview");
  const [showLogout, setShowLogout] = useState(false);

  const renderPage = () => {
    if (active === "Overview")  return <AdminHome />;
    if (active === "Children")  return <ChildrenManagement />;
    if (active === "Staff")     return <StaffManagement />;
    if (active === "Fees")      return <FeesManagement />;
    if (active === "Settings")  return <AdminSettings />;
    return <div className="flex items-center justify-center h-40"><p className="text-gray-400 text-sm">{active} coming soon...</p></div>;
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <aside className="w-60 bg-white border-r border-gray-100 flex flex-col shrink-0">
        <div className="flex items-center gap-2.5 px-5 py-5 border-b border-gray-100">
          <div className="w-10 h-10 rounded-xl bg-orange-400 flex items-center justify-center text-xl">🐣</div>
          <div>
            <p className="text-sm font-medium text-gray-900">LittleSteps</p>
            <p className="text-xs text-purple-500 font-medium">Admin Portal</p>
          </div>
        </div>
        <nav className="p-3 flex-1">
          {navItems.map(({ label, icon: Icon }) => (
            <button key={label} onClick={() => setActive(label)}
              className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm mb-0.5 transition-colors
                ${active === label ? "bg-orange-400 text-white" : "text-gray-500 hover:bg-gray-100 hover:text-gray-800"}`}>
              <Icon size={17} />{label}
            </button>
          ))}
        </nav>
        <div className="p-3 border-t border-gray-100">
          <button onClick={() => setShowLogout(true)}
            className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm text-red-400 hover:bg-red-50 hover:text-red-500 transition-colors">
            <LogOut size={17} /> Logout
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-[60px] bg-white border-b border-gray-100 flex items-center justify-between px-6 shrink-0">
          <h1 className="text-xl font-medium text-gray-900">{active}</h1>
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center cursor-pointer">
              <Bell size={17} className="text-gray-500" />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-400 text-white text-[10px] font-medium rounded-full flex items-center justify-center border-2 border-white">5</span>
            </div>
            <div className="flex items-center gap-2 pl-1 pr-3 py-1 rounded-full border border-gray-200 hover:bg-gray-50 cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-purple-500 text-white text-xs font-medium flex items-center justify-center">AD</div>
              <div>
                <p className="text-[13px] font-medium text-gray-900 leading-tight">Admin</p>
                <p className="text-[11px] text-purple-500 font-medium">Administrator</p>
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-auto p-6">{renderPage()}</main>
      </div>

      {showLogout && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-sm text-center">
            <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <LogOut size={24} className="text-red-400" />
            </div>
            <h2 className="text-lg font-bold text-gray-900 mb-2">Logout?</h2>
            <p className="text-gray-400 text-sm mb-6">Are you sure you want to logout?</p>
            <div className="flex gap-3">
              <button onClick={() => setShowLogout(false)}
                className="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">Cancel</button>
              <button onClick={onLogout || (() => {})}
                className="flex-1 py-2.5 rounded-xl bg-red-400 text-white text-sm font-medium hover:bg-red-500 transition-colors">Yes, Logout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
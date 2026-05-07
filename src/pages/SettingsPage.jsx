import { useState } from "react";
import { User, Baby, Bell, Shield, CreditCard, Lock, Globe, Save, Plus, Pencil, Trash2, Eye, EyeOff } from "lucide-react";

const tabs = [
  { id: "profile", label: "Profile", icon: User },
  { id: "child", label: "Child Management", icon: Baby },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "privacy", label: "Privacy", icon: Shield },
  { id: "payments", label: "Payments", icon: CreditCard },
  { id: "security", label: "Security", icon: Lock },
  { id: "preferences", label: "Preferences", icon: Globe },
];

function Toggle({ value, onChange }) {
  return (
    <button onClick={() => onChange(!value)}
      className={`relative w-12 h-6 rounded-full transition-colors ${value ? "bg-orange-400" : "bg-gray-300"}`}>
      <span className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${value ? "translate-x-6" : "translate-x-0.5"}`} />
    </button>
  );
}

function ProfileTab() {
  const [form, setForm] = useState({ name: "Priya Sharma", phone: "+91 98765 43210", email: "priya.sharma@email.com", address: "123, MG Road", city: "Mumbai", state: "Maharashtra", pin: "400001" });
  const [saved, setSaved] = useState(false);
  const save = () => { setSaved(true); setTimeout(() => setSaved(false), 2000); };
  return (
    <div className="space-y-5">
      <div className="bg-white rounded-2xl p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-orange-400 text-white text-xl font-bold flex items-center justify-center">PS</div>
          <div>
            <p className="font-bold text-gray-900 text-lg">Priya Sharma</p>
            <p className="text-gray-400 text-sm">Parent Account</p>
          </div>
        </div>
        <h3 className="font-semibold text-gray-900 mb-4">Profile Information</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">Full Name</label>
            <input value={form.name} onChange={e => setForm({...form, name: e.target.value})}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-400" />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">Phone Number</label>
            <input value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
              className="w-full bg-gray-50 border border-orange-400 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-400" />
          </div>
          <div className="col-span-2">
            <label className="text-sm font-medium text-gray-700 mb-1 block">Email Address</label>
            <input value={form.email} onChange={e => setForm({...form, email: e.target.value})}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-400" />
          </div>
          <div className="col-span-2">
            <label className="text-sm font-medium text-gray-700 mb-1 block">Address</label>
            <input value={form.address} onChange={e => setForm({...form, address: e.target.value})}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-400" />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">City</label>
            <input value={form.city} onChange={e => setForm({...form, city: e.target.value})}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-400" />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">State</label>
            <input value={form.state} onChange={e => setForm({...form, state: e.target.value})}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-400" />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">PIN Code</label>
            <input value={form.pin} onChange={e => setForm({...form, pin: e.target.value})}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-400" />
          </div>
        </div>
        <div className="flex justify-end mt-5">
          <button onClick={save}
            className="flex items-center gap-2 bg-orange-400 hover:bg-orange-500 text-white font-semibold px-6 py-2.5 rounded-xl transition-colors">
            <Save size={16} />
            {saved ? "Saved!" : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
}

function ChildTab() {
  const [children, setChildren] = useState([{ id: 1, name: "Aarav Sharma", age: "3 years 4 months", group: "Toddler Group A" }]);
  const [showForm, setShowForm] = useState(false);
  const [newChild, setNewChild] = useState({ name: "", age: "", group: "" });
  const add = () => {
    if (!newChild.name) return;
    setChildren([...children, { id: Date.now(), ...newChild }]);
    setNewChild({ name: "", age: "", group: "" });
    setShowForm(false);
  };
  const remove = (id) => setChildren(children.filter(c => c.id !== id));
  return (
    <div className="space-y-4">
      <div className="bg-white rounded-2xl p-6">
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-semibold text-gray-900">Child Management</h3>
          <button onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 bg-orange-400 hover:bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors">
            <Plus size={15} /> Add Child
          </button>
        </div>

        {showForm && (
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-4 space-y-3">
            <input value={newChild.name} onChange={e => setNewChild({...newChild, name: e.target.value})}
              placeholder="Child's Full Name" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-orange-400" />
            <input value={newChild.age} onChange={e => setNewChild({...newChild, age: e.target.value})}
              placeholder="Age (e.g. 2 years 3 months)" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-orange-400" />
            <input value={newChild.group} onChange={e => setNewChild({...newChild, group: e.target.value})}
              placeholder="Group (e.g. Toddler Group A)" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-orange-400" />
            <div className="flex gap-2">
              <button onClick={add} className="bg-orange-400 hover:bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors">Add</button>
              <button onClick={() => setShowForm(false)} className="border border-gray-200 text-gray-600 text-sm px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">Cancel</button>
            </div>
          </div>
        )}

        <div className="space-y-3">
          {children.map(child => (
            <div key={child.id} className="flex items-center gap-4 border border-gray-100 rounded-xl p-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-xl shrink-0">🧒</div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900">{child.name}</p>
                <p className="text-sm text-gray-400">{child.age}</p>
                {child.group && <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-0.5 rounded-full">{child.group}</span>}
              </div>
              <div className="flex gap-2">
                <button className="flex items-center gap-1 border border-gray-200 text-gray-600 text-sm px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors">
                  <Pencil size={13} /> Edit
                </button>
                <button onClick={() => remove(child.id)}
                  className="flex items-center gap-1 border border-red-200 text-red-500 text-sm px-3 py-1.5 rounded-lg hover:bg-red-50 transition-colors">
                  <Trash2 size={13} /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function NotificationsTab() {
  const [prefs, setPrefs] = useState({ activities: true, meals: true, emergency: true, payments: true, sms: false, app: true });
  const [saved, setSaved] = useState(false);
  const toggle = key => setPrefs(p => ({ ...p, [key]: !p[key] }));
  const save = () => { setSaved(true); setTimeout(() => setSaved(false), 2000); };

  const prefItems = [
    { key: "activities", label: "Activity Updates", desc: "Get notified about your child's daily activities" },
    { key: "meals", label: "Meal Updates", desc: "Receive updates about meals and nutrition" },
    { key: "emergency", label: "Emergency Alerts", desc: "Critical notifications (always enabled)" },
    { key: "payments", label: "Payment Reminders", desc: "Reminders for upcoming payments" },
  ];
  const channelItems = [
    { key: "sms", label: "SMS Notifications", desc: "Receive notifications via SMS" },
    { key: "app", label: "App Notifications", desc: "Push notifications in the app" },
  ];

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-2xl p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Notification Preferences</h3>
        <div className="space-y-3">
          {prefItems.map(({ key, label, desc }) => (
            <div key={key} className="flex items-center justify-between border border-gray-100 rounded-xl p-4">
              <div>
                <p className="font-medium text-gray-800">{label}</p>
                <p className="text-sm text-gray-400">{desc}</p>
              </div>
              <Toggle value={prefs[key]} onChange={() => toggle(key)} />
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-2xl p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Notification Channels</h3>
        <div className="space-y-3">
          {channelItems.map(({ key, label, desc }) => (
            <div key={key} className="flex items-center justify-between border border-gray-100 rounded-xl p-4">
              <div>
                <p className="font-medium text-gray-800">{label}</p>
                <p className="text-sm text-gray-400">{desc}</p>
              </div>
              <Toggle value={prefs[key]} onChange={() => toggle(key)} />
            </div>
          ))}
        </div>
        <div className="flex justify-end mt-4">
          <button onClick={save}
            className="flex items-center gap-2 bg-orange-400 hover:bg-orange-500 text-white font-semibold px-6 py-2.5 rounded-xl transition-colors">
            <Save size={16} />
            {saved ? "Saved!" : "Save Preferences"}
          </button>
        </div>
      </div>
    </div>
  );
}

function PrivacyTab() {
  const [settings, setSettings] = useState({ photos: true, cctv: true, data: false, analytics: true });
  const [saved, setSaved] = useState(false);
  const toggle = key => setSettings(p => ({ ...p, [key]: !p[key] }));
  const save = () => { setSaved(true); setTimeout(() => setSaved(false), 2000); };

  const items = [
    { key: "photos", icon: "📷", label: "Photo Sharing Permission", desc: "Allow daycare to share photos of your child" },
    { key: "cctv", icon: "📷", label: "CCTV Access Control", desc: "Enable live CCTV viewing access" },
    { key: "data", icon: "📋", label: "Data Sharing", desc: "Share anonymized data to improve services" },
    { key: "analytics", icon: "📊", label: "Usage Analytics", desc: "Help us improve the app with usage data" },
  ];

  return (
    <div className="bg-white rounded-2xl p-6">
      <h3 className="font-semibold text-gray-900 mb-4">Privacy Settings</h3>
      <div className="space-y-3">
        {items.map(({ key, icon, label, desc }) => (
          <div key={key} className="flex items-center gap-4 border border-gray-100 rounded-xl p-4">
            <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center text-lg shrink-0">{icon}</div>
            <div className="flex-1">
              <p className="font-medium text-gray-800">{label}</p>
              <p className="text-sm text-gray-400">{desc}</p>
            </div>
            <Toggle value={settings[key]} onChange={() => toggle(key)} />
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-4">
        <button onClick={save}
          className="flex items-center gap-2 bg-orange-400 hover:bg-orange-500 text-white font-semibold px-6 py-2.5 rounded-xl transition-colors">
          <Save size={16} />
          {saved ? "Saved!" : "Save Settings"}
        </button>
      </div>
    </div>
  );
}

function PaymentsTab() {
  const [methods, setMethods] = useState([
    { id: 1, label: "UPI - priya@paytm", sub: "Primary payment method", isDefault: true },
    { id: 2, label: "Debit Card •••• 4532", sub: "Expires 12/2027", isDefault: false },
  ]);
  const remove = id => setMethods(methods.filter(m => m.id !== id));

  return (
    <div className="bg-white rounded-2xl p-6">
      <h3 className="font-semibold text-gray-900 mb-1">Payment Settings</h3>
      <h4 className="font-medium text-gray-700 mb-4 mt-4">Saved Payment Methods</h4>
      <div className="space-y-3 mb-3">
        {methods.map(m => (
          <div key={m.id} className="flex items-center gap-3 border border-gray-200 rounded-xl p-4">
            <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center shrink-0">
              <CreditCard size={18} className="text-gray-500" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-800">{m.label}</p>
              <p className="text-xs text-gray-400">{m.sub}</p>
            </div>
            {m.isDefault
              ? <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">Default</span>
              : <button onClick={() => remove(m.id)} className="text-sm text-gray-400 hover:text-red-500 transition-colors">Remove</button>
            }
          </div>
        ))}
      </div>
      <button className="w-full border border-dashed border-gray-300 rounded-xl py-3 text-sm text-gray-500 hover:bg-gray-50 transition-colors font-medium flex items-center justify-center gap-2">
        <Plus size={15} /> Add Payment Method
      </button>
    </div>
  );
}

function SecurityTab() {
  const [form, setForm] = useState({ current: "", newPass: "", confirm: "" });
  const [show, setShow] = useState({ current: false, newPass: false, confirm: false });
  const [msg, setMsg] = useState("");
  const change = () => {
    if (!form.current || !form.newPass || !form.confirm) { setMsg("Please fill all fields."); return; }
    if (form.newPass !== form.confirm) { setMsg("New passwords do not match."); return; }
    setMsg("Password changed successfully!");
    setForm({ current: "", newPass: "", confirm: "" });
    setTimeout(() => setMsg(""), 3000);
  };

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-2xl p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Security Settings</h3>
        <h4 className="font-medium text-gray-800 mb-4">Password</h4>
        <div className="space-y-4">
          {[
            { key: "current", label: "Current Password" },
            { key: "newPass", label: "New Password" },
            { key: "confirm", label: "Confirm New Password" },
          ].map(({ key, label }) => (
            <div key={key}>
              <label className="text-sm font-medium text-gray-700 mb-1 block">{label}</label>
              <div className="relative">
                <input
                  type={show[key] ? "text" : "password"}
                  value={form[key]}
                  onChange={e => setForm({...form, [key]: e.target.value})}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-400 pr-10"
                />
                <button onClick={() => setShow({...show, [key]: !show[key]})}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600">
                  {show[key] ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
          ))}
          {msg && <p className={`text-sm ${msg.includes("success") ? "text-green-600" : "text-red-500"}`}>{msg}</p>}
          <button onClick={change}
            className="flex items-center gap-2 bg-orange-400 hover:bg-orange-500 text-white font-semibold px-6 py-2.5 rounded-xl transition-colors">
            <Lock size={16} /> Change Password
          </button>
        </div>
      </div>
      <div className="bg-white rounded-2xl p-6">
        <h4 className="font-medium text-gray-800 mb-1">Active Sessions</h4>
        <p className="text-sm text-gray-400 mb-4">Logout from all devices to secure your account</p>
        <button className="border border-red-200 text-red-500 hover:bg-red-50 text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors">
          Logout All Devices
        </button>
      </div>
    </div>
  );
}

function PreferencesTab() {
  const [lang, setLang] = useState("en");
  const [sounds, setSounds] = useState(true);
  const [saved, setSaved] = useState(false);
  const save = () => { setSaved(true); setTimeout(() => setSaved(false), 2000); };

  return (
    <div className="bg-white rounded-2xl p-6">
      <h3 className="font-semibold text-gray-900 mb-4">App Preferences</h3>
      <h4 className="font-medium text-gray-800 mb-3">Language</h4>
      <div className="space-y-3 mb-5">
        {[
          { id: "en", label: "English", sub: "Use English language" },
          { id: "hi", label: "हिंदी (Hindi)", sub: "हिंदी भाषा का प्रयोग करें" },
        ].map(l => (
          <button key={l.id} onClick={() => setLang(l.id)}
            className={`w-full flex items-center gap-3 border rounded-xl p-4 text-left transition-colors ${lang === l.id ? "border-orange-400 bg-orange-50" : "border-gray-200 hover:border-gray-300"}`}>
            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${lang === l.id ? "border-blue-500" : "border-gray-400"}`}>
              {lang === l.id && <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />}
            </div>
            <div>
              <p className="font-medium text-gray-800">{l.label}</p>
              <p className="text-sm text-gray-400">{l.sub}</p>
            </div>
          </button>
        ))}
      </div>
      <div className="flex items-center justify-between border border-gray-100 rounded-xl p-4 mb-5">
        <div>
          <p className="font-medium text-gray-800">Notification Sounds</p>
          <p className="text-sm text-gray-400">Play sounds for notifications</p>
        </div>
        <Toggle value={sounds} onChange={setSounds} />
      </div>
      <div className="flex justify-end">
        <button onClick={save}
          className="flex items-center gap-2 bg-orange-400 hover:bg-orange-500 text-white font-semibold px-6 py-2.5 rounded-xl transition-colors">
          <Save size={16} />
          {saved ? "Saved!" : "Save Preferences"}
        </button>
      </div>
    </div>
  );
}

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");

  const renderContent = () => {
    if (activeTab === "profile") return <ProfileTab />;
    if (activeTab === "child") return <ChildTab />;
    if (activeTab === "notifications") return <NotificationsTab />;
    if (activeTab === "privacy") return <PrivacyTab />;
    if (activeTab === "payments") return <PaymentsTab />;
    if (activeTab === "security") return <SecurityTab />;
    if (activeTab === "preferences") return <PreferencesTab />;
  };

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Settings</h2>
        <p className="text-gray-400 text-sm">Manage your account preferences and settings</p>
      </div>

      <div className="bg-white rounded-2xl p-3">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button key={id} onClick={() => setActiveTab(id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors mb-0.5
              ${activeTab === id ? "bg-orange-400 text-white" : "text-gray-600 hover:bg-gray-50"}`}>
            <Icon size={18} />
            {label}
          </button>
        ))}
      </div>

      {renderContent()}
    </div>
  );
}
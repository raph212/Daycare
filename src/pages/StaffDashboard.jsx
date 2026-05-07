import { useState } from "react";
import {
  LayoutDashboard, Users, Activity, Heart, Image, MessageSquare,
  Bell, LogOut, ChevronRight, CheckCircle, Clock, AlertCircle,
  Plus, Search, Filter, Camera, Utensils, Palette, Music, Sun,
  Moon, Smile, Meh, Frown, Send, Paperclip, Phone, MoreVertical,
  Calendar, TrendingUp, FileText, Edit3, Trash2, X, Check,
  Baby, BookOpen, Star, Coffee, Wind
} from "lucide-react";

// ─── Shared Design Tokens ────────────────────────────────────────
// Matches existing LittleSteps brand: orange-400 primary, warm grays

// ─── Mock Data ────────────────────────────────────────────────────
const children = [
  { id: 1, name: "Aarav Sharma", initials: "AS", age: "3y 4m", group: "Toddler A", mood: "happy", checkin: "8:30 AM", parent: "Priya Sharma", allergies: ["Peanuts"], status: "present" },
  { id: 2, name: "Meera Patel",  initials: "MP", age: "2y 8m", group: "Toddler B", mood: "happy", checkin: "8:45 AM", parent: "Raj Patel",   allergies: [],          status: "present" },
  { id: 3, name: "Rishi Nair",   initials: "RN", age: "4y 1m", group: "Pre-K",    mood: "sad",   checkin: "9:00 AM", parent: "Anita Nair",   allergies: ["Dairy"],   status: "present" },
  { id: 4, name: "Aria Gupta",   initials: "AG", age: "3y 9m", group: "Toddler A", mood: "neutral", checkin: "—",   parent: "Vikram Gupta", allergies: [],          status: "absent" },
  { id: 5, name: "Kabir Singh",  initials: "KS", age: "2y 5m", group: "Toddler B", mood: "happy", checkin: "8:15 AM", parent: "Sonia Singh",  allergies: ["Gluten"], status: "present" },
  { id: 6, name: "Zara Ahmed",   initials: "ZA", age: "4y 3m", group: "Pre-K",    mood: "happy", checkin: "9:10 AM", parent: "Omar Ahmed",   allergies: [],          status: "present" },
];

const todayActivities = [
  { id: 1, time: "8:30 AM", title: "Morning Circle", icon: Sun,     color: "yellow",  done: true,  group: "All" },
  { id: 2, time: "9:00 AM", title: "Morning Snack",  icon: Utensils, color: "orange",  done: true,  group: "All", notes: "Apple slices & crackers" },
  { id: 3, time: "10:00 AM",title: "Art & Craft",    icon: Palette,  color: "purple",  done: true,  group: "All", notes: "Paper butterflies" },
  { id: 4, time: "11:00 AM",title: "Story Time",     icon: BookOpen, color: "blue",    done: false, group: "All" },
  { id: 5, time: "12:00 PM",title: "Lunch",          icon: Utensils, color: "green",   done: false, group: "All" },
  { id: 6, time: "1:00 PM", title: "Nap Time",       icon: Moon,     color: "indigo",  done: false, group: "All" },
  { id: 7, time: "3:00 PM", title: "Outdoor Play",   icon: Wind,     color: "teal",    done: false, group: "All" },
  { id: 8, time: "4:00 PM", title: "Afternoon Snack",icon: Coffee,   color: "orange",  done: false, group: "All" },
];

const parentMessages = [
  { id: 1, parent: "Priya Sharma", child: "Aarav", initials: "PS", msg: "How is Aarav doing today?", time: "9:15 AM", unread: true },
  { id: 2, parent: "Anita Nair",   child: "Rishi", initials: "AN", msg: "Rishi has a slight fever, please keep an eye", time: "8:50 AM", unread: true },
  { id: 3, parent: "Raj Patel",    child: "Meera", initials: "RP", msg: "Thanks for the update!", time: "Yesterday", unread: false },
];

const moodColors = {
  happy:   { bg: "bg-green-100",  text: "text-green-600",  icon: Smile, label: "Happy" },
  neutral: { bg: "bg-yellow-100", text: "text-yellow-600", icon: Meh,   label: "Okay" },
  sad:     { bg: "bg-red-100",    text: "text-red-500",    icon: Frown,  label: "Sad" },
};

const activityColorMap = {
  yellow: { bg: "bg-yellow-100", text: "text-yellow-600" },
  orange: { bg: "bg-orange-100", text: "text-orange-500" },
  purple: { bg: "bg-purple-100", text: "text-purple-500" },
  blue:   { bg: "bg-blue-100",   text: "text-blue-500" },
  green:  { bg: "bg-green-100",  text: "text-green-600" },
  indigo: { bg: "bg-indigo-100", text: "text-indigo-500" },
  teal:   { bg: "bg-teal-100",   text: "text-teal-600" },
};

// ─── Sub-pages ────────────────────────────────────────────────────

function StaffHome() {
  const present = children.filter(c => c.status === "present").length;
  const absent  = children.filter(c => c.status === "absent").length;
  const doneActs = todayActivities.filter(a => a.done).length;

  return (
    <div className="space-y-5">
      {/* Greeting */}
      <div className="bg-gradient-to-r from-orange-400 to-amber-400 rounded-2xl p-6 text-white">
        <p className="text-orange-100 text-sm mb-1">Good morning,</p>
        <h2 className="text-2xl font-bold mb-1">Sarah Johnson 👋</h2>
        <p className="text-orange-100 text-sm">Lead Teacher · Toddler Group A & Pre-K</p>
        <div className="flex items-center gap-4 mt-4">
          <div className="bg-white/20 rounded-xl px-4 py-2 text-center">
            <p className="text-xl font-bold">{present}</p>
            <p className="text-orange-100 text-xs">Present</p>
          </div>
          <div className="bg-white/20 rounded-xl px-4 py-2 text-center">
            <p className="text-xl font-bold">{absent}</p>
            <p className="text-orange-100 text-xs">Absent</p>
          </div>
          <div className="bg-white/20 rounded-xl px-4 py-2 text-center">
            <p className="text-xl font-bold">{doneActs}/{todayActivities.length}</p>
            <p className="text-orange-100 text-xs">Activities</p>
          </div>
        </div>
      </div>

      {/* Alert */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
        <AlertCircle size={18} className="text-red-500 shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-semibold text-red-700">Attention Needed</p>
          <p className="text-xs text-red-600">Rishi Nair's parent reported a slight fever. Please monitor temperature every hour.</p>
        </div>
      </div>

      {/* Children Quick View */}
      <div className="bg-white rounded-2xl p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-900">Today's Children</h3>
          <span className="text-xs text-gray-400">{present} present · {absent} absent</span>
        </div>
        <div className="space-y-3">
          {children.map(child => {
            const mood = moodColors[child.mood];
            const MoodIcon = mood.icon;
            return (
              <div key={child.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold text-white shrink-0 ${child.status === "absent" ? "bg-gray-300" : "bg-orange-400"}`}>
                  {child.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900">{child.name}</p>
                  <p className="text-xs text-gray-400">{child.group} · {child.age}</p>
                </div>
                {child.status === "present" ? (
                  <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${mood.bg} ${mood.text}`}>
                    <MoodIcon size={12} /> {mood.label}
                  </div>
                ) : (
                  <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-500">Absent</span>
                )}
                <span className="text-xs text-gray-400 ml-2">{child.checkin}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Upcoming Activities */}
      <div className="bg-white rounded-2xl p-5">
        <h3 className="font-semibold text-gray-900 mb-4">Today's Schedule</h3>
        <div className="space-y-2">
          {todayActivities.map(act => {
            const Icon = act.icon;
            const col = activityColorMap[act.color] || activityColorMap.orange;
            return (
              <div key={act.id} className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${act.done ? "opacity-50" : "border border-gray-100"}`}>
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${col.bg} shrink-0`}>
                  <Icon size={15} className={col.text} />
                </div>
                <div className="flex-1">
                  <p className={`text-sm font-medium ${act.done ? "line-through text-gray-400" : "text-gray-900"}`}>{act.title}</p>
                  {act.notes && <p className="text-xs text-gray-400">{act.notes}</p>}
                </div>
                <span className="text-xs text-gray-400">{act.time}</span>
                {act.done && <CheckCircle size={16} className="text-green-500 shrink-0" />}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ChildrenPage() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const filtered = children.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-4">
      {/* Search */}
      <div className="bg-white rounded-2xl p-4 flex items-center gap-3">
        <Search size={16} className="text-gray-400 shrink-0" />
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search children..."
          className="flex-1 text-sm outline-none text-gray-700 placeholder-gray-400"
        />
      </div>

      {/* Children Grid */}
      <div className="grid grid-cols-2 gap-4">
        {filtered.map(child => {
          const mood = moodColors[child.mood];
          const MoodIcon = mood.icon;
          return (
            <button
              key={child.id}
              onClick={() => setSelected(child)}
              className="bg-white rounded-2xl p-5 text-left hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-white ${child.status === "absent" ? "bg-gray-300" : "bg-orange-400"}`}>
                  {child.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{child.name}</p>
                  <p className="text-xs text-gray-400">{child.age}</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">{child.group}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium flex items-center gap-1 ${mood.bg} ${mood.text}`}>
                    <MoodIcon size={10} />{mood.label}
                  </span>
                </div>
                {child.allergies.length > 0 && (
                  <div className="flex items-center gap-1">
                    <AlertCircle size={11} className="text-red-400" />
                    <span className="text-xs text-red-500">{child.allergies.join(", ")}</span>
                  </div>
                )}
                <p className="text-xs text-gray-400">Check-in: {child.checkin}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Child Detail Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm">
            <div className="flex items-center justify-between p-5 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-white ${selected.status === "absent" ? "bg-gray-300" : "bg-orange-400"}`}>
                  {selected.initials}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{selected.name}</p>
                  <p className="text-xs text-gray-400">{selected.group} · {selected.age}</p>
                </div>
              </div>
              <button onClick={() => setSelected(null)} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                <X size={14} className="text-gray-500" />
              </button>
            </div>
            <div className="p-5 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-50 rounded-xl p-3">
                  <p className="text-xs text-gray-400 mb-1">Parent</p>
                  <p className="text-sm font-medium text-gray-900">{selected.parent}</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-3">
                  <p className="text-xs text-gray-400 mb-1">Check-in</p>
                  <p className="text-sm font-medium text-gray-900">{selected.checkin}</p>
                </div>
              </div>
              {selected.allergies.length > 0 && (
                <div className="bg-red-50 border border-red-100 rounded-xl p-3">
                  <p className="text-xs font-semibold text-red-600 mb-1">⚠ Allergies</p>
                  <p className="text-sm text-red-700">{selected.allergies.join(", ")}</p>
                </div>
              )}
              <div>
                <p className="text-xs text-gray-500 mb-2 font-medium">Update Mood</p>
                <div className="flex gap-2">
                  {Object.entries(moodColors).map(([key, val]) => {
                    const Icon = val.icon;
                    return (
                      <button key={key} className={`flex-1 py-2 rounded-xl flex flex-col items-center gap-1 text-xs font-medium border-2 ${selected.mood === key ? `border-orange-400 ${val.bg} ${val.text}` : "border-gray-100 text-gray-400"}`}>
                        <Icon size={16} />{val.label}
                      </button>
                    );
                  })}
                </div>
              </div>
              <button className="w-full bg-orange-400 text-white font-semibold py-3 rounded-xl hover:bg-orange-500 transition-colors text-sm">
                Send Update to Parent
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ActivitiesPage() {
  const [activities, setActivities] = useState(todayActivities);
  const [showAdd, setShowAdd] = useState(false);
  const [newAct, setNewAct] = useState({ title: "", time: "", notes: "" });

  const toggleDone = (id) => {
    setActivities(prev => prev.map(a => a.id === id ? { ...a, done: !a.done } : a));
  };

  const addActivity = () => {
    if (!newAct.title || !newAct.time) return;
    setActivities(prev => [...prev, { id: Date.now(), ...newAct, icon: Star, color: "orange", done: false, group: "All" }]);
    setNewAct({ title: "", time: "", notes: "" });
    setShowAdd(false);
  };

  const done = activities.filter(a => a.done).length;

  return (
    <div className="space-y-4">
      {/* Progress */}
      <div className="bg-white rounded-2xl p-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-gray-900">Today's Progress</h3>
          <span className="text-sm font-bold text-orange-400">{done}/{activities.length}</span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-2.5 mb-1">
          <div className="bg-orange-400 h-2.5 rounded-full transition-all" style={{ width: `${(done / activities.length) * 100}%` }} />
        </div>
        <p className="text-xs text-gray-400">{activities.length - done} activities remaining</p>
      </div>

      {/* Activity List */}
      <div className="bg-white rounded-2xl p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-900">Schedule</h3>
          <button onClick={() => setShowAdd(true)} className="flex items-center gap-1.5 bg-orange-400 text-white text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-orange-500 transition-colors">
            <Plus size={14} /> Add
          </button>
        </div>
        <div className="space-y-2">
          {activities.map(act => {
            const Icon = act.icon;
            const col = activityColorMap[act.color] || activityColorMap.orange;
            return (
              <div key={act.id} className={`flex items-center gap-3 p-3 rounded-xl border ${act.done ? "border-transparent bg-gray-50" : "border-gray-100 bg-white"}`}>
                <button onClick={() => toggleDone(act.id)}
                  className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors ${act.done ? "bg-green-500" : "border-2 border-gray-200"}`}>
                  {act.done && <Check size={12} className="text-white" />}
                </button>
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${col.bg} shrink-0`}>
                  <Icon size={15} className={col.text} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-medium ${act.done ? "line-through text-gray-400" : "text-gray-900"}`}>{act.title}</p>
                  {act.notes && <p className="text-xs text-gray-400">{act.notes}</p>}
                </div>
                <span className="text-xs text-gray-400 shrink-0">{act.time}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Add Modal */}
      {showAdd && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-sm p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-semibold text-gray-900">Add Activity</h3>
              <button onClick={() => setShowAdd(false)}><X size={16} className="text-gray-400" /></button>
            </div>
            <div className="space-y-3">
              <div>
                <label className="text-xs font-medium text-gray-600 mb-1 block">Activity Name *</label>
                <input value={newAct.title} onChange={e => setNewAct(p => ({ ...p, title: e.target.value }))}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-orange-400" placeholder="e.g. Story Time" />
              </div>
              <div>
                <label className="text-xs font-medium text-gray-600 mb-1 block">Time *</label>
                <input value={newAct.time} onChange={e => setNewAct(p => ({ ...p, time: e.target.value }))}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-orange-400" placeholder="e.g. 2:30 PM" />
              </div>
              <div>
                <label className="text-xs font-medium text-gray-600 mb-1 block">Notes</label>
                <input value={newAct.notes} onChange={e => setNewAct(p => ({ ...p, notes: e.target.value }))}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-orange-400" placeholder="Optional notes" />
              </div>
            </div>
            <div className="flex gap-3 mt-5">
              <button onClick={() => setShowAdd(false)} className="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600">Cancel</button>
              <button onClick={addActivity} className="flex-1 py-2.5 rounded-xl bg-orange-400 text-white text-sm font-medium hover:bg-orange-500 transition-colors">Add</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function StaffMessages() {
  const [selectedMsg, setSelectedMsg] = useState(null);
  const [reply, setReply] = useState("");

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-2xl overflow-hidden" style={{ minHeight: "500px" }}>
        {!selectedMsg ? (
          <div>
            <div className="p-5 border-b border-gray-100">
              <h3 className="font-semibold text-gray-900">Parent Messages</h3>
              <p className="text-xs text-gray-400 mt-0.5">2 unread messages</p>
            </div>
            <div>
              {parentMessages.map(m => (
                <button key={m.id} onClick={() => setSelectedMsg(m)}
                  className="w-full flex items-start gap-3 p-4 border-b border-gray-50 hover:bg-gray-50 text-left transition-colors">
                  <div className="relative shrink-0">
                    <div className="w-10 h-10 rounded-full bg-orange-400 text-white text-sm font-semibold flex items-center justify-center">{m.initials}</div>
                    {m.unread && <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-orange-400 rounded-full border-2 border-white" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-0.5">
                      <p className="text-sm font-semibold text-gray-900">{m.parent}</p>
                      <p className="text-xs text-gray-400">{m.time}</p>
                    </div>
                    <p className="text-xs text-gray-400 mb-1">Re: {m.child}</p>
                    <p className="text-xs text-gray-600 truncate">{m.msg}</p>
                  </div>
                </button>
              ))}
            </div>

            {/* Broadcast */}
            <div className="p-5 border-t border-gray-100">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">Broadcast to All Parents</h4>
              <textarea className="w-full border border-gray-200 rounded-xl p-3 text-sm outline-none resize-none focus:border-orange-400 text-gray-700" rows={3} placeholder="Send a note to all parents today..." />
              <button className="mt-2 flex items-center gap-2 bg-orange-400 text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-orange-500 transition-colors">
                <Send size={14} /> Send to All
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col h-full">
            <div className="flex items-center gap-3 p-4 border-b border-gray-100">
              <button onClick={() => setSelectedMsg(null)} className="text-gray-400 hover:text-gray-600 mr-1">←</button>
              <div className="w-10 h-10 rounded-full bg-orange-400 text-white text-sm font-semibold flex items-center justify-center">{selectedMsg.initials}</div>
              <div>
                <p className="font-semibold text-gray-900">{selectedMsg.parent}</p>
                <p className="text-xs text-gray-400">Re: {selectedMsg.child}</p>
              </div>
            </div>
            <div className="flex-1 p-4 space-y-3 min-h-[300px]">
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 rounded-2xl rounded-bl-sm px-4 py-3 text-sm max-w-xs">{selectedMsg.msg}</div>
              </div>
            </div>
            <div className="p-4 border-t border-gray-100">
              <div className="flex items-center gap-2 bg-gray-50 rounded-xl px-3 py-2">
                <input value={reply} onChange={e => setReply(e.target.value)}
                  placeholder="Type a reply..."
                  className="flex-1 bg-transparent text-sm outline-none text-gray-700 placeholder-gray-400" />
                <button onClick={() => setReply("")}
                  className="w-8 h-8 bg-orange-400 hover:bg-orange-500 text-white rounded-lg flex items-center justify-center transition-colors">
                  <Send size={14} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ReportsPage() {
  return (
    <div className="space-y-4">
      <div className="bg-white rounded-2xl p-5">
        <h3 className="font-semibold text-gray-900 mb-4">Daily Report Builder</h3>
        <p className="text-sm text-gray-500 mb-4">Generate end-of-day reports for parents about their children's day.</p>
        <div className="space-y-3">
          {children.filter(c => c.status === "present").map(child => (
            <div key={child.id} className="flex items-center justify-between p-3 border border-gray-100 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-orange-400 text-white text-xs font-bold flex items-center justify-center">{child.initials}</div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{child.name}</p>
                  <p className="text-xs text-gray-400">{child.group}</p>
                </div>
              </div>
              <button className="flex items-center gap-1.5 text-xs font-medium text-orange-500 border border-orange-200 px-3 py-1.5 rounded-lg hover:bg-orange-50 transition-colors">
                <FileText size={12} /> Generate Report
              </button>
            </div>
          ))}
        </div>
        <button className="w-full mt-4 bg-orange-400 text-white font-semibold py-3 rounded-xl hover:bg-orange-500 transition-colors text-sm">
          Send All Reports to Parents
        </button>
      </div>

      <div className="bg-white rounded-2xl p-5">
        <h3 className="font-semibold text-gray-900 mb-4">Attendance Summary — May 2026</h3>
        <div className="grid grid-cols-3 gap-3">
          {[{ label: "Present Days", value: "18", color: "text-green-600 bg-green-50" },
            { label: "Absent Days",  value: "3",  color: "text-red-500 bg-red-50" },
            { label: "Attendance %", value: "85%", color: "text-orange-500 bg-orange-50" }].map(s => (
            <div key={s.label} className={`rounded-xl p-4 text-center ${s.color.split(" ")[1]}`}>
              <p className={`text-2xl font-bold ${s.color.split(" ")[0]}`}>{s.value}</p>
              <p className="text-xs text-gray-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Main Staff Dashboard ──────────────────────────────────────────
const navItems = [
  { label: "Dashboard",  icon: LayoutDashboard },
  { label: "Children",   icon: Baby },
  { label: "Activities", icon: Activity },
  { label: "Messages",   icon: MessageSquare },
  { label: "Reports",    icon: FileText },
];

export default function StaffDashboard({ onLogout }) {
  const [active, setActive] = useState("Dashboard");
  const [showLogout, setShowLogout] = useState(false);

  const renderPage = () => {
    if (active === "Dashboard")  return <StaffHome />;
    if (active === "Children")   return <ChildrenPage />;
    if (active === "Activities") return <ActivitiesPage />;
    if (active === "Messages")   return <StaffMessages />;
    if (active === "Reports")    return <ReportsPage />;
    return <div className="flex items-center justify-center h-40"><p className="text-gray-400 text-sm">{active} coming soon...</p></div>;
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-60 bg-white border-r border-gray-100 flex flex-col shrink-0">
        <div className="flex items-center gap-2.5 px-5 py-5 border-b border-gray-100">
          <div className="w-10 h-10 rounded-xl bg-orange-400 flex items-center justify-center text-xl">🐣</div>
          <div>
            <p className="text-sm font-medium text-gray-900">LittleSteps</p>
            <p className="text-xs text-orange-400 font-medium">Staff Portal</p>
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

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-[60px] bg-white border-b border-gray-100 flex items-center justify-between px-6 shrink-0">
          <h1 className="text-xl font-medium text-gray-900">{active}</h1>
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center cursor-pointer">
              <Bell size={17} className="text-gray-500" />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-400 text-white text-[10px] font-medium rounded-full flex items-center justify-center border-2 border-white">2</span>
            </div>
            <div className="flex items-center gap-2 pl-1 pr-3 py-1 rounded-full border border-gray-200 hover:bg-gray-50 cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-green-400 text-white text-xs font-medium flex items-center justify-center">SJ</div>
              <div>
                <p className="text-[13px] font-medium text-gray-900 leading-tight">Sarah Johnson</p>
                <p className="text-[11px] text-green-500 font-medium">Staff · Lead Teacher</p>
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-auto p-6">{renderPage()}</main>
      </div>

      {/* Logout Modal */}
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
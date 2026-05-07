export default function Navbar({ onLogin }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 bg-white border-b border-gray-100">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-xl bg-orange-400 flex items-center justify-center text-xl">🐣</div>
        <span className="text-lg font-semibold text-gray-900">LittleSteps</span>
      </div>
      <div className="flex items-center gap-8 text-sm text-gray-600">
        {[["Home","home"],["About","about"],["Programs","programs"],["Explore","explore"],["Contact","contact"],["FAQ","faq"]].map(([label, id]) => (
          <button key={id} onClick={() => scrollTo(id)}
            className="hover:text-orange-400 transition-colors font-medium">
            {label}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <button onClick={onLogin} className="text-sm font-semibold text-gray-900 hover:text-orange-400">Login</button>
        <button onClick={onLogin} className="bg-orange-400 text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-orange-500 transition-colors">Register</button>
      </div>
    </nav>
  );
}
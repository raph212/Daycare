import { useState } from "react";
import { X, Download, ChevronLeft, ChevronRight } from "lucide-react";

const photos = [
  { id: 1, tag: "Art & Craft", caption: "Emma making colorful butterflies", emoji: "🦋" },
  { id: 2, tag: "Outdoor Play", caption: "Playing in the garden", emoji: "🌳" },
  { id: 3, tag: "Meal Time", caption: "Lunch time with friends", emoji: "🍱" },
  { id: 4, tag: "Music", caption: "Singing rhymes together", emoji: "🎵" },
  { id: 5, tag: "Art & Craft", caption: "Drawing with crayons", emoji: "🖍️" },
  { id: 6, tag: "Outdoor Play", caption: "Running on the playground", emoji: "🏃" },
  { id: 7, tag: "Learning", caption: "Story time with teacher", emoji: "📚" },
  { id: 8, tag: "Meal Time", caption: "Snack time - fruits", emoji: "🍎" },
  { id: 9, tag: "Art & Craft", caption: "Finger painting fun", emoji: "🎨" },
  { id: 10, tag: "Learning", caption: "Building with blocks", emoji: "🧱" },
  { id: 11, tag: "Music", caption: "Dancing to music", emoji: "💃" },
  { id: 12, tag: "Outdoor Play", caption: "Sandbox play time", emoji: "🏖️" },
];

const tagColors = {
  "Art & Craft": "bg-green-500",
  "Outdoor Play": "bg-blue-500",
  "Meal Time": "bg-orange-500",
  "Music": "bg-purple-500",
  "Learning": "bg-pink-500",
};

const filters = ["All", "Art & Craft", "Outdoor Play", "Meal Time", "Music", "Learning"];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const filtered = activeFilter === "All"
    ? photos
    : photos.filter(p => p.tag === activeFilter);

  const currentIndex = lightbox !== null ? filtered.findIndex(p => p.id === lightbox) : -1;

  const prev = () => {
    if (currentIndex > 0) setLightbox(filtered[currentIndex - 1].id);
  };
  const next = () => {
    if (currentIndex < filtered.length - 1) setLightbox(filtered[currentIndex + 1].id);
  };

  const lightboxPhoto = photos.find(p => p.id === lightbox);

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-2xl p-5">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-900">Photo Gallery</h3>
          <p className="text-sm text-gray-400">{filtered.length} photos</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-5">
          {filters.map(f => (
            <button key={f} onClick={() => setActiveFilter(f)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                activeFilter === f
                  ? "bg-orange-400 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}>
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-4 gap-3">
          {filtered.map((photo, idx) => (
            <button key={photo.id} onClick={() => setLightbox(photo.id)}
              className="relative group bg-gray-100 rounded-2xl overflow-hidden aspect-square hover:shadow-md transition-shadow">
              {/* Photo placeholder */}
              <div className="w-full h-full flex items-center justify-center bg-gray-100">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth="1.2">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
              </div>

              {/* Hover overlay — only first card shows by default like in screenshot */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition-opacity ${
                idx === 0 ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}>
                <div className="absolute bottom-3 left-3 right-3">
                  <span className={`inline-block text-white text-[10px] font-semibold px-2 py-0.5 rounded-full mb-1 ${tagColors[photo.tag] || "bg-gray-500"}`}>
                    {photo.tag}
                  </span>
                  <p className="text-white text-xs font-semibold leading-tight">{photo.caption}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && lightboxPhoto && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setLightbox(null)}>
          <div className="relative bg-white rounded-2xl overflow-hidden max-w-lg w-full"
            onClick={e => e.stopPropagation()}>

            {/* Close */}
            <button onClick={() => setLightbox(null)}
              className="absolute top-3 right-3 z-10 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors">
              <X size={16} />
            </button>

            {/* Nav arrows */}
            {currentIndex > 0 && (
              <button onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors">
                <ChevronLeft size={16} />
              </button>
            )}
            {currentIndex < filtered.length - 1 && (
              <button onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors">
                <ChevronRight size={16} />
              </button>
            )}

            {/* Photo */}
            <div className="bg-gray-100 h-64 flex items-center justify-center text-8xl">
              {lightboxPhoto.emoji}
            </div>

            {/* Info */}
            <div className="p-4 flex items-center justify-between">
              <div>
                <span className={`inline-block text-white text-xs font-semibold px-2 py-0.5 rounded-full mb-1 ${tagColors[lightboxPhoto.tag] || "bg-gray-500"}`}>
                  {lightboxPhoto.tag}
                </span>
                <p className="font-semibold text-gray-900">{lightboxPhoto.caption}</p>
                <p className="text-xs text-gray-400">{currentIndex + 1} of {filtered.length}</p>
              </div>
              <button className="flex items-center gap-1.5 border border-gray-200 text-sm text-gray-600 px-3 py-2 rounded-xl hover:bg-gray-50 transition-colors">
                <Download size={14} /> Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
import React, { useState } from 'react';
import { Studio } from '../types';
import { INITIAL_STUDIOS } from '../data/mockData';

interface ExploreScreenProps {
  onSelectStudio: (studioId: string) => void;
  onTriggerToast: (msg: string, icon?: string) => void;
}

export const ExploreScreen: React.FC<ExploreScreenProps> = ({
  onSelectStudio,
  onTriggerToast
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [bookmarkedIds, setBookmarkedIds] = useState<Record<string, boolean>>({
    'studio-bloom': true
  });
  const [activeAreaFilter, setActiveAreaFilter] = useState('All');

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'hair', label: 'Hair & Styling' },
    { id: 'barber', label: 'Barber' },
    { id: 'nails', label: 'Nails & Spa' },
    { id: 'wellness', label: 'Wellness' },
    { id: 'tutors', label: 'Tutors' },
  ];

  const toggleBookmark = (id: string, name: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setBookmarkedIds(prev => {
      const updated = !prev[id];
      if (updated) {
        onTriggerToast(`Saved ${name} to your favorites ✨`, 'bookmark');
      } else {
        onTriggerToast(`Removed ${name} from saved favorites`, 'bookmark_border');
      }
      return { ...prev, [id]: updated };
    });
  };

  const filteredStudios = INITIAL_STUDIOS.filter(studio => {
    const matchesQuery =
      studio.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      studio.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      studio.area.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesQuery) return false;

    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'hair') return studio.category.toLowerCase().includes('hair') || studio.id === 'studio-bloom';
    if (selectedCategory === 'barber') return studio.category.toLowerCase().includes('barber');
    if (selectedCategory === 'nails') return studio.category.toLowerCase().includes('nail');
    if (selectedCategory === 'wellness') return studio.category.toLowerCase().includes('wellness') || studio.category.toLowerCase().includes('spa');
    return true;
  });

  return (
    <div className="flex flex-col w-full pb-28 max-w-2xl mx-auto">
      {/* Search & Filter Header */}
      <section className="sticky top-16 z-30 px-4 py-2 bg-[#f9f9ff]/90 backdrop-blur-md">
        <div className="flex items-center gap-2 w-full">
          <div className="flex-1 flex items-center gap-2 px-3 h-12 rounded-xl bg-white shadow-xs border border-[#e9edff]">
            <span className="material-symbols-outlined text-[#777587] text-[22px] shrink-0">search</span>
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="What service or salon are you looking for?"
              className="w-full bg-transparent text-[14px] text-[#141b2b] placeholder:text-[#777587] focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-[#777587] hover:text-[#141b2b] p-1"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            )}
          </div>
          <button
            onClick={() => onTriggerToast('Filters applied: BGC, Taguig • Rating 4.8+ • Open Now', 'tune')}
            aria-label="Open Filters"
            className="w-12 h-12 rounded-xl bg-[#e9edff] flex items-center justify-center text-[#3525cd] hover:bg-[#dce2f7] transition-colors shrink-0 shadow-xs cursor-pointer"
          >
            <span className="material-symbols-outlined text-[22px]">tune</span>
          </button>
        </div>

        {/* Category Filter Horizontal Scroll Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-2 pb-1 -mx-4 px-4">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-[12px] font-semibold transition-transform active:scale-95 shadow-xs cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#3525cd] text-white'
                  : 'bg-white text-[#141b2b] hover:bg-[#e9edff] border border-[#e9edff]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Quick Sub-filter Badges */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pt-1.5 pb-0.5 -mx-4 px-4">
          <button
            onClick={() => onTriggerToast('Filter active: BGC, Taguig 📍', 'near_me')}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#f1f3ff] text-[#141b2b] text-[11px] font-semibold shrink-0 border border-[#e9edff]"
          >
            <span className="material-symbols-outlined text-[15px] text-[#3525cd]">near_me</span>
            <span>BGC, Taguig</span>
          </button>

          <button
            onClick={() => onTriggerToast('Showing high-rated venues (4.8+ stars)', 'star')}
            className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-[#f1f3ff] text-[#141b2b] text-[11px] font-semibold shrink-0 border border-[#e9edff]"
          >
            <span className="material-symbols-outlined text-[14px] text-amber-500" style={{ fontVariationSettings: "'FILL' 1" }}>
              star
            </span>
            <span>4.8+</span>
          </button>

          <button
            onClick={() => onTriggerToast('Showing studios with same-day open slots ⚡', 'bolt')}
            className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-[#f1f3ff] text-[#141b2b] text-[11px] font-semibold shrink-0 border border-[#e9edff]"
          >
            <span className="material-symbols-outlined text-[15px] text-[#00702f]">bolt</span>
            <span>Available Today</span>
          </button>

          <button
            onClick={() => onTriggerToast('Budget filter: ₱400 - ₱1,000 range', 'payments')}
            className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-[#f1f3ff] text-[#141b2b] text-[11px] font-semibold shrink-0 border border-[#e9edff]"
          >
            <span className="material-symbols-outlined text-[15px] text-[#777587]">payments</span>
            <span>₱400 - ₱1000</span>
          </button>
        </div>
      </section>

      {/* Content Stream: Curated & Recommended Header */}
      <section className="px-4 pt-3 flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[11px] font-semibold text-[#3525cd] uppercase tracking-wider">
              Curated Discovery
            </span>
            <h2 className="text-[18px] font-bold text-[#141b2b] font-display">
              Recommended for Alex
            </h2>
          </div>
          <div className="flex items-center gap-1 bg-[#f1f3ff] px-2.5 py-1 rounded-full text-[#464555] text-[11px] font-semibold border border-[#e9edff]">
            <span className="material-symbols-outlined text-[15px]">tune</span>
            <span>{filteredStudios.length} places</span>
          </div>
        </div>
      </section>

      {/* Marketplace Business Cards Stream */}
      <section className="px-4 pt-3 flex flex-col gap-4">
        {filteredStudios.map(studio => (
          <article
            key={studio.id}
            onClick={() => onSelectStudio(studio.id)}
            className="bg-white rounded-2xl p-4 shadow-sm border border-[#e9edff] flex flex-col gap-3 relative transition-all duration-200 hover:shadow-md cursor-pointer"
          >
            <div className="relative w-full h-44 rounded-xl overflow-hidden bg-[#e9edff]">
              <img
                src={studio.image}
                alt={studio.name}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              {/* Badges Top Left */}
              <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                {studio.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 bg-white/90 backdrop-blur-md text-[#141b2b] text-[11px] font-semibold px-2.5 py-0.5 rounded-full shadow-xs"
                  >
                    {t === 'Instant Confirm' && (
                      <span className="material-symbols-outlined text-[13px] text-[#00702f]">bolt</span>
                    )}
                    {t === 'Sanitized' && (
                      <span className="material-symbols-outlined text-[13px] text-[#3525cd]">verified_user</span>
                    )}
                    {t === 'Master Stylists' && (
                      <span className="material-symbols-outlined text-[13px] text-[#3525cd]">content_cut</span>
                    )}
                    {t === 'Top Pick' && (
                      <span className="material-symbols-outlined text-[13px] text-[#00702f]">workspace_premium</span>
                    )}
                    {t === 'Holistic Care' && (
                      <span className="material-symbols-outlined text-[13px] text-[#00702f]">spa</span>
                    )}
                    <span>{t}</span>
                  </span>
                ))}
              </div>

              {/* Bookmark Button Top Right */}
              <button
                onClick={e => toggleBookmark(studio.id, studio.name, e)}
                aria-label={`Bookmark ${studio.name}`}
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#141b2b] shadow-xs hover:scale-105 active:scale-95 transition-transform"
              >
                <span
                  className={`material-symbols-outlined text-[20px] ${
                    bookmarkedIds[studio.id] ? 'text-[#3525cd]' : 'text-[#141b2b]'
                  }`}
                  style={{ fontVariationSettings: bookmarkedIds[studio.id] ? "'FILL' 1" : "'FILL' 0" }}
                >
                  bookmark
                </span>
              </button>

              {/* Bottom Micro Info Bar on Image */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px]">
                {studio.nextAvailable && (
                  <span className="inline-flex items-center gap-1 bg-[#4f46e5]/85 backdrop-blur-xs px-2 py-0.5 rounded-md font-semibold text-white">
                    <span className="material-symbols-outlined text-[13px]">schedule</span>
                    {studio.nextAvailable}
                  </span>
                )}
                <span className="bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded-md text-white font-medium">
                  {studio.area}
                </span>
              </div>
            </div>

            {/* Info and Ratings */}
            <div className="flex flex-col gap-1">
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="text-[18px] font-bold text-[#141b2b] tracking-tight font-display">
                  {studio.name}
                </h3>
                <div className="flex items-center gap-1 text-[#141b2b] shrink-0">
                  <span
                    className="material-symbols-outlined text-[17px] text-amber-500"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span className="text-[14px] font-bold">{studio.rating}</span>
                  <span className="text-[12px] text-[#777587]">({studio.reviewCount})</span>
                </div>
              </div>
              <p className="text-[12px] text-[#464555] line-clamp-1">{studio.category} • Top Stylists</p>
            </div>

            {/* Price & Book Button */}
            <div className="flex items-center justify-between pt-1 mt-auto border-t border-[#f1f3ff]">
              <div className="flex flex-col">
                <span className="text-[11px] font-medium text-[#777587]">Starting from</span>
                <span className="text-[20px] font-bold text-[#141b2b] font-display leading-tight">
                  ₱{studio.startingPrice}
                </span>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectStudio(studio.id);
                }}
                className="inline-flex items-center justify-center gap-1.5 px-5 h-11 rounded-xl bg-[#3525cd] hover:bg-[#4f46e5] text-white text-[14px] font-semibold shadow-xs active:scale-95 transition-transform"
              >
                <span>Book</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

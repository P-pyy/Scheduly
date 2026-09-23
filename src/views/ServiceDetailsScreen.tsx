import React, { useState } from 'react';
import { SalonService } from '../types';
import { ASSETS, INITIAL_SERVICES } from '../data/mockData';

interface ServiceDetailsScreenProps {
  onContinueToSlots: (selectedService: SalonService) => void;
  onTriggerToast: (msg: string, icon?: string) => void;
}

export const ServiceDetailsScreen: React.FC<ServiceDetailsScreenProps> = ({
  onContinueToSlots,
  onTriggerToast
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('srv-1');
  const [activeTab, setActiveTab] = useState<'services' | 'about' | 'reviews' | 'portfolio'>('services');
  const [isBookmarked, setIsBookmarked] = useState(false);

  const selectedService = INITIAL_SERVICES.find(s => s.id === selectedServiceId) || INITIAL_SERVICES[0];

  const popularHaircuts = INITIAL_SERVICES.filter(s => s.id === 'srv-1' || s.id === 'srv-3');
  const colorTreatments = INITIAL_SERVICES.filter(s => s.id === 'srv-2' || s.id === 'srv-4');
  const nailTreatments = INITIAL_SERVICES.filter(s => s.id === 'srv-5');

  const handleToggleSelect = (service: SalonService) => {
    setSelectedServiceId(service.id);
    onTriggerToast(`Selected ${service.title} (₱${service.price.toLocaleString()})`, 'check_circle');
  };

  return (
    <div className="flex flex-col w-full pb-28 lg:pb-16 max-w-6xl mx-auto lg:px-6">
      {/* Interactive Top Action Row */}
      <div className="px-4 pt-3 pb-2 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e1e8fd] text-[#141b2b] text-[12px] font-semibold">
          <span className="material-symbols-outlined text-[16px] text-[#00702f]" style={{ fontVariationSettings: "'FILL' 1" }}>
            eco
          </span>
          Eco-certified Salon
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onTriggerToast('Share link copied to clipboard! 🔗', 'ios_share')}
            aria-label="Share studio"
            className="w-10 h-10 rounded-full bg-[#e9edff] flex items-center justify-center text-[#141b2b] hover:bg-[#dce2f7] transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">share</span>
          </button>
          <button
            onClick={() => {
              setIsBookmarked(!isBookmarked);
              onTriggerToast(isBookmarked ? 'Removed from favorites' : 'Added to favorites ⭐', 'bookmark');
            }}
            aria-label="Bookmark studio"
            className="w-10 h-10 rounded-full bg-[#e9edff] flex items-center justify-center text-[#141b2b] hover:bg-[#dce2f7] transition-colors"
          >
            <span
              className={`material-symbols-outlined text-[20px] ${isBookmarked ? 'text-[#3525cd]' : ''}`}
              style={{ fontVariationSettings: isBookmarked ? "'FILL' 1" : "'FILL' 0" }}
            >
              bookmark
            </span>
          </button>
        </div>
      </div>

      {/* Studio Hero Profile Card */}
      <section className="px-4 pt-1">
        <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm border border-[#e9edff]">
          <div className="relative h-48 w-full overflow-hidden bg-[#e9edff]">
            <img
              src={ASSETS.studioBloomInside}
              alt="Studio Bloom Interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141b2b]/85 via-[#141b2b]/25 to-transparent"></div>

            <div className="absolute top-3 left-3">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-semibold text-[#141b2b] shadow-xs">
                <span className="material-symbols-outlined text-[#3525cd] text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  verified
                </span>
                Verified Partner
              </span>
            </div>

            <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
              <div>
                <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-[#dce2f7]">
                  Hair &amp; Beauty Sanctuary
                </span>
                <h2 className="text-[26px] font-bold text-white drop-shadow-xs font-display leading-tight">
                  Studio Bloom
                </h2>
              </div>
              <span className="px-2.5 py-1 rounded-lg bg-white text-[#3525cd] text-[12px] font-bold shadow-xs">
                Top Rated
              </span>
            </div>
          </div>

          <div className="p-4 flex flex-col gap-3">
            <div className="flex items-center flex-wrap gap-x-2 gap-y-1 text-[13px] text-[#464555]">
              <span className="inline-flex items-center font-bold text-[#141b2b]">
                <span className="material-symbols-outlined text-[16px] text-amber-500 mr-1" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
                4.9
              </span>
              <span>(128 verified reviews)</span>
              <span>•</span>
              <span className="inline-flex items-center gap-0.5 text-[#141b2b]">
                <span className="material-symbols-outlined text-[15px] text-[#3525cd]">location_on</span>
                High Street, BGC, Taguig
              </span>
            </div>

            <div className="flex items-center gap-2 text-[12px]">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#7ffc97] text-[#002109] font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#005522]"></span>
                Open now
              </span>
              <span className="text-[#464555] font-medium">Closes 8:00 PM • Valet parking available</span>
            </div>

            {/* Action Pills Grid */}
            <div className="grid grid-cols-4 gap-2 pt-1">
              <button
                onClick={() => onTriggerToast('Opening navigation route to BGC High Street South...', 'navigation')}
                className="flex flex-col items-center justify-center gap-1 py-2 px-1 rounded-xl bg-[#f1f3ff] hover:bg-[#e9edff] transition-colors text-[#141b2b]"
              >
                <div className="w-8 h-8 rounded-full bg-[#e9edff] flex items-center justify-center text-[#3525cd]">
                  <span className="material-symbols-outlined text-[18px]">turn_right</span>
                </div>
                <span className="text-[11px] font-medium">Directions</span>
              </button>

              <button
                onClick={() => onTriggerToast('Live chat connected with Studio Bloom receptionist', 'chat')}
                className="flex flex-col items-center justify-center gap-1 py-2 px-1 rounded-xl bg-[#f1f3ff] hover:bg-[#e9edff] transition-colors text-[#141b2b]"
              >
                <div className="w-8 h-8 rounded-full bg-[#e9edff] flex items-center justify-center text-[#3525cd]">
                  <span className="material-symbols-outlined text-[18px]">chat_bubble</span>
                </div>
                <span className="text-[11px] font-medium">Message</span>
              </button>

              <button
                onClick={() => onTriggerToast('Calling Studio Bloom direct front desk: +63 2 8888 1234', 'call')}
                className="flex flex-col items-center justify-center gap-1 py-2 px-1 rounded-xl bg-[#f1f3ff] hover:bg-[#e9edff] transition-colors text-[#141b2b]"
              >
                <div className="w-8 h-8 rounded-full bg-[#e9edff] flex items-center justify-center text-[#3525cd]">
                  <span className="material-symbols-outlined text-[18px]">call</span>
                </div>
                <span className="text-[11px] font-medium">Call</span>
              </button>

              <button
                onClick={() => onTriggerToast('Studio profile link ready to share!', 'ios_share')}
                className="flex flex-col items-center justify-center gap-1 py-2 px-1 rounded-xl bg-[#f1f3ff] hover:bg-[#e9edff] transition-colors text-[#141b2b]"
              >
                <div className="w-8 h-8 rounded-full bg-[#e9edff] flex items-center justify-center text-[#3525cd]">
                  <span className="material-symbols-outlined text-[18px]">ios_share</span>
                </div>
                <span className="text-[11px] font-medium">Share</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Segmented Navigation Tabs */}
      <div className="sticky top-16 z-30 px-4 pt-4 pb-2 bg-[#f9f9ff]/95 backdrop-blur-md">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          <button
            onClick={() => setActiveTab('services')}
            className={`shrink-0 px-4 py-2 rounded-full text-[13px] font-semibold flex items-center gap-1.5 transition-all ${
              activeTab === 'services'
                ? 'bg-[#3525cd] text-white shadow-xs'
                : 'bg-[#e9edff] text-[#464555] hover:text-[#141b2b]'
            }`}
          >
            <span>Services</span>
            <span className="w-5 h-5 rounded-full bg-white/25 text-white text-[11px] flex items-center justify-center">
              5
            </span>
          </button>

          <button
            onClick={() => {
              setActiveTab('about');
              onTriggerToast('Studio Bloom: Established in 2021 in BGC. Specializing in organic hair care.', 'info');
            }}
            className={`shrink-0 px-4 py-2 rounded-full text-[13px] font-medium transition-all ${
              activeTab === 'about'
                ? 'bg-[#3525cd] text-white shadow-xs'
                : 'bg-[#e9edff] text-[#464555] hover:text-[#141b2b]'
            }`}
          >
            About &amp; Hours
          </button>

          <button
            onClick={() => {
              setActiveTab('reviews');
              onTriggerToast('128 5-star reviews from verified clients!', 'star');
            }}
            className={`shrink-0 px-4 py-2 rounded-full text-[13px] font-medium transition-all flex items-center gap-1 ${
              activeTab === 'reviews'
                ? 'bg-[#3525cd] text-white shadow-xs'
                : 'bg-[#e9edff] text-[#464555] hover:text-[#141b2b]'
            }`}
          >
            <span>Reviews</span>
            <span className="text-[11px] opacity-80">128</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('portfolio');
              onTriggerToast('Showing recent balayage and haircut transformations', 'photo_library');
            }}
            className={`shrink-0 px-4 py-2 rounded-full text-[13px] font-medium transition-all ${
              activeTab === 'portfolio'
                ? 'bg-[#3525cd] text-white shadow-xs'
                : 'bg-[#e9edff] text-[#464555] hover:text-[#141b2b]'
            }`}
          >
            Portfolio
          </button>
        </div>
      </div>

      {/* Services List Subsections */}
      <div className="px-4 flex flex-col gap-5 pt-2">
        {/* Category 1: Popular Haircuts */}
        <section className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#3525cd]"></span>
              <h3 className="text-[18px] font-bold text-[#141b2b] font-display">Popular Haircuts</h3>
            </div>
            <span className="text-[11px] font-semibold text-[#464555]">2 services</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {popularHaircuts.map(srv => {
              const isSelected = selectedServiceId === srv.id;
              return (
                <article
                  key={srv.id}
                  onClick={() => handleToggleSelect(srv)}
                  className={`p-4 rounded-2xl bg-white shadow-xs border transition-all duration-150 flex flex-col justify-between gap-3 cursor-pointer ${
                    isSelected ? 'border-2 border-[#3525cd] ring-4 ring-[#3525cd]/10' : 'border-[#e9edff] hover:border-[#c7c4d8]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="text-[16px] font-bold text-[#141b2b]">{srv.title}</h4>
                        {srv.isPopular && (
                          <span className="px-2 py-0.5 rounded-full bg-[#e2dfff] text-[#3323cc] text-[11px] font-semibold">
                            Popular
                          </span>
                        )}
                      </div>
                      <p className="text-[12px] text-[#464555] mt-1 line-clamp-2">{srv.description}</p>
                      <div className="flex items-center gap-3 mt-2 text-[#464555] text-[12px]">
                        <span className="inline-flex items-center gap-1 font-medium">
                          <span className="material-symbols-outlined text-[15px] text-[#5a5e69]">schedule</span>
                          {srv.duration}
                        </span>
                        <span>•</span>
                        <span>Includes aromatic rinse</span>
                      </div>
                    </div>
                    <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-[#e9edff]">
                      <img src={srv.image} alt={srv.title} className="w-full h-full object-cover" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1 border-t border-[#f1f3ff]">
                    <span className="text-[20px] font-bold text-[#141b2b] font-display">
                      ₱{srv.price.toLocaleString()}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleToggleSelect(srv);
                      }}
                      className={`px-4 py-2 rounded-xl text-[13px] font-semibold flex items-center gap-1.5 transition-all ${
                        isSelected
                          ? 'bg-[#3525cd] text-white shadow-xs'
                          : 'bg-[#e9edff] text-[#3525cd] hover:bg-[#3525cd] hover:text-white'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[17px]">
                        {isSelected ? 'check' : 'add'}
                      </span>
                      <span>{isSelected ? 'Selected' : 'Book'}</span>
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Category 2: Color & Treatments */}
        <section className="flex flex-col gap-3 pt-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#4f46e5]"></span>
              <h3 className="text-[18px] font-bold text-[#141b2b] font-display">Color &amp; Treatments</h3>
            </div>
            <span className="text-[11px] font-semibold text-[#464555]">2 services</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {colorTreatments.map(srv => {
              const isSelected = selectedServiceId === srv.id;
              return (
                <article
                  key={srv.id}
                  onClick={() => handleToggleSelect(srv)}
                  className={`p-4 rounded-2xl bg-white shadow-xs border transition-all duration-150 flex flex-col justify-between gap-3 cursor-pointer ${
                    isSelected ? 'border-2 border-[#3525cd] ring-4 ring-[#3525cd]/10' : 'border-[#e9edff] hover:border-[#c7c4d8]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[16px] font-bold text-[#141b2b]">{srv.title}</h4>
                      <p className="text-[12px] text-[#464555] mt-1 line-clamp-2">{srv.description}</p>
                      <div className="flex items-center gap-3 mt-2 text-[#464555] text-[12px]">
                        <span className="inline-flex items-center gap-1 font-medium">
                          <span className="material-symbols-outlined text-[15px] text-[#5a5e69]">schedule</span>
                          {srv.duration}
                        </span>
                        <span>•</span>
                        <span className="text-[#00702f] font-semibold">Includes toner</span>
                      </div>
                    </div>
                    <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-[#e9edff]">
                      <img src={srv.image} alt={srv.title} className="w-full h-full object-cover" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1 border-t border-[#f1f3ff]">
                    <span className="text-[20px] font-bold text-[#141b2b] font-display">
                      ₱{srv.price.toLocaleString()}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleToggleSelect(srv);
                      }}
                      className={`px-4 py-2 rounded-xl text-[13px] font-semibold flex items-center gap-1.5 transition-all ${
                        isSelected
                          ? 'bg-[#3525cd] text-white shadow-xs'
                          : 'bg-[#e9edff] text-[#3525cd] hover:bg-[#3525cd] hover:text-white'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[17px]">
                        {isSelected ? 'check' : 'add'}
                      </span>
                      <span>{isSelected ? 'Selected' : 'Book'}</span>
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Category 3: Nail & Grooming */}
        <section className="flex flex-col gap-3 pt-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#5a5e69]"></span>
              <h3 className="text-[18px] font-bold text-[#141b2b] font-display">Nail &amp; Grooming</h3>
            </div>
            <span className="text-[11px] font-semibold text-[#464555]">1 service</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {nailTreatments.map(srv => {
              const isSelected = selectedServiceId === srv.id;
              return (
                <article
                  key={srv.id}
                  onClick={() => handleToggleSelect(srv)}
                  className={`p-4 rounded-2xl bg-white shadow-xs border transition-all duration-150 flex flex-col justify-between gap-3 cursor-pointer ${
                    isSelected ? 'border-2 border-[#3525cd] ring-4 ring-[#3525cd]/10' : 'border-[#e9edff] hover:border-[#c7c4d8]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[16px] font-bold text-[#141b2b]">{srv.title}</h4>
                      <p className="text-[12px] text-[#464555] mt-1 line-clamp-2">{srv.description}</p>
                      <div className="flex items-center gap-3 mt-2 text-[#464555] text-[12px]">
                        <span className="inline-flex items-center gap-1 font-medium">
                          <span className="material-symbols-outlined text-[15px] text-[#5a5e69]">schedule</span>
                          {srv.duration}
                        </span>
                        <span>•</span>
                        <span>Organic oils</span>
                      </div>
                    </div>
                    <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-[#e9edff]">
                      <img src={srv.image} alt={srv.title} className="w-full h-full object-cover" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1 border-t border-[#f1f3ff]">
                    <span className="text-[20px] font-bold text-[#141b2b] font-display">
                      ₱{srv.price.toLocaleString()}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleToggleSelect(srv);
                      }}
                      className={`px-4 py-2 rounded-xl text-[13px] font-semibold flex items-center gap-1.5 transition-all ${
                        isSelected
                          ? 'bg-[#3525cd] text-white shadow-xs'
                          : 'bg-[#e9edff] text-[#3525cd] hover:bg-[#3525cd] hover:text-white'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[17px]">
                        {isSelected ? 'check' : 'add'}
                      </span>
                      <span>{isSelected ? 'Selected' : 'Book'}</span>
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Quality Guarantee Box */}
        <div className="p-4 rounded-2xl bg-[#f1f3ff] flex items-center gap-3 text-[#464555] border border-[#e9edff]">
          <div className="w-10 h-10 rounded-full bg-[#7ffc97] flex items-center justify-center text-[#002109] shrink-0">
            <span className="material-symbols-outlined text-[22px]">verified_user</span>
          </div>
          <div>
            <h4 className="text-[14px] font-bold text-[#141b2b]">Scheduly Guarantee</h4>
            <p className="text-[12px] text-[#464555]">
              Instant booking confirmation, fee-free rescheduling up to 4 hours before.
            </p>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Summary Sheet */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl shadow-[0_-8px_24px_rgba(20,27,43,0.08)] px-4 py-2.5 pb-[env(safe-area-inset-bottom,10px)] border-t border-[#e9edff]">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5">
          {/* Quick Detail Summary */}
          <div className="flex items-center justify-between sm:justify-start gap-3 min-w-0">
            <div className="flex items-center gap-2 min-w-0">
              <span className="w-2 h-2 rounded-full bg-[#3525cd] animate-pulse shrink-0"></span>
              <p className="text-[13px] text-[#141b2b] truncate">
                Selected:{' '}
                <span className="font-semibold text-[#3525cd]">
                  {selectedService.title}
                </span>
              </p>
            </div>
            <span className="text-[18px] font-bold text-[#141b2b] font-display shrink-0">
              ₱{selectedService.price.toLocaleString()}
            </span>
          </div>

          {/* Primary CTA */}
          <button
            onClick={() => onContinueToSlots(selectedService)}
            className="w-full sm:w-auto px-6 h-10 sm:h-11 rounded-xl bg-[#3525cd] hover:bg-[#4f46e5] text-white text-[14px] font-semibold shadow-md flex items-center justify-center gap-2 active:scale-[0.99] transition-all cursor-pointer shrink-0"
          >
            <span>Continue to Date &amp; Time</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};

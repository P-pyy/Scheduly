import React from 'react';
import { Booking } from '../types';
import { ASSETS, INITIAL_STUDIOS } from '../data/mockData';

interface ClientBookingsScreenProps {
  bookings: Booking[];
  onBookNew: () => void;
  onSelectStudio: (studioId: string) => void;
  onReschedule: (booking: Booking) => void;
  onCancelBooking: (bookingId: string) => void;
  onTriggerToast: (msg: string, icon?: string) => void;
}

export const ClientBookingsScreen: React.FC<ClientBookingsScreenProps> = ({
  bookings,
  onBookNew,
  onSelectStudio,
  onReschedule,
  onCancelBooking,
  onTriggerToast
}) => {
  const activeBookings = bookings.filter(b => b.status === 'confirmed' || b.status === 'pending');
  const pastBookings = bookings.filter(b => b.status === 'completed' || b.status === 'cancelled');

  const upcomingBooking = activeBookings[0];

  return (
    <div className="flex flex-col w-full pb-28 max-w-2xl mx-auto">
      {/* Alex Profile Stats Banner */}
      <section className="px-4 pt-4 pb-2">
        <div className="p-4 rounded-2xl bg-white shadow-xs border border-[#e9edff] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={ASSETS.alexAvatar}
                alt="Alex Santos"
                className="w-13 h-13 rounded-full object-cover ring-2 ring-[#3525cd]/20 shadow-xs"
              />
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-[#7ffc97] ring-2 ring-white"></span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h1 className="text-[17px] font-bold text-[#141b2b] font-display">Alex Santos</h1>
                <span className="px-2 py-0.5 rounded-full bg-[#dee2ef] text-[#3525cd] text-[10px] font-bold uppercase tracking-wider">
                  VIP
                </span>
              </div>
              <div className="flex items-center gap-3 text-[12px] text-[#464555] mt-0.5">
                <span>
                  <strong className="text-[#141b2b] font-semibold">{activeBookings.length}</strong> Active
                </span>
                <span>•</span>
                <span>
                  <strong className="text-[#141b2b] font-semibold">14</strong> Visits
                </span>
                <span>•</span>
                <span>
                  <strong className="text-[#141b2b] font-semibold">6</strong> Studios
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={onBookNew}
            className="px-3.5 py-2 rounded-xl bg-[#3525cd] text-white text-[12px] font-semibold flex items-center gap-1 shadow-xs hover:bg-[#4f46e5] active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[16px]">add</span>
            <span>Book New</span>
          </button>
        </div>
      </section>

      {/* Featured Upcoming Appointment Card */}
      <section className="px-4 pt-3 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-semibold tracking-wider uppercase text-[#3525cd]">
            Next Appointment
          </span>
          <span className="text-[12px] text-[#464555]">Instant Confirmed</span>
        </div>

        {upcomingBooking ? (
          <div className="rounded-2xl bg-white p-4 shadow-sm border border-[#e9edff] flex flex-col gap-3 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3525cd] via-[#4f46e5] to-[#7ffc97]"></div>

            <div className="flex items-start justify-between gap-2 pt-1">
              <div>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#7ffc97] text-[#002109] text-[11px] font-bold mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#005522]"></span>
                  Upcoming Today
                </span>
                <h2 className="text-[18px] font-bold text-[#141b2b] font-display">
                  {upcomingBooking.businessName}
                </h2>
                <p className="text-[13px] font-semibold text-[#3525cd]">
                  {upcomingBooking.serviceTitle}
                </p>
              </div>
              <div className="text-right">
                <span className="text-[11px] text-[#777587]">Booking #</span>
                <div className="text-[13px] font-mono font-bold text-[#141b2b]">
                  {upcomingBooking.bookingNumber}
                </div>
              </div>
            </div>

            {/* Time & Stylist Highlight Container */}
            <div className="rounded-xl bg-[#f1f3ff] p-3 flex items-center justify-between gap-2 border border-[#e9edff]">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#3525cd] shadow-xs">
                  <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                </div>
                <div>
                  <div className="text-[13px] font-bold text-[#141b2b]">
                    {upcomingBooking.date.includes('Oct 20') ? 'Today, 10:45 AM' : `${upcomingBooking.date} • ${upcomingBooking.time}`}
                  </div>
                  <div className="text-[12px] text-[#464555]">
                    {upcomingBooking.duration} with {upcomingBooking.stylistName}
                  </div>
                </div>
              </div>

              {upcomingBooking.stylistAvatar && (
                <img
                  src={upcomingBooking.stylistAvatar}
                  alt={upcomingBooking.stylistName}
                  className="w-9 h-9 rounded-full object-cover ring-2 ring-white shadow-xs"
                />
              )}
            </div>

            {/* Location & Payment Status */}
            <div className="flex flex-col gap-1 text-[12px] text-[#464555]">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-[#3525cd]">location_on</span>
                <span className="text-[#141b2b] font-medium">{upcomingBooking.location}</span>
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="text-[#464555]">
                  Status: <strong className="text-[#141b2b]">{upcomingBooking.paymentStatus}</strong> ({upcomingBooking.paymentMethod || 'Pay at Venue'})
                </span>
                <span className="text-[18px] font-bold text-[#141b2b] font-display">
                  ₱{upcomingBooking.fee.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Action Buttons Row */}
            <div className="grid grid-cols-4 gap-2 pt-2 border-t border-[#f1f3ff]">
              <button
                onClick={() => onTriggerToast('Opening GPS route to High Street South BGC... 🗺️', 'near_me')}
                className="py-2 px-1 rounded-xl bg-[#f1f3ff] text-[#141b2b] text-[11px] font-semibold flex flex-col items-center justify-center gap-1 hover:bg-[#e9edff] transition-colors active:scale-95"
              >
                <span className="material-symbols-outlined text-[18px] text-[#3525cd]">directions</span>
                <span>Directions</span>
              </button>

              <button
                onClick={() => onTriggerToast('Added to Apple Calendar & Google Calendar! 📅', 'event_available')}
                className="py-2 px-1 rounded-xl bg-[#f1f3ff] text-[#141b2b] text-[11px] font-semibold flex flex-col items-center justify-center gap-1 hover:bg-[#e9edff] transition-colors active:scale-95"
              >
                <span className="material-symbols-outlined text-[18px] text-[#3525cd]">edit_calendar</span>
                <span>Add to Cal</span>
              </button>

              <button
                onClick={() => onReschedule(upcomingBooking)}
                className="py-2 px-1 rounded-xl bg-[#f1f3ff] text-[#141b2b] text-[11px] font-semibold flex flex-col items-center justify-center gap-1 hover:bg-[#e9edff] transition-colors active:scale-95"
              >
                <span className="material-symbols-outlined text-[18px] text-[#3525cd]">schedule</span>
                <span>Reschedule</span>
              </button>

              <button
                onClick={() => {
                  if (confirm('Are you sure you want to cancel this appointment? Free cancellation is available.')) {
                    onCancelBooking(upcomingBooking.id);
                  }
                }}
                className="py-2 px-1 rounded-xl bg-[#fff0f0] text-[#ba1a1a] text-[11px] font-semibold flex flex-col items-center justify-center gap-1 hover:bg-[#ffe5e5] transition-colors active:scale-95"
              >
                <span className="material-symbols-outlined text-[18px] text-[#ba1a1a]">cancel</span>
                <span>Cancel</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="rounded-2xl bg-white p-6 shadow-xs border border-[#e9edff] text-center flex flex-col items-center gap-2">
            <span className="material-symbols-outlined text-[32px] text-[#777587]">event_busy</span>
            <h3 className="text-[16px] font-bold text-[#141b2b]">No Upcoming Appointments</h3>
            <p className="text-[13px] text-[#464555]">You're all clear! Ready to schedule your next visit?</p>
            <button
              onClick={onBookNew}
              className="mt-2 px-4 py-2 rounded-xl bg-[#3525cd] text-white text-[13px] font-semibold"
            >
              Browse Studios
            </button>
          </div>
        )}
      </section>

      {/* Favorite Studios Horizontal Scroller */}
      <section className="px-4 pt-6 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h3 className="text-[16px] font-bold text-[#141b2b] font-display">Favorite Studios</h3>
          <span className="text-[12px] font-semibold text-[#3525cd]">Quick Rebook</span>
        </div>

        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-1">
          {INITIAL_STUDIOS.slice(0, 3).map(st => (
            <div
              key={st.id}
              onClick={() => onSelectStudio(st.id)}
              className="shrink-0 w-60 rounded-2xl bg-white p-3 shadow-xs border border-[#e9edff] flex flex-col gap-2 hover:border-[#3525cd] cursor-pointer transition-all"
            >
              <div className="relative h-28 w-full rounded-xl overflow-hidden bg-[#e9edff]">
                <img src={st.image} alt={st.name} className="w-full h-full object-cover" />
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-md px-2 py-0.5 rounded-md text-[10px] font-bold text-[#141b2b] flex items-center gap-0.5">
                  <span className="material-symbols-outlined text-[12px] text-amber-500" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  {st.rating}
                </div>
              </div>
              <div>
                <h4 className="text-[14px] font-bold text-[#141b2b] truncate">{st.name}</h4>
                <p className="text-[11px] text-[#464555] truncate">{st.location}</p>
              </div>
              <div className="flex items-center justify-between pt-1 border-t border-[#f1f3ff]">
                <span className="text-[12px] font-bold text-[#141b2b]">From ₱{st.startingPrice}</span>
                <span className="px-2.5 py-1 rounded-lg bg-[#e9edff] text-[#3525cd] text-[11px] font-bold">
                  Book
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Past Visits History Section */}
      <section className="px-4 pt-6 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h3 className="text-[16px] font-bold text-[#141b2b] font-display">Past Visits</h3>
          <span className="text-[12px] text-[#464555]">14 completed</span>
        </div>

        <div className="flex flex-col gap-2.5">
          {pastBookings.length > 0 ? (
            pastBookings.map(b => (
              <div
                key={b.id}
                className="p-3 rounded-2xl bg-white border border-[#e9edff] shadow-xs flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#e9edff] flex items-center justify-center text-[#3525cd]">
                    <span className="material-symbols-outlined text-[20px]">content_cut</span>
                  </div>
                  <div>
                    <h4 className="text-[14px] font-bold text-[#141b2b]">{b.serviceTitle}</h4>
                    <div className="text-[12px] text-[#464555]">
                      {b.businessName} • {b.date}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[14px] font-bold text-[#141b2b] font-display">
                    ₱{b.fee.toLocaleString()}
                  </span>
                  <button
                    onClick={() => onTriggerToast(`Receipt for #${b.id} sent to alex.santos@gmail.com 📧`, 'receipt')}
                    className="p-2 rounded-lg bg-[#f1f3ff] text-[#3525cd] hover:bg-[#e9edff]"
                    title="View Receipt"
                  >
                    <span className="material-symbols-outlined text-[16px]">receipt_long</span>
                  </button>
                  <button
                    onClick={() => onSelectStudio('studio-bloom')}
                    className="px-3 py-1.5 rounded-lg bg-[#3525cd] text-white text-[11px] font-semibold"
                  >
                    Rebook
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="p-3 rounded-2xl bg-white border border-[#e9edff] shadow-xs flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#e9edff] flex items-center justify-center text-[#3525cd]">
                  <span className="material-symbols-outlined text-[20px]">spa</span>
                </div>
                <div>
                  <h4 className="text-[14px] font-bold text-[#141b2b]">Styling &amp; Blowout</h4>
                  <div className="text-[12px] text-[#464555]">Studio Bloom • Oct 4, 2026</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[14px] font-bold text-[#141b2b] font-display">₱380</span>
                <button
                  onClick={() => onSelectStudio('studio-bloom')}
                  className="px-3 py-1.5 rounded-lg bg-[#3525cd] text-white text-[11px] font-semibold"
                >
                  Rebook
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

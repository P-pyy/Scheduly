import React, { useState } from 'react';
import { Booking } from '../types';
import { INITIAL_STYLISTS, ASSETS } from '../data/mockData';

interface BusinessCalendarScreenProps {
  bookings: Booking[];
  onSelectBooking: (booking: Booking) => void;
  onAddAppointment: () => void;
  onTriggerToast: (msg: string, icon?: string) => void;
}

export const BusinessCalendarScreen: React.FC<BusinessCalendarScreenProps> = ({
  bookings,
  onSelectBooking,
  onAddAppointment,
  onTriggerToast
}) => {
  const [activeView, setActiveView] = useState<'day' | '3day' | 'week'>('day');
  const [selectedStylist, setSelectedStylist] = useState('all');

  const hours = [
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '01:00 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
    '05:00 PM'
  ];

  return (
    <div className="flex flex-col w-full pb-32 max-w-2xl mx-auto">
      {/* Date Header & View Switcher */}
      <section className="sticky top-16 z-30 px-4 py-2.5 bg-[#f9f9ff]/95 backdrop-blur-md border-b border-[#e9edff]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div>
              <div className="flex items-center gap-1 cursor-pointer group">
                <h1 className="text-[17px] font-bold text-[#141b2b] font-display">
                  Tuesday, Oct 20
                </h1>
                <span className="material-symbols-outlined text-[18px] text-[#777587] group-hover:text-[#3525cd]">
                  keyboard_arrow_down
                </span>
              </div>
              <p className="text-[11px] text-[#464555]">Studio Bloom • 3 Specialists Active</p>
            </div>
          </div>

          {/* Day / 3-Day / Week Pills */}
          <div className="flex items-center bg-[#e9edff] p-0.5 rounded-xl">
            <button
              onClick={() => setActiveView('day')}
              className={`px-3 py-1 rounded-lg text-[11px] font-bold transition-all ${
                activeView === 'day' ? 'bg-white text-[#3525cd] shadow-xs' : 'text-[#464555]'
              }`}
            >
              Day
            </button>
            <button
              onClick={() => setActiveView('3day')}
              className={`px-3 py-1 rounded-lg text-[11px] font-bold transition-all ${
                activeView === '3day' ? 'bg-white text-[#3525cd] shadow-xs' : 'text-[#464555]'
              }`}
            >
              3-Day
            </button>
            <button
              onClick={() => setActiveView('week')}
              className={`px-3 py-1 rounded-lg text-[11px] font-bold transition-all ${
                activeView === 'week' ? 'bg-white text-[#3525cd] shadow-xs' : 'text-[#464555]'
              }`}
            >
              Week
            </button>
          </div>
        </div>

        {/* Staff Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-2.5">
          <button
            onClick={() => setSelectedStylist('all')}
            className={`shrink-0 px-3 py-1.5 rounded-full text-[11px] font-bold transition-all shadow-xs ${
              selectedStylist === 'all'
                ? 'bg-[#3525cd] text-white'
                : 'bg-white text-[#141b2b] border border-[#e9edff] hover:bg-[#e9edff]'
            }`}
          >
            All Staff (3)
          </button>

          {INITIAL_STYLISTS.map(st => (
            <button
              key={st.id}
              onClick={() => setSelectedStylist(st.id)}
              className={`shrink-0 flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold transition-all shadow-xs ${
                selectedStylist === st.id
                  ? 'bg-[#3525cd] text-white'
                  : 'bg-white text-[#141b2b] border border-[#e9edff] hover:bg-[#e9edff]'
              }`}
            >
              <img src={st.avatar} alt={st.name} className="w-4 h-4 rounded-full object-cover" />
              <span>{st.name.split(' ')[0]}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Visual Day Schedule Timeline with Current Time Indicator */}
      <section className="px-4 pt-4 relative">
        {/* Timeline hour rows */}
        <div className="relative border-l border-[#dee2ef] ml-16 flex flex-col gap-12 py-2">
          {/* Current Time Indicator line at 10:20 AM */}
          <div
            className="absolute left-[-4px] right-0 z-20 flex items-center pointer-events-none"
            style={{ top: '105px' }}
          >
            <div className="w-2.5 h-2.5 rounded-full bg-[#ba1a1a] ring-4 ring-[#ba1a1a]/20"></div>
            <div className="flex-1 h-[2px] bg-[#ba1a1a]"></div>
            <span className="px-2 py-0.5 rounded-md bg-[#ba1a1a] text-white text-[10px] font-bold font-mono shadow-xs">
              10:20 AM NOW
            </span>
          </div>

          {/* Time block 1: 09:30 AM */}
          <div className="relative -ml-16 pl-16">
            <span className="absolute -left-16 text-[11px] font-bold text-[#777587] font-mono">
              09:30 AM
            </span>
            <div
              onClick={() => onTriggerToast('Sarah Tan appointment completed at 10:05 AM', 'check_circle')}
              className="p-3 rounded-2xl bg-white border border-[#e9edff] shadow-xs flex items-center justify-between hover:border-[#3525cd] transition-all cursor-pointer opacity-80"
            >
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-8 rounded-full bg-[#7ffc97]"></span>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-[13px] font-bold text-[#141b2b]">Sarah Tan</h4>
                    <span className="px-2 py-0.5 rounded-md bg-[#e9edff] text-[#00702f] text-[10px] font-bold">
                      Completed
                    </span>
                  </div>
                  <p className="text-[11px] text-[#464555]">Styling &amp; Blowout • Maria Santos</p>
                </div>
              </div>
              <span className="text-[13px] font-bold text-[#141b2b]">₱380</span>
            </div>
          </div>

          {/* Time block 2: 10:45 AM (Active Next) */}
          <div className="relative -ml-16 pl-16">
            <span className="absolute -left-16 text-[11px] font-bold text-[#3525cd] font-mono">
              10:45 AM
            </span>
            <div
              onClick={() => onTriggerToast('Alex Santos: Confirmed for Signature Haircut (Maria Santos)', 'content_cut')}
              className="p-3.5 rounded-2xl bg-white border-2 border-[#3525cd] shadow-md flex items-center justify-between hover:scale-[1.01] transition-all cursor-pointer ring-4 ring-[#3525cd]/10"
            >
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-10 rounded-full bg-[#3525cd]"></span>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-[14px] font-bold text-[#141b2b]">Alex Santos</h4>
                    <span className="px-2 py-0.5 rounded-md bg-[#7ffc97] text-[#002109] text-[10px] font-bold">
                      Arriving Next
                    </span>
                  </div>
                  <p className="text-[12px] font-semibold text-[#3525cd]">
                    Signature Haircut &amp; Wash (45m)
                  </p>
                  <p className="text-[11px] text-[#464555]">Specialist: Maria Santos • Chair 1</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[14px] font-bold text-[#141b2b] font-display">₱450</span>
                <span className="block text-[10px] text-[#00702f] font-semibold">Pay at Venue</span>
              </div>
            </div>
          </div>

          {/* Gap / Walk-in Slot: 11:30 AM */}
          <div className="relative -ml-16 pl-16">
            <span className="absolute -left-16 text-[11px] font-bold text-[#777587] font-mono">
              11:30 AM
            </span>
            <div className="p-3 rounded-2xl border-2 border-dashed border-[#c7c4d8] bg-[#f9f9ff] flex items-center justify-between">
              <div className="flex items-center gap-2 text-[#464555]">
                <span className="material-symbols-outlined text-[18px] text-[#00702f]">add_circle</span>
                <span className="text-[12px] font-semibold">30-min Walk-in Slot Open</span>
              </div>
              <button
                onClick={onAddAppointment}
                className="px-3 py-1 rounded-lg bg-[#3525cd] text-white text-[11px] font-bold hover:bg-[#4f46e5]"
              >
                + Fill Slot
              </button>
            </div>
          </div>

          {/* Staff Lunch Block: 12:00 PM */}
          <div className="relative -ml-16 pl-16">
            <span className="absolute -left-16 text-[11px] font-bold text-[#777587] font-mono">
              12:00 PM
            </span>
            <div className="p-2.5 rounded-xl bg-[#e9edff] text-[#464555] flex items-center gap-2 text-[12px] font-semibold">
              <span className="material-symbols-outlined text-[16px] text-[#3525cd]">restaurant</span>
              <span>Staff Lunch Rotation Buffer (45 mins)</span>
            </div>
          </div>

          {/* Time block 3: 01:15 PM (High Ticket) */}
          <div className="relative -ml-16 pl-16">
            <span className="absolute -left-16 text-[11px] font-bold text-[#777587] font-mono">
              01:15 PM
            </span>
            <div
              onClick={() => onTriggerToast('Camille David: Balayage & Gloss (2 hours). Deposit ₱1,200 paid.', 'palette')}
              className="p-3.5 rounded-2xl bg-white border border-[#e9edff] shadow-xs flex items-center justify-between hover:border-[#3525cd] transition-all cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-10 rounded-full bg-[#4f46e5]"></span>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-[14px] font-bold text-[#141b2b]">Camille David</h4>
                    <span className="px-2 py-0.5 rounded-md bg-[#e2dfff] text-[#3323cc] text-[10px] font-bold">
                      Deposit Paid
                    </span>
                  </div>
                  <p className="text-[12px] font-semibold text-[#141b2b]">
                    Balayage &amp; Gloss Treatment (120m)
                  </p>
                  <p className="text-[11px] text-[#464555]">Specialist: Jamie Lim • Chair 2</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[16px] font-bold text-[#141b2b] font-display">₱2,400</span>
                <span className="block text-[10px] text-[#464555]">₱1,200 balance due</span>
              </div>
            </div>
          </div>

          {/* Time block 4: 03:30 PM (Pending Action) */}
          <div className="relative -ml-16 pl-16">
            <span className="absolute -left-16 text-[11px] font-bold text-[#777587] font-mono">
              03:30 PM
            </span>
            <div
              onClick={() => onTriggerToast('Paolo Roxas: Classic Fade. Click Bookings tab to Accept/Decline.', 'pending')}
              className="p-3.5 rounded-2xl bg-white border border-[#ffe8b3] shadow-xs flex items-center justify-between hover:border-amber-500 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-10 rounded-full bg-amber-400"></span>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-[14px] font-bold text-[#141b2b]">Paolo Roxas</h4>
                    <span className="px-2 py-0.5 rounded-md bg-[#ffe8b3] text-[#78350f] text-[10px] font-bold">
                      Needs Action
                    </span>
                  </div>
                  <p className="text-[12px] font-semibold text-[#141b2b]">
                    Classic Fade &amp; Beard Trim (45m)
                  </p>
                  <p className="text-[11px] text-[#464555]">Specialist: Julian Cruz • Chair 3</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[14px] font-bold text-[#141b2b] font-display">₱450</span>
                <span className="block text-[10px] text-amber-600 font-semibold">Pending approval</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Summary Pill & Floating Action */}
      <div className="fixed bottom-16 left-4 right-4 max-w-lg mx-auto z-30 flex items-center justify-between pointer-events-none">
        <div className="bg-[#141b2b]/90 backdrop-blur-md text-white px-4 py-2 rounded-full shadow-lg text-[12px] font-semibold flex items-center gap-2 pointer-events-auto">
          <span className="w-2 h-2 rounded-full bg-[#7ffc97] animate-pulse"></span>
          <span>Today: ₱14,850 • 12 booked</span>
        </div>

        <button
          onClick={onAddAppointment}
          className="w-12 h-12 rounded-full bg-[#3525cd] hover:bg-[#4f46e5] text-white flex items-center justify-center shadow-xl active:scale-95 transition-transform pointer-events-auto cursor-pointer"
          title="Add Appointment"
        >
          <span className="material-symbols-outlined text-[24px]">add</span>
        </button>
      </div>
    </div>
  );
};

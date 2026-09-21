import React, { useState } from 'react';
import { Booking } from '../types';
import { ASSETS } from '../data/mockData';

interface BusinessOverviewScreenProps {
  bookings: Booking[];
  onNavigateTab: (tab: any) => void;
  onCheckInToggle: (bookingId: string) => void;
  onTriggerToast: (msg: string, icon?: string) => void;
}

export const BusinessOverviewScreen: React.FC<BusinessOverviewScreenProps> = ({
  bookings,
  onNavigateTab,
  onCheckInToggle,
  onTriggerToast
}) => {
  const [storeIsOpen, setStoreIsOpen] = useState(true);

  const fillRates = [
    { day: 'Mon', rate: 78 },
    { day: 'Tue', rate: 84, active: true },
    { day: 'Wed', rate: 62 },
    { day: 'Thu', rate: 91 },
    { day: 'Fri', rate: 96 },
    { day: 'Sat', rate: 100 },
    { day: 'Sun', rate: 0, closed: true }
  ];

  return (
    <div className="flex flex-col w-full pb-28 max-w-2xl mx-auto">
      {/* Studio Header & Status Pill */}
      <section className="px-4 pt-4 pb-2">
        <div className="p-4 rounded-2xl bg-white shadow-xs border border-[#e9edff] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={ASSETS.jamieAvatar}
              alt="Jamie Lim"
              className="w-12 h-12 rounded-full object-cover ring-2 ring-[#3525cd]/20"
            />
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-[17px] font-bold text-[#141b2b] font-display">Jamie Lim</h1>
                <span className="text-[11px] font-semibold text-[#464555]">Studio Bloom</span>
              </div>
              <p className="text-[12px] text-[#464555]">High Street South BGC • Flagship</p>
            </div>
          </div>

          <button
            onClick={() => {
              setStoreIsOpen(!storeIsOpen);
              onTriggerToast(storeIsOpen ? 'Store set to Closed for Walk-ins' : 'Store is OPEN for online bookings! 🟢', 'storefront');
            }}
            className={`px-3 py-1.5 rounded-full text-[12px] font-bold flex items-center gap-1.5 transition-all shadow-xs ${
              storeIsOpen ? 'bg-[#7ffc97] text-[#002109]' : 'bg-[#dee2ef] text-[#424751]'
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${storeIsOpen ? 'bg-[#005522] animate-pulse' : 'bg-[#5a5e69]'}`}></span>
            <span>{storeIsOpen ? 'Open Now' : 'Paused'}</span>
          </button>
        </div>
      </section>

      {/* Quick Business Actions Row */}
      <section className="px-4 pt-2">
        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={() => onNavigateTab('calendar')}
            className="p-3 rounded-xl bg-[#3525cd] text-white flex flex-col items-center justify-center gap-1 shadow-xs hover:bg-[#4f46e5] active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[20px]">add_circle</span>
            <span className="text-[11px] font-semibold">New Booking</span>
          </button>

          <button
            onClick={() => onTriggerToast('Block Time applied: Staff lunch buffer added 12:30 PM - 01:15 PM 🍱', 'block')}
            className="p-3 rounded-xl bg-white border border-[#e9edff] text-[#141b2b] flex flex-col items-center justify-center gap-1 shadow-xs hover:bg-[#f1f3ff] active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[20px] text-[#3525cd]">pause_circle</span>
            <span className="text-[11px] font-semibold">Block Time</span>
          </button>

          <button
            onClick={() => {
              navigator.clipboard?.writeText('https://scheduly.ph/studiobloom');
              onTriggerToast('Public booking URL copied: scheduly.ph/studiobloom 🔗', 'content_copy');
            }}
            className="p-3 rounded-xl bg-white border border-[#e9edff] text-[#141b2b] flex flex-col items-center justify-center gap-1 shadow-xs hover:bg-[#f1f3ff] active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[20px] text-[#3525cd]">share</span>
            <span className="text-[11px] font-semibold">Share Link</span>
          </button>
        </div>
      </section>

      {/* KPI Metrics Quad Grid */}
      <section className="px-4 pt-4">
        <div className="grid grid-cols-2 gap-3">
          {/* Metric 1 */}
          <div className="p-4 rounded-2xl bg-white border border-[#e9edff] shadow-xs flex flex-col gap-1">
            <div className="flex items-center justify-between text-[#464555]">
              <span className="text-[12px] font-semibold">Today's Revenue</span>
              <span className="material-symbols-outlined text-[18px] text-[#00702f]">trending_up</span>
            </div>
            <div className="text-[22px] font-bold text-[#141b2b] font-display">₱14,850</div>
            <span className="text-[11px] text-[#00702f] font-semibold flex items-center gap-0.5">
              <span>+18.4%</span>
              <span className="text-[#464555] font-normal">vs last Tue</span>
            </span>
          </div>

          {/* Metric 2 */}
          <div className="p-4 rounded-2xl bg-white border border-[#e9edff] shadow-xs flex flex-col gap-1">
            <div className="flex items-center justify-between text-[#464555]">
              <span className="text-[12px] font-semibold">Total Bookings</span>
              <span className="material-symbols-outlined text-[18px] text-[#3525cd]">event_seat</span>
            </div>
            <div className="text-[22px] font-bold text-[#141b2b] font-display">12</div>
            <span className="text-[11px] text-[#3525cd] font-semibold">3 remaining today</span>
          </div>

          {/* Metric 3 */}
          <div className="p-4 rounded-2xl bg-white border border-[#e9edff] shadow-xs flex flex-col gap-1">
            <div className="flex items-center justify-between text-[#464555]">
              <span className="text-[12px] font-semibold">Chair Fill Rate</span>
              <span className="material-symbols-outlined text-[18px] text-[#3525cd]">donut_large</span>
            </div>
            <div className="text-[22px] font-bold text-[#141b2b] font-display">84%</div>
            <span className="text-[11px] text-[#00702f] font-semibold">+6% optimal</span>
          </div>

          {/* Metric 4 */}
          <div className="p-4 rounded-2xl bg-white border border-[#e9edff] shadow-xs flex flex-col gap-1">
            <div className="flex items-center justify-between text-[#464555]">
              <span className="text-[12px] font-semibold">Avg Ticket</span>
              <span className="material-symbols-outlined text-[18px] text-[#3525cd]">receipt</span>
            </div>
            <div className="text-[22px] font-bold text-[#141b2b] font-display">₱1,238</div>
            <span className="text-[11px] text-[#464555]">Across 3 specialists</span>
          </div>
        </div>
      </section>

      {/* Weekly Fill Rate Visual Chart */}
      <section className="px-4 pt-4">
        <div className="p-4 rounded-2xl bg-white border border-[#e9edff] shadow-xs flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-[15px] font-bold text-[#141b2b]">Weekly Fill Rate</h3>
              <p className="text-[11px] text-[#464555]">Average floor capacity utilization</p>
            </div>
            <span className="text-[14px] font-bold text-[#3525cd]">Avg: 85%</span>
          </div>

          <div className="h-28 flex items-end justify-between gap-2 pt-2">
            {fillRates.map((f, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                <span className="text-[10px] font-semibold text-[#464555]">
                  {f.closed ? 'Off' : `${f.rate}%`}
                </span>
                <div className="w-full bg-[#f1f3ff] rounded-lg h-20 relative flex items-end overflow-hidden">
                  <div
                    style={{ height: `${f.rate}%` }}
                    className={`w-full rounded-t transition-all duration-500 ${
                      f.active ? 'bg-[#3525cd]' : f.closed ? 'bg-transparent' : 'bg-[#3525cd]/40'
                    }`}
                  ></div>
                </div>
                <span className={`text-[11px] font-bold ${f.active ? 'text-[#3525cd]' : 'text-[#777587]'}`}>
                  {f.day}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floor / Chair Live Status */}
      <section className="px-4 pt-4">
        <div className="p-4 rounded-2xl bg-white border border-[#e9edff] shadow-xs flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h3 className="text-[15px] font-bold text-[#141b2b]">Chair &amp; Station Status</h3>
            <span className="text-[11px] text-[#00702f] font-semibold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#00702f]"></span>
              Live Sync
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div className="p-2.5 rounded-xl bg-[#e9edff] flex flex-col gap-1 text-center">
              <span className="text-[11px] font-semibold text-[#464555]">Chair 1 (Maria)</span>
              <span className="text-[12px] font-bold text-[#3525cd]">In Service</span>
              <span className="text-[10px] text-[#464555] truncate">Alex Santos</span>
            </div>

            <div className="p-2.5 rounded-xl bg-[#fff8e6] flex flex-col gap-1 text-center">
              <span className="text-[11px] font-semibold text-[#464555]">Chair 2 (Jamie)</span>
              <span className="text-[12px] font-bold text-amber-700">Prep Station</span>
              <span className="text-[10px] text-[#464555] truncate">Balayage setup</span>
            </div>

            <div className="p-2.5 rounded-xl bg-[#eafaf1] flex flex-col gap-1 text-center">
              <span className="text-[11px] font-semibold text-[#464555]">Chair 3 (Julian)</span>
              <span className="text-[12px] font-bold text-[#00702f]">Available</span>
              <span className="text-[10px] text-[#00702f] font-medium">Walk-ins open</span>
            </div>
          </div>
        </div>
      </section>

      {/* Today's Agenda Timeline */}
      <section className="px-4 pt-4 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h3 className="text-[16px] font-bold text-[#141b2b] font-display">Today's Schedule</h3>
          <button
            onClick={() => onNavigateTab('calendar')}
            className="text-[12px] font-semibold text-[#3525cd] hover:underline"
          >
            Full Calendar →
          </button>
        </div>

        <div className="flex flex-col gap-2.5">
          {bookings.map(b => (
            <div
              key={b.id}
              className="p-3.5 rounded-2xl bg-white border border-[#e9edff] shadow-xs flex items-center justify-between gap-3"
            >
              <div className="flex items-center gap-3">
                <div className="text-center w-14 shrink-0">
                  <span className="text-[13px] font-bold text-[#141b2b]">{b.time.split(' ')[0]}</span>
                  <span className="text-[10px] uppercase font-bold text-[#777587] block leading-none">
                    {b.time.split(' ')[1]}
                  </span>
                </div>
                <div className="h-8 w-[2px] bg-[#e9edff]"></div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-[14px] font-bold text-[#141b2b]">{b.clientName}</h4>
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                        b.status === 'confirmed'
                          ? 'bg-[#7ffc97] text-[#002109]'
                          : b.status === 'pending'
                          ? 'bg-[#ffe8b3] text-[#78350f]'
                          : 'bg-[#e9edff] text-[#464555]'
                      }`}
                    >
                      {b.status}
                    </span>
                  </div>
                  <p className="text-[12px] text-[#464555]">
                    {b.serviceTitle} • {b.stylistName}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[14px] font-bold text-[#141b2b] font-display">
                  ₱{b.fee.toLocaleString()}
                </span>
                <button
                  onClick={() => onCheckInToggle(b.id)}
                  className={`p-2 rounded-xl text-[12px] font-semibold flex items-center justify-center transition-colors ${
                    b.isCheckedIn
                      ? 'bg-[#7ffc97] text-[#002109]'
                      : 'bg-[#e9edff] text-[#3525cd] hover:bg-[#dce2f7]'
                  }`}
                  title={b.isCheckedIn ? 'Checked in' : 'Click to check in'}
                >
                  <span className="material-symbols-outlined text-[16px]">
                    {b.isCheckedIn ? 'how_to_reg' : 'person_check'}
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

import React, { useState } from 'react';
import { Booking } from '../types';

interface BusinessBookingsScreenProps {
  bookings: Booking[];
  onAcceptBooking: (id: string) => void;
  onDeclineBooking: (id: string) => void;
  onCheckInToggle: (id: string) => void;
  onAddBooking: () => void;
  onTriggerToast: (msg: string, icon?: string) => void;
}

export const BusinessBookingsScreen: React.FC<BusinessBookingsScreenProps> = ({
  bookings,
  onAcceptBooking,
  onDeclineBooking,
  onCheckInToggle,
  onAddBooking,
  onTriggerToast
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'confirmed' | 'pending' | 'completed'>('all');

  const filtered = bookings.filter(b => {
    const matchesSearch =
      b.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.bookingNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.serviceTitle.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;
    if (statusFilter === 'all') return true;
    return b.status === statusFilter;
  });

  const handleExportCSV = () => {
    const headers = ['Booking Number', 'Client Name', 'Phone', 'Service', 'Stylist', 'Date', 'Time', 'Duration', 'Fee', 'Status', 'Payment'];
    const rows = bookings.map(b => [
      b.bookingNumber,
      `"${b.clientName}"`,
      `"${b.clientPhone}"`,
      `"${b.serviceTitle}"`,
      `"${b.stylistName}"`,
      `"${b.date}"`,
      `"${b.time}"`,
      `"${b.duration}"`,
      b.fee,
      b.status,
      `"${b.paymentStatus}"`
    ]);
    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `studio-bloom-bookings-${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    onTriggerToast('Exported booking records to CSV file! 📊', 'download');
  };

  return (
    <div className="flex flex-col w-full pb-28 lg:pb-8 max-w-7xl mx-auto lg:px-6">
      {/* Search & Week Selector Bar */}
      <section className="sticky top-16 z-30 px-4 lg:px-0 py-2 bg-[#f9f9ff]/95 backdrop-blur-md border-b border-[#e9edff]">
        <div className="flex items-center gap-2">
          <div className="flex-1 flex items-center gap-2 px-3 h-11 rounded-xl bg-white border border-[#e9edff] shadow-xs">
            <span className="material-symbols-outlined text-[#777587] text-[20px]">search</span>
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search by client or #SC..."
              className="w-full bg-transparent text-[13px] text-[#141b2b] placeholder:text-[#777587] focus:outline-none"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="text-[#777587]">
                <span className="material-symbols-outlined text-[16px]">close</span>
              </button>
            )}
          </div>

          <button
            onClick={onAddBooking}
            className="h-11 px-3.5 rounded-xl bg-[#3525cd] hover:bg-[#4f46e5] text-white flex items-center gap-1.5 text-[12px] font-semibold shadow-xs cursor-pointer transition-all active:scale-95"
            title="Add New Appointment"
          >
            <span className="material-symbols-outlined text-[18px]">add</span>
            <span className="hidden sm:inline">Add Booking</span>
          </button>

          <button
            onClick={handleExportCSV}
            className="w-11 h-11 rounded-xl bg-white border border-[#e9edff] flex items-center justify-center text-[#464555] hover:text-[#3525cd] shadow-xs cursor-pointer transition-colors"
            title="Export CSV"
          >
            <span className="material-symbols-outlined text-[20px]">download</span>
          </button>
        </div>

        {/* Status Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-2">
          <button
            onClick={() => setStatusFilter('all')}
            className={`px-3.5 py-1.5 rounded-full text-[12px] font-bold transition-all ${
              statusFilter === 'all'
                ? 'bg-[#3525cd] text-white shadow-xs'
                : 'bg-white text-[#464555] border border-[#e9edff]'
            }`}
          >
            All ({bookings.length})
          </button>
          <button
            onClick={() => setStatusFilter('confirmed')}
            className={`px-3.5 py-1.5 rounded-full text-[12px] font-bold transition-all ${
              statusFilter === 'confirmed'
                ? 'bg-[#3525cd] text-white shadow-xs'
                : 'bg-white text-[#464555] border border-[#e9edff]'
            }`}
          >
            Confirmed ({bookings.filter(b => b.status === 'confirmed').length})
          </button>
          <button
            onClick={() => setStatusFilter('pending')}
            className={`px-3.5 py-1.5 rounded-full text-[12px] font-bold transition-all ${
              statusFilter === 'pending'
                ? 'bg-[#3525cd] text-white shadow-xs'
                : 'bg-white text-[#464555] border border-[#e9edff]'
            }`}
          >
            Pending ({bookings.filter(b => b.status === 'pending').length})
          </button>
          <button
            onClick={() => setStatusFilter('completed')}
            className={`px-3.5 py-1.5 rounded-full text-[12px] font-bold transition-all ${
              statusFilter === 'completed'
                ? 'bg-[#3525cd] text-white shadow-xs'
                : 'bg-white text-[#464555] border border-[#e9edff]'
            }`}
          >
            Completed ({bookings.filter(b => b.status === 'completed').length})
          </button>
        </div>
      </section>

      {/* Bookings Card List */}
      <section className="px-4 lg:px-0 pt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map(b => (
          <div
            key={b.id}
            className="p-4 rounded-2xl bg-white border border-[#e9edff] shadow-xs flex flex-col gap-3"
          >
            {/* Header: Client & Booking # */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                {b.clientAvatar ? (
                  <img
                    src={b.clientAvatar}
                    alt={b.clientName}
                    className="w-10 h-10 rounded-full object-cover shadow-xs"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-[#dee2ef] flex items-center justify-center font-bold text-[#3525cd]">
                    {b.clientInitials || b.clientName.charAt(0)}
                  </div>
                )}
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-[15px] font-bold text-[#141b2b]">{b.clientName}</h3>
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
                  <p className="text-[12px] text-[#464555]">{b.clientPhone}</p>
                </div>
              </div>

              <div className="text-right">
                <span className="text-[11px] font-mono text-[#777587]">#{b.bookingNumber}</span>
                <div className="text-[16px] font-bold text-[#141b2b] font-display">
                  ₱{b.fee.toLocaleString()}
                </div>
              </div>
            </div>

            {/* Service & Time Container */}
            <div className="p-3 rounded-xl bg-[#f1f3ff] flex items-center justify-between text-[12px]">
              <div className="flex flex-col">
                <span className="font-bold text-[#141b2b]">{b.serviceTitle}</span>
                <span className="text-[#464555]">
                  {b.date} • {b.time} ({b.duration})
                </span>
              </div>
              <div className="text-right">
                <span className="font-semibold text-[#3525cd] block">{b.stylistName}</span>
                <span className="text-[11px] text-[#464555]">{b.paymentStatus}</span>
              </div>
            </div>

            {/* Notes if available */}
            {b.clientNote && (
              <div className="text-[12px] text-[#464555] bg-[#fff8e6] p-2.5 rounded-xl border border-[#ffe8b3]/60 flex items-start gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-amber-700 shrink-0">
                  note
                </span>
                <span>{b.clientNote}</span>
              </div>
            )}

            {/* Bottom Actions Row */}
            <div className="flex items-center justify-between pt-1 border-t border-[#f1f3ff]">
              {b.status === 'pending' ? (
                <div className="flex items-center gap-2 w-full">
                  <button
                    onClick={() => {
                      onAcceptBooking(b.id);
                      onTriggerToast(`Accepted booking #${b.bookingNumber} for ${b.clientName}! ✅`, 'check_circle');
                    }}
                    className="flex-1 py-2 rounded-xl bg-[#3525cd] hover:bg-[#4f46e5] text-white text-[13px] font-bold flex items-center justify-center gap-1 shadow-xs"
                  >
                    <span className="material-symbols-outlined text-[16px]">check</span>
                    <span>Accept Booking</span>
                  </button>
                  <button
                    onClick={() => {
                      onDeclineBooking(b.id);
                      onTriggerToast(`Declined booking #${b.bookingNumber}`, 'cancel');
                    }}
                    className="px-4 py-2 rounded-xl bg-[#dee2ef] text-[#ba1a1a] text-[13px] font-semibold hover:bg-[#ffe5e5]"
                  >
                    Decline
                  </button>
                </div>
              ) : (
                <div className="flex items-center justify-between w-full">
                  <button
                    onClick={() => onCheckInToggle(b.id)}
                    className={`px-3 py-1.5 rounded-xl text-[12px] font-bold flex items-center gap-1.5 transition-all ${
                      b.isCheckedIn
                        ? 'bg-[#7ffc97] text-[#002109]'
                        : 'bg-[#e9edff] text-[#3525cd] hover:bg-[#dce2f7]'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      {b.isCheckedIn ? 'done_all' : 'how_to_reg'}
                    </span>
                    <span>{b.isCheckedIn ? 'Checked In' : 'Check In Client'}</span>
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onTriggerToast(`Sent appointment reminder to ${b.clientName}! 📲`, 'send')}
                      className="p-2 rounded-xl bg-[#f1f3ff] text-[#464555] hover:text-[#3525cd]"
                      title="Send WhatsApp / SMS Reminder"
                    >
                      <span className="material-symbols-outlined text-[18px]">chat</span>
                    </button>
                    <button
                      onClick={() => onTriggerToast(`Receipt for #${b.bookingNumber} downloaded`, 'receipt')}
                      className="p-2 rounded-xl bg-[#f1f3ff] text-[#464555] hover:text-[#3525cd]"
                      title="Print / View Receipt"
                    >
                      <span className="material-symbols-outlined text-[18px]">receipt</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="p-8 text-center bg-white rounded-2xl border border-[#e9edff]">
            <span className="material-symbols-outlined text-[32px] text-[#777587]">search_off</span>
            <p className="text-[14px] font-bold text-[#141b2b] mt-1">No bookings match your filter</p>
            <button
              onClick={() => {
                setStatusFilter('all');
                setSearchQuery('');
              }}
              className="mt-2 text-[12px] text-[#3525cd] font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

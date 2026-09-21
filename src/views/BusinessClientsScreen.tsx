import React, { useState } from 'react';
import { ClientProfile } from '../types';
import { INITIAL_CLIENTS } from '../data/mockData';

interface BusinessClientsScreenProps {
  onTriggerToast: (msg: string, icon?: string) => void;
}

export const BusinessClientsScreen: React.FC<BusinessClientsScreenProps> = ({
  onTriggerToast
}) => {
  const [clients, setClients] = useState<ClientProfile[]>(INITIAL_CLIENTS);
  const [searchQuery, setSearchQuery] = useState('');
  const [tierFilter, setTierFilter] = useState<'all' | 'VIP' | 'Regular' | 'New Client'>('all');
  const [selectedClient, setSelectedClient] = useState<ClientProfile | null>(null);
  const [newNoteText, setNewNoteText] = useState('');

  const filtered = clients.filter(c => {
    const matchesSearch =
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.phone.includes(searchQuery) ||
      (c.email && c.email.toLowerCase().includes(searchQuery.toLowerCase()));

    if (!matchesSearch) return false;
    if (tierFilter === 'all') return true;
    return c.tier === tierFilter;
  });

  const handleAddConsultationNote = () => {
    if (!newNoteText.trim() || !selectedClient) return;
    const updated = {
      ...selectedClient,
      clientNotes: `${selectedClient.clientNotes}\n• [Today] ${newNoteText.trim()}`
    };
    setSelectedClient(updated);
    setClients(prev => prev.map(c => c.id === updated.id ? updated : c));
    setNewNoteText('');
    onTriggerToast('Consultation note appended to client CRM! 📝', 'note_add');
  };

  return (
    <div className="flex flex-col w-full pb-28 max-w-2xl mx-auto">
      {/* Top CRM Pulse Header */}
      <section className="px-4 pt-4 pb-2">
        <div className="p-4 rounded-2xl bg-white shadow-xs border border-[#e9edff] flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold text-[#3525cd] uppercase tracking-wider">
              Studio Bloom CRM
            </span>
            <h1 className="text-[20px] font-bold text-[#141b2b] font-display">Client Directory</h1>
          </div>
          <div className="flex items-center gap-3 text-right">
            <div>
              <span className="text-[16px] font-bold text-[#141b2b] font-display">412</span>
              <span className="text-[10px] text-[#777587] block uppercase font-semibold">Total</span>
            </div>
            <div className="w-[1px] h-6 bg-[#dee2ef]"></div>
            <div>
              <span className="text-[16px] font-bold text-[#3525cd] font-display">38</span>
              <span className="text-[10px] text-[#777587] block uppercase font-semibold">VIPs</span>
            </div>
            <div className="w-[1px] h-6 bg-[#dee2ef]"></div>
            <div>
              <span className="text-[16px] font-bold text-[#00702f] font-display">+14</span>
              <span className="text-[10px] text-[#777587] block uppercase font-semibold">New</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Tier Filter Bar */}
      <section className="sticky top-16 z-30 px-4 py-2 bg-[#f9f9ff]/95 backdrop-blur-md border-b border-[#e9edff]">
        <div className="flex items-center gap-2 px-3 h-11 rounded-xl bg-white border border-[#e9edff] shadow-xs">
          <span className="material-symbols-outlined text-[#777587] text-[20px]">search</span>
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search by client name, phone or formula..."
            className="w-full bg-transparent text-[13px] text-[#141b2b] placeholder:text-[#777587] focus:outline-none"
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} className="text-[#777587]">
              <span className="material-symbols-outlined text-[16px]">close</span>
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-2">
          <button
            onClick={() => setTierFilter('all')}
            className={`px-3.5 py-1.5 rounded-full text-[12px] font-bold transition-all ${
              tierFilter === 'all'
                ? 'bg-[#3525cd] text-white shadow-xs'
                : 'bg-white text-[#464555] border border-[#e9edff]'
            }`}
          >
            All (412)
          </button>
          <button
            onClick={() => setTierFilter('VIP')}
            className={`px-3.5 py-1.5 rounded-full text-[12px] font-bold transition-all ${
              tierFilter === 'VIP'
                ? 'bg-[#3525cd] text-white shadow-xs'
                : 'bg-white text-[#464555] border border-[#e9edff]'
            }`}
          >
            VIP (38)
          </button>
          <button
            onClick={() => setTierFilter('Regular')}
            className={`px-3.5 py-1.5 rounded-full text-[12px] font-bold transition-all ${
              tierFilter === 'Regular'
                ? 'bg-[#3525cd] text-white shadow-xs'
                : 'bg-white text-[#464555] border border-[#e9edff]'
            }`}
          >
            Regular (264)
          </button>
          <button
            onClick={() => setTierFilter('New Client')}
            className={`px-3.5 py-1.5 rounded-full text-[12px] font-bold transition-all ${
              tierFilter === 'New Client'
                ? 'bg-[#3525cd] text-white shadow-xs'
                : 'bg-white text-[#464555] border border-[#e9edff]'
            }`}
          >
            New (110)
          </button>
        </div>
      </section>

      {/* Client List Stream */}
      <section className="px-4 pt-3 flex flex-col gap-3">
        {filtered.map(client => (
          <div
            key={client.id}
            onClick={() => setSelectedClient(client)}
            className="p-4 rounded-2xl bg-white border border-[#e9edff] shadow-xs flex flex-col gap-3 hover:border-[#3525cd] transition-all cursor-pointer"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                {client.avatar ? (
                  <img
                    src={client.avatar}
                    alt={client.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-[#3525cd]/15"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-[#dee2ef] flex items-center justify-center font-bold text-[#3525cd] text-[15px]">
                    {client.initials}
                  </div>
                )}
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-[16px] font-bold text-[#141b2b]">{client.name}</h3>
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                        client.tier === 'VIP'
                          ? 'bg-[#dee2ef] text-[#3525cd]'
                          : client.tier === 'New Client'
                          ? 'bg-[#7ffc97] text-[#002109]'
                          : 'bg-[#e9edff] text-[#464555]'
                      }`}
                    >
                      {client.tier}
                    </span>
                  </div>
                  <p className="text-[12px] text-[#464555]">{client.phone}</p>
                </div>
              </div>

              <div className="text-right">
                <span className="text-[11px] text-[#777587]">Lifetime Spend</span>
                <div className="text-[16px] font-bold text-[#141b2b] font-display">
                  ₱{client.totalSpent.toLocaleString()}
                </div>
              </div>
            </div>

            {/* Visit Frequency & Formula Bar */}
            <div className="p-2.5 rounded-xl bg-[#f1f3ff] text-[12px] flex items-center justify-between text-[#464555]">
              <div>
                <span>{client.visits} visits</span> • <span>Last: {client.lastVisit}</span>
              </div>
              {client.preferredStylist && (
                <span className="font-semibold text-[#3525cd]">
                  Stylist: {client.preferredStylist.split(' ')[0]}
                </span>
              )}
            </div>

            {/* Hair Formula or Client Notes preview */}
            {client.formulaNote && (
              <div className="text-[11px] font-mono bg-[#e9edff] text-[#3525cd] p-2 rounded-lg flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[14px]">science</span>
                <span className="truncate">{client.formulaNote}</span>
              </div>
            )}
            {client.clientNotes && !client.formulaNote && (
              <p className="text-[12px] text-[#464555] line-clamp-1 italic">
                "{client.clientNotes}"
              </p>
            )}

            {/* Bottom micro-row */}
            <div className="flex items-center justify-between pt-1 border-t border-[#f1f3ff] text-[12px]">
              <span className="text-[#00702f] font-semibold flex items-center gap-1">
                <span className="material-symbols-outlined text-[15px]">event</span>
                {client.nextAppointment || 'No upcoming booking'}
              </span>
              <span className="text-[#3525cd] font-semibold flex items-center gap-0.5">
                <span>View Details</span>
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              </span>
            </div>
          </div>
        ))}
      </section>

      {/* Client Detail Full Slide-Up Drawer / Modal */}
      {selectedClient && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="w-full max-w-lg bg-white rounded-t-3xl sm:rounded-3xl p-5 shadow-2xl max-h-[90vh] overflow-y-auto flex flex-col gap-4 animate-in slide-in-from-bottom duration-200">
            <div className="flex items-center justify-between border-b border-[#e9edff] pb-3">
              <div className="flex items-center gap-3">
                {selectedClient.avatar ? (
                  <img
                    src={selectedClient.avatar}
                    alt={selectedClient.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-[#dee2ef] flex items-center justify-center font-bold text-[#3525cd]">
                    {selectedClient.initials}
                  </div>
                )}
                <div>
                  <h2 className="text-[18px] font-bold text-[#141b2b]">{selectedClient.name}</h2>
                  <p className="text-[12px] text-[#464555]">{selectedClient.phone}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedClient(null)}
                className="w-9 h-9 rounded-full bg-[#e9edff] flex items-center justify-center text-[#141b2b]"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-2">
              <div className="p-2.5 rounded-xl bg-[#f1f3ff] text-center">
                <span className="text-[11px] text-[#777587]">Visits</span>
                <div className="text-[16px] font-bold text-[#141b2b]">{selectedClient.visits}</div>
              </div>
              <div className="p-2.5 rounded-xl bg-[#f1f3ff] text-center">
                <span className="text-[11px] text-[#777587]">Total Spent</span>
                <div className="text-[16px] font-bold text-[#3525cd]">
                  ₱{selectedClient.totalSpent.toLocaleString()}
                </div>
              </div>
              <div className="p-2.5 rounded-xl bg-[#f1f3ff] text-center">
                <span className="text-[11px] text-[#777587]">Tier</span>
                <div className="text-[14px] font-bold text-[#00702f]">{selectedClient.tier}</div>
              </div>
            </div>

            {/* Hair Formula Card */}
            {selectedClient.formulaNote && (
              <div className="p-3 rounded-xl bg-[#e9edff] flex flex-col gap-1">
                <span className="text-[11px] font-bold text-[#3525cd] uppercase tracking-wider flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">science</span>
                  Hair Color Formula History
                </span>
                <p className="text-[13px] font-mono text-[#141b2b] font-medium">
                  {selectedClient.formulaNote}
                </p>
              </div>
            )}

            {/* Client Notes & Consultations */}
            <div className="flex flex-col gap-2">
              <span className="text-[13px] font-bold text-[#141b2b]">Stylist Consultation Notes</span>
              <div className="p-3 rounded-xl bg-[#f1f3ff] text-[13px] text-[#464555] whitespace-pre-line leading-relaxed max-h-36 overflow-y-auto">
                {selectedClient.clientNotes}
              </div>
            </div>

            {/* Add Note Input */}
            <div className="flex flex-col gap-2">
              <label className="text-[12px] font-semibold text-[#141b2b]">Add new session note</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newNoteText}
                  onChange={e => setNewNoteText(e.target.value)}
                  placeholder="e.g. Likes toner slightly cooler next time..."
                  className="flex-1 px-3 py-2 rounded-xl bg-white border border-[#e9edff] text-[13px] text-[#141b2b] focus:outline-none focus:border-[#3525cd]"
                />
                <button
                  onClick={handleAddConsultationNote}
                  className="px-4 py-2 rounded-xl bg-[#3525cd] text-white text-[13px] font-semibold hover:bg-[#4f46e5]"
                >
                  Save
                </button>
              </div>
            </div>

            {/* Action Bar */}
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#e9edff]">
              <button
                onClick={() => onTriggerToast(`Calling ${selectedClient.name} at ${selectedClient.phone}...`, 'call')}
                className="py-2.5 rounded-xl bg-[#f1f3ff] text-[#141b2b] text-[13px] font-bold flex items-center justify-center gap-1.5 hover:bg-[#e9edff]"
              >
                <span className="material-symbols-outlined text-[18px] text-[#3525cd]">call</span>
                <span>Call Client</span>
              </button>
              <button
                onClick={() => onTriggerToast(`Opening WhatsApp chat with ${selectedClient.name}...`, 'chat')}
                className="py-2.5 rounded-xl bg-[#e9edff] text-[#3525cd] text-[13px] font-bold flex items-center justify-center gap-1.5 hover:bg-[#dce2f7]"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>Send WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

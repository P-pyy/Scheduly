import React, { useState } from 'react';
import { SalonService } from '../types';
import { INITIAL_SERVICES } from '../data/mockData';

interface ServicesManagementScreenProps {
  onPreviewPublicStore: () => void;
  onTriggerToast: (msg: string, icon?: string) => void;
}

export const ServicesManagementScreen: React.FC<ServicesManagementScreenProps> = ({
  onPreviewPublicStore,
  onTriggerToast
}) => {
  const [services, setServices] = useState<SalonService[]>(INITIAL_SERVICES);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<'HAIRCUTS' | 'COLOR' | 'CHEMICAL' | 'NAILS' | 'WELLNESS'>('HAIRCUTS');
  const [newPrice, setNewPrice] = useState('500');
  const [newDuration, setNewDuration] = useState('45 mins');
  const [newDesc, setNewDesc] = useState('');

  const handleToggleActive = (serviceId: string, current: boolean) => {
    setServices(prev =>
      prev.map(s => (s.id === serviceId ? { ...s, isActive: !current } : s))
    );
    onTriggerToast(
      !current ? 'Service activated for online booking! 🟢' : 'Service deactivated from public menu',
      !current ? 'check_circle' : 'visibility_off'
    );
  };

  const handleSaveNewService = () => {
    if (!newTitle.trim()) {
      onTriggerToast('Please enter a service title', 'warning');
      return;
    }
    const newService: SalonService = {
      id: `srv-${Date.now()}`,
      title: newTitle.trim(),
      category: newCategory,
      description: newDesc.trim() || 'Custom salon service designed for clients.',
      duration: newDuration,
      price: Number(newPrice) || 500,
      isActive: true,
      bookingsThisMonth: 0,
      grossRevenue: 0,
      staffAssigned: 'All Staff',
      image: services[0].image
    };

    setServices([newService, ...services]);
    setShowAddModal(false);
    setNewTitle('');
    setNewDesc('');
    onTriggerToast(`Added "${newService.title}" to services menu! 🎉`, 'add_task');
  };

  const filtered = services.filter(s => {
    if (selectedCategory === 'all') return true;
    return s.category === selectedCategory;
  });

  const totalRevenue = services.reduce((acc, s) => acc + s.grossRevenue, 0);

  return (
    <div className="flex flex-col w-full pb-28 lg:pb-8 max-w-7xl mx-auto lg:px-6">
      {/* Public Booking Link Banner */}
      <section className="px-4 lg:px-0 pt-4 pb-2">
        <div className="p-4 rounded-2xl bg-[#3525cd] text-white shadow-md flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px] text-[#7ffc97]">link</span>
              <span className="text-[12px] font-bold uppercase tracking-wider text-white/90">
                Public Booking Link
              </span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-white/20 text-white text-[10px] font-bold">
              Live Online
            </span>
          </div>

          <div className="flex items-center justify-between bg-white/10 backdrop-blur-md rounded-xl p-2.5">
            <span className="font-mono text-[13px] text-white/90 truncate">
              scheduly.ph/studiobloom
            </span>
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                onClick={() => {
                  navigator.clipboard?.writeText('https://scheduly.ph/studiobloom');
                  onTriggerToast('Copied public booking link to clipboard! 📋', 'content_copy');
                }}
                className="p-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-white transition-colors"
                title="Copy Link"
              >
                <span className="material-symbols-outlined text-[16px]">content_copy</span>
              </button>
              <button
                onClick={onPreviewPublicStore}
                className="px-2.5 py-1 rounded-lg bg-white text-[#3525cd] text-[11px] font-bold hover:bg-white/90 transition-colors"
              >
                Preview
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Stats & Add Button Header */}
      <section className="px-4 lg:px-0 pt-2">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-[18px] font-bold text-[#141b2b] font-display">Manage Services</h1>
            <p className="text-[12px] text-[#464555]">
              {services.filter(s => s.isActive).length} active • ₱{totalRevenue.toLocaleString()} monthly revenue
            </p>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="px-3.5 py-2 rounded-xl bg-[#3525cd] text-white text-[12px] font-semibold flex items-center gap-1.5 shadow-xs hover:bg-[#4f46e5] active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[16px]">add</span>
            <span>Add Service</span>
          </button>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-3">
          {['all', 'HAIRCUTS', 'COLOR', 'CHEMICAL', 'NAILS'].map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-[12px] font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#3525cd] text-white shadow-xs'
                  : 'bg-white text-[#464555] border border-[#e9edff]'
              }`}
            >
              {cat === 'all' ? 'All Services' : cat}
            </button>
          ))}
        </div>
      </section>

      {/* Services List Stream */}
      <section className="px-4 lg:px-0 pt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map(srv => (
          <div
            key={srv.id}
            className={`p-4 rounded-2xl bg-white border shadow-xs flex flex-col gap-3 transition-all ${
              srv.isActive ? 'border-[#e9edff]' : 'border-[#e9edff] opacity-60 bg-gray-50'
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="text-[15px] font-bold text-[#141b2b]">{srv.title}</h3>
                  <span className="px-2 py-0.5 rounded-full bg-[#dee2ef] text-[#3525cd] text-[10px] font-bold">
                    {srv.category}
                  </span>
                </div>
                <p className="text-[12px] text-[#464555] line-clamp-1 mt-0.5">{srv.description}</p>
                <div className="flex items-center gap-3 text-[12px] text-[#464555] mt-1.5">
                  <span className="font-semibold text-[#141b2b]">
                    ₱{srv.price.toLocaleString()}
                  </span>
                  <span>•</span>
                  <span>{srv.duration}</span>
                  <span>•</span>
                  <span>Staff: {srv.staffAssigned}</span>
                </div>
              </div>

              {/* Active Toggle Switch */}
              <div className="flex flex-col items-end gap-1 shrink-0">
                <button
                  onClick={() => handleToggleActive(srv.id, srv.isActive)}
                  className={`w-12 h-6 rounded-full transition-colors relative p-0.5 ${
                    srv.isActive ? 'bg-[#3525cd]' : 'bg-gray-300'
                  }`}
                  title={srv.isActive ? 'Deactivate service' : 'Activate service'}
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-white shadow-xs transition-transform ${
                      srv.isActive ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  ></div>
                </button>
                <span className="text-[10px] font-semibold text-[#777587]">
                  {srv.isActive ? 'Active' : 'Disabled'}
                </span>
              </div>
            </div>

            {/* Performance Stats Bar */}
            <div className="p-2.5 rounded-xl bg-[#f1f3ff] text-[12px] flex items-center justify-between text-[#464555]">
              <span>
                <strong className="text-[#141b2b]">{srv.bookingsThisMonth}</strong> bookings this month
              </span>
              <span>
                Revenue: <strong className="text-[#00702f]">₱{srv.grossRevenue.toLocaleString()}</strong>
              </span>
            </div>
          </div>
        ))}
      </section>

      {/* Add Service Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-white rounded-3xl p-5 shadow-2xl flex flex-col gap-4 animate-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between border-b border-[#e9edff] pb-3">
              <h2 className="text-[18px] font-bold text-[#141b2b]">Add New Service</h2>
              <button
                onClick={() => setShowAddModal(false)}
                className="w-8 h-8 rounded-full bg-[#e9edff] flex items-center justify-center text-[#141b2b]"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            <div className="flex flex-col gap-3">
              <div>
                <label className="text-[12px] font-bold text-[#141b2b] block mb-1">Service Title</label>
                <input
                  type="text"
                  value={newTitle}
                  onChange={e => setNewTitle(e.target.value)}
                  placeholder="e.g. Scalp Detox & Hydration Treatment"
                  className="w-full p-2.5 rounded-xl bg-[#f9f9ff] border border-[#e9edff] text-[13px] text-[#141b2b] focus:outline-none focus:border-[#3525cd]"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[12px] font-bold text-[#141b2b] block mb-1">Category</label>
                  <select
                    value={newCategory}
                    onChange={e => setNewCategory(e.target.value as any)}
                    className="w-full p-2.5 rounded-xl bg-[#f9f9ff] border border-[#e9edff] text-[13px] text-[#141b2b] focus:outline-none focus:border-[#3525cd]"
                  >
                    <option value="HAIRCUTS">HAIRCUTS</option>
                    <option value="COLOR">COLOR</option>
                    <option value="CHEMICAL">CHEMICAL</option>
                    <option value="NAILS">NAILS</option>
                    <option value="WELLNESS">WELLNESS</option>
                  </select>
                </div>

                <div>
                  <label className="text-[12px] font-bold text-[#141b2b] block mb-1">Price (₱)</label>
                  <input
                    type="number"
                    value={newPrice}
                    onChange={e => setNewPrice(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-[#f9f9ff] border border-[#e9edff] text-[13px] text-[#141b2b] focus:outline-none focus:border-[#3525cd]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[12px] font-bold text-[#141b2b] block mb-1">Duration</label>
                  <input
                    type="text"
                    value={newDuration}
                    onChange={e => setNewDuration(e.target.value)}
                    placeholder="e.g. 45 mins"
                    className="w-full p-2.5 rounded-xl bg-[#f9f9ff] border border-[#e9edff] text-[13px] text-[#141b2b] focus:outline-none focus:border-[#3525cd]"
                  />
                </div>
                <div>
                  <label className="text-[12px] font-bold text-[#141b2b] block mb-1">Staff Access</label>
                  <select className="w-full p-2.5 rounded-xl bg-[#f9f9ff] border border-[#e9edff] text-[13px] text-[#141b2b] focus:outline-none focus:border-[#3525cd]">
                    <option>All Staff</option>
                    <option>Maria Santos only</option>
                    <option>Jamie Lim only</option>
                    <option>Julian Cruz only</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[12px] font-bold text-[#141b2b] block mb-1">Description</label>
                <textarea
                  value={newDesc}
                  onChange={e => setNewDesc(e.target.value)}
                  placeholder="Includes consultation, shampoo, treatment and styling..."
                  rows={2}
                  className="w-full p-2.5 rounded-xl bg-[#f9f9ff] border border-[#e9edff] text-[13px] text-[#141b2b] focus:outline-none focus:border-[#3525cd]"
                />
              </div>
            </div>

            <div className="flex gap-2 pt-2 border-t border-[#e9edff]">
              <button
                onClick={() => setShowAddModal(false)}
                className="flex-1 py-2.5 rounded-xl bg-[#dee2ef] text-[#424751] text-[13px] font-semibold hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveNewService}
                className="flex-1 py-2.5 rounded-xl bg-[#3525cd] text-white text-[13px] font-semibold hover:bg-[#4f46e5]"
              >
                Publish Service
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

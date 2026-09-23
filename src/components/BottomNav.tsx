import React from 'react';
import { AppMode, ClientTab, BusinessTab, AdminTab } from '../types';

interface BottomNavProps {
  appMode: AppMode;
  clientTab: ClientTab;
  setClientTab: (tab: ClientTab) => void;
  businessTab: BusinessTab;
  setBusinessTab: (tab: BusinessTab) => void;
  adminTab: AdminTab;
  setAdminTab: (tab: AdminTab) => void;
  onOpenMoreMenu: () => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  appMode,
  clientTab,
  setClientTab,
  businessTab,
  setBusinessTab,
  adminTab,
  setAdminTab,
  onOpenMoreMenu
}) => {
  return (
    <nav className="lg:hidden fixed bottom-0 w-full z-40 pb-[env(safe-area-inset-bottom,0px)] bg-[#ffffff]/90 backdrop-blur-xl shadow-[0_-2px_12px_rgba(0,0,0,0.05)] border-t border-[#e9edff]">
      <div className="h-16 px-2 max-w-2xl mx-auto flex items-center justify-around w-full">
        {/* CLIENT TABS */}
        {appMode === 'client' && (
          <>
            <button
              onClick={() => setClientTab('home')}
              className={`flex-1 min-w-0 h-12 flex flex-col items-center justify-center gap-0.5 transition-colors ${
                clientTab === 'home'
                  ? 'text-[#3525cd] font-semibold'
                  : 'text-[#464555] hover:text-[#141b2b]'
              }`}
            >
              <span className="material-symbols-outlined text-[22px]">home</span>
              <span className="text-[11px] truncate">Home</span>
            </button>

            <button
              onClick={() => setClientTab('explore')}
              className={`flex-1 min-w-0 h-12 flex flex-col items-center justify-center gap-0.5 transition-colors ${
                clientTab === 'explore'
                  ? 'text-[#3525cd] font-semibold'
                  : 'text-[#464555] hover:text-[#141b2b]'
              }`}
            >
              <span className="material-symbols-outlined text-[22px]">explore</span>
              <span className="text-[11px] truncate">Explore</span>
            </button>

            <button
              onClick={() => setClientTab('bookings')}
              className={`flex-1 min-w-0 h-12 flex flex-col items-center justify-center gap-0.5 transition-colors ${
                clientTab === 'bookings'
                  ? 'text-[#3525cd] font-semibold'
                  : 'text-[#464555] hover:text-[#141b2b]'
              }`}
            >
              <div className="relative flex items-center justify-center">
                <span className="material-symbols-outlined text-[22px]">calendar_today</span>
                <span className="absolute -top-0.5 -right-1 w-2 h-2 rounded-full bg-[#3525cd] ring-2 ring-white"></span>
              </div>
              <span className="text-[11px] truncate">Bookings</span>
            </button>

            <button
              onClick={() => setClientTab('favorites')}
              className={`flex-1 min-w-0 h-12 flex flex-col items-center justify-center gap-0.5 transition-colors ${
                clientTab === 'favorites'
                  ? 'text-[#3525cd] font-semibold'
                  : 'text-[#464555] hover:text-[#141b2b]'
              }`}
            >
              <span className="material-symbols-outlined text-[22px]">favorite</span>
              <span className="text-[11px] truncate">Favorites</span>
            </button>

            <button
              onClick={() => setClientTab('profile')}
              className={`flex-1 min-w-0 h-12 flex flex-col items-center justify-center gap-0.5 transition-colors ${
                clientTab === 'profile'
                  ? 'text-[#3525cd] font-semibold'
                  : 'text-[#464555] hover:text-[#141b2b]'
              }`}
            >
              <span className="material-symbols-outlined text-[22px]">person</span>
              <span className="text-[11px] truncate">Profile</span>
            </button>
          </>
        )}

        {/* BUSINESS TABS */}
        {appMode === 'business' && (
          <>
            <button
              onClick={() => setBusinessTab('overview')}
              className={`flex-1 min-w-[56px] h-12 flex flex-col items-center justify-center gap-0.5 transition-colors ${
                businessTab === 'overview'
                  ? 'text-[#3525cd] font-semibold'
                  : 'text-[#464555] hover:text-[#3525cd]'
              }`}
            >
              <span className="material-symbols-outlined text-[22px]">dashboard</span>
              <span className="text-[11px] truncate">Overview</span>
            </button>

            <button
              onClick={() => setBusinessTab('calendar')}
              className={`flex-1 min-w-[56px] h-12 flex flex-col items-center justify-center gap-0.5 transition-colors ${
                businessTab === 'calendar'
                  ? 'text-[#3525cd] font-semibold'
                  : 'text-[#464555] hover:text-[#3525cd]'
              }`}
            >
              <span className="material-symbols-outlined text-[22px]">calendar_today</span>
              <span className="text-[11px] truncate">Calendar</span>
            </button>

            <button
              onClick={() => setBusinessTab('bookings')}
              className={`flex-1 min-w-[56px] h-12 flex flex-col items-center justify-center gap-0.5 transition-colors ${
                businessTab === 'bookings'
                  ? 'text-[#3525cd] font-semibold'
                  : 'text-[#464555] hover:text-[#3525cd]'
              }`}
            >
              <span className="material-symbols-outlined text-[22px]">event_available</span>
              <span className="text-[11px] truncate">Bookings</span>
            </button>

            <button
              onClick={() => setBusinessTab('clients')}
              className={`flex-1 min-w-[56px] h-12 flex flex-col items-center justify-center gap-0.5 transition-colors ${
                businessTab === 'clients'
                  ? 'text-[#3525cd] font-semibold'
                  : 'text-[#464555] hover:text-[#3525cd]'
              }`}
            >
              <span className="material-symbols-outlined text-[22px]">group</span>
              <span className="text-[11px] truncate">Clients</span>
            </button>

            <button
              onClick={onOpenMoreMenu}
              className={`flex-1 min-w-[56px] h-12 flex flex-col items-center justify-center gap-0.5 transition-colors ${
                businessTab === 'services' || businessTab === 'analytics'
                  ? 'text-[#3525cd] font-semibold'
                  : 'text-[#464555] hover:text-[#3525cd]'
              }`}
            >
              <span className="material-symbols-outlined text-[22px]">tune</span>
              <span className="text-[11px] truncate">More</span>
            </button>
          </>
        )}

        {/* ADMIN TABS */}
        {appMode === 'admin' && (
          <>
            <button
              onClick={() => setAdminTab('overview')}
              className={`flex-1 min-w-0 h-12 flex flex-col items-center justify-center gap-0.5 transition-colors ${
                adminTab === 'overview'
                  ? 'text-[#3525cd] font-semibold'
                  : 'text-[#464555] hover:text-[#141b2b]'
              }`}
            >
              <span className="material-symbols-outlined text-[22px]">dashboard</span>
              <span className="text-[11px] truncate">Overview</span>
            </button>

            <button
              onClick={() => setAdminTab('businesses')}
              className={`flex-1 min-w-0 h-12 flex flex-col items-center justify-center gap-0.5 transition-colors ${
                adminTab === 'businesses'
                  ? 'text-[#3525cd] font-semibold'
                  : 'text-[#464555] hover:text-[#141b2b]'
              }`}
            >
              <span className="material-symbols-outlined text-[22px]">store</span>
              <span className="text-[11px] truncate">Businesses</span>
            </button>

            <button
              onClick={() => setAdminTab('users')}
              className={`flex-1 min-w-0 h-12 flex flex-col items-center justify-center gap-0.5 transition-colors ${
                adminTab === 'users'
                  ? 'text-[#3525cd] font-semibold'
                  : 'text-[#464555] hover:text-[#141b2b]'
              }`}
            >
              <span className="material-symbols-outlined text-[22px]">group</span>
              <span className="text-[11px] truncate">Users</span>
            </button>

            <button
              onClick={() => setAdminTab('reports')}
              className={`flex-1 min-w-0 h-12 flex flex-col items-center justify-center gap-0.5 transition-colors ${
                adminTab === 'reports'
                  ? 'text-[#3525cd] font-semibold'
                  : 'text-[#464555] hover:text-[#141b2b]'
              }`}
            >
              <span className="material-symbols-outlined text-[22px]">gshield</span>
              <span className="text-[11px] truncate">Reports</span>
            </button>

            <button
              onClick={() => setAdminTab('settings')}
              className={`flex-1 min-w-0 h-12 flex flex-col items-center justify-center gap-0.5 transition-colors ${
                adminTab === 'settings'
                  ? 'text-[#3525cd] font-semibold'
                  : 'text-[#464555] hover:text-[#141b2b]'
              }`}
            >
              <span className="material-symbols-outlined text-[22px]">settings</span>
              <span className="text-[11px] truncate">Settings</span>
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

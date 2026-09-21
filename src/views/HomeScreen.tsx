import React, { useState } from 'react';
import { ASSETS } from '../data/mockData';

interface HomeScreenProps {
  onStartFree: () => void;
  onExplore: () => void;
  onSelectStudio: (studioId: string) => void;
  onTriggerToast: (msg: string, icon?: string) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onStartFree,
  onExplore,
  onSelectStudio,
  onTriggerToast
}) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const proPrice = billingCycle === 'monthly' ? '₱1,299' : '₱1,039';
  const proSub = billingCycle === 'monthly' ? '/mo' : '/mo billed yearly';
  const bizPrice = billingCycle === 'monthly' ? '₱2,999' : '₱2,399';
  const bizSub = billingCycle === 'monthly' ? '/mo' : '/mo billed yearly';

  const ecosystemCategories = [
    { icon: 'content_cut', label: 'Salon' },
    { icon: 'face_retouching_natural', label: 'Barbershop' },
    { icon: 'auto_fix_high', label: 'Beauty' },
    { icon: 'self_improvement', label: 'Wellness' },
    { icon: 'school', label: 'Tutoring' },
    { icon: 'photo_camera', label: 'Photography' },
    { icon: 'build', label: 'Repairs' },
  ];

  return (
    <div className="flex flex-col w-full pb-24 max-w-2xl mx-auto">
      {/* Hero Section */}
      <section className="px-4 pt-4 pb-6 flex flex-col gap-4 relative overflow-hidden">
        <div className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full bg-[#dee2ef] text-[#424751] shadow-xs">
          <span className="material-symbols-outlined text-[16px] text-[#3525cd]" style={{ fontVariationSettings: "'FILL' 1" }}>
            bolt
          </span>
          <span className="text-[11px] font-semibold tracking-wide uppercase">
            Next-Gen Booking Engine
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <h1 className="text-[30px] font-bold text-[#141b2b] tracking-tight leading-[38px] font-display">
            Appointments, simplified.
          </h1>
          <p className="text-[16px] text-[#464555] leading-relaxed">
            Scheduly helps service businesses manage bookings, clients, schedules, and growth — all in one place.
          </p>
        </div>

        {/* CTA Stack */}
        <div className="flex flex-col gap-2.5 pt-1">
          <button
            onClick={onStartFree}
            className="w-full h-12 flex items-center justify-center gap-2 rounded-xl bg-[#4f46e5] hover:bg-[#3525cd] text-white text-[14px] font-semibold shadow-md active:scale-[0.98] transition-all cursor-pointer"
          >
            <span>Start for free</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
          <button
            onClick={() => onTriggerToast('Welcome! Showing live booking flow demo... ✨', 'play_circle')}
            className="w-full h-11 flex items-center justify-center gap-2 rounded-xl bg-[#e9edff] text-[#3525cd] text-[14px] font-semibold active:bg-[#dce2f7] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">play_circle</span>
            <span>See how it works</span>
          </button>
        </div>

        {/* Interactive Layered Preview Card */}
        <div className="relative pt-4 mt-1">
          {/* Ambient Backing Glow */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-64 h-32 bg-[#4f46e5]/10 rounded-full blur-2xl pointer-events-none"></div>

          {/* Main Booking Layer Card */}
          <div className="relative w-full rounded-2xl bg-white p-4 shadow-xl border border-[#e9edff] flex flex-col gap-3">
            {/* Card Header */}
            <div className="flex items-center justify-between">
              <div
                onClick={() => onSelectStudio('studio-bloom')}
                className="flex items-center gap-3 min-w-0 cursor-pointer group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#e1e8fd] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-[#3525cd] text-[24px]">spa</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[16px] font-semibold text-[#141b2b] truncate group-hover:text-[#3525cd] transition-colors">
                    Studio Bloom
                  </span>
                  <span className="text-[11px] font-semibold text-[#464555]">Hair Styling &amp; Salon</span>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#7ffc97] text-[#002109] text-[11px] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#005522]"></span>
                Confirmed
              </span>
            </div>

            {/* Appointment Details Module */}
            <div className="rounded-xl bg-[#f1f3ff] p-3 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 min-w-0">
                <span className="material-symbols-outlined text-[#3525cd] text-[20px]">calendar_today</span>
                <div className="flex flex-col min-w-0">
                  <span className="text-[14px] font-semibold text-[#141b2b]">Today, 10:30 AM</span>
                  <span className="text-[12px] text-[#464555]">45 mins • with Elena Cruz</span>
                </div>
              </div>
              <div className="flex flex-col items-end shrink-0">
                <span className="text-[11px] font-semibold text-[#464555]">Fee</span>
                <span className="text-[20px] font-bold text-[#3525cd] leading-none font-display">₱850</span>
              </div>
            </div>

            {/* Client & Action Micro-row */}
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-2">
                <img
                  src={ASSETS.mayaAvatar}
                  alt="Maya Santos"
                  className="w-7 h-7 rounded-full object-cover shadow-xs"
                />
                <span className="text-[12px] text-[#464555]">
                  Client: <strong className="text-[#141b2b] font-semibold">Maya Santos</strong>
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => onTriggerToast('Reschedule modal opened for 10:30 AM appointment', 'edit_calendar')}
                  aria-label="Reschedule"
                  className="w-8 h-8 rounded-lg bg-[#e9edff] flex items-center justify-center text-[#464555] active:scale-95 transition-transform hover:text-[#3525cd]"
                >
                  <span className="material-symbols-outlined text-[18px]">edit_calendar</span>
                </button>
                <button
                  onClick={() => onTriggerToast('SMS & WhatsApp reminder sent to Maya Santos! 📲', 'mark_chat_read')}
                  aria-label="Send reminder"
                  className="w-8 h-8 rounded-lg bg-[#e2dfff] text-[#0f0069] flex items-center justify-center active:scale-95 transition-transform hover:bg-[#3525cd] hover:text-white"
                >
                  <span className="material-symbols-outlined text-[18px]">mark_chat_read</span>
                </button>
              </div>
            </div>

            {/* Floating subtle notification overlay */}
            <div className="mt-1 self-end bg-[#293040] text-[#edf0ff] rounded-full py-1 px-3 shadow-lg flex items-center gap-1.5 text-[11px] font-medium">
              <span className="material-symbols-outlined text-[#7ffc97] text-[14px]">check_circle</span>
              <span>SMS reminder dispatched (10m ago)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Horizontal Scroll Section */}
      <section className="py-4 flex flex-col gap-2 bg-[#f1f3ff]">
        <div className="px-4 flex flex-col">
          <span className="text-[11px] font-semibold tracking-wider uppercase text-[#3525cd]">
            Trusted Ecosystem
          </span>
          <h2 className="text-[16px] font-semibold text-[#141b2b]">
            Built for businesses that run on appointments
          </h2>
        </div>

        {/* Scroller */}
        <div className="flex gap-2 overflow-x-auto px-4 py-1 no-scrollbar snap-x">
          {ecosystemCategories.map((item, idx) => (
            <button
              key={idx}
              onClick={onExplore}
              className="snap-start shrink-0 flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#141b2b] shadow-xs hover:border-[#3525cd] border border-transparent transition-all active:scale-95"
            >
              <span className="material-symbols-outlined text-[#3525cd] text-[18px]">{item.icon}</span>
              <span className="text-[14px] font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="px-4 py-8 flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <span className="text-[11px] font-semibold tracking-wider uppercase text-[#3525cd]">
            Everything Included
          </span>
          <h2 className="text-[22px] font-semibold text-[#141b2b] font-display">
            Engineered to eliminate empty chairs &amp; no-shows
          </h2>
          <p className="text-[14px] text-[#464555]">
            Intuitive tooling that handles client correspondence while you focus on crafts.
          </p>
        </div>

        {/* Feature Bento Column */}
        <div className="flex flex-col gap-4">
          {/* Feature 1 */}
          <div className="p-4 rounded-2xl bg-white border border-[#e9edff] shadow-sm flex flex-col gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#e2dfff] flex items-center justify-center text-[#0f0069]">
              <span className="material-symbols-outlined text-[22px]">event_available</span>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-[16px] font-semibold text-[#141b2b]">Smart Scheduling</h3>
              <p className="text-[14px] text-[#464555] leading-relaxed">
                Real-time slot availability tailored to staff shifts, transit buffer times, and equipment limits. Instant frictionless booking links.
              </p>
            </div>
            <div className="pt-1 flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md bg-[#e9edff] text-[#60646f] text-[11px] font-semibold">
                No double bookings
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#e9edff] text-[#60646f] text-[11px] font-semibold">
                Calendar sync
              </span>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="p-4 rounded-2xl bg-white border border-[#e9edff] shadow-sm flex flex-col gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#7ffc97] flex items-center justify-center text-[#002109]">
              <span className="material-symbols-outlined text-[22px]">notifications_active</span>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-[16px] font-semibold text-[#141b2b]">Automated Reminders</h3>
              <p className="text-[14px] text-[#464555] leading-relaxed">
                Cut costly no-shows by up to 80% with automated SMS, WhatsApp, and email confirmation flows with one-tap rescheduling.
              </p>
            </div>
            <div className="p-2 rounded-xl bg-[#f1f3ff] flex items-center gap-2">
              <span className="material-symbols-outlined text-[#00702f] text-[18px]">sms</span>
              <span className="text-[12px] text-[#141b2b] truncate font-medium">
                "Hi Maya! Hair Styling reminder for today at 10:30 AM"
              </span>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="p-4 rounded-2xl bg-white border border-[#e9edff] shadow-sm flex flex-col gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#dce2f7] flex items-center justify-center text-[#3525cd]">
              <span className="material-symbols-outlined text-[22px]">contacts_product</span>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-[16px] font-semibold text-[#141b2b]">Client CRM</h3>
              <p className="text-[14px] text-[#464555] leading-relaxed">
                Preserve client history, custom formulas, visit frequencies, payment preferences, and VIP notes in organized digital profiles.
              </p>
            </div>
            <div className="flex items-center -space-x-2 pt-1">
              <img
                src={ASSETS.alexAvatar}
                alt="Client"
                className="w-8 h-8 rounded-full object-cover ring-2 ring-white shadow-xs"
              />
              <img
                src={ASSETS.camilleAvatar}
                alt="Client"
                className="w-8 h-8 rounded-full object-cover ring-2 ring-white shadow-xs"
              />
              <img
                src={ASSETS.chloeAvatar}
                alt="Client"
                className="w-8 h-8 rounded-full object-cover ring-2 ring-white shadow-xs"
              />
              <div className="w-8 h-8 rounded-full bg-[#dee2ef] flex items-center justify-center text-[#60646f] text-[11px] font-bold ring-2 ring-white shadow-xs">
                +840
              </div>
              <span className="text-[12px] text-[#464555] pl-4 font-medium">client profiles active</span>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="p-4 rounded-2xl bg-white border border-[#e9edff] shadow-sm flex flex-col gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#c3c0ff] flex items-center justify-center text-[#3323cc]">
              <span className="material-symbols-outlined text-[22px]">insights</span>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-[16px] font-semibold text-[#141b2b]">Real-time Analytics</h3>
              <p className="text-[14px] text-[#464555] leading-relaxed">
                Instant insights on peak booking hours, top-performing stylists or specialists, repeat client ratios, and net weekly revenue.
              </p>
            </div>
            {/* Sparkline visualization */}
            <div className="h-12 w-full rounded-xl bg-[#f1f3ff] p-2 flex items-end gap-1.5 justify-between">
              <div className="w-full bg-[#4f46e5]/20 rounded-t h-[30%]"></div>
              <div className="w-full bg-[#4f46e5]/30 rounded-t h-[45%]"></div>
              <div className="w-full bg-[#4f46e5]/40 rounded-t h-[60%]"></div>
              <div className="w-full bg-[#4f46e5]/50 rounded-t h-[50%]"></div>
              <div className="w-full bg-[#4f46e5]/70 rounded-t h-[75%]"></div>
              <div className="w-full bg-[#4f46e5]/90 rounded-t h-[90%]"></div>
              <div className="w-full bg-[#4f46e5] rounded-t h-[100%] shadow-xs"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparent Pricing Section */}
      <section className="px-4 py-8 bg-[#f1f3ff] flex flex-col gap-4">
        <div className="flex flex-col gap-1 text-center items-center">
          <span className="text-[11px] font-semibold tracking-wider uppercase text-[#3525cd]">
            Fair &amp; Transparent
          </span>
          <h2 className="text-[22px] font-semibold text-[#141b2b] font-display">
            Plans that scale with your volume
          </h2>
          <p className="text-[14px] text-[#464555] max-w-xs">
            No lock-in contracts. Upgrade or switch tiers anytime.
          </p>

          {/* Period Selector Toggle */}
          <div className="mt-2 p-1 rounded-full bg-[#e9edff] flex items-center relative">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-1.5 rounded-full text-[12px] font-semibold transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-white text-[#141b2b] shadow-sm'
                  : 'text-[#464555] hover:text-[#141b2b]'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-4 py-1.5 rounded-full text-[12px] font-semibold transition-all flex items-center gap-1 ${
                billingCycle === 'yearly'
                  ? 'bg-white text-[#141b2b] shadow-sm'
                  : 'text-[#464555] hover:text-[#141b2b]'
              }`}
            >
              <span>Yearly</span>
              <span className="px-1.5 py-0.5 rounded-full bg-[#7ffc97] text-[#002109] text-[10px] font-bold tracking-tight">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Stack */}
        <div className="flex flex-col gap-4 pt-1">
          {/* Free Tier */}
          <div className="p-4 rounded-2xl bg-white border border-[#e9edff] shadow-xs flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-[16px] font-semibold text-[#141b2b]">Free</h3>
                <span className="text-[12px] text-[#464555]">Solo operators starting out</span>
              </div>
              <span className="text-[24px] font-bold text-[#141b2b] font-display">₱0</span>
            </div>
            <div className="flex flex-col gap-2 pt-1 text-[12px] text-[#464555]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#3525cd] text-[18px]">check</span>
                <span>Up to 50 appointments/mo</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#3525cd] text-[18px]">check</span>
                <span>Single provider calendar</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#3525cd] text-[18px]">check</span>
                <span>Automated email confirmations</span>
              </div>
            </div>
            <button
              onClick={() => onTriggerToast('Free solo tier activated for your account!', 'check')}
              className="w-full h-11 mt-1 rounded-xl bg-[#e9edff] text-[#3525cd] text-[14px] font-semibold hover:bg-[#dce2f7] transition-colors"
            >
              Get started free
            </button>
          </div>

          {/* Pro Tier (Highlighted) */}
          <div className="p-4 rounded-2xl bg-white border-2 border-[#3525cd] shadow-lg flex flex-col gap-3 relative">
            <div className="absolute -top-3 right-4 px-3 py-0.5 rounded-full bg-[#3525cd] text-white text-[11px] font-semibold tracking-wide uppercase shadow-xs">
              Most Popular
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-[16px] font-semibold text-[#141b2b]">Pro</h3>
                <span className="text-[12px] text-[#464555]">Growing studios &amp; boutiques</span>
              </div>
              <div className="flex items-baseline gap-0.5">
                <span className="text-[24px] font-bold text-[#3525cd] font-display">{proPrice}</span>
                <span className="text-[11px] font-semibold text-[#464555]">{proSub}</span>
              </div>
            </div>
            <div className="flex flex-col gap-2 pt-1 text-[12px] text-[#464555]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#3525cd] text-[18px]">check_circle</span>
                <span className="text-[#141b2b] font-semibold">Unlimited appointments</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#3525cd] text-[18px]">check_circle</span>
                <span>Up to 5 staff team seats</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#3525cd] text-[18px]">check_circle</span>
                <span>SMS &amp; WhatsApp reminder bundle</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#3525cd] text-[18px]">check_circle</span>
                <span>Downpayment &amp; POS integration</span>
              </div>
            </div>
            <button
              onClick={() => onTriggerToast('Pro 14-day trial started! No charge until 14 days.', 'verified')}
              className="w-full h-12 mt-1 rounded-xl bg-[#4f46e5] text-white text-[14px] font-semibold shadow active:scale-[0.98] transition-transform hover:bg-[#3525cd]"
            >
              Try Pro for 14 days
            </button>
          </div>

          {/* Business Tier */}
          <div className="p-4 rounded-2xl bg-white border border-[#e9edff] shadow-xs flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-[16px] font-semibold text-[#141b2b]">Business</h3>
                <span className="text-[12px] text-[#464555]">Multi-branch and high volume</span>
              </div>
              <div className="flex items-baseline gap-0.5">
                <span className="text-[24px] font-bold text-[#141b2b] font-display">{bizPrice}</span>
                <span className="text-[11px] font-semibold text-[#464555]">{bizSub}</span>
              </div>
            </div>
            <div className="flex flex-col gap-2 pt-1 text-[12px] text-[#464555]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#3525cd] text-[18px]">check</span>
                <span>Unlimited team &amp; locations</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#3525cd] text-[18px]">check</span>
                <span>Custom domain &amp; branded portal</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#3525cd] text-[18px]">check</span>
                <span>Dedicated account manager</span>
              </div>
            </div>
            <button
              onClick={() => onTriggerToast('Connecting you with Scheduly Enterprise sales...', 'mail')}
              className="w-full h-11 mt-1 rounded-xl bg-[#e9edff] text-[#3525cd] text-[14px] font-semibold hover:bg-[#dce2f7] transition-colors"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Final Sticky-Style CTA Card */}
      <section className="px-4 py-8">
        <div className="w-full rounded-2xl bg-[#293040] text-[#edf0ff] p-6 flex flex-col gap-4 relative overflow-hidden shadow-xl">
          {/* Decorative Backdrop Element */}
          <div className="absolute -right-10 -bottom-10 w-44 h-44 rounded-full bg-[#4f46e5]/20 blur-xl pointer-events-none"></div>
          <div className="flex flex-col gap-1 relative">
            <span className="text-[11px] font-semibold tracking-wider uppercase text-[#e2dfff]">
              Take Control
            </span>
            <h2 className="text-[22px] font-semibold leading-snug font-display">
              Your schedule shouldn't slow your business down
            </h2>
            <p className="text-[14px] text-[#e9edff] leading-relaxed mt-1">
              Join over 3,200 salons, clinics, and service professionals streamlining bookings everyday.
            </p>
          </div>
          <div className="flex flex-col gap-1 relative">
            <button
              onClick={onStartFree}
              className="w-full h-12 flex items-center justify-center gap-2 rounded-xl bg-[#4f46e5] hover:bg-[#3525cd] text-white text-[14px] font-semibold shadow-lg active:scale-[0.98] transition-transform"
            >
              <span>Get Started</span>
              <span className="material-symbols-outlined text-[20px]">chevron_right</span>
            </button>
            <span className="text-center text-[12px] text-[#dce2f7] pt-1">
              No credit card required • 2-minute setup
            </span>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <footer className="px-4 pb-6 flex flex-col items-center justify-center gap-1 text-center">
        <div className="flex items-center gap-3 text-[#464555] text-[12px] font-medium">
          <button onClick={() => onTriggerToast('Privacy Policy (Scheduly 2026)', 'policy')} className="hover:text-[#3525cd] transition-colors">Privacy</button>
          <span className="text-[#c7c4d8]">•</span>
          <button onClick={() => onTriggerToast('Terms of Service agreement', 'description')} className="hover:text-[#3525cd] transition-colors">Terms of Service</button>
          <span className="text-[#c7c4d8]">•</span>
          <button onClick={() => onTriggerToast('24/7 Support: support@scheduly.app', 'support_agent')} className="hover:text-[#3525cd] transition-colors">Support</button>
        </div>
        <p className="text-[12px] text-[#464555] mt-1">
          © 2026 Scheduly. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

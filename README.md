# Scheduly

Scheduly is a modern appointment booking and service business management platform built for salons, studios, spas, barbershops, and service-driven businesses. It combines client discovery, real-time scheduling, business dashboard analytics, and CRM workflows into a single polished product experience.

The project is a TypeScript + React + Vite front-end prototype that simulates a booking marketplace and business operations console across client, business, and admin views.

## ✨ Highlights

- Client-facing storefront and booking flow
- Studio discovery and service browsing
- Appointment booking with slot selection and confirmation
- Business dashboard for calendar, bookings, services, and analytics
- Client CRM and booking history management
- Admin console for KYC, onboarding, and operational controls
- Responsive UI with animated transitions and modern dashboard styling

## 🧭 Product experience

Scheduly is organized around three main perspectives:

- Client mode: discover businesses, browse services, book appointments, manage favorites and profile
- Business mode: manage bookings, calendar, services, clients, analytics and operations
- Admin mode: review onboarding, compliance, and business verification workflows

## 🛠️ Tech stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Motion (animation library)
- Google GenAI package (included in the app dependencies)

## 📁 Project structure

```bash
Scheduly/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   ├── types.ts
│   ├── data/
│   │   └── mockData.ts
│   ├── components/
│   │   ├── Header.tsx
│   │   └── BottomNav.tsx
│   └── views/
│       ├── HomeScreen.tsx
│       ├── ExploreScreen.tsx
│       ├── ServiceDetailsScreen.tsx
│       ├── BookingSlotScreen.tsx
│       ├── ClientBookingsScreen.tsx
│       ├── BusinessOverviewScreen.tsx
│       ├── BusinessCalendarScreen.tsx
│       ├── BusinessBookingsScreen.tsx
│       ├── BusinessClientsScreen.tsx
│       ├── ServicesManagementScreen.tsx
│       ├── BusinessAnalyticsScreen.tsx
│       ├── AdminConsoleScreen.tsx
│       ├── FavoritesScreen.tsx
│       └── AuthModal.tsx
└── README.md
```

## 🚀 Getting started

### Prerequisites

- Node.js 18 or later
- npm or yarn

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

This starts the development server on port 3000.

### Build for production

```bash
npm run build
```

### Run type checks

```bash
npm run lint
```

## 🌐 App behavior overview

### Client side

Users can:

- browse studio listings and service categories
- view detailed service pages and pricing
- choose appointment times and confirm bookings
- track current and past reservations
- manage saved favorites and profile details

### Business side

Business owners can:

- monitor the overview dashboard
- manage calendar events and bookings
- accept or decline appointment requests
- track client records and preferences
- adjust service offerings and pricing
- review analytics and occupancy trends

### Admin side

Admins can:

- review studio onboarding and verification state
- inspect KYC and compliance details
- manage operational platform workflows

## 📸 Notes

This repository is primarily a polished front-end experience and product mockup rather than a fully integrated production backend. The data is driven from local mock data and UI state inside `src/data/mockData.ts`.

## 🏁 Summary

Scheduly is designed to demonstrate a premium appointment-booking ecosystem for creative and service businesses. It focuses on UX, conversion, operational visibility, and modern customer experience across multiple roles in one product.

## License

This project currently does not include a license file. If needed, add one before production deployment or public distribution.

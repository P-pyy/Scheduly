import { Booking, Studio, SalonService, ClientProfile, Stylist } from '../types';

export const ASSETS = {
  logo: "https://lh3.googleusercontent.com/aida/AEtjO1U8TBN25abQthj3494zw75xLyBdjxjd1fknl3s4tzs3iTEj1oyXxGE6Y4oIZjhLo6U0Ll0z41IM0DhpX_iGUPCTHjeB6cRZmJik7rwGXErSoFQydRvMUzQ9cYP5S_az1J6_FlnCpuzBnkskeMhteBOc1mUZo12xqVMm-wCCc2iQEsycPjOdHaIxCfV9-X0U2PStQISMZbbMbmvruoqoD7DgA7xTGCpk97ag52SPIGAxcyAhlA6pjIR5HiDq",
  userProfile: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1TgRUZiTUXuCNkY1cNM2WJDM19fM4ZDx-znZ7iTAKz5J6_FvNhcZvoxARyBGqMu1uWdQN3n9gzmC-7tCta4voekz1GeOFV3PdQJbcnicMGIDUeK_NSv-2TrpPp1Vw1bxsoIZOY1lENGTcqqpl9s2Szezr4-4uKuBdbFeFze7blJnYVUngA0MAMAcyBW2kOzBe5JW3Tt7sE3HTKndXL65DS4D9U8P_J1CVGVu2FgwOpWEEFEFQsUY0-g",
  ownerProfile: "https://lh3.googleusercontent.com/aida/AEtjO1W1Xn30vzAqvykWNFHXhvVnjvoAhQl75ef6a0QzZfPo3gcjaDxjTjLDQX8ni64TxkkNpXpC-cLSPsWbVhWS63qz6WKKwIHRJFuGaRk55Fh8GxbEjJAJjw-5chjE-2MBbIDhzD1VzqvXSN1FeMnyKtkRT1difxduwzMS2ZFMgKHIWyfeamEGasSzkp88QURENBV-Q2_pKdfBI1HYyeQuSKlHQaQY18p9jq18v_Z5IEoemi7wDahg5lMRP_M",
  
  // Clients
  alexAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCl2cLQLdMyHdnPgL6-0ixwRmUkNtIdUaPKmWQyuHZAJN-fB33fpVQ1dysFmH6Gd49LP_tm1sTMhhorR-bbWNsrAek9FX1lr6kKIqBk_gtNDcJ-3nULP0LnAJOIdAIcVNGn5Hh3Unpg3Tdr2aPXLLtLrDdDJ3h32JaURedV7ramwW0xHu75ylMutPW7-vhemwhaD9GNPLXwKbquHRr7dM1UhAUUoKnvL4S3LG0_I-xg2ru5xLGyd6KoeQ",
  camilleAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJsACrcGna8dgvE1p7S4T6oOZBKayjZ-qU7HudtgTypYjPRRC6KG_X08RTlGuRd_CyC_y3gn7SteUoa39xHAVldv2N5Rl3y2bO-nnWgN9detqkhYj24_PVADIX39flRFEwK_ndMWHr5FX5_j2pYfO3cYfiqzJ-E7PdRorv5cOLDkydDTMny_Hu1J1bT5foRt-owNxs2ySHPBzaAy8__MA20XKNvMwYakiV-9zxVDVtR5fm33JglqL_uw",
  chloeAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBx3Z43uXDQ5taeK0GBcajyXdhpEMBA9aNRStYg9fobqPxjQqKPJ-FGQUoGsh8jNnmtvFuL7qZuebWsRpzcaIGq4z4xW4lWMxw33_7Z-yjunvsh3yMXR73WnTUUw2qe-EUZ2Qs8TbasZjFyJa-63ZdLyYJTLNIHsY9HhL_z6Dsmde8_bSIs5BQLQJ7YcD62PNoAQnKOq3p5cfszjQ1pOFAMtR5iqTlhAFFT0IRSx1sshHAGY72vOKFvAw",
  marcoAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3MI7s-pcPddk0xc9oHYugKYXMD0PEwBG4QqoKj4qc_1wSlRRnLIEBBuZLY8Jd0CkabGL-f4AjKilRrYBFo_4zo8sXwYFyDbYlJqUm1A3unwfC-UZmOqTZMuLQ5FHDIblMZ1rNwRfhk2YK1p0cERPkJB1spKa0G2Dh_pGEVgRXX221cMh6ogs8n3kfIqC7cJ5pEWj8YtIgyk1XQWPLr18AOVExsARyEsrjhOScS8URONVjudjcHNj6Cw",
  mayaAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfu5zTNK5D0Pu2zXDlUMcx9VpLtuAAX4V_bbWdkKNS_9wqhTQatVYetENSdJ_dBv41ihoy8uQshOeg42JEykOl-8yp3wln0BnKXGupFebpUfQtyk6v7oWoqiHiGYTaDCIyrIs67MbExmQbq2qwMS88n0jFadd1qMc8E0eSAjkYJWlge5JFNYCvxJhLnS6MWutulXBCeHRUEIJlyPzYqnfMVXPkeDg6OJAF8Pe_m6USAwUAZ68fidxHww",

  // Stylists
  mariaAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTMvwPZjmewFogFteKRepse9BDtlS0TefQu6UQK6fgx9_a0Jv0M0rY7e8GdeLH-3leWyAnb78x-YgmerU96Tck9WQHclzGnNPUAcmTWWnod7Pyib5gPCjR3wLiyiAqwtt26O_J8MBUKLoIcnppmKpJ1Sj0r645GUqdcytSoSH2OphtlfiJynxShDrhSm5BWvoiUuw1vd__XmMqR2o7yEuPUT49CJRoxeQvmA0bpYq9MlXi4XRiUk254w",
  jamieAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWh74MTUvu8EbuwgC2VA4KkjkyuoHI0WqWqMN0VxySwBv0EYFnqe89WzxVsLk--N3GlpgADT-q-bO-ppg17-EbBS7qWdzumZUNefaBANOQ2TZJZJoReUiWRLaBa_L40-sx8r98QY8SoL-CW9p9jGSarkM2TOFe15jJMu-N-7c0eC5gE5ipS8nvgheORK2I7wn6qrm9ozD3t_WG8mradB1r4vGlEYpBbE-5ESieZ8TDoWUpnKoXwsOO3g",
  julianAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDD3Egb7WYXIQFQVnvYVtIfzWISht4hzLjdtC8nKm9tyGsZbkrcD26dbTBUmDHgoPZxEyWVEnT33QSohB8E6ASSH-KG32W5MzzIkBZE025zuXfkOYS7napb2unxuK1oAHtcEFsaRqPlJwnTqenYiKlucD7aWYOKycwmB5ky2ZJXwe1SWTrTxa5vyWTCbkxK-n_CStNV4LDxqOhhwHECGWBYptMuYMTy_8UMG8z0ttShPq7_vkRfUklFPw",

  // Studios & Venues
  studioBloomHero: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTIBmBNQ8DyNX-7n520oC-7czO-Rrmokz9dzT0Rfx0eRDsSXR3RnfgqmJJBbhv7ykoy4f2HifFvY48gDS-J60a5o6sFPzlyvvWJNhTFK6v9m5BlOsNyQqxZVEOShdWQ6SkfwFm0x56-OhpTM98Eld93L_6W6Gw-MWPXZ132GXr_vfk2HByGe0uH5iBY4dqFdBmkwmpLfXD18hrIyO3oU0ML7ozWn530zDVo3Y5v2ZD47ZcSjQ-EKimGg",
  studioBloomStorefront: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1ncl0esr7-dj-f92p6DIOU8kiNXfN3LOZlEspKr6Qk7pL7td4i9EVM_0hbxTci2vuQHMWUSb-KvYvqyVFRdohn6ySHN0y3sr-QMtKjzQ4L3UjgAQkkLpWBrgMpj3g7sBXtepHhB50LHpe4xYi6K5tiWo-qLuMdP9PJ10_2BRxLvjBCTYwuw3C4hhyl0OnJCpJ8s-s3-NUK7O7VFEEMZ5T4cf8tEelmdV287EEdkrSb49dlJ9HkHFV3g",
  studioBloomInside: "https://lh3.googleusercontent.com/aida-public/AB6AXuAB_PXr-BPloRZWrIg3z39sXtW1m8cgUEX8UBUQ46omqVotMGUoalMDra1xqx8X_ZWVsCByhhd9DI1Egu_DuWvNPyh37f197HoC2iyRqq0GIG8dhIpeczjgWpcrOX9V-SR47U98vXYppHVbsenyEzCylPZ1teEhvha-YY86L5qor72-ey0h6TQfMWYUBS1bP0dKwRiNfPXqywnvJuWwxW5dKgTtRMwUh5DdNcxLIfv5skY2rP7A59wGJg",
  northsideBarberHero: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtEzMQv0sdmTWBbWDuNHOe3rz6ANDjUl-2ydGZcWbN0hfW5bIXgSWAhpqzvIWC5f1-fE4fZbav9VAlNudqOnVmMVt2HzCJkJLXTGnmI-Usc8reW1SXjzVsg3ijm5cKPNasOhxCj7_E7yL-QaGGIVEmQgO45QZNZgBapZneKDfZR4xmNpxZiXDVNVMxzAquR67xyJ9Wnch13Re7_guPT_xxZiNAaxw0u1roHuLKvDv2-TESqSPdHPO_Rg",
  northsideSquare: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-AtBmcgWmqTd7PbDMhFJVPK_QBVPIvDeEs5pMhYdPGxAifISq3iY28Hp8CZ7ntNhLCRkhwbKas6VXLasAggdENzVFnt2mmt8PrU-_6zrt4Q1YkW8V0tOtztH53hBgb7p9WDNTNMg-MFR1IESZjRl6ORQGQdTNLu1dt3I6sbn8k_Q6Jv1ArPdRz86at4-Jn4XN1ArjzJMXBOS4_Z6HZNjE6G9A1hN_KGXz26wvpuy_ynEGWW683TRMnw",
  glowNailHero: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWnmFjTTr5fqjfw3Y3O1QL5_Awy6q3Hl29Lfb6W4BzsNOQcJLKZYWWU-uNEcE_YmhArCR2bTs5rNXt75hqPzmX2qbJSYSi41K6iaxxiauB4oz4BVLNAPrwtuJeOIM3r0pfINh2v077AwOqJE5ho408jUVtubdaAdBG0lXavvB57aAytsUCoTfQBBYaiflx55290OzKJcgDFuE2PdYgyHqDqinu3LFSyC1-WhHjlWeHx99xN7OAFIW9fA",
  glowSquare: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4PpAyn-u1bmg-CV_f5VRs0edHSuKY7ozXTNcXOfsrX_lzzcDbtNn9Wx1jZo4A7bCFUxkqXSURQNDGaRcsYc8b9hZ9kyL18Di8C0-q-cbOaZuuRLVLsGXhAz56XlAHSZXE-dbv8bS9yiL4aFgSx5nfAu_hwbANh--AE0WNi8J7mGHx0rrs63MUdthyx77WZcH_VgnUrrqWuRuroCOfi7VjrmbmMc0p2jnOd-dlD2LtPeua91neqIfA3w",
  mindfulSpaHero: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPJa3Ab9KZ1bQ4G3witlZGnufobnk-Wrnz--ouN5Nl5wM6Tw8baBacyk3auAsLZ79aAMpKmHJzEkHmkjwN-UMGughedRTehLG_fzWqYQyhjjmCD2QMRu9dS7-h-iBt1MT6h-KThiFjtbvwisvDG9RNPB-KWga6f_3LTHQ7o4ddM9kZlBzcQzi78juh4h4V_PheD12op1b4D2Hy9ltl51YpYxQmxvzBdaBNqJb2Iy8UKdf_gV0DdMkN2A",
  auraSpaHero: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxGT2eoOFlrycz18ghBTokkv6U-GyEQrmYtRDUmlUP9tgKlUaj22DbeJPN5yBJhVl1ZDWH-KUtHFBlEwFeeGOyJrS6mAsKr6u4Aymh0sMwNAbz5rY3MJaD-MgItCHNM4QCRG5E_yZ3oMYRXx5b8P03M_ksr2tY4IyNYq4g3UFZU-QaVJrxmyy8Qby0qajgfctMLUQZoQawdwKCIwEneshzSFjU20ZYt_qkz8PLQGSbiC5JXWHJbc1QeA",
  glowNailQC: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmF6k5odkqVLgWXZdDofji1JVUW1w5PsHvaydVf-CUuxkRLQw5FEx6kA4QwcnPZOlXBOiTUoFc0ejppLAuS_J2mVz1_mlopUUFRMI8v71zaZTVhxn4xMfSnAUBluMn8GOGB0CEQD8GmgTw98PjylWBeI8DhIgPUEP0EBQcvU0-U9rKhymS7hSECTrQMm1xwags4Aa4fWIbWKLAG1YN72Eyc_IgKk3njpl9JUwGHD4Yt_MXgax86FvTAA",

  // Services
  haircutService: "https://lh3.googleusercontent.com/aida-public/AB6AXuClMDO6G36QaszQmOH5VnIrVIrItiXjnTsK7qM0TWvmYq4xT4ugV9kA1opy4eoQ_0BojEZX1xBMko7_QR7RGByvbKIjSv5rJWFyfmfOIO9bQwXYR7mqSi-RBUPSp3DSf54Sau9tFhw1DOgpFS8CA7o82X-UHfo7sK6rtA4AN2eI_ytq4PPSkcYZr88ufasKjePKddFM6FF4uHKO4Htjhdyljt3sYrSlsO7fjvmCTxB0xuHM7b6f7KGGLQ",
  blowoutService: "https://lh3.googleusercontent.com/aida-public/AB6AXuDH3NfIutckDjwrAaEgXI6WD2fD4_aOLxx3-gOdhyb5DYHMGNaR4OMPCShS-UQqG2Z-YDLzLnGcstz2BxmtOLimjKhf_PqiO8e6fY0bZRpL9vK37ktO8yCUTf3Bmhif56kANdmCEX-wDNf_xex-EWLhza-ESe8LqsAYrT-zgQXqaFyQfSLjQdHcg7BnzVXnemMQNg67ljzBKJ6RypUad-61swXsKgY5mRq65qxecJ-GwpkCi6Kj7T-wOQ",
  balayageService: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7QMejW22tvm-lQa3g8XQ1kB4TxHQtCne8aCFeMj5qSXxOV9DdFGHGOygYECQmmy8fIw5D5HbsBIpTgCUkaiqOWsvPCfIu2VAqUV5K5kTEKqSyBiepQgWvhPmW7GTXYCkIksobnDQXOzzz2e76v6kpwzWNV6nKxMIyrDT5HuU5YR-HzyIq0es3TDNetgz7uKsqTx_Dgs4q317NkSOd4a-HLgBbSMLbZT8LcmrAyiR7s0PwPAXv60ZH5g",
  keratinService: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIsswGNBSo6zliWiyIXdZkZSHt4Dz3fEgiN2ueF_KycqlOkgMZEiMBBS0-gv7Urr-TLB2arbMzX1Kp7umvR4laZ9jJ2MYvQ1-xT32C-m-k8JGxfZQs6GuJAR3iKFoEVjeqaq5JCEuP3RPg7G7JtgYHZ33h_tUEL_e5OTlBZXvqz9pE_XgbywIxGplCHyIDVY3b9xdo5tD9emX3meipcKPdkUwaiHXuhoHtEYYh4aONwEe7SAosk89y4A",
  manicureService: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFelJMD31QtuSSYo08OY9PPMBzu1jI_ILBhesOAaqQt6eBWYnNW36HtgNcBRPGDt52DAe5ERXr8kIh7qD2vI-20iEBd0NBPDIS8yIMRYkR3iKrG8oiSWagkUm_p97FXaOLRH6a0xf2VGZUT3VlUO7BQH5NYuW8B6ZVU9LxIF5eFNI3wzq7pDFnUSJgnnA4lvbLfLoTaTS_isH-SS9pHMPRJLrnqVYiY-sK6AsH7X-aBXEyo2rT7mKnjA"
};

export const INITIAL_STUDIOS: Studio[] = [
  {
    id: "studio-bloom",
    name: "Studio Bloom",
    category: "Hair Styling & Salon",
    rating: 4.9,
    reviewCount: 128,
    location: "Unit 302, High Street South, BGC, Taguig",
    area: "Bonifacio Global City",
    startingPrice: 450,
    image: ASSETS.studioBloomHero,
    verified: true,
    topRated: true,
    tags: ["Instant Confirm", "Sanitized"],
    openNow: true,
    closingTime: "8:00 PM",
    nextAvailable: "Today, 2:30 PM",
    ecoCertified: true
  },
  {
    id: "northside-barber",
    name: "Northside Barber Co.",
    category: "Barbershop & Grooming",
    rating: 4.8,
    reviewCount: 94,
    location: "Legazpi Village, Makati City",
    area: "Makati City",
    startingPrice: 350,
    image: ASSETS.northsideBarberHero,
    verified: true,
    tags: ["Master Stylists"],
    openNow: true,
    closingTime: "9:00 PM",
    nextAvailable: "Tomorrow, 11:00 AM"
  },
  {
    id: "glow-nail",
    name: "Glow Nail & Sanctuary",
    category: "Nails & Spa",
    rating: 4.95,
    reviewCount: 210,
    location: "Emerald Ave, Ortigas Center, Pasig",
    area: "Ortigas Center",
    startingPrice: 500,
    image: ASSETS.glowNailHero,
    verified: true,
    topRated: true,
    tags: ["Top Pick", "Japanese Polishes"],
    openNow: true,
    closingTime: "8:30 PM",
    nextAvailable: "Today, 4:00 PM"
  },
  {
    id: "mindful-spa",
    name: "Mindful Wellness Spa",
    category: "Wellness & Massage",
    rating: 4.7,
    reviewCount: 76,
    location: "Madrigal Business Park, Alabang, Muntinlupa",
    area: "Alabang, Muntinlupa",
    startingPrice: 850,
    image: ASSETS.mindfulSpaHero,
    verified: true,
    tags: ["Holistic Care", "Physical Therapists"],
    openNow: true,
    closingTime: "10:00 PM",
    nextAvailable: "Available This Week"
  }
];

export const INITIAL_SERVICES: SalonService[] = [
  {
    id: "srv-1",
    title: "Signature Haircut & Wash",
    category: "HAIRCUTS",
    description: "Consultation, precision cut, scalp massage and blowout.",
    duration: "45 mins",
    price: 450,
    isPopular: true,
    isActive: true,
    bookingsThisMonth: 142,
    grossRevenue: 63900,
    staffAssigned: "All Staff",
    image: ASSETS.haircutService
  },
  {
    id: "srv-2",
    title: "Balayage & Gloss Treatment",
    category: "COLOR",
    description: "Custom hand-painted highlights + deep moisture mask and toner.",
    duration: "120 mins",
    price: 2400,
    deposit: 500,
    isActive: true,
    bookingsThisMonth: 38,
    grossRevenue: 91200,
    staffAssigned: "Jamie Lim, Maria Santos",
    image: ASSETS.balayageService
  },
  {
    id: "srv-3",
    title: "Styling & Blowout",
    category: "HAIRCUTS",
    description: "Gentle wash and bouncy blowout styling with long-lasting hold serum.",
    duration: "35 mins",
    price: 380,
    isActive: true,
    bookingsThisMonth: 65,
    grossRevenue: 24700,
    staffAssigned: "Maria Santos",
    image: ASSETS.blowoutService
  },
  {
    id: "srv-4",
    title: "Keratin Smooth Therapy",
    category: "CHEMICAL",
    description: "Frizz reduction and nourishing shine treatment. Lasts up to 12 weeks.",
    duration: "90 mins",
    price: 1800,
    isActive: true,
    bookingsThisMonth: 22,
    grossRevenue: 39600,
    staffAssigned: "Jamie Lim",
    image: ASSETS.keratinService
  },
  {
    id: "srv-5",
    title: "Gel Polish Manicure",
    category: "NAILS",
    description: "Cuticle care + long-lasting UV gel with hand massage and organic oils.",
    duration: "50 mins",
    price: 550,
    isActive: true,
    bookingsThisMonth: 54,
    grossRevenue: 29700,
    staffAssigned: "Elena Cruz",
    image: ASSETS.manicureService
  },
  {
    id: "srv-6",
    title: "Express Beard Trim",
    category: "HAIRCUTS",
    description: "Hot towel finish, perimeter shape-up and conditioning beard oil.",
    duration: "20 mins",
    price: 250,
    isActive: false,
    bookingsThisMonth: 0,
    grossRevenue: 0,
    staffAssigned: "Julian Cruz",
    image: ASSETS.haircutService
  }
];

export const INITIAL_BOOKINGS: Booking[] = [
  {
    id: "SC-8921",
    bookingNumber: "SC-8921",
    clientName: "Alex Santos",
    clientPhone: "+63 917 555 0192",
    clientAvatar: ASSETS.alexAvatar,
    serviceTitle: "Signature Haircut & Wash",
    stylistName: "Maria Santos",
    stylistAvatar: ASSETS.mariaAvatar,
    date: "Tuesday, Oct 20, 2026",
    time: "10:45 AM",
    duration: "45 mins",
    fee: 450,
    status: "confirmed",
    paymentStatus: "Unpaid",
    paymentMethod: "Pay at Venue (Cash / GCash / Card)",
    location: "Unit 302, High Street South, BGC, Taguig",
    businessName: "Studio Bloom",
    clientNote: "Sensitive scalp, prefers sulfate-free shampoo."
  },
  {
    id: "SC-8920",
    bookingNumber: "SC-8920",
    clientName: "Camille David",
    clientPhone: "+63 928 444 8812",
    clientAvatar: ASSETS.camilleAvatar,
    serviceTitle: "Balayage & Gloss Treatment",
    stylistName: "Jamie Lim",
    stylistAvatar: ASSETS.jamieAvatar,
    date: "Tuesday, Oct 20, 2026",
    time: "01:15 PM",
    duration: "120 mins",
    fee: 2400,
    status: "confirmed",
    paymentStatus: "Deposit Paid",
    depositAmount: 1200,
    remainingBalance: 1200,
    paymentMethod: "GCash Online Deposit",
    location: "Unit 302, High Street South, BGC, Taguig",
    businessName: "Studio Bloom",
    clientNote: "Wella Koleston 7/1 (30g) + 8/38 (15g) @ 20vol on roots."
  },
  {
    id: "SC-8919",
    bookingNumber: "SC-8919",
    clientName: "Paolo Roxas",
    clientPhone: "+63 905 111 9283",
    clientInitials: "P",
    serviceTitle: "Classic Fade & Beard Trim",
    stylistName: "Julian Cruz",
    stylistAvatar: ASSETS.julianAvatar,
    date: "Tuesday, Oct 20, 2026",
    time: "03:30 PM",
    duration: "45 mins",
    fee: 450,
    status: "pending",
    paymentStatus: "Unpaid",
    paymentMethod: "Pay at Venue",
    location: "Unit 302, High Street South, BGC, Taguig",
    businessName: "Studio Bloom",
    clientNote: "Requested quiet session if possible. First time visiting."
  },
  {
    id: "SC-8918",
    bookingNumber: "SC-8918",
    clientName: "Sarah Tan",
    clientPhone: "+63 919 333 1122",
    clientInitials: "S",
    serviceTitle: "Styling & Blowout",
    stylistName: "Maria Santos",
    stylistAvatar: ASSETS.mariaAvatar,
    date: "Tuesday, Oct 20, 2026",
    time: "09:30 AM",
    duration: "35 mins",
    fee: 380,
    status: "completed",
    paymentStatus: "Paid",
    paymentMethod: "Paid via GCash (₱380)",
    location: "Unit 302, High Street South, BGC, Taguig",
    businessName: "Studio Bloom"
  }
];

export const INITIAL_CLIENTS: ClientProfile[] = [
  {
    id: "cl-1",
    name: "Alex Santos",
    phone: "+63 917 555 0192",
    email: "alex.santos@gmail.com",
    avatar: ASSETS.alexAvatar,
    initials: "AS",
    tier: "VIP",
    visits: 14,
    totalSpent: 7850,
    lastVisit: "16d ago",
    frequencyDays: 18,
    nextAppointment: "Today, 10:45 AM",
    preferredStylist: "Maria Santos",
    clientNotes: "Prefers non-scented shampoo, sensitive scalp. Likes crisp side part with matte pomade finish.",
    tags: ["VIP", "Frequent", "High LTV"]
  },
  {
    id: "cl-2",
    name: "Camille David",
    phone: "+63 928 444 8812",
    email: "camille.d@gmail.com",
    avatar: ASSETS.camilleAvatar,
    initials: "CD",
    tier: "VIP",
    visits: 8,
    totalSpent: 18400,
    lastVisit: "3 wks ago",
    formulaNote: "Wella Koleston 7/1 (30g) + 8/38 (15g) @ 20vol on roots.",
    clientNotes: "Always prefers afternoon sessions (after 2:00 PM). Due for gloss treatment soon.",
    preferredStylist: "Jamie Lim",
    tags: ["VIP", "Top Spender"]
  },
  {
    id: "cl-3",
    name: "Sarah Tan",
    phone: "+63 919 333 1122",
    initials: "ST",
    tier: "Regular",
    visits: 4,
    totalSpent: 1920,
    lastVisit: "Today (9:15 AM)",
    clientNotes: "Express Blowout regular before meetings.",
    preferredStylist: "Maria Santos",
    tags: ["Regular", "Frequent"]
  },
  {
    id: "cl-4",
    name: "Marco Valdez",
    phone: "+63 905 888 2211",
    initials: "MV",
    avatar: ASSETS.marcoAvatar,
    tier: "New Client",
    visits: 1,
    totalSpent: 650,
    lastVisit: "First Visit Today",
    nextAppointment: "Today, 02:00 PM",
    clientNotes: "First visit from Instagram recommendation.",
    tags: ["New"]
  }
];

export const INITIAL_STYLISTS: Stylist[] = [
  {
    id: "st-1",
    name: "Maria Santos",
    role: "Senior Stylist Specialist",
    avatar: ASSETS.mariaAvatar,
    rating: 4.95,
    apptsCount: 112,
    earnings: 54200,
    goalPercentage: "36.5% of goal"
  },
  {
    id: "st-2",
    name: "Jamie Lim",
    role: "Master Colorist & Founder",
    avatar: ASSETS.jamieAvatar,
    rating: 4.98,
    apptsCount: 98,
    earnings: 82400,
    goalPercentage: "Top Earner",
    isTopEarner: true
  },
  {
    id: "st-3",
    name: "Julian Cruz",
    role: "Barber Artist & Stylist",
    avatar: ASSETS.julianAvatar,
    rating: 4.88,
    apptsCount: 74,
    earnings: 33600,
    goalPercentage: "22.6% of goal"
  }
];

export const ADMIN_KYC_REQUESTS = [
  {
    id: "kyc-1",
    name: "Aura Aesthetics & Spa",
    location: "Makati City, Metro Manila",
    appliedTime: "Applied 4h ago",
    tin: "402-981-114",
    dtiVerified: true,
    mayorsPermit: true,
    status: "Pending Verification",
    image: ASSETS.auraSpaHero
  },
  {
    id: "kyc-2",
    name: "Studio Bloom",
    location: "BGC Flagship • Jamie Lim",
    category: "Hair & Beauty",
    monthlyGMV: "₱148,200",
    rating: 4.9,
    reviews: 184,
    tier: "PRO",
    status: "Active",
    image: ASSETS.studioBloomStorefront
  },
  {
    id: "kyc-3",
    name: "Northside Barber Co.",
    location: "Quezon City • Julian Cruz",
    category: "Barbershop",
    monthlyGMV: "₱96,400",
    status: "Active",
    tier: "BASIC",
    image: ASSETS.northsideSquare
  },
  {
    id: "kyc-4",
    name: "Glow Nail Bar QC",
    location: "Tomas Morato, QC • Mara Santos",
    issue: "2025 Mayor's Permit Re-uploaded",
    issueDetail: "Prior record flagged expired on Feb 1. Partner uploaded certified municipal renewal certificate.",
    status: "Re-Submitted",
    image: ASSETS.glowNailQC
  }
];

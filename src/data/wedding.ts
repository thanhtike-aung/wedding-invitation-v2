export const site = {
  url: "https://aung-and-phoo.info",
  title: "Aung & Phoo | Wedding Invitation",
  description:
    "Together with our families, we invite you to celebrate the wedding of Aung & Phoo on Sunday, 29 November 2026 in Yangon.",
  locale: "en",
};

export const couple = {
  displayName: "Aung & Phoo",
  partnerOne: { short: "Aung", full: "ThanHtike Aung" },
  partnerTwo: { short: "Phoo", full: "PhooNgone Thet" },
  monogram: "A&P",
};

export const event = {
  dateLabel: "Sunday, 29 November 2026",
  dateShort: "29 . 11 . 2026",
  timeZone: "Asia/Yangon",
  timeZoneLabel: "Yangon time (UTC+06:30)",
  ceremonyStartsAt: "2026-11-29T17:30:00+06:30",
  calendarStart: "20261129T110000Z",
  calendarEnd: "20261129T133000Z",
  venueName: "The Memorial Venue",
  city: "Yangon",
  addressEn: "152 Yogi Kyaung Lan, Ward 11, Hlaing Township, Yangon",
  addressMy: "၁၅၂ ယောဂီကျောင်းလမ်း၊ (၁၁)ရပ်ကွက်၊ လှိုင်မြို့နယ်။",
  mapsShortUrl: "https://maps.app.goo.gl/sw4rWrPHEVuwBgAKA",
  coordinates: { lat: 16.8458113, lng: 96.1281888 },
  dressCode: null,
};

export const journey = {
  heading: "A decade together",
  body: "A decade of love, growth, laughter, and shared memories has brought us to this moment. As we begin our next chapter, we would be honored to celebrate with you.",
  chapters: [
    {
      icon: "heart",
      label: "Then",
      title: "We became us",
      text: "The first conversation that started it all.",
    },
    {
      icon: "sprout",
      label: "Along the way",
      title: "We grew together",
      text: "Ten years of learning, laughing, and choosing each other.",
    },
    {
      icon: "sparkle",
      label: "Today",
      title: "We celebrate ten years",
      text: "A decade strong, and we want you there with us.",
    },
    {
      icon: "infinity",
      label: "Next",
      title: "We begin forever",
      text: "A new chapter, and a lifetime still to write.",
    },
  ],
};

export const details = [
  { label: "Date", value: "Sunday, 29 November 2026" },
  { label: "Venue", value: "The Memorial Venue" },
  { label: "City", value: "Yangon" },
];

export const schedule = [
  {
    time: "5:00 PM",
    title: "Arrive",
    body: "Take a breath, find your place, and settle into the evening.",
  },
  {
    time: "5:30 PM",
    title: "Ceremony",
    body: "Join us as we begin this next chapter together.",
  },
  {
    time: "6:00 PM",
    title: "Celebrate",
    body: "Enjoy dinner, conversation, and the people who mean the most.",
  },
  {
    time: "8:00 PM",
    title: "Farewell",
    body: "We close the evening with grateful hearts and full memories.",
  },
];

export const hero = {
  image: "/hero.webp",
  imageAlt: "Aung and Phoo standing together under a lantern-lit colonnade",
};

export type GalleryItem = {
  src: string;
  thumb: string;
  alt: string;
  caption: string;
};

export const gallery: GalleryItem[] = [
  {
    src: "/gallery/large/gallery-01.webp",
    thumb: "/gallery/thumb/gallery-01.webp",
    alt: "Wedding celebration with warm lights",
    caption: "Under the warm lights",
  },
  {
    src: "/gallery/large/gallery-02.webp",
    thumb: "/gallery/thumb/gallery-02.webp",
    alt: "Aung and Phoo in profile, facing each other against a warm glow",
    caption: "Face to face",
  },
  {
    src: "/gallery/large/gallery-03.webp",
    thumb: "/gallery/thumb/gallery-03.webp",
    alt: "Aung and Phoo holding hands beside a cream wall with a lantern",
    caption: "Hand in hand",
  },
  {
    src: "/gallery/large/gallery-10.webp",
    thumb: "/gallery/thumb/gallery-10.webp",
    alt: "Aung and Phoo close together under the lights of a historic building at night",
    caption: "Under city lights",
  },
  {
    src: "/gallery/large/gallery-05.webp",
    thumb: "/gallery/thumb/gallery-05.webp",
    alt: "Phoo in a soft veil, touching her earring and holding white tulips",
    caption: "Bridal grace",
  },
  {
    src: "/gallery/large/gallery-06.webp",
    thumb: "/gallery/thumb/gallery-06.webp",
    alt: "Aung and Phoo embracing in front of a red floral wall and a Marry Me sign",
    caption: "Marry me",
  },
  {
    src: "/gallery/large/gallery-07.webp",
    thumb: "/gallery/thumb/gallery-07.webp",
    alt: "Aung and Phoo walking together across a street in front of a colonial building",
    caption: "Side by side",
  },
  {
    src: "/gallery/large/gallery-08.webp",
    thumb: "/gallery/thumb/gallery-08.webp",
    alt: "Aung and Phoo in traditional Myanmar attire in a richly decorated room",
    caption: "Our heritage",
  },
  {
    src: "/gallery/large/gallery-09.webp",
    thumb: "/gallery/thumb/gallery-09.webp",
    alt: "Black and white photo of Aung and Phoo walking hand in hand at night",
    caption: "Night stroll",
  },
  {
    src: "/gallery/large/gallery-04.webp",
    thumb: "/gallery/thumb/gallery-04.webp",
    alt: "Aung kissing Phoo's hand in front of a bright arched window",
    caption: "A gentle gesture",
  },
];

export const closing = {
  thanks: "Thank you for being part of our journey.",
  message: "We look forward to celebrating this beautiful moment with you.",
  signoff: "With love,",
};

export const mapEmbedUrl = `https://www.google.com/maps?q=${event.coordinates.lat},${event.coordinates.lng}&z=17&output=embed`;

export const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
  `${couple.displayName} Wedding`,
)}&dates=${event.calendarStart}/${event.calendarEnd}&details=${encodeURIComponent(
  "Guest arrival 5:00 PM, ceremony 5:30 PM, reception 6:00 PM to 8:00 PM.",
)}&location=${encodeURIComponent(`${event.venueName}, ${event.addressEn}`)}&ctz=${event.timeZone}`;

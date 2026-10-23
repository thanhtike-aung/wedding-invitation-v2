# Aung & Phoo Wedding Invitation Website — Project Plan

## 1. Project Goal

Build a personal wedding invitation website that guests can access by scanning a QR code printed on the physical wedding invitation card.

The website should feel like an experience rather than a simple information page: elegant, personal, modern, warm, and enjoyable to browse.

The expected total guest count is around **150 people**. The website is an invitation; it is not intended to replace the physical invitation or act as a strict seat reservation system.

### Confirmed couple details

- **Partner 1:** ThanHtike Aung, short name **Aung**
- **Partner 2:** PhooNgone Thet, short name **Phoo**
- **Public display name:** **Aung & Phoo**
- **Language:** English
- **Voice:** Formal and warm
- **Relationship framing:** **A decade together**

---

## 2. Event Details

- **Date:** Sunday, 29 November 2026
- **Timezone:** Yangon / `Asia/Yangon` / UTC+06:30
- **Venue:** Memorial Venue / The Memorial Venue
- **City:** Yangon
- **Address in English:** 152 Yogi Kyaung Lan, Ward 11, Hlaing Township, Yangon
- **Official Burmese address:** ၁၅၂ ယောဂီကျောင်းလမ်း၊ (၁၁)ရပ်ကွက်၊ လှိုင်မြို့နယ်။
- **Google Maps short link:** https://maps.app.goo.gl/sw4rWrPHEVuwBgAKA
- **Resolved map coordinates:** `16.8458113, 96.1281888`
- **Dress code:** None

### Confirmed schedule

- **5:00 PM** — Guest arrival
- **5:30 PM** — Ceremony
- **6:00 PM** — Reception and dinner
- **8:00 PM** — Closing

The schedule should remain intentionally simple until any additional program details are finalized. Do not invent speeches, entertainment, traditional elements, or other activities that have not been confirmed.

---

## 3. Access Flow and Domain

The physical invitation card will contain one public QR code.

The QR code should point to the stable homepage:

```text
https://aung-and-phoo.info/
```

The QR code must not need to change if internal page sections or routes change later.

### Guest flow

```text
Physical Invitation Card
        |
        | Scan QR Code
        v
https://aung-and-phoo.info/
        |
        +-- Our Journey
        +-- Wedding Details
        +-- Schedule
        +-- Gallery
        +-- Location
```

The domain is chosen as:

> `aung-and-phoo.info`

The domain should be purchased and connected to Cloudflare before the QR code is printed. Enable auto-renewal, HTTPS, and Cloudflare DNS management. Redirect `www.aung-and-phoo.info` to the root domain if desired, but keep the printed QR code pointed at the root URL.

---

## 4. Website Structure

Use one elegant, scrollable homepage for guests. The guest-facing route structure is intentionally simple:

```text
/
├── Hero / Opening
├── Our Journey
├── Wedding Details
├── Schedule
├── Gallery
├── Location
└── Closing
```


The public homepage uses a compact sticky navigation with:

- Aung & Phoo wordmark
- Section menu

- Mobile menu that closes after navigation
- Header that becomes smaller after scrolling and reappears when scrolling upward

---

## 5. Planned and Implemented Website Sections

### 5.1 Hero / Opening

The hero should include:

- Aung & Phoo
- “Together with our families”
- “A decade together” framing
- Wedding date
- Yangon / venue context
- Warm invitation message
- Invitation-exploration action
- Temporary online hero photograph during development

Current invitation copy direction:

> Together with our families, we invite you to celebrate our wedding.

The hero uses a temporary Unsplash image for local/design preview. It must be replaced with a final couple photograph hosted through R2 before production launch.

### 5.2 Our Journey

A full relationship story is not required.

The section should communicate the ten-year relationship through concise copy and a visual chapter structure:

> **A decade together**  
> A decade of love, growth, laughter, and shared memories has brought us to this moment. As we begin our next chapter, we would be honored to celebrate with you.

Visual chapters:

- **Then** — We became us
- **Along the way** — We grew together
- **Today** — We celebrate ten years
- **Next** — We begin forever

Do not publish a specific starting year unless Aung and Phoo later confirm that they want one displayed.

### 5.3 Wedding Details

Show:

- Sunday, 29 November 2026
- Guest arrival at 5:00 PM
- Ceremony at 5:30 PM
- Reception from 6:00 PM to 8:00 PM
- Memorial Venue
- Yangon
- Yangon timezone note

There is no dress-code section. Do not display “No dress code” as a separate item.

### 5.4 Schedule

Use a clean four-step timeline:

```text
Arrive → Ceremony → Celebrate → Farewell
```

Current schedule copy:

- **5:00 PM — Arrive:** Take a breath, find your place, and settle into the evening.
- **5:30 PM — Ceremony:** Join us as we begin this next chapter together.
- **6:00 PM — Celebrate:** Enjoy dinner, conversation, and the people who mean the most.
- **8:00 PM — Farewell:** We close the evening with grateful hearts and full memories.

Add further activities only when the real wedding program is finalized.

### 5.5 Countdown

Show a live countdown to:

```text
29 November 2026 at 5:30 PM Yangon time
```

The countdown should switch to a celebratory “Today we celebrate” state once the target time is reached.

### 5.6 Gallery

The gallery is arranged for **10 photos** during the current design phase.

Current behavior:

- Two columns on mobile
- Four columns on larger screens
- Responsive card layout
- First two images load eagerly; later images lazy-load
- Tapping/clicking a card opens a lightbox
- Lightbox supports larger viewing on mobile and desktop
- Gallery data is driven from `src/data/wedding.ts`

The project currently uses temporary online Unsplash preview images so the layout can be evaluated. These are not final wedding assets.

Before production:

- Upload optimized final images to Cloudflare R2
- Replace the temporary URLs with R2 URLs
- Add accurate alt text for each meaningful image
- Keep original high-resolution files separate from public web-sized assets
- Use WebP or AVIF variants where practical

The gallery should remain curated at approximately 6–12 images on the homepage. If the collection grows much larger, keep the homepage selection concise and consider a separate full-gallery route rather than making the invitation excessively long.

### 5.7 Location

The location section includes:

- Memorial Venue / The Memorial Venue
- English address
- Official Burmese address
- Embedded Google Map centered on the resolved venue coordinates
- “Open in Google Maps” button using the exact provided short link
- Google Calendar action
- `.ics` download action

The Google Map embed is intentionally reversible. If it negatively affects mobile performance or visual quality, replace it with the lightweight decorative map card while keeping the direct Google Maps button.

### 5.8 Closing

Use:

> **Thank you for being part of our journey.**  
> We look forward to celebrating this beautiful moment with you.  
>  
> **With love,**  
> **Aung & Phoo**

The closing may include a final photograph and subtle animation once final photography is available.

---

## 6. Design Direction

### Theme: Warm Editorial Romance

The visual direction should feel formal, warm, modern, and personal without looking like a generic wedding template.

Design decisions:

- Warm ivory / soft cream background
- Deep charcoal or espresso text
- Muted terracotta, dusty rose, sage, and restrained bronze accents
- Elegant serif display type
- Clean sans-serif body type
- Generous editorial spacing
- Thin rules and subtle circular framing
- Modern neutral styling without invented cultural motifs
- No dress-code or ceremony motifs unless Aung and Phoo later provide them

### Motion

Use tasteful, restrained motion:

- Hero image fade-in
- Staggered couple-name/date reveal
- Scroll-triggered section reveals
- Gentle gallery image transitions

- Smooth anchor scrolling
- No scroll-jacking
- No autoplay background music
- No forced “open invitation” envelope screen
- No large confetti or distracting particle effects

All motion must respect `prefers-reduced-motion`.

### Navigation

Use a compact sticky header:

- Small `A&P` monogram
- “Aung & Phoo” wordmark
- Section menu

- Mobile menu

### Gallery and map fallbacks

- Gallery final assets should come from R2.
- The current external images are temporary only.
- The embedded Google Map may be reverted to a decorative card if performance or visual quality is not acceptable.
- The direct Google Maps button must remain available either way.

---

## 7. Hosting and Infrastructure

Use Cloudflare as the primary platform.

### Cloudflare Pages

Purpose:

- Host the static Astro-generated frontend
- Build command: `npm run build`
- Output directory: `dist`
- Connect to the Git repository when the project is uploaded

### Cloudflare R2

Purpose:

- Store final wedding and pre-wedding photos
- Serve optimized public gallery assets
- Keep original files separate from web-sized variants

Photo uploads will be managed through the Cloudflare dashboard or controlled local upload process. No public upload tool will be built in v1.

### Cloudflare Web Analytics

Cloudflare Web Analytics may be enabled using an environment token:

```text
PUBLIC_CF_ANALYTICS_TOKEN
```

It should remain privacy-friendly. No invasive third-party tracking should be added.

---

## 8. Recommended Architecture

```text
                         Guest Phone
                              |
                              | QR Code
                              v
                  https://aung-and-phoo.info/
                              |
                              v
                       Cloudflare Pages
                              |
                              +--> One-page Astro invitation

Photos
  |
  v
Cloudflare R2
  |
  v
Public optimized gallery assets
```

### Production routes

```text
/                  Cloudflare Pages / Astro homepage
```

---

## 9. Privacy

- The website uses `noindex, nofollow` metadata.
- The public site is accessible to anyone with the URL; `noindex` is not authentication.
- Do not publish a guest list.
- Do not publish personal phone numbers.
- Do not add a public guest message wall in v1.
- Do not use autoplay audio.

---

## 10. Important Technical Principles

1. **Mobile-first**
   - Most guests will access the site from phones after scanning the QR code.
   - Test on multiple iOS and Android devices.

2. **Performance**
   - Use Astro static output.
   - Lazy-load gallery images.
   - Replace external preview images with optimized R2 assets before launch.
   - Avoid unnecessary JavaScript.
   - Keep the Google Map embed under review; retain the direct maps button as fallback.

3. **Maintainability**
   - Keep the one-page guest experience simple.
   - Keep content in `src/data/wedding.ts` where practical.
   - Avoid adding React or unnecessary external services.

4. **Privacy**
   - The website is not search-indexed.
   - Public link access is intentional because the QR code is a shared invitation.

5. **Accessibility**
   - Use readable typography and sufficient contrast.
   - Include alt text for meaningful images.
   - Give the map iframe a descriptive title.
   - Ensure navigation works without animation.
   - Respect reduced-motion preferences.

---

## 11. Current Technology Choice

The frontend stack is:

- **Frontend:** Astro
- **Language:** TypeScript
- **Styling:** CSS
- **Hosting:** Cloudflare Pages
- **Image/file storage:** Cloudflare R2
- **Analytics:** Optional Cloudflare Web Analytics
- **Domain:** `aung-and-phoo.info`
- **Local runtime:** Node.js 18.17.1 or newer; Node 24 has been validated

### Why Astro + TypeScript?

This website is a content-rich, image-heavy invitation rather than a complex web application. Astro produces a fast static site while allowing focused client-side interaction for the countdown, navigation, and gallery lightbox.

React is not required and should not be introduced unless a specific future feature genuinely benefits from it.

Recommended frontend approach:

```text
Astro
  |
  +-- TypeScript
  +-- CSS
  +-- Astro components
  +-- Small browser scripts for required interactions
```

---

## 12. Local Development

From `D:\THA\Astro`:

### Public site only

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:4321
```


### Validation commands

```bash
npm run check
npm run build
```

---

## 13. Current Implementation Status

### Completed

- Astro + TypeScript project scaffold
- One-page mobile-first guest experience
- Warm Editorial Romance visual system
- Hero animation and temporary online hero image
- Ten-photo responsive gallery preview
- Gallery lightbox interaction
- Smooth scrolling and reduced-motion support
- Relationship journey section for the ten-year story
- Confirmed date, time, venue, address, and schedule
- Live ceremony countdown
- English and Burmese venue address display
- Google Maps embed and direct Google Maps button
- Google Calendar action and `.ics` download

- `noindex, nofollow` metadata
- Social sharing metadata


### Remaining before production launch

1. Purchase and connect `aung-and-phoo.info`.
2. Deploy the Astro site to Cloudflare Pages.
3. Create the R2 bucket and upload final optimized photos.
4. Replace all temporary Unsplash hero/gallery URLs with R2 URLs.
5. Decide whether to keep the embedded Google Map after mobile performance testing.
6. Generate the production QR code pointing to `https://aung-and-phoo.info/`.
7. Test the QR flow, map, and calendar actions on multiple phones and networks.

Do not print the invitations until the production domain, homepage, QR code, and mobile flow have been tested successfully.

The project is for approximately 150 guests, so simplicity, reliability, visual quality, privacy, and ease of maintenance remain more important than scalability.

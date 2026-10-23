import type { APIRoute } from "astro";
import { couple, event, site } from "../data/wedding";

export const prerender = true;

const escapeText = (value: string) =>
  value.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");

const stamp = new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");

export const GET: APIRoute = () => {
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Aung and Phoo//Wedding Invitation//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:wedding-${couple.displayName.replace(/[^a-z0-9]/gi, "").toLowerCase()}-2026-11-29@aung-and-phoo.info`,
    `DTSTAMP:${stamp}`,
    `DTSTART:${event.calendarStart}`,
    `DTEND:${event.calendarEnd}`,
    `SUMMARY:${escapeText(`${couple.displayName} Wedding`)}`,
    `DESCRIPTION:${escapeText("Guest arrival 5:00 PM, ceremony 5:30 PM, reception 6:00 PM to 8:00 PM. Yangon time (UTC+06:30).")}`,
    `LOCATION:${escapeText(`${event.venueName}, ${event.addressEn}`)}`,
    `URL:${site.url}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ];

  return new Response(lines.join("\r\n") + "\r\n", {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": 'attachment; filename="aung-and-phoo-wedding.ics"',
    },
  });
};

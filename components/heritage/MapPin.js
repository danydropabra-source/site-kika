// Visual SVG marker used in the static legend and inside the Leaflet DivIcon.
// Two variants: 'pilot' (gold, larger, animated ring) and 'default' (green).

export function pinSvg({ pilot = false } = {}) {
  if (pilot) {
    return `
      <div class="hqf-pin hqf-pin--pilot">
        <span class="hqf-pin__ring"></span>
        <svg viewBox="0 0 32 44" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="hqfPilotG" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#D4B26A"/>
              <stop offset="100%" stop-color="#B58A3A"/>
            </linearGradient>
          </defs>
          <path d="M16 0C7.16 0 0 7.16 0 16c0 11 16 28 16 28s16-17 16-28C32 7.16 24.84 0 16 0z" fill="url(#hqfPilotG)" stroke="#FFFDF8" stroke-width="2"/>
          <circle cx="16" cy="16" r="5" fill="#FFFDF8"/>
        </svg>
      </div>
    `
  }
  return `
    <div class="hqf-pin">
      <svg viewBox="0 0 28 40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M14 0C6.27 0 0 6.27 0 14c0 9.6 14 26 14 26s14-16.4 14-26C28 6.27 21.73 0 14 0z" fill="#0B3A34" stroke="#B58A3A" stroke-width="1.5"/>
        <circle cx="14" cy="14" r="4.2" fill="#B58A3A"/>
      </svg>
    </div>
  `
}

// Static legend pin (renders the same SVG as a React component).
export default function MapPin({ pilot = false, label }) {
  return (
    <div className="inline-flex items-center gap-2">
      <span
        className="inline-block"
        dangerouslySetInnerHTML={{ __html: pinSvg({ pilot }) }}
        style={{ width: pilot ? 22 : 18, height: pilot ? 30 : 25 }}
      />
      {label && (
        <span className="text-xs uppercase tracking-[0.18em] text-heritage-green font-bold">{label}</span>
      )}
    </div>
  )
}

'use client'

import { useEffect, useMemo, useRef } from 'react'
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { pinSvg } from './MapPin'

function buildIcon(place) {
  const html = pinSvg({ pilot: !!place.pilot })
  const w = place.pilot ? 40 : 32
  const h = place.pilot ? 54 : 46
  return L.divIcon({
    className: 'hqf-marker',
    html,
    iconSize: [w, h],
    iconAnchor: [w / 2, h - 4],
    popupAnchor: [0, -h + 8],
  })
}

function FlyTo({ target }) {
  const map = useMap()
  useEffect(() => {
    if (!target) return
    map.flyTo([target.lat, target.lng], 17, { duration: 0.7 })
  }, [target, map])
  return null
}

export default function HeritageMap({ places = [], selected, onSelect, center, zoom = 16 }) {
  const mapCenter = useMemo(() => {
    if (center) return center
    if (places.length) {
      const lat = places.reduce((s, p) => s + p.lat, 0) / places.length
      const lng = places.reduce((s, p) => s + p.lng, 0) / places.length
      return [lat, lng]
    }
    return [40.13965, -7.50105]
  }, [center, places])

  const containerRef = useRef(null)

  return (
    <div ref={containerRef} className="hqf-map-wrap relative w-full h-full rounded-2xl overflow-hidden">
      <MapContainer
        center={mapCenter}
        zoom={zoom}
        scrollWheelZoom={false}
        style={{ width: '100%', height: '100%' }}
        zoomControl={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {places.map((p) => (
          <Marker
            key={p.slug}
            position={[p.lat, p.lng]}
            icon={buildIcon(p)}
            eventHandlers={{
              click: () => onSelect && onSelect(p),
            }}
          />
        ))}
        <FlyTo target={selected} />
      </MapContainer>
    </div>
  )
}

import { useEffect } from 'react'
import { MapContainer, TileLayer, CircleMarker, useMap } from 'react-leaflet'
import { useSite } from '../context/SiteContext'
import 'leaflet/dist/leaflet.css'

function MapResizeFix() {
  const map = useMap()

  useEffect(() => {
    const timer = setTimeout(() => {
      map.invalidateSize()
    }, 200)

    return () => clearTimeout(timer)
  }, [map])

  return null
}

function WorldMapSection() {
  const { siteContent } = useSite()
  const content = siteContent || {}
  const locations = content.locations?.length > 0 ? content.locations : []

  if (!locations.length) return null

  return (
    <section className="section map-section">
      <div className="container">
        <h2 className="section-title centered">{content.reviews_map_title || 'Avis clients dans le monde'}</h2>

        <div className="map-wrapper">
          <MapContainer
            center={[20, 10]}
            zoom={2}
            scrollWheelZoom={false}
            className="world-map"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {locations.map((loc, i) => (
              <CircleMarker
                key={i}
                center={[loc.lat, loc.lng]}
                radius={8}
                pathOptions={{ color: '#22c55e', fillColor: '#22c55e', fillOpacity: 0.9 }}
              />
            ))}
            <MapResizeFix />
          </MapContainer>
        </div>
      </div>
    </section>
  )
}

export default WorldMapSection

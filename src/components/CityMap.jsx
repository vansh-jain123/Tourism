import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { CITY_COORDS } from '../services/routeOptimizer';
import './CityMap.css';

// Fix default marker icon issue with bundlers
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// Component to dynamically update map center
function MapUpdater({ center }) {
  const map = useMap();
  React.useEffect(() => {
    map.setView(center, 13);
  }, [center, map]);
  return null;
}

export default function CityMap({ city, attractions, onClose }) {
  // Use coordinates from routeOptimizer if available, or fallback to Paris
  const coord = CITY_COORDS[city] || CITY_COORDS['Paris'];
  
  return (
    <div className="city-map-overlay animate-fadeIn">
      <div className="city-map-modal glass-panel">
        <div className="city-map-header">
          <h3 className="city-map-title">📍 Explore {city}</h3>
          <button className="city-map-close" onClick={onClose}>&times;</button>
        </div>
        <div className="city-map-body">
          <MapContainer
            center={[coord.lat, coord.lng]}
            zoom={13}
            style={{ height: '100%', width: '100%' }}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://carto.com/">CARTO</a>'
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            />
            <MapUpdater center={[coord.lat, coord.lng]} />
            
            <Marker position={[coord.lat, coord.lng]}>
              <Popup>
                <strong>{city} Center</strong>
                <br />
                {attractions.length} Top Attractions in this area.
              </Popup>
            </Marker>

            {/* We could place mock points around the center for attractions if needed, but since we don't have accurate lat/lng for every attraction, clustering them or just showing the city is safest. */}
          </MapContainer>
        </div>
      </div>
    </div>
  );
}

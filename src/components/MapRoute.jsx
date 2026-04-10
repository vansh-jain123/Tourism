import React, { useState, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { CITY_COORDS, optimizeRoute } from '../services/routeOptimizer';
import './MapRoute.css';

// Fix default marker icon issue with bundlers
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const ALL_CITIES = Object.keys(CITY_COORDS);

export default function MapRoute() {
  const [selectedCities, setSelectedCities] = useState([]);

  const toggleCity = (city) => {
    setSelectedCities(prev =>
      prev.includes(city) ? prev.filter(c => c !== city) : [...prev, city]
    );
  };

  const routeData = useMemo(() => {
    if (selectedCities.length < 2) return null;
    return optimizeRoute(selectedCities);
  }, [selectedCities]);

  const polylinePositions = routeData
    ? routeData.route.map(c => [CITY_COORDS[c].lat, CITY_COORDS[c].lng])
    : [];

  const totalDistance = routeData
    ? routeData.legs.reduce((sum, l) => sum + l.distance, 0)
    : 0;

  const totalCost = routeData
    ? routeData.legs.reduce((sum, l) => sum + parseInt(l.transport.cost.replace(/[^0-9]/g, '')), 0)
    : 0;

  return (
    <div className="map-route-page">
      <div className="map-header animate-slideUp">
        <h2 className="map-title">🗺️ Route Planner</h2>
        <p className="map-subtitle">Select cities to plot on the map and generate an optimized travel route.</p>
      </div>

      <div className="map-layout">
        {/* City selector sidebar */}
        <div className="map-sidebar glass-panel">
          <h4 className="sidebar-title">Select Cities</h4>
          <div className="city-checkboxes">
            {ALL_CITIES.map(city => (
              <label key={city} className={`city-checkbox ${selectedCities.includes(city) ? 'checked' : ''}`}>
                <input
                  type="checkbox"
                  checked={selectedCities.includes(city)}
                  onChange={() => toggleCity(city)}
                />
                <span className="checkbox-dot"></span>
                <span>{city}</span>
              </label>
            ))}
          </div>

          {routeData && (
            <div className="route-summary">
              <div className="summary-stat">
                <span className="summary-label">Total Distance</span>
                <span className="summary-value">{totalDistance.toLocaleString()} km</span>
              </div>
              <div className="summary-stat">
                <span className="summary-label">Est. Transport Cost</span>
                <span className="summary-value">${totalCost.toLocaleString()}</span>
              </div>
              <div className="summary-stat">
                <span className="summary-label">Stops</span>
                <span className="summary-value">{routeData.route.length} cities</span>
              </div>
            </div>
          )}
        </div>

        {/* Map */}
        <div className="map-container glass-panel">
          <MapContainer
            center={[20, 40]}
            zoom={2}
            style={{ height: '100%', width: '100%', borderRadius: '16px' }}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://carto.com/">CARTO</a>'
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            />
            {selectedCities.map(city => {
              const coord = CITY_COORDS[city];
              if (!coord) return null;
              const idx = routeData ? routeData.route.indexOf(city) + 1 : null;
              return (
                <Marker key={city} position={[coord.lat, coord.lng]}>
                  <Popup>
                    <strong>{idx ? `#${idx} ` : ''}{city}</strong>
                  </Popup>
                </Marker>
              );
            })}
            {polylinePositions.length > 1 && (
              <Polyline
                positions={polylinePositions}
                pathOptions={{ color: '#f0b232', weight: 3, opacity: 0.8, dashArray: '10, 6' }}
              />
            )}
          </MapContainer>
        </div>
      </div>

      {/* Route legs table */}
      {routeData && routeData.legs.length > 0 && (
        <div className="route-legs animate-slideUp">
          <h3 className="legs-title">Optimized Travel Sequence</h3>
          <div className="legs-table glass-panel">
            <div className="legs-header">
              <span>#</span>
              <span>From → To</span>
              <span>Distance</span>
              <span>Transport</span>
              <span>Time</span>
              <span>Est. Cost</span>
            </div>
            {routeData.legs.map((leg, i) => (
              <div key={i} className="leg-row" style={{ animationDelay: `${i * 0.08}s` }}>
                <span className="leg-num">{i + 1}</span>
                <span className="leg-cities">{leg.from} → {leg.to}</span>
                <span className="leg-dist">{leg.distance.toLocaleString()} km</span>
                <span className="leg-transport">{leg.transport.mode}</span>
                <span className="leg-time">{leg.transport.time}</span>
                <span className="leg-cost">{leg.transport.cost}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

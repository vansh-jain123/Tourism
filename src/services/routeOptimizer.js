// Coordinates for all supported cities
export const CITY_COORDS = {
  'Paris': { lat: 48.8566, lng: 2.3522 },
  'Tokyo': { lat: 35.6762, lng: 139.6503 },
  'New York City': { lat: 40.7128, lng: -74.0060 },
  'Dubai': { lat: 25.2048, lng: 55.2708 },
  'Goa': { lat: 15.2993, lng: 74.1240 },
  'Nainital': { lat: 29.3919, lng: 79.4542 },
  'Delhi': { lat: 28.6139, lng: 77.2090 },
  'Dehradun': { lat: 30.3165, lng: 78.0322 },
  'Jaipur': { lat: 26.9124, lng: 75.7873 },
  'Manali': { lat: 32.2396, lng: 77.1887 },
  'London': { lat: 51.5074, lng: -0.1278 },
  'Bali': { lat: -8.3405, lng: 115.0920 },
  'Bangkok': { lat: 13.7563, lng: 100.5018 },
};

// Haversine formula for distance between two coordinates
function haversine(lat1, lon1, lat2, lon2) {
  const R = 6371; // km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon/2) * Math.sin(dLon/2);
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

function getTransport(distKm) {
  if (distKm < 200) return { mode: '🚗 Car/Taxi', time: `~${Math.round(distKm / 60)}h drive`, cost: `~$${Math.round(distKm * 0.15)}` };
  if (distKm < 800) return { mode: '🚆 Train', time: `~${Math.round(distKm / 120)}h`, cost: `~$${Math.round(distKm * 0.08)}` };
  return { mode: '✈️ Flight', time: `~${Math.round(distKm / 800)}h`, cost: `~$${Math.round(50 + distKm * 0.06)}` };
}

// Nearest-neighbor route optimization
export function optimizeRoute(cityNames) {
  const cities = cityNames.filter(c => CITY_COORDS[c]);
  if (cities.length <= 1) return { route: cities, legs: [] };

  const visited = [cities[0]];
  const remaining = cities.slice(1);

  while (remaining.length > 0) {
    const last = visited[visited.length - 1];
    const lastCoord = CITY_COORDS[last];
    let nearest = 0, minDist = Infinity;
    remaining.forEach((c, i) => {
      const coord = CITY_COORDS[c];
      const d = haversine(lastCoord.lat, lastCoord.lng, coord.lat, coord.lng);
      if (d < minDist) { minDist = d; nearest = i; }
    });
    visited.push(remaining[nearest]);
    remaining.splice(nearest, 1);
  }

  const legs = [];
  for (let i = 0; i < visited.length - 1; i++) {
    const from = visited[i], to = visited[i + 1];
    const c1 = CITY_COORDS[from], c2 = CITY_COORDS[to];
    const dist = Math.round(haversine(c1.lat, c1.lng, c2.lat, c2.lng));
    legs.push({ from, to, distance: dist, transport: getTransport(dist) });
  }

  return { route: visited, legs };
}

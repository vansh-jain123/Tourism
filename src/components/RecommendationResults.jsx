import React, { useState, useEffect } from 'react';
import CityMap from './CityMap';
import './RecommendationResults.css';

const TABS = [
  { id: 'itinerary', label: '🗓️ Itinerary', icon: '🗓️' },
  { id: 'attractions', label: '🗺️ Attractions', icon: '🗺️' },
  { id: 'hiddengems', label: '💎 Hidden Gems', icon: '💎' },
  { id: 'hotels', label: '🏨 Hotels', icon: '🏨' },
  { id: 'food', label: '🍽️ Food', icon: '🍽️' },
  { id: 'budget', label: '💰 Budget', icon: '💰' },
  { id: 'reel', label: '🎬 Reel Script', icon: '🎬' },
  { id: 'social', label: '📱 Social', icon: '📱' },
  { id: 'prompts', label: '🎨 AI Prompts', icon: '🎨' },
];

// ─────────────────────────────────────────────────────────────────────────────
// 🖼️ IMAGE STRATEGY
//
// We use the Wikipedia Search API to find real, exact photos of specific 
// Hook: Fetch real photo using Wikipedia API, fallback to AI image
function useRealImage(query, fallbackUrl) {
  const [src, setSrc] = useState(null);

  useEffect(() => {
    if (!query) {
       setSrc(fallbackUrl);
       return;
    }
    const fetchWikiImage = async () => {
      try {
        const url = `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrlimit=1&prop=pageimages&format=json&pithumbsize=600&origin=*`;
        const res = await fetch(url);
        const data = await res.json();
        const pages = data?.query?.pages;
        if (pages) {
          const page = Object.values(pages)[0];
          if (page && page.thumbnail) {
            setSrc(page.thumbnail.source);
            return;
          }
        }
        setSrc(fallbackUrl);
      } catch (err) {
        setSrc(fallbackUrl);
      }
    };
    fetchWikiImage();
  }, [query, fallbackUrl]);

  return src || fallbackUrl;
}

const HOTEL_IMAGES = [
  "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542314831-c6a4d14d2836?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1535827841776-24afc1e255ac?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=600&auto=format&fit=crop",
];

const ATTRACTION_IMAGES = [
  "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504150558240-0b4fd8946624?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1454372182658-c712e4c5a1db?q=80&w=600&auto=format&fit=crop",
];

const FOOD_IMAGES = [
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1481070555726-e2fe834ce505?q=80&w=600&auto=format&fit=crop",
];

// ── Sub-components that use the wiki hook ─────────────────────────────────────

function AttractionCard({ attraction, index, city }) {
  // Use the AI image provided by the mock engine, with a fallback placeholder
  const aiImgSrc = attraction.image || `https://picsum.photos/seed/${index}${city.replace(/[^a-zA-Z]/g, '')}/600/400`;
  const imgSrc = useRealImage(`${attraction.name} ${city}`, aiImgSrc);
  const fallbackSrc = ATTRACTION_IMAGES[index % ATTRACTION_IMAGES.length];

  return (
    <div className="attraction-card glass-panel" style={{ animationDelay: `${index * 0.08}s` }}>
      <div className="card-image" style={{ background: 'rgba(255,255,255,0.05)' }}>
        <img src={imgSrc} alt={attraction.name} loading="lazy" style={{ animation: 'slideUpFade 0.5s ease' }} 
             onError={(e) => { 
                if (e.target.src !== fallbackSrc) {
                  e.target.src = fallbackSrc;
                }
             }} />
      </div>
      <div className="attraction-number">{String(index + 1).padStart(2, '0')}</div>
      <div className="attraction-info">
        <h4 className="attraction-name">{attraction.name}</h4>
        <p className="attraction-desc">{attraction.desc}</p>
        <div className="attraction-meta">
          <span className="meta-chip">🎟️ {attraction.fee}</span>
          <span className="meta-chip">🕐 {attraction.bestTime}</span>
        </div>
      </div>
    </div>
  );
}

function HotelCard({ hotel, index, city }) {
  // Use specialized hardcoded hotel images based on index
  const imgSrc = HOTEL_IMAGES[index % HOTEL_IMAGES.length];

  return (
    <div className="hotel-card glass-panel" style={{ animationDelay: `${index * 0.08}s` }}>
      <div className="card-image">
        <img src={imgSrc} alt={hotel.name} loading="lazy" />
      </div>
      <div className="hotel-header">
        <h4 className="hotel-name">{hotel.name}</h4>
        <div className="hotel-price">${hotel.price}<span>/night</span></div>
      </div>
      <p className="hotel-location">📍 {hotel.location}</p>
      <div className="hotel-rating">
        {'★'.repeat(Math.floor(hotel.rating))}{'☆'.repeat(5 - Math.floor(hotel.rating))}
        <span className="rating-num">{hotel.rating}</span>
      </div>
      <div className="hotel-features">
        {hotel.features.map((f, fi) => (
          <span key={fi} className="feature-chip">{f}</span>
        ))}
      </div>
    </div>
  );
}

function RestaurantCard({ restaurant, index, city }) {
  // Use specialized hardcoded food images based on index
  const imgSrc = FOOD_IMAGES[index % FOOD_IMAGES.length];

  return (
    <div className="restaurant-card glass-panel" style={{ animationDelay: `${index * 0.08}s` }}>
      <div className="card-image">
        <img src={imgSrc} alt={restaurant.name} loading="lazy" />
      </div>
      <div className="restaurant-top">
        <h4 className="restaurant-name">{restaurant.name}</h4>
        <span className="restaurant-price">{restaurant.priceRange}</span>
      </div>
      <p className="restaurant-specialty">🍴 {restaurant.specialty}</p>
      <p className="restaurant-desc">{restaurant.desc}</p>
    </div>
  );
}

function HeroBanner({ city, onMapClick, onReset, data }) {
  const defaultHero = `https://picsum.photos/seed/${encodeURIComponent(city)}/1200/500`;
  const imgSrc = data?.heroImage || defaultHero;

  return (
    <div className="results-hero interactive-hero" onClick={onMapClick}>
      <img src={imgSrc} alt={city} className="results-hero-img" loading="lazy" />
      <div className="hero-map-overlay">
        <span className="hero-map-icon">🗺️</span>
        <span>View on Map</span>
      </div>
      <div className="results-hero-overlay">
        <button className="back-btn" onClick={(e) => { e.stopPropagation(); onReset(); }}>← New Search</button>
        <div className="results-hero-content">
          <div className="results-badge">AI Travel Plan</div>
          <h1 className="results-city">{city}</h1>
          <p className="results-country">{data.country}</p>
          <div className="results-stats">
            <span className="stat-chip">🗺️ {data.attractions.length} Attractions</span>
            <span className="stat-chip">🏨 {data.hotels.length} Hotels</span>
            <span className="stat-chip">💰 ${data.budget.total.toLocaleString()} Budget</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function RecommendationResults({ data, onReset }) {
  const [activeTab, setActiveTab] = useState('itinerary');
  const [showMap, setShowMap] = useState(false);

  if (!data) return null;

  const renderAttractions = () => (
    <div className="section-content">
      <h3 className="section-heading">Top Attractions in {data.city}</h3>
      <div className="attractions-grid">
        {data.attractions.map((a, i) => (
          <AttractionCard key={i} attraction={a} index={i} city={data.city} />
        ))}
      </div>
    </div>
  );

  const renderHiddenGems = () => (
    <div className="section-content">
      <h3 className="section-heading">Hidden Gems in {data.city}</h3>
      <p className="section-desc">Skip the crowds and explore these lesser-known, authentic spots.</p>
      <div className="attractions-grid">
        {data.hiddenGems.map((g, i) => (
          <AttractionCard key={`gem-${i}`} attraction={g} index={i} city={data.city} />
        ))}
      </div>
    </div>
  );

  const renderHotels = () => (
    <div className="section-content">
      <h3 className="section-heading">Recommended Hotels</h3>
      <div className="hotels-grid">
        {data.hotels.map((h, i) => (
          <HotelCard key={i} hotel={h} index={i} city={data.city} />
        ))}
      </div>
    </div>
  );

  const renderFood = () => (
    <div className="section-content">
      <h3 className="section-heading">Food & Restaurants</h3>
      <div className="food-section">
        <div className="local-dishes glass-panel">
          <h4>🍜 Must-Try Local Dishes</h4>
          <div className="dishes-grid">
            {data.food.dishes.map((d, i) => (
              <span key={i} className="dish-chip">{d}</span>
            ))}
          </div>
        </div>
        <div className="restaurants-list">
          {data.food.restaurants.map((r, i) => (
            <RestaurantCard key={i} restaurant={r} index={i} city={data.city} />
          ))}
        </div>
      </div>
    </div>
  );

  const renderBudget = () => (
    <div className="section-content">
      <h3 className="section-heading">Budget Breakdown</h3>
      <div className="budget-container glass-panel">
        <div className="budget-total">
          <span className="budget-label">Total Budget (Optimized)</span>
          <span className="budget-amount">${data.budget.total.toLocaleString()}</span>
        </div>
        <div className="budget-bars">
          {data.budget.breakdown.map((b, i) => (
            <div key={i} className="budget-row" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="budget-row-info">
                <span className="budget-icon">{b.icon}</span>
                <span className="budget-category">{b.category}</span>
                <span className="budget-row-amount">${b.amount.toLocaleString()}</span>
              </div>
              <div className="budget-bar-track">
                <div className="budget-bar-fill"
                  style={{ width: `${b.percent}%`, animationDelay: `${i * 0.15}s` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderReel = () => (
    <div className="section-content">
      <h3 className="section-heading">Instagram Reel Script (30–60s)</h3>
      <div className="reel-container">
        <div className="reel-hook glass-panel">
          <span className="reel-label">🎣 Hook (First 3 Seconds)</span>
          <p className="reel-hook-text">"{data.reelScript.hook}"</p>
        </div>
        <div className="reel-timeline">
          {data.reelScript.voiceover.map((line, i) => (
            <div key={i} className="reel-step glass-panel" style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="reel-step-num">{i + 1}</div>
              <div className="reel-step-content">
                <p className="reel-vo"><strong>🎙️ Voiceover:</strong> "{line}"</p>
                {data.reelScript.scenes[i] && (
                  <p className="reel-scene"><strong>🎬 Scene:</strong> {data.reelScript.scenes[i]}</p>
                )}
                {data.reelScript.textOverlays[i] && (
                  <p className="reel-overlay"><strong>📝 Text Overlay:</strong> {data.reelScript.textOverlays[i]}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSocial = () => (
    <div className="section-content">
      <h3 className="section-heading">Captions & Hashtags</h3>
      <div className="social-container">
        <div className="captions-section">
          <h4 className="social-subhead">📝 Captions</h4>
          {data.captions.map((c, i) => (
            <div key={i} className="caption-card glass-panel">
              <p className="caption-text">"{c}"</p>
              <button className="copy-btn" onClick={() => navigator.clipboard.writeText(c)}>Copy</button>
            </div>
          ))}
        </div>
        <div className="hashtags-section glass-panel">
          <h4 className="social-subhead">🔖 Trending Hashtags</h4>
          <div className="hashtags-cloud">
            {data.hashtags.map((h, i) => (
              <span key={i} className="hashtag-chip">{h}</span>
            ))}
          </div>
          <button className="copy-all-btn"
            onClick={() => navigator.clipboard.writeText(data.hashtags.join(' '))}>
            Copy All Hashtags
          </button>
        </div>
      </div>
    </div>
  );

  const renderPrompts = () => (
    <div className="section-content">
      <h3 className="section-heading">AI Image Generation Prompts</h3>
      <p className="section-desc">Use these prompts with Midjourney, DALL·E, or Stable Diffusion.</p>
      <div className="prompts-list">
        {data.attractions.filter(a => a.imagePrompt).map((a, i) => (
          <div key={i} className="prompt-card glass-panel" style={{ animationDelay: `${i * 0.06}s` }}>
            <div className="prompt-card-header">
              <span className="prompt-label">📍 {a.name}</span>
              <button className="copy-btn" onClick={() => navigator.clipboard.writeText(a.imagePrompt)}>Copy</button>
            </div>
            <p className="prompt-text">{a.imagePrompt}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderItinerary = () => (
    <div className="section-content">
      <h3 className="section-heading">Detailed {data.itinerary?.length || 3}-Day Itinerary</h3>
      <div className="itinerary-container">
        {data.itinerary && data.itinerary.map((dayPlan, i) => (
          <div key={i} className="itinerary-day-card glass-panel" style={{ animationDelay: `${i * 0.1}s` }}>
            <h4 className="day-title">Day {dayPlan.day}</h4>
            <div className="timeline">
              {dayPlan.schedule.map((item, j) => (
                <div key={j} className="timeline-item">
                  <div className="timeline-time">{item.time}</div>
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <span className="timeline-type">
                      {item.type === 'food' ? '🍽️ FOOD' : '🗺️ ACTIVITY'}
                    </span>
                    <h5 className="timeline-item-title">{item.title}</h5>
                    <p className="timeline-item-desc">{item.desc}</p>
                    <span className="timeline-duration">⏱️ {item.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderTab = () => {
    switch (activeTab) {
      case 'itinerary':   return renderItinerary();
      case 'attractions': return renderAttractions();
      case 'hiddengems':  return renderHiddenGems();
      case 'hotels':      return renderHotels();
      case 'food':        return renderFood();
      case 'budget':      return renderBudget();
      case 'reel':        return renderReel();
      case 'social':      return renderSocial();
      case 'prompts':     return renderPrompts();
      default:            return renderItinerary();
    }
  };

  return (
    <div className="results-wrapper">
      <HeroBanner
        city={data.city}
        onMapClick={() => setShowMap(true)}
        onReset={onReset}
        data={data}
      />

      <div className="tabs-container">
        <div className="tabs-scroll">
          {TABS.map((tab) => (
            <button key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="tab-content-area">
        {renderTab()}
      </div>

      {showMap && (
        <CityMap city={data.city} attractions={data.attractions} onClose={() => setShowMap(false)} />
      )}
    </div>
  );
}
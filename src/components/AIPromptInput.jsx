import React, { useState, useEffect, useRef, useCallback } from 'react';
import './AIPromptInput.css';

const countryNames = {
  4:"Afghanistan",8:"Albania",12:"Algeria",24:"Angola",32:"Argentina",36:"Australia",
  40:"Austria",50:"Bangladesh",56:"Belgium",64:"Bhutan",68:"Bolivia",76:"Brazil",
  100:"Bulgaria",116:"Cambodia",120:"Cameroon",124:"Canada",144:"Sri Lanka",152:"Chile",
  156:"China",170:"Colombia",178:"Congo",180:"DR Congo",188:"Costa Rica",191:"Croatia",
  192:"Cuba",196:"Cyprus",203:"Czechia",208:"Denmark",218:"Ecuador",818:"Egypt",
  222:"El Salvador",231:"Ethiopia",246:"Finland",250:"France",266:"Gabon",276:"Germany",
  288:"Ghana",300:"Greece",320:"Guatemala",332:"Haiti",340:"Honduras",348:"Hungary",
  356:"India",360:"Indonesia",364:"Iran",368:"Iraq",372:"Ireland",376:"Israel",
  380:"Italy",388:"Jamaica",392:"Japan",400:"Jordan",398:"Kazakhstan",404:"Kenya",
  410:"South Korea",408:"North Korea",414:"Kuwait",418:"Laos",422:"Lebanon",
  430:"Liberia",434:"Libya",442:"Luxembourg",454:"Malawi",458:"Malaysia",484:"Mexico",
  504:"Morocco",508:"Mozambique",516:"Namibia",524:"Nepal",528:"Netherlands",
  554:"New Zealand",558:"Nicaragua",562:"Niger",566:"Nigeria",578:"Norway",
  586:"Pakistan",591:"Panama",598:"Papua New Guinea",600:"Paraguay",604:"Peru",
  608:"Philippines",616:"Poland",620:"Portugal",634:"Qatar",642:"Romania",
  643:"Russia",646:"Rwanda",682:"Saudi Arabia",686:"Senegal",694:"Sierra Leone",
  706:"Somalia",710:"South Africa",724:"Spain",729:"Sudan",752:"Sweden",
  756:"Switzerland",760:"Syria",762:"Tajikistan",764:"Thailand",788:"Tunisia",
  792:"Turkey",800:"Uganda",804:"Ukraine",784:"UAE",826:"United Kingdom",
  840:"United States",858:"Uruguay",860:"Uzbekistan",862:"Venezuela",704:"Vietnam",
  887:"Yemen",894:"Zambia",716:"Zimbabwe"
};

const POPULAR_CITIES = [
  "Agra","Ahmedabad","Amritsar","Amsterdam","Athens","Auckland","Bali","Bangkok",
  "Barcelona","Beijing","Berlin","Bogota","Brussels","Budapest","Buenos Aires",
  "Cairo","Cape Town","Casablanca","Chennai","Chicago","Chiang Mai","Copenhagen",
  "Cusco","Dehradun","Delhi","Doha","Dubai","Dublin","Edinburgh","Florence",
  "Goa","Hamburg","Hanoi","Ho Chi Minh City","Hong Kong","Istanbul","Jakarta",
  "Jaipur","Jodhpur","Kathmandu","Kolkata","Kuala Lumpur","Kyoto","Lagos",
  "Lahore","Lisbon","London","Los Angeles","Lucknow","Madrid","Manali","Manila",
  "Marrakech","Melbourne","Mexico City","Miami","Milan","Montreal","Moscow",
  "Mumbai","Munich","Muscat","Nairobi","Nainital","New York","Nice","Oslo",
  "Paris","Prague","Pondicherry","Porto","Reykjavik","Rio de Janeiro","Rome",
  "San Francisco","Santiago","Santorini","Sao Paulo","Seoul","Shanghai",
  "Singapore","Stockholm","Sydney","Taipei","Tokyo","Toronto","Udaipur",
  "Vancouver","Venice","Vienna","Warsaw","Washington DC","Zurich"
];

// ✅ FIXED: Using https://picsum.photos — free, reliable, no API key needed.
// Each URL returns a real photo at 600x400. IDs are curated for travel-relevant visuals.
const FEATURES = [
  {
    id: 'attractions',
    icon: '🗺️',
    title: 'Attractions',
    desc: 'Top places to visit',
    details: 'Our AI engine curates the must-visit landmarks, hidden gems, and top-rated spots based on your destination. Complete with ticket prices, best times to visit, and historical context.',
    image: 'https://picsum.photos/id/1031/600/400', // scenic landscape / landmark feel
  },
  {
    id: 'hotels',
    icon: '🏨',
    title: 'Hotels',
    desc: 'Within your budget',
    details: 'Get personalized accommodation recommendations tailored strictly to your entered budget. From luxury stays to boutique hostels, complete with amenities and ratings.',
    image: 'https://picsum.photos/id/164/600/400',  // modern building / hotel exterior
  },
  {
    id: 'food',
    icon: '🍽️',
    title: 'Food Guide',
    desc: 'Local cuisine & spots',
    details: 'Discover the culinary soul of your destination. We provide a list of local dishes you must try, along with highly-rated restaurant recommendations spanning all price ranges.',
    image: 'https://picsum.photos/id/292/600/400',  // food / restaurant vibe
  },
  {
    id: 'social',
    icon: '📱',
    title: 'Insta Content',
    desc: 'Reels, captions & more',
    details: 'Instantly get custom Instagram Reel scripts (with hooks, scenes, and voiceovers), trending hashtags, and perfectly crafted captions to document your trip like a pro.',
    image: 'https://picsum.photos/id/1051/600/400', // person with phone / travel photo vibe
  },
];

export default function AIPromptInput({ onGenerate, loading }) {
  const [city, setCity] = useState('');
  const [budget, setBudget] = useState('');
  const [days, setDays] = useState('3');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState(-1);
  const [selectedFeature, setSelectedFeature] = useState(null);
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

  const getSuggestions = useCallback((val) => {
    if (!val || val.length < 2) return [];
    const lower = val.toLowerCase();
    return POPULAR_CITIES.filter(c => c.toLowerCase().startsWith(lower))
      .concat(POPULAR_CITIES.filter(c => !c.toLowerCase().startsWith(lower) && c.toLowerCase().includes(lower)))
      .slice(0, 7);
  }, []);

  const handleCityChange = (e) => {
    const val = e.target.value;
    setCity(val);
    setActiveSuggestion(-1);
    const s = getSuggestions(val);
    setSuggestions(s);
    setShowSuggestions(s.length > 0);
  };

  const handleSuggestionClick = (name) => {
    setCity(name);
    setSuggestions([]);
    setShowSuggestions(false);
    inputRef.current?.focus();
  };

  const handleKeyDown = (e) => {
    if (!showSuggestions) return;
    if (e.key === 'ArrowDown') { e.preventDefault(); setActiveSuggestion(p => Math.min(p + 1, suggestions.length - 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setActiveSuggestion(p => Math.max(p - 1, -1)); }
    else if (e.key === 'Enter' && activeSuggestion >= 0) { e.preventDefault(); handleSuggestionClick(suggestions[activeSuggestion]); }
    else if (e.key === 'Escape') setShowSuggestions(false);
  };

  useEffect(() => {
    const handler = (e) => {
      if (!dropdownRef.current?.contains(e.target) && !inputRef.current?.contains(e.target))
        setShowSuggestions(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city.trim() || !budget.trim() || !days.trim()) return;
    onGenerate(city.trim(), budget.trim(), days.trim());
  };

  return (
    <div className="prompt-container animate-slideUp">
      <div className="hero-badge">✈️ AI-Powered Travel Planner</div>
      <h1 className="hero-title">Plan Your <span className="text-glow">Dream Trip</span></h1>
      <p className="hero-subtitle">
        Type a city for instant suggestions — AI generates your full travel plan in seconds.
      </p>

      <form onSubmit={handleSubmit} className="glass-panel input-form">
        <div className="input-row">
          <div className="input-group autocomplete-wrap">
            <label className="input-label" htmlFor="city-input">🌍 Destination city</label>
            <input
              id="city-input" ref={inputRef} type="text" className="text-input"
              placeholder="e.g. Dehradun, Paris, Tokyo…"
              value={city} onChange={handleCityChange} onKeyDown={handleKeyDown}
              onFocus={() => { const s = getSuggestions(city); setSuggestions(s); setShowSuggestions(s.length > 0); }}
              disabled={loading} autoComplete="off"
            />
            {showSuggestions && suggestions.length > 0 && (
              <ul className="suggestions-list" ref={dropdownRef}>
                {suggestions.map((s, i) => (
                  <li key={s} className={`suggestion-item${i === activeSuggestion ? ' active' : ''}`}
                    onMouseDown={() => handleSuggestionClick(s)}>
                    <span className="suggest-pin">📍</span>
                    <span className="suggest-name">{s}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="input-group">
            <label className="input-label" htmlFor="budget-input">💰 Budget (USD)</label>
            <input
              id="budget-input" type="text" className="text-input"
              placeholder="e.g. 1500, 3000…"
              value={budget} onChange={(e) => setBudget(e.target.value)} disabled={loading}
            />
          </div>

          <div className="input-group">
            <label className="input-label" htmlFor="days-input">🗓️ Trip Days</label>
            <input
              id="days-input" type="number" min="1" max="14" className="text-input"
              placeholder="e.g. 3"
              value={days} onChange={(e) => setDays(e.target.value)} disabled={loading}
            />
          </div>
        </div>

        <button type="submit" className={`submit-btn${loading ? ' loading' : ''}`}
          disabled={loading || !city.trim() || !budget.trim() || !days.trim()}>
          {loading
            ? <div className="loading-state"><span className="spinner" /><span>Generating your travel plan…</span></div>
            : 'Generate Travel Plan ✨'}
        </button>
      </form>

      <div className="features-row">
        {FEATURES.map(f => (
          <div key={f.title} className="feature-card glass-panel interactive-feature" onClick={() => setSelectedFeature(f)}>
            <span className="feature-icon">{f.icon}</span>
            <strong>{f.title}</strong>
            <span className="feature-desc">{f.desc}</span>
          </div>
        ))}
      </div>

      {selectedFeature && (
        <div className="feature-modal-overlay animate-fadeIn" onClick={() => setSelectedFeature(null)}>
          <div className="feature-modal-content glass-panel" onClick={e => e.stopPropagation()}>
            <button className="feature-modal-close" onClick={() => setSelectedFeature(null)}>&times;</button>
            <div className="feature-modal-hero">
              <img src={selectedFeature.image} alt={selectedFeature.title} className="feature-modal-img" />
              <div className="feature-modal-icon-overlay">{selectedFeature.icon}</div>
            </div>
            <div className="feature-modal-text">
              <h3 className="feature-modal-title">{selectedFeature.title}</h3>
              <p className="feature-modal-details">{selectedFeature.details}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import AuthPages from './components/AuthPages';
import AIPromptInput from './components/AIPromptInput';
import RecommendationResults from './components/RecommendationResults';
import AIChatAssistant from './components/AIChatAssistant';
import { generateTravelPlan } from './services/mockAIEngine';
import './App.css';

function AppContent() {
  const { user, signOut, loading: authLoading } = useAuth();
  const [loading, setLoading] = useState(false);
  const [travelData, setTravelData] = useState(() => {
    const saved = localStorage.getItem('wanderAiTravelData');
    return saved ? JSON.parse(saved) : null;
  });

  const handleGeneratePlan = async (city, budget, tripDays, travelMode, budgetStrategy) => {
    setLoading(true);
    try {
      const result = await generateTravelPlan(city, budget, tripDays, travelMode, budgetStrategy);
      setTravelData(result);
      localStorage.setItem('wanderAiTravelData', JSON.stringify(result));
    } catch (error) {
      console.error("Failed to generate travel plan:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setTravelData(null);
    localStorage.removeItem('wanderAiTravelData');
  };

  if (authLoading) return null;
  if (!user) return <AuthPages />;

  return (
    <div className="App">
      <header className="app-header">
        <div className="logo" onClick={handleReset} style={{ cursor: 'pointer' }}>
          <span className="logo-icon">✈️</span>
          WanderAI
        </div>
        <div className="header-right">
          {travelData && (
            <button className="header-new-btn" onClick={handleReset}>+ New Plan</button>
          )}
          <div className="user-menu">
            <span className="user-avatar">{user.name.charAt(0).toUpperCase()}</span>
            <span className="user-name">{user.name}</span>
            <button className="signout-btn" onClick={signOut}>Sign Out</button>
          </div>
        </div>
      </header>

      <main className="main-content">
        {!travelData ? (
          <AIPromptInput onGenerate={handleGeneratePlan} loading={loading} />
        ) : (
          <RecommendationResults data={travelData} onReset={handleReset} />
        )}
      </main>
      <AIChatAssistant travelData={travelData} />
      <div className="bg-glow"></div>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;

import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import './AuthPages.css';

export default function AuthPages() {
  const [mode, setMode] = useState('signin'); // 'signin' or 'signup'
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signUp, signIn } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email.trim() || !password.trim()) {
      setError('Please fill in all fields.');
      return;
    }

    if (mode === 'signup') {
      if (!name.trim()) { setError('Please enter your name.'); return; }
      if (password.length < 6) { setError('Password must be at least 6 characters.'); return; }
      const result = signUp(name.trim(), email.trim(), password);
      if (!result.success) setError(result.error);
    } else {
      const result = signIn(email.trim(), password);
      if (!result.success) setError(result.error);
    }
  };

  const switchMode = () => {
    setMode(mode === 'signin' ? 'signup' : 'signin');
    setError('');
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="auth-page">
      <div className="auth-card glass-panel animate-slideUp">
        <div className="auth-logo">✈️ WanderAI</div>
        <h2 className="auth-title">
          {mode === 'signin' ? 'Welcome Back' : 'Create Account'}
        </h2>
        <p className="auth-subtitle">
          {mode === 'signin'
            ? 'Sign in to access your AI travel planner'
            : 'Sign up to start planning your dream trips'}
        </p>

        <form onSubmit={handleSubmit} className="auth-form">
          {mode === 'signup' && (
            <div className="auth-field">
              <label htmlFor="auth-name">Full Name</label>
              <input
                id="auth-name"
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}

          <div className="auth-field">
            <label htmlFor="auth-email">Email Address</label>
            <input
              id="auth-email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="auth-field">
            <label htmlFor="auth-password">Password</label>
            <input
              id="auth-password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <div className="auth-error">{error}</div>}

          <button type="submit" className="auth-submit">
            {mode === 'signin' ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <div className="auth-switch">
          {mode === 'signin' ? (
            <span>Don't have an account? <button onClick={switchMode} className="auth-link">Sign Up</button></span>
          ) : (
            <span>Already have an account? <button onClick={switchMode} className="auth-link">Sign In</button></span>
          )}
        </div>
      </div>

      <div className="auth-bg-orb auth-bg-orb-1"></div>
      <div className="auth-bg-orb auth-bg-orb-2"></div>
    </div>
  );
}

import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('wanderai_user');
    if (stored) setUser(JSON.parse(stored));
    setLoading(false);
  }, []);

  const signUp = (name, email, password) => {
    const users = JSON.parse(localStorage.getItem('wanderai_users') || '[]');
    if (users.find(u => u.email === email)) {
      return { success: false, error: 'An account with this email already exists.' };
    }
    const newUser = { name, email, password, createdAt: new Date().toISOString() };
    users.push(newUser);
    localStorage.setItem('wanderai_users', JSON.stringify(users));
    const session = { name, email };
    localStorage.setItem('wanderai_user', JSON.stringify(session));
    setUser(session);
    return { success: true };
  };

  const signIn = (email, password) => {
    const users = JSON.parse(localStorage.getItem('wanderai_users') || '[]');
    const found = users.find(u => u.email === email && u.password === password);
    if (!found) {
      return { success: false, error: 'Invalid email or password.' };
    }
    const session = { name: found.name, email: found.email };
    localStorage.setItem('wanderai_user', JSON.stringify(session));
    setUser(session);
    return { success: true };
  };

  const signOut = () => {
    localStorage.removeItem('wanderai_user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

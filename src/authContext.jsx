import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const signup = (username, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.some((user) => user.username === username)) {
      return 'Username already exists';
    }
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));
    setUser({ username, password});
    return '';
  };

  
  const login = (username, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find(
      (user) => user.username === username && user.password === password
    );
    if (existingUser) {
      setUser({ username });
      return '';
    }
    return 'Invalid username or password';
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
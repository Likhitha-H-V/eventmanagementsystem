import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EventList from '../src/EventList';
import EventDetail from '../src/EventDetails';
import Login from '../src/Login';
import SignUp from '../src/Signup';
import Navbar from '../src/Navbar';
import { AuthProvider } from '../src/authContext';
import './CSS/App.css'
function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <h1>Event Management System</h1>
        <Routes>
          <Route path="/" element={<EventList />} />
          <Route path="/event/:id" element={<EventDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
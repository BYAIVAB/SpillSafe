// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AISDataMonitoring from './components/AISDataMonitoring';
import MapPage from './components/MapPage';
import AboutUs from './components/AboutUs'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AISDataMonitoring />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>
    </Router>
  );
}

export default App;

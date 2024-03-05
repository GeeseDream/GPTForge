import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Demo from './pages/Demo';
import CaseStudies from './pages/CaseStudies';
import './App.css';

function App() {
  return (
    <Router basename="/GoForge">
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/case-studies" element={<CaseStudies />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;

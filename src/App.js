import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'framer-motion';
import Home from './pages/Home';
import Demo from './pages/Demo';
import CaseStudies from './pages/CaseStudies';
import gptsData from './gpts.json'; // Import gpts.json
import ThemeSwitchButton from './components/ThemeSwitchButton';
import './App.css';

function App() {
      return (
        <Router basename="/GoForge">
      <div className="App">
        <Routes>
          <Route path="/" element={<Home data={gptsData} />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/case-studies" element={<CaseStudies />} />
        </Routes>
        <ThemeSwitchButton />
      </div>
    </Router>
  );
}

export default App;

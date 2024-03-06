import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Demo from './pages/Demo';
import CaseStudies from './pages/CaseStudies';
import gptsData from './gpts.json';
import ThemeSwitchButton from './components/ThemeSwitchButton';
import { ThemeProvider } from './context/ThemeContext'; // Import ThemeProvider
import './App.css';

function App() {
    return (
      <ThemeProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home data={gptsData} />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/case-studies" element={<CaseStudies />} />
          </Routes>
          <ThemeSwitchButton />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

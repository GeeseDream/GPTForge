
import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Demo from './pages/Demo';
import CaseStudies from './pages/CaseStudies';
import gptsData from './gpts.json';
import ThemeSwitchButton from './components/ThemeSwitchButton';
import { ThemeContext, ThemeProvider } from './context/ThemeContext'; // Import ThemeContext
import './App.css';

function App() {
  const { theme } = useContext(ThemeContext); // Use ThemeContext to get the current theme

  return (
    <ThemeProvider>
      <Router basename="/GoForge">
        <div className={`App ${theme}`}> {/* Apply the theme class here */}
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

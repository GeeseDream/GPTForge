
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Home from './pages/Home';
import Demo from './pages/Demo';
import CaseStudies from './pages/CaseStudies';
import gptsData from 'https://raw.githubusercontent.com/GeeseDream/goforge-bucket/build/gptlist.json';
import ThemeSwitchButton from './components/ThemeSwitchButton';
import { ThemeProvider } from './context/ThemeContext';
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
          <FontAwesomeIcon icon={faGithub} />
        </div>
      </Router>
      </ThemeProvider>
    );
}

export default App;

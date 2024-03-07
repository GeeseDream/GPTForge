import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Demo from './pages/Demo';
import CaseStudies from './pages/CaseStudies';
import gptsData from './gpts.json';
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
          <a href="https://github.com/GeeseDream/GoForge" target="_blank" rel="noopener noreferrer" className="fab fa-github" style={{position: 'fixed', top: '10px', right: '10px'}}>
            <i className="fab fa-github" style={{fontSize: '24px'}}></i>
          </a>
        </div>
      </Router>
      </ThemeProvider>
    );
}

export default App;

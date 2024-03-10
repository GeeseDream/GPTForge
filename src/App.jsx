
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Home from './pages/Home';
import Demo from './pages/Demo';
import CaseStudies from './pages/CaseStudies';
import ThemeSwitchButton from './components/ThemeSwitchButton';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

function App() {
    const [gptsData, setGptsData] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/GeeseDream/goforge-bucket/build/gptlist.json')
            .then(response => response.json())
            .then(data => setGptsData(data))
            .catch(error => console.error('Error fetching gpts data:', error));
    }, []);

    //加点注释
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

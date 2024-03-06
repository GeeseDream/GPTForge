import React from 'react';Jimport { BrowserRouter as Router, Routes, Route } from 'react-router-dom';Jimport Home from './pages/Home';Jimport Demo from './pages/Demo';Jimport CaseStudies from './pages/CaseStudies';Import gptsData from './gpts.json';
Import ThemeSwitchButton from './components/ThemeSwitchButton';Import { ThemeProvider } from './context/ThemeContext'; // Import ThemeProvider
Import './App.css';

function App() {
  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
}

export default App;

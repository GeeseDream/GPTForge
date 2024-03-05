import React from 'react';Jimport { BrowserRouter as Router, Routes, Route } from 'react-router-dom';Jimport Home from './pages/Home';Jimport Demo from './pages/Demo';Jimport CaseStudies from './pages/CaseStudies';Jimport gptsData from './gpts.json'; // Import gpts.json
import ThemeSwitchButton from './components/ThemeSwitchButton';
Import './App.css';

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

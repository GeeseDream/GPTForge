import React from 'react';\nimport { BrowserRouter as Router, Routes, Route } from 'react-router-dom';\nimport Home from './pages/Home';\nimport Demo from './pages/Demo';\nimport CaseStudies from './pages/CaseStudies';\nimport gptsData from './gpts.json';\nimport ThemeSwitchButton from './components/ThemeSwitchButton';\nimport { ThemeProvider } from './context/ThemeContext'; // Import ThemeProvider
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
           {/* Add GitHub icon link */}
          <a href=\"https://github.com/GeeseDream/GoForge\" target=\"_blank\" rel=\"noopener noreferrer\" style={{position: 'fixed', top: '10px', right: '10px'}}>\n            <i className=\"fab fa-github\" style={{fontSize: '24px'}}></i>\n          </a>
        </div>
      </Router>
      </ThemeProvider>
    );\n}\n\nexport default App;\n
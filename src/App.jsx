
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/Landing';
import Portfolio from './pages/Portfolio';
import './styles/global.css';
import './App.css';

function App() {
  const [isLandingComplete, setIsLandingComplete] = useState(false);

  useEffect(() => {
    // Check if user has already seen the landing page
    const hasVisited = sessionStorage.getItem('hasVisitedLanding');
    if (hasVisited) {
      setIsLandingComplete(true);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={<Landing />}
        />
        <Route 
          path="/portfolio" 
          element={<Portfolio />}
        />
        <Route path="*" element={<Navigate to="/portfolio" />} />
      </Routes>
    </Router>
  );
}

export default App;

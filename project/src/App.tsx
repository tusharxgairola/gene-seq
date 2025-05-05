import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import UploadPage from './pages/UploadPage';
import DashboardPage from './pages/DashboardPage';
import DiseaseRiskPage from './pages/DiseaseRiskPage';
import TraitsPage from './pages/TraitsPage';
import FoodIntolerancePage from './pages/FoodIntolerancePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/results/dashboard" element={<DashboardPage />} />
        <Route path="/results/disease-risk" element={<DiseaseRiskPage />} />
        <Route path="/results/traits" element={<TraitsPage />} />
        <Route path="/results/food-intolerance" element={<FoodIntolerancePage />} />
        <Route path="/results" element={<Navigate to="/results/dashboard" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
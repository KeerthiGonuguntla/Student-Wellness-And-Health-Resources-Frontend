import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import MentalHealthPage from './components/MentalHealthPage';
import FitnessProgramsPage from './components/FitnessProgramsPage';
import NutritionPage from './components/NutritionPage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import AboutUs from './components/AboutUs';
import AdminPage from './components/AdminPage';
import StudentContent from './components/StudentContent';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/mental-health" element={<MentalHealthPage />} />
          <Route path="/fitness-programs" element={<FitnessProgramsPage />} />
          <Route path="/nutrition" element={<NutritionPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/admin" element={<AdminPage />}/>
          <Route path="/student" element={<StudentContent />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;

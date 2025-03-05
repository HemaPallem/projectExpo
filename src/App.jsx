

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import About from './pages/About.jsx';
import TestimonialAndCTA from './pages/TestimonialAndCTA.jsx';
import LandingPage from './pages/LandingPage.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Navigation Links */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        


        <Route path="/about" element={<About />} />
        <Route path="/testimonials" element={<TestimonialAndCTA />} />
        <Route path="/team" element={<h1>Web team</h1>} />

       
        {/* Pages from the second setup */}
        <Route path="/get-started" element={<Homepage />} />
        <Route path="/students-creators" element={<h1>Students & Creators Page</h1>} />
        <Route path="/expert-insights" element={<h1>Expert Insights Page</h1>} />
        <Route path="/ai-reviews" element={<h1>AI Powered Reviews Page</h1>} />
        <Route path="/homepage" element={<Homepage />} /> 
        <Route path="/students-mode" element={<h1>Student mode page</h1>} />
        <Route path="/creator-mode" element={<h1>Creator Mode Page</h1>} />

      </Routes>
    </Router>
  );
}

export default App;

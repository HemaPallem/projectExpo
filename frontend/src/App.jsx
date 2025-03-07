

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import About from './pages/About.jsx';
import TestimonialAndCTA from './pages/TestimonialAndCTA.jsx';
import LandingPage from './pages/LandingPage.jsx';
import './App.css';
import StudentMode from './pages/StudentMode.jsx';
import Team from './pages/Team.jsx';
import { UserProvider } from "./UserProvider"; // Import the provider
import StudentMode from './pages/StudentMode.jsx';
import CreatorMode from './pages/CreatorMode.jsx';
import AIReviews from './pages/EducationPage.jsx';
import ExpertInsights from './pages/ExpertInsights.js';
import StudentCreator from './pages/BackgroundCard.js';

function App() {
  return (
    <UserProvider>
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Navigation Links */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        
        <Route path="/studentMode" element={<StudentMode/>}/>
        <Route path="/creatorMode" element={<CreatorMode/>}/>

        <Route path="/about" element={<About />} />
        <Route path="/testimonials" element={<TestimonialAndCTA />} />
        <Route path="/team" element={<Team/>} />

       
        {/* Pages from the second setup */}
        <Route path="/get-started" element={<Homepage />} />
        
        <Route path="/students-creators" element={<StudentCreator/>} />
        <Route path="/expert-insights" element={<ExpertInsights/>} />
        <Route path="/ai-reviews" element={<AIReviews/>} />
        <Route path="/homepage" element={<Homepage />} /> 

      </Routes>
      </Router>
      </UserProvider>

  );
}

export default App;

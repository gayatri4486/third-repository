
import './App.css';
import ChatbotComponent from './components/Chatbot/ChatbotComponents';
import DeveloperInfoPopup from './components/DeveloperInfo/DeveloperInfoPopup';
import AboutPage from './Pages/AboutPage';
import AdmissionPage from './Pages/AdmissionPage';
import ContactPage from './Pages/ContactPage';
import CoursesPage from './Pages/CoursesPage';
import HomePage from './Pages/HomePage';
0
import './styles/pages.css';
import { useState } from "react";
import { Route, BrowserRouter as Router, Routes, UNSAFE_withHydrateFallbackProps } from 'react-router-dom';
const App = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return(
    
    <div>
      <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Gayatri Dadaso Patil"
          studentPhotoUrl="/images/gaytri.jpeg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/home" element={<HomePage/>}></Route>
          <Route path="/about" element={<AboutPage/>}></Route>
          <Route path="/courses" element={<CoursesPage/>}></Route>
          <Route path="/contact" element={<ContactPage/>}></Route>
          <Route path="/admission" element={<AdmissionPage/>}></Route>
        </Routes>
        <ChatbotComponent/>
      </Router>
    </div>
  )
}
export default App;
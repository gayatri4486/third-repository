
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperInfoPopup";
import ChatbotComponent from "./components/Chatbot/ChatbotComponents";
import './styles/Pages.css';
import "./components/Chatbot/Chatbot.css";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import AdmissionsPage from "./Pages/AdmissionsPage";
import CoursesPage from "./Pages/CoursesPage";
import ContactPage from "./Pages/ContactPage";
import NotFoundPage from "./Pages/NotfoundPage";
function App () {
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
          studentName="Gayatri Patil"
          studentPhotoUrl="/images/gaytri.jpeg" // Path to their photo
          
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/admission" element={<AdmissionsPage/>}/>
            <Route path="/courses" element={<CoursesPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
            <Route path="/NotfoundPage" element={<NotFoundPage/>}/>
          </Routes>
          <ChatbotComponent/>
        </Router>
      </div>
    )
}
export default App;
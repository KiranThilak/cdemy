// App.js

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import AcademyHome from './pages/AcademyHome'; 
import SoftwareHome from './pages/SoftwareHome'; 
import CdemyHome from './pages/CdemyHome';
import Footer from "./components/Footer";
import PartnerLinkPage from './pages/PartnerLinkPage';
import RetrainingPage from './pages/RetrainingPage';
import ItspecialistPage from './pages/ItspecialistPage';
import RetrainingFaqPage from './pages/RetrainingFaqPage';
import SelectionProcessPage from './pages/SelectionProcessPage';
import GlidetimeControlPage from './pages/GlidetimeControlPage';
import ContactPage from './pages/ContactPage';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/academyhome" element={<AcademyHome />} />
          <Route path="/softwarehome" element={<SoftwareHome />} />
          <Route path="/cdemyhome" element={<CdemyHome />} />
          <Route path="/partnerlinkpage" element={<PartnerLinkPage />} />
          <Route path="/retrainingpage" element={<RetrainingPage />} />
          <Route path="/itspecialistpage" element={<ItspecialistPage />} />
          <Route path="/retrainingfaqpage" element={<RetrainingFaqPage />} />
          <Route path="/selectionprocesspage" element={<SelectionProcessPage />} />
          <Route path="/glidetimecontrolpage" element={<GlidetimeControlPage />} />
          <Route path="/contactpage" element={<ContactPage />} />
          
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;





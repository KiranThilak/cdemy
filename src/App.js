// App.js

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import AcademyHome from './pages/AcademyHome'; // Import AcademyHome component
import SoftwareHome from './pages/SoftwareHome'; 
import CdemyHome from './pages/CdemyHome'; // Import AcademyHome component
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/academyhome" element={<AcademyHome />} />
          <Route path="/softwarehome" element={<SoftwareHome />} />
          <Route path="/cdemyhome" element={<CdemyHome />} />
          {/* Add more routes here */}
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;





// App.js

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AcademyHome from "./pages/AcademyHome";
import SoftwareHome from "./pages/SoftwareHome";
import CdemyHome from "./pages/CdemyHome";
import Footer from "./components/Footer";
import PartnerLinkPage from "./pages/PartnerLinkPage";
import InternationalityPage from "./pages/InternationalityPage";
import ItspecialistPage from "./pages/ItspecialistPage";
import RetrainingFaqPage from "./pages/RetrainingFaqPage";
import SelectionProcessPage from "./pages/SelectionProcessPage";
import GlidetimeControlPage from "./pages/GlidetimeControlPage";
import ContactPage from "./pages/ContactPage";
import PhilosophiePage from "./pages/PhilosophiePage";
import BlogHomePage from "./components/blog/BlogHomePage";
import BlogPost from "./components/blog/Blogpost";
function App() {
  return (
    <Router>
      <div className="font-roboto">
        <Navbar />
        <Routes>
          <Route path="*" element={<CdemyHome />} />

          <Route path="/academyhome" element={<AcademyHome />} />
          <Route path="/softwarehome" element={<SoftwareHome />} />
          <Route path="/partnerlinkpage" element={<PartnerLinkPage />} />
          <Route
            path="/internationalitypage"
            element={<InternationalityPage />}
          />
          <Route path="/itspecialistpage" element={<ItspecialistPage />} />
          <Route path="/retrainingfaqpage" element={<RetrainingFaqPage />} />
          <Route
            path="/selectionprocesspage"
            element={<SelectionProcessPage />}
          />
          <Route
            path="/glidetimecontrolpage"
            element={<GlidetimeControlPage />}
          />
          <Route path="/philosophiepage" element={<PhilosophiePage />} />
          <Route path="/bloghomepage" element={<BlogHomePage />} />

          <Route path="/contactpage" element={<ContactPage />} />
          <Route path="/post/:slug" element={<BlogPost />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

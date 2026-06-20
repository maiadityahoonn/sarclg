import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Layout components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import AdmissionModal from './components/AdmissionModal';
import ScrollToTop from './components/ScrollToTop';
import AdmissionChatbot from './components/AdmissionChatbot';

// Page components
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Iic from './pages/Iic';
import Hostel from './pages/Hostel';
import Placements from './pages/Placements';
import CreditCard from './pages/CreditCard';
import Scholarships from './pages/Scholarships';
import Gallery from './pages/Gallery';
import Blogs from './pages/Blogs';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import Disclosure from './pages/Disclosure';
import Downloads from './pages/Downloads';
import RnD from './pages/RnD';
import Events from './pages/Events';
import Sports from './pages/Sports';
import Clubs from './pages/Clubs';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      
      {/* Page layout wrapper */}
      <div className="flex flex-col min-h-screen">
        
        {/* Navigation Header */}
        <Navbar />

        {/* Dynamic Route Pages */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/iic" element={<Iic />} />
            <Route path="/hostel" element={<Hostel />} />
            <Route path="/placements" element={<Placements />} />
            <Route path="/credit-card" element={<CreditCard />} />
            <Route path="/scholarships" element={<Scholarships />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/disclosure" element={<Disclosure />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/rnd" element={<RnD />} />
            <Route path="/events" element={<Events />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/clubs" element={<Clubs />} />
            {/* Fallback route */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Footer Area */}
        <Footer />

        {/* Global Floating Actions (WhatsApp, Call, Scroll Top) */}
        <FloatingActions />

        {/* Global Admission & Brochure enquiry modal */}
        <AdmissionModal />

        {/* Conversational Chatbot */}
        <AdmissionChatbot />

      </div>
    </Router>
  );
}

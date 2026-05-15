import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
// import GalleryPage from './pages/GalleryPage';
import BlogsPage from './pages/BlogsPage';
import TestimonialsPage from './pages/TestimonialsPage';
import EthicsPractices from './pages/EthicsPractices';
import ContactPage from './pages/ContactPage';
import { Toaster } from './components/ui/toaster';
import SelectionTTS from "./components/SelectionTTS"; 
import FloatingChatButton from "./components/DoctorChatbot/FloatingChatButton";
import ChatbotContainer from "./components/DoctorChatbot/ChatbotContainer";
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        {/* <Route path="/gallery" element={<GalleryPage />} /> */}
        <Route path="/BlogsPage" element={<BlogsPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/EthicsPractices" element={<EthicsPractices />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  return (
    <Router>
      <Layout>
        <SelectionTTS /> 
        <ScrollToTop />
        <AnimatedRoutes />
        <Toaster />
      </Layout>
      {/* Floating Button - OUTSIDE LAYOUT */}
      {!isChatOpen && (
        <FloatingChatButton openChat={() => setIsChatOpen(true)} />
      )}

      {/* Chatbot - OUTSIDE LAYOUT */}
      {isChatOpen && (
        <ChatbotContainer
          isOpen={isChatOpen}
          closeChat={() => setIsChatOpen(false)}
        />
      )}
    </Router>
  );
}

export default App;
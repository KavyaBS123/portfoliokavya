import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Shorts from './pages/Shorts';
import Events from './pages/Events';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/shorts" element={<Shorts />} />
          <Route path="/events" element={<Events />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Placeholder for missing pages to keep the app functional
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="py-32 bg-white flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
    <h1 className="text-4xl font-serif text-navy mb-4">{title}</h1>
    <p className="text-navy/60 max-w-md">Our strategic architects are currently documenting this section of our elite financial infrastructure. Please contact us for direct inquiries.</p>
    <a href="#/contact" className="mt-8 bg-navy text-white px-8 py-3 rounded-sm font-bold">Contact Advisory</a>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/case-studies" element={<PlaceholderPage title="Case Performance Studies" />} />
            <Route path="/industries" element={<PlaceholderPage title="Sector Specific Solutions" />} />
            <Route path="/team" element={<PlaceholderPage title="Partner Profiles & Credentials" />} />
            <Route path="/insights" element={<PlaceholderPage title="Financial Intelligence Blog" />} />
            <Route path="/careers" element={<PlaceholderPage title="Careers & Internship Program" />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

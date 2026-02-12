
import React, { useState } from 'react';
import { Menu, X, Landmark } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#/' },
    { name: 'About', href: '#/about' },
    { name: 'Services', href: '#/services' },
    { name: 'Case Studies', href: '#/case-studies' },
    { name: 'Industries', href: '#/industries' },
    { name: 'Team', href: '#/team' },
    { name: 'Insights', href: '#/insights' },
    { name: 'Careers', href: '#/careers' },
    { name: 'Contact', href: '#/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-navy/10 shadow-sm">
      <nav className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Landmark className="text-navy w-8 h-8" />
          <div className="flex flex-col">
            <span className="text-navy font-serif font-bold text-xl leading-none">STERLING & VANCE</span>
            <span className="text-[10px] tracking-[0.2em] text-teal font-bold">CHARTERED ACCOUNTANTS</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-navy/70 hover:text-navy transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#/contact"
            className="bg-navy text-white px-6 py-2 rounded-sm text-sm font-semibold hover:bg-teal transition-all"
          >
            Consultation
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="text-navy" /> : <Menu className="text-navy" />}
        </button>
      </nav>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-navy/10 py-6 px-6 flex flex-col gap-4 shadow-xl">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-navy"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#/contact"
            onClick={() => setIsOpen(false)}
            className="bg-navy text-white text-center py-3 rounded-sm font-bold mt-2"
          >
            Book Strategy Session
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;

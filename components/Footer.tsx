
import React from 'react';
import { Landmark, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white pt-20 pb-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/10 pb-16">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Landmark className="text-skyblue w-8 h-8" />
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl leading-none">STERLING & VANCE</span>
              <span className="text-[10px] tracking-[0.2em] text-skyblue">ESTABLISHED 1998</span>
            </div>
          </div>
          <p className="text-white/60 text-sm leading-relaxed mb-6">
            Providing premium advisory, strategic financial partnership, and international-level branding for global enterprises.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-white/5 hover:bg-white/10 transition-colors rounded"><Linkedin size={18} /></a>
            <a href="#" className="p-2 bg-white/5 hover:bg-white/10 transition-colors rounded"><Twitter size={18} /></a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-lg font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li><a href="#/about" className="hover:text-skyblue transition-colors">Our Firm</a></li>
            <li><a href="#/services" className="hover:text-skyblue transition-colors">Strategic Services</a></li>
            <li><a href="#/case-studies" className="hover:text-skyblue transition-colors">Performance Results</a></li>
            <li><a href="#/insights" className="hover:text-skyblue transition-colors">Financial Intelligence</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg font-bold mb-6">Industries</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li><a href="#/industries" className="hover:text-skyblue transition-colors">Manufacturing</a></li>
            <li><a href="#/industries" className="hover:text-skyblue transition-colors">Tech Startups</a></li>
            <li><a href="#/industries" className="hover:text-skyblue transition-colors">International Retail</a></li>
            <li><a href="#/industries" className="hover:text-skyblue transition-colors">Private Equity</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg font-bold mb-6">Contact Us</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li className="flex gap-3"><MapPin size={18} className="text-skyblue shrink-0" /> 1201 Financial District, London, UK</li>
            <li className="flex gap-3"><Phone size={18} className="text-skyblue shrink-0" /> +44 20 7946 0123</li>
            <li className="flex gap-3"><Mail size={18} className="text-skyblue shrink-0" /> contact@sterlingvance.com</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-10 flex flex-col md:flex-row justify-between items-center text-[10px] text-white/40 uppercase tracking-widest gap-4">
        <span>&copy; 2024 Sterling & Vance LLP. All Rights Reserved.</span>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Engagement</a>
          <a href="#" className="hover:text-white">Regulatory Disclosure</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React from 'react';
import { Mail, Phone, MapPin, Calendar, Lock, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="bg-navy py-24 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-serif mb-8">Secure Strategy Consultation</h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Confidential financial advisory starts with a conversation. Choose your preferred method of engagement below.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Contact Info */}
          <div>
            <h2 className="text-3xl font-serif text-navy mb-8">Global Access</h2>
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-beige rounded flex items-center justify-center text-navy shrink-0">
                  <MapPin />
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-2">Primary Office</h4>
                  <p className="text-navy/60 text-sm leading-relaxed">
                    1201 Financial District, Canary Wharf<br />
                    London, E14 5AA, United Kingdom
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-beige rounded flex items-center justify-center text-navy shrink-0">
                  <Phone />
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-2">Direct Advisory Line</h4>
                  <p className="text-navy/60 text-sm">+44 20 7946 0123</p>
                  <p className="text-teal text-[10px] font-bold uppercase tracking-widest mt-1 flex items-center gap-2">
                    <MessageSquare size={12} /> WhatsApp Enabled
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-beige rounded flex items-center justify-center text-navy shrink-0">
                  <Calendar />
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-2">Calendly Integration</h4>
                  <p className="text-navy/60 text-sm mb-4">Book a 15-minute introductory discovery call instantly.</p>
                  <button className="text-navy font-bold underline hover:text-teal transition-colors">
                    Open Booking Calendar
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-16 p-8 bg-skyblue/20 rounded-sm border border-skyblue/40">
              <h4 className="flex items-center gap-2 font-bold text-navy mb-4">
                <Lock size={18} className="text-navy" /> Secure File Upload
              </h4>
              <p className="text-sm text-navy/60 mb-6">
                Already have brief or tender documents? Upload them securely to our encrypted portal for an expedited review.
              </p>
              <input type="file" className="block w-full text-sm text-navy/50 file:mr-4 file:py-2 file:px-4 file:rounded-sm file:border-0 file:text-xs file:font-bold file:bg-navy file:text-white hover:file:bg-teal transition-all cursor-pointer" />
            </div>
          </div>

          {/* Right: Booking Form */}
          <div className="bg-white p-10 border border-navy/10 shadow-2xl rounded-sm">
            <h3 className="text-2xl font-serif text-navy mb-8">Consultation Request</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-navy/50">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-beige border-none focus:ring-2 focus:ring-teal text-navy text-sm rounded-sm" placeholder="Johnathan Sterling" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-navy/50">Corporate Email</label>
                  <input type="email" className="w-full px-4 py-3 bg-beige border-none focus:ring-2 focus:ring-teal text-navy text-sm rounded-sm" placeholder="j.sterling@enterprise.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-navy/50">Primary Inquiry Area</label>
                <select className="w-full px-4 py-3 bg-beige border-none focus:ring-2 focus:ring-teal text-navy text-sm rounded-sm appearance-none">
                  <option>Select Service</option>
                  <option>International Tax Advisory</option>
                  <option>Strategic Audit & Assurance</option>
                  <option>Corporate Compliance Audit</option>
                  <option>Forensic Investigation</option>
                  <option>Other / Multi-Service</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-navy/50">Strategic Objectives</label>
                <textarea rows={4} className="w-full px-4 py-3 bg-beige border-none focus:ring-2 focus:ring-teal text-navy text-sm rounded-sm" placeholder="Briefly describe your firm's goals for the next 12-24 months..."></textarea>
              </div>
              <div className="flex items-center gap-2 py-4">
                 <input type="checkbox" id="nda" className="w-4 h-4 text-teal border-navy rounded" />
                 <label htmlFor="nda" className="text-xs text-navy/60">I require a standard Non-Disclosure Agreement before discussing details.</label>
              </div>
              <button type="submit" className="w-full bg-navy text-white py-4 rounded-sm font-bold uppercase tracking-widest text-sm hover:bg-teal transition-all shadow-lg active:scale-95">
                Initiate Consultation
              </button>
            </form>
            <div className="mt-8 pt-8 border-t border-navy/5 text-center">
              <p className="text-[10px] text-navy/40 uppercase tracking-widest">
                Protected by 256-bit AES encryption & compliant with GDPR/HIPAA standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Integration Placeholder */}
      <section className="h-[400px] bg-beige grayscale relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/80 backdrop-blur px-8 py-4 rounded-sm shadow-xl border border-navy/10 z-10 flex items-center gap-3">
            <MapPin className="text-navy" />
            <span className="font-serif font-bold text-navy">Headquarters: Canary Wharf, London</span>
          </div>
        </div>
        <img 
          src="https://picsum.photos/seed/map/1920/600" 
          alt="Map Background" 
          className="w-full h-full object-cover opacity-30"
        />
      </section>
    </div>
  );
};

export default Contact;

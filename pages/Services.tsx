
import React from 'react';
import { ArrowRight, HelpCircle, Target, Layers, FileText } from 'lucide-react';
import { SERVICES } from '../constants';
import useSEO from '../hooks/useSEO';

const Services: React.FC = () => {
  useSEO({
    title: 'Financial Services | Accounting & Tax Advisory | Sterling & Vance',
    description: 'Comprehensive financial services including audit, tax strategy, and advisory solutions for enterprises. Strategic accounting services tailored to your needs.',
    keywords: 'financial services, accounting services, tax advisory, audit services, consulting',
    ogImage: 'https://picsum.photos/seed/services/1200/630',
  });

  return (
    <div className="bg-white">
      <section className="bg-navy py-24 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-serif mb-8">Strategic Services</h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            A comprehensive suite of high-level financial solutions tailored for the complex needs of modern enterprises.
          </p>
        </div>
      </section>

      {/* Service List */}
      <section className="py-24">
        <div className="container mx-auto px-6 space-y-32">
          {SERVICES.map((service, index) => (
            <div key={service.id} className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                   <div className="w-12 h-12 bg-teal/10 rounded flex items-center justify-center text-teal">
                      <Target />
                   </div>
                   <h2 className="text-4xl font-serif text-navy">{service.title}</h2>
                </div>
                
                <div className="space-y-8 mb-12">
                   <div>
                     <h4 className="flex items-center gap-2 text-navy font-bold uppercase text-xs tracking-widest mb-3">
                        <HelpCircle size={16} className="text-teal" /> The Problem
                     </h4>
                     <p className="text-navy/70 italic">"{service.problem}"</p>
                   </div>
                   
                   <div>
                     <h4 className="flex items-center gap-2 text-navy font-bold uppercase text-xs tracking-widest mb-3">
                        <Target size={16} className="text-teal" /> Our Strategic Approach
                     </h4>
                     <p className="text-navy/70">{service.approach}</p>
                   </div>

                   <div>
                     <h4 className="flex items-center gap-2 text-navy font-bold uppercase text-xs tracking-widest mb-3">
                        <Layers size={16} className="text-teal" /> Process Breakdown
                     </h4>
                     <div className="grid grid-cols-2 gap-4">
                       {service.process.map((step, i) => (
                         <div key={i} className="flex items-center gap-3 text-sm text-navy/60">
                           <span className="text-teal font-serif font-bold italic">0{i+1}.</span>
                           {step}
                         </div>
                       ))}
                     </div>
                   </div>
                </div>

                <div className="flex gap-4">
                  <a href="#/contact" className="bg-navy text-white px-8 py-3 rounded-sm font-bold flex items-center gap-2 hover:bg-teal transition-all">
                    Book Session <ArrowRight size={18} />
                  </a>
                  <button className="px-8 py-3 border border-navy/20 text-navy font-bold hover:bg-beige transition-all">
                    Case Example
                  </button>
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className="relative group">
                   <img 
                    src={`https://picsum.photos/seed/${service.id}/800/600`} 
                    alt={service.title} 
                    className="rounded shadow-xl grayscale group-hover:grayscale-0 transition-all duration-700"
                   />
                   <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 text-[10px] font-bold tracking-[0.2em] text-navy uppercase shadow-lg">
                      Strategic Asset
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-beige py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif text-navy mb-16">Niche Professional Advisory</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { title: 'Financial Modeling', desc: 'Dynamic, multi-scenario models for capital raising and M&A.' },
              { title: 'Forensic Audit', desc: 'Specialized investigative accounting to identify and mitigate fraud.' },
              { title: 'International Tax Structuring', desc: 'Cross-border optimization for high-net-worth individuals and corps.' }
            ].map((s, i) => (
              <div key={i} className="bg-white p-10 rounded shadow-sm border border-navy/5 hover:shadow-md transition-shadow">
                <FileText className="text-teal mb-6" />
                <h3 className="text-xl font-bold text-navy mb-4">{s.title}</h3>
                <p className="text-navy/60 text-sm mb-6">{s.desc}</p>
                <a href="#" className="text-navy font-bold text-xs uppercase tracking-widest flex items-center gap-2 group">
                  Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

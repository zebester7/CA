
import React from 'react';
import { ArrowRight, ShieldCheck, TrendingUp, Globe, Award, Quote } from 'lucide-react';
import { SERVICES } from '../constants';
import useSEO from '../hooks/useSEO';

const Home: React.FC = () => {
  // SEO Configuration
  useSEO({
    title: 'Elite Financial Strategy & Advisory Services | Sterling & Vance',
    description: 'Premier financial advisory and strategic audit services for global enterprises. Position your firm as a financial authority with elite strategy consulting.',
    keywords: 'financial advisory, accounting strategy, tax planning, enterprise accounting, financial consulting, international tax strategy, risk mitigation',
    ogImage: 'https://picsum.photos/seed/finance1/1200/630',
    ogUrl: typeof window !== 'undefined' ? window.location.href : '',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Sterling & Vance',
      description: 'Elite Financial Strategy & Advisory Services',
      url: typeof window !== 'undefined' ? window.location.origin : '',
      logo: 'https://picsum.photos/seed/logo/200/60',
      sameAs: [
        'https://www.linkedin.com/company/sterling-vance',
        'https://twitter.com/sterlingvance',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Business Inquiry',
        telephone: '+1-800-STERLING',
        email: 'info@sterlingvance.com',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Elite Financial District',
        addressLocality: 'New York',
        addressRegion: 'NY',
        postalCode: '10001',
        addressCountry: 'US',
      },
      areaServed: ['US', 'CA', 'UK', 'AU'],
    },
  });

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-white" aria-label="Hero Section">
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-4xl">
            <span className="inline-block px-3 py-1 bg-skyblue/30 text-navy text-[10px] font-bold tracking-[0.3em] uppercase mb-6 animate-fade-in">
              Premium Strategic Advisory
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-navy leading-[1.1] mb-8 animate-slide-up">
              Elite Financial Strategy & Audit Services <br />
              <span className="text-teal italic">Architect Your Financial Authority</span>
            </h1>
            <p className="text-xl text-navy/70 max-w-2xl mb-12 leading-relaxed">
              Strategic advisory consulting beyond traditional accounting. Position your enterprise as a global financial authority through elite strategy, tax planning, and risk mitigation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#/contact" className="bg-navy text-white px-8 py-4 rounded-sm font-bold flex items-center justify-center gap-2 hover:bg-teal transition-all group">
                Book Strategy Session <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#/services" className="border border-navy/20 text-navy px-8 py-4 rounded-sm font-bold flex items-center justify-center hover:bg-beige transition-all">
                Explore Strategic Services
              </a>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-beige hidden lg:block -skew-x-12 translate-x-1/2"></div>
      </section>

      {/* Core Value Proposition */}
      <section className="bg-navy py-24 text-white" aria-label="Core Services and Value Proposition">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-16">Our Strategic Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: ShieldCheck, title: 'Strategic Risk Mitigation', desc: 'Anticipating regulatory shifts before they impact your balance sheet.' },
              { icon: TrendingUp, title: 'Value-Add Growth', desc: 'Transforming reporting from a cost center to a strategic asset.' },
              { icon: Globe, title: 'Global Mobility', desc: 'Seamless international tax structuring for the modern enterprise.' }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6">
                  <item.icon className="text-skyblue w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="py-24 bg-white" aria-label="Featured Services">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-serif text-navy mb-4">Elite Financial Advisory Services</h2>
              <p className="text-navy/60">Strategic accounting, tax consulting, and financial advisory solutions designed for enterprise CFOs, founders, and international businesses.</p>
            </div>
            <a href="#/services" className="text-navy font-bold flex items-center gap-2 group">
              View All Services <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="p-8 border border-navy/10 hover:border-teal/50 hover:shadow-xl transition-all group">
                <div className="text-teal mb-6 group-hover:scale-110 transition-transform inline-block">
                  <ShieldCheck size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-navy">{service.title}</h3>
                <p className="text-navy/60 text-sm mb-8 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-8">
                  {service.process.slice(0, 3).map((p, i) => (
                    <li key={i} className="text-xs text-navy/50 flex items-center gap-2">
                      <div className="w-1 h-1 bg-teal rounded-full" /> {p}
                    </li>
                  ))}
                </ul>
                <a href={`#/services`} className="text-teal font-bold text-sm">Learn Strategy</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="bg-beige py-24" aria-label="Featured Case Study">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          <div className="order-2 lg:order-1">
            <span className="text-teal font-bold text-xs uppercase tracking-widest block mb-4">Case Study: Enterprise Restructuring</span>
            <h2 className="text-4xl font-serif text-navy mb-8">Global SaaS Tax Strategy: $4.2M Annual Savings</h2>
            <div className="space-y-6 mb-10">
              <div className="border-l-4 border-teal pl-6">
                <h4 className="font-bold text-navy mb-2">The Challenge</h4>
                <p className="text-sm text-navy/60">Inefficient IP holding structure across 3 continents leading to excessive withholding tax.</p>
              </div>
              <div className="border-l-4 border-teal pl-6">
                <h4 className="font-bold text-navy mb-2">Our Strategy</h4>
                <p className="text-sm text-navy/60">Migration to a centralized holding entity with R&D nexus benefits in a favorable treaty jurisdiction.</p>
              </div>
            </div>
            <a href="#/case-studies" className="inline-block bg-navy text-white px-8 py-4 rounded-sm font-bold hover:bg-teal transition-all">
              See Full Performance Report
            </a>
          </div>
          <div className="order-1 lg:order-2">
            <img 
              src="https://picsum.photos/seed/finance1/800/600" 
              alt="Global SaaS company financial restructuring and tax optimization strategy" 
              className="rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */} aria-label="Client Testimonials">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <Quote className="mx-auto text-skyblue w-16 h-16 mb-8 opacity-50" aria-hidden="true
          <Quote className="mx-auto text-skyblue w-16 h-16 mb-8 opacity-50" />
          <h2 className="text-3xl font-serif italic text-navy mb-8">
            "Sterling & Vance didn't just look at our numbers; they understood our ambition. They are more than accountants; they are strategic architects of our global growth."
          </h2>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-navy mb-4 overflJameson Wright, CFO at Apex Global Holdings" loading="lazy" />
            </div>
            <p className="font-bold text-navy">Jameson Wright</p>
            <p className="text-xs text-navy/50 uppercase tracking-widest">Chief Financial Officer
            <p className="text-xs text-navy/50 uppercase tracking-widest">CFO, Apex Global Holdings</p>
          </div>
        </div>
      </section>

      {/* CTA Section */} aria-label="Call To Action">
        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-serif mb-8">Transform Your Financial Strategy</h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
            Schedule a complimentary strategy consultation with our elite financial advisors. Limited availability for enterprises targeting international expansion
            Limited-time strategy sessions available for firms targeting international expansion in 2025.
          </p>
          <a href="#/contact" className="bg-skyblue text-navy px-12 py-5 rounded-sm font-bold text-lg hover:bg-white transition-all inline-block shadow-lg">
            Book Your Consultation
          </a>
          <div className="mt-8 flex items-center justify-center gap-6 text-white/40">
             <div className="flex items-center gap-2"><Award size={16}/> Certified Elite Partner</div>
             <div className="flex items-center gap-2"><Globe size={16}/> International Reach</div>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-white rounded-full"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;

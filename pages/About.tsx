
import React from 'react';
import { Award, Shield, Globe, Users, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Intro Header */}
      <section className="bg-beige py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-serif text-navy mb-8">Trust & Credibility</h1>
          <p className="text-xl text-navy/70 max-w-3xl mx-auto leading-relaxed">
            Founded with a vision to transcend traditional accounting, we provide the elite financial intelligence required for global market leadership.
          </p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-24">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-serif text-navy mb-8">A 20-Year Narrative of Excellence</h2>
            <div className="prose prose-navy text-navy/70 max-w-none space-y-6">
              <p>
                Our journey began two decades ago with a simple premise: financial reporting is not the end of the conversation—it is the beginning. Robert Sterling founded this practice to serve high-level decision-makers who needed more than just numbers; they needed strategic clarity.
              </p>
              <p>
                Over the years, we have evolved into a multi-disciplinary powerhouse, navigating complex global financial shifts, from the 2008 crisis to the rise of digital assets and international tax harmonization.
              </p>
              <p>
                Today, Sterling & Vance is recognized as a strategic partner to some of the most innovative firms in the world, combining deep technical expertise with a sharp intuition for market trends.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <span className="text-4xl font-serif text-teal font-bold block">20+</span>
                <span className="text-xs uppercase tracking-widest text-navy/50">Years of Narrative</span>
              </div>
              <div>
                <span className="text-4xl font-serif text-teal font-bold block">500+</span>
                <span className="text-xs uppercase tracking-widest text-navy/50">Complex Audits</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/founders/800/1000" 
              alt="Our Workspace" 
              className="rounded shadow-2xl grayscale"
            />
            <div className="absolute -bottom-6 -left-6 bg-navy p-8 text-white max-w-xs shadow-xl">
              <p className="font-serif italic text-lg mb-4">"We don't build balance sheets; we build the future of our clients' legacies."</p>
              <p className="text-xs uppercase tracking-tighter">— Robert Sterling</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Exposure */}
      <section className="py-24 bg-navy text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif mb-4">International Exposure & Credentials</h2>
            <p className="text-white/60">Our firm is globally recognized and fully accredited across multiple jurisdictions.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Award, title: 'CA & CPA Elite', desc: 'Highest level professional qualifications across the UK, USA, and EU.' },
              { icon: Globe, title: 'OECD Compliance', desc: 'Specialized in BEPS compliance and international tax structuring.' },
              { icon: Shield, title: 'Professional Indemnity', desc: 'Backed by tier-one insurers for your total peace of mind.' }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 p-10 rounded text-center border border-white/10 hover:border-skyblue/50 transition-all">
                <item.icon className="mx-auto text-skyblue w-12 h-12 mb-6" />
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif text-navy mb-12 text-center">Our Leadership Philosophy</h2>
            <div className="space-y-12">
              {[
                { title: 'Extreme Integrity', content: 'Our reputation is our most valuable asset. We maintain absolute independence and ethical transparency.' },
                { title: 'Strategic Foresight', content: 'We don’t react to change; we anticipate it. Our clients are always two steps ahead of regulatory shifts.' },
                { title: 'Radical Accountability', content: 'We own the outcomes. Our results-focused approach ensures that our advice translates directly to financial impact.' }
              ].map((p, i) => (
                <div key={i} className="flex gap-8 items-start">
                  <div className="text-teal bg-teal/10 p-3 rounded-full shrink-0">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-2">{p.title}</h3>
                    <p className="text-navy/60 leading-relaxed">{p.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

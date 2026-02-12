import React from 'react';
import { Award, Globe, Users, ArrowRight } from 'lucide-react';
import useSEO from '../hooks/useSEO';

const Team: React.FC = () => {
  useSEO({
    title: 'Our Team | Elite Chartered Accountants & Financial Advisors | Sterling & Vance',
    description: 'Meet the elite team of CPAs, CAs, and financial specialists at Sterling & Vance. Decades of combined expertise in global accounting and tax strategy.',
    keywords: 'chartered accountants, CPA, financial advisors, accounting experts, audit professionals',
    ogImage: 'https://picsum.photos/seed/team/1200/630',
  });

  const partners = [
    {
      id: 1,
      name: 'Robert Sterling',
      title: 'Founder & Managing Partner',
      expertise: 'International Tax Strategy, Strategic Audit',
      bio: 'Founder with 25+ years in elite financial advisory. Former Big Four partner specializing in multinational tax structures.',
      image: 'https://picsum.photos/seed/partner1/400/500',
      credentials: ['FCA (ICAEW)', 'Certified Tax Advisor', 'INSEAD Executive MBA']
    },
    {
      id: 2,
      name: 'Victoria Vance',
      title: 'Partner, Audit & Assurance',
      expertise: 'Complex Audits, Risk Assessment',
      bio: 'Senior audit partner with expertise in IFRS conversions and high-stakes regulatory audits across 18 jurisdictions.',
      image: 'https://picsum.photos/seed/partner2/400/500',
      credentials: ['CA (ICAEW)', 'CISA - Certified Internal', 'Risk Advisory Specialist']
    },
    {
      id: 3,
      name: 'James Chen',
      title: 'Partner, Technology & Innovation',
      expertise: 'Digital Asset Accounting, ERP Systems',
      bio: 'Tech-focused partner leading our blockchain accounting and fintech advisory vertical. Former VP at Big Tech CFO office.',
      image: 'https://picsum.photos/seed/partner3/400/500',
      credentials: ['CPA (AICPA)', 'Blockchain Auditor', 'SAP ERP Certified']
    }
  ];

  const specialists = [
    {
      name: 'Dr. Marcus Thompson',
      role: 'Senior Tax Advisor',
      focus: 'Transfer Pricing & BEPS',
      years: '18'
    },
    {
      name: 'Priya Kapoor',
      role: 'Healthcare Financial Advisor',
      focus: 'Provider Networks & Compliance',
      years: '16'
    },
    {
      name: 'Sophie Laurent',
      role: 'M&A Audit Director',
      focus: 'Due Diligence & Integration',
      years: '14'
    },
    {
      name: 'Ahmed Ibrahim',
      role: 'Forensic Accountant',
      focus: 'Fraud Detection & Investigation',
      years: '12'
    },
    {
      name: 'Lisa Washington',
      role: 'Private Equity Specialist',
      focus: 'Fund Accounting & Valuations',
      years: '11'
    },
    {
      name: 'Patrick O\'Connor',
      role: 'Regulatory Compliance Lead',
      focus: 'SOX, GDPR & Data Privacy',
      years: '10'
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-navy py-24 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-serif mb-8">Elite Strategic Architects</h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            A world-class team of Chartered Accountants, CPAs, and financial specialists with deep expertise across industries and geographies.
          </p>
        </div>
      </section>

      {/* Partner Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 mb-16">
          <h2 className="text-3xl font-serif text-navy text-center mb-16">Founding Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {partners.map((partner) => (
              <div key={partner.id} className="text-center group">
                <div className="relative mb-8 overflow-hidden rounded shadow-xl">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="w-full h-[400px] object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-2xl font-serif text-navy mb-2">{partner.name}</h3>
                <p className="text-teal font-bold text-sm uppercase tracking-widest mb-4">{partner.title}</p>
                <p className="text-navy/60 text-sm mb-6 leading-relaxed">{partner.bio}</p>
                <div className="space-y-2 mb-6">
                  {partner.credentials.map((cred, i) => (
                    <p key={i} className="text-xs font-bold text-navy/50 uppercase tracking-widest">{cred}</p>
                  ))}
                </div>
                <div className="bg-beige p-4 rounded text-sm text-navy/70">
                  <span className="font-bold text-navy block mb-1">Specialization</span>
                  {partner.expertise}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialists Grid */}
      <section className="bg-beige py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif text-navy text-center mb-16">Specialist Directors & Advisors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialists.map((specialist, i) => (
              <div key={i} className="bg-white p-8 rounded border border-navy/5 shadow-sm hover:shadow-md transition-shadow">
                <p className="text-xs font-bold text-teal uppercase tracking-widest mb-2">{specialist.years} Years</p>
                <h3 className="text-xl font-bold text-navy mb-1">{specialist.name}</h3>
                <p className="text-sm text-navy/60 mb-4 font-medium">{specialist.role}</p>
                <div className="bg-skyblue/10 border border-skyblue/20 p-4 rounded">
                  <p className="text-xs uppercase tracking-widest text-navy/50 font-bold mb-1">Focus Area</p>
                  <p className="text-sm text-navy font-bold">{specialist.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif text-navy text-center mb-16">Our Institutional Strength</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Users, label: 'Team Members', value: '95+' },
              { icon: Globe, label: 'Global Coverage', value: '28 Countries' },
              { icon: Award, label: 'Combined Experience', value: '1,000+ Years' },
              { icon: Award, label: 'Client Satisfaction', value: '98%' }
            ].map((stat, i) => (
              <div key={i} className="border border-navy/10 p-10 rounded text-center hover:border-teal/50 transition-colors">
                <stat.icon className="mx-auto text-teal w-10 h-10 mb-4" />
                <p className="text-sm uppercase tracking-widest text-navy/60 font-bold mb-2">{stat.label}</p>
                <p className="text-3xl font-serif text-navy font-bold">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="py-24 bg-navy text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif text-center mb-16">Our Culture & Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Excellence',
                desc: 'We maintain the highest professional standards in every engagement. Our reputation is built on precision and integrity.'
              },
              {
                title: 'Collaboration',
                desc: 'Our specialists work as unified teams, combining deep expertise to deliver comprehensive solutions for complex challenges.'
              },
              {
                title: 'Innovation',
                desc: 'We pioneer new approaches to emerging challenges—from blockchain accounting to AI-driven financial analysis.'
              }
            ].map((value, i) => (
              <div key={i} className="text-center">
                <h3 className="text-2xl font-serif mb-4">{value.title}</h3>
                <p className="text-white/70 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-beige text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-8">Meet Your Strategic Team</h2>
          <p className="text-xl text-navy/60 mb-12 max-w-2xl mx-auto">
            Connect with our specialists to explore how our team can support your firm's growth and transformation.
          </p>
          <a href="#/contact" className="bg-navy text-white px-12 py-4 rounded-sm font-bold text-lg hover:bg-teal transition-all inline-block">
            Schedule Team Briefing
          </a>
        </div>
      </section>
    </div>
  );
};

export default Team;

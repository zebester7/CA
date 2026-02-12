import React from 'react';
import { Briefcase, Users, Gift, Globe, ArrowRight, MapPin, Clock } from 'lucide-react';
import useSEO from '../hooks/useSEO';

const Careers: React.FC = () => {
  useSEO({
    title: 'Careers at Sterling & Vance | Join Our Elite Advisory Team',
    description: 'Explore career opportunities in accounting, tax advisory, and financial consulting. Join a world-class team of professionals.',
    keywords: 'careers, jobs, accounting positions, tax advisor jobs, financial consultant roles',
    ogImage: 'https://picsum.photos/seed/careers/1200/630',
  });

  const openPositions = [
    {
      id: 1,
      title: 'Senior Tax Advisor',
      level: 'Senior Manager',
      location: 'London, United Kingdom',
      type: 'Full-time',
      experience: '8-12 years',
      description: 'Lead international tax advisory engagements for multinational clients.'
    },
    {
      id: 2,
      title: 'Audit Manager',
      level: 'Manager',
      location: 'New York, USA',
      type: 'Full-time',
      experience: '5-8 years',
      description: 'Oversee complex audit engagements and lead audit teams.'
    },
    {
      id: 3,
      title: 'Financial Advisory Associate',
      level: 'Associate',
      location: 'London, United Kingdom',
      type: 'Full-time',
      experience: '2-4 years',
      description: 'Support M&A due diligence and financial advisory projects.'
    },
    {
      id: 4,
      title: 'Compliance Specialist',
      level: 'Senior Associate',
      location: 'Toronto, Canada',
      type: 'Full-time',
      experience: '4-6 years',
      description: 'Manage regulatory compliance and SOX implementations.'
    },
    {
      id: 5,
      title: 'Fintech Accounting Specialist',
      level: 'Senior Associate',
      location: 'London, United Kingdom',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Specialize in cryptocurrency and blockchain accounting.'
    },
    {
      id: 6,
      title: 'Healthcare Financial Advisor',
      level: 'Manager',
      location: 'Boston, USA',
      type: 'Full-time',
      experience: '6-10 years',
      description: 'Lead healthcare sector advisory and audit engagements.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-navy py-24 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-serif mb-8">Build Your Career With Us</h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Join a world-class team of financial strategists, investigators, and advisors. Grow your expertise while making a real impact.
          </p>
        </div>
      </section>

      {/* Why Sterling & Vance */}
      <section className="py-24">
        <div className="container mx-auto px-6 mb-24">
          <h2 className="text-3xl font-serif text-navy text-center mb-16">Why Join Sterling & Vance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: Gift,
                title: 'Exceptional Compensation',
                desc: 'Competitive salaries, performance bonuses, comprehensive benefits, and professional development budgets.'
              },
              {
                icon: Users,
                title: 'World-Class Mentorship',
                desc: 'Work alongside industry leaders. Learn directly from partners with decades of elite advisory experience.'
              },
              {
                icon: Globe,
                title: 'Global Exposure',
                desc: 'Access to clients across 28+ countries. International secondments and cross-border project opportunities.'
              },
              {
                icon: Briefcase,
                title: 'Meaningful Work',
                desc: 'Drive real transformation for your clients. Your work directly impacts strategic decisions and business outcomes.'
              },
              {
                icon: Clock,
                title: 'Work-Life Balance',
                desc: 'Flexible working arrangements, remote work options, and genuine respect for personal time.'
              },
              {
                icon: Users,
                title: 'Career Progression',
                desc: 'Clear advancement paths. Many of our partners started as associates and developed specialized expertise.'
              }
            ].map((benefit, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center text-teal mx-auto mb-6">
                  <benefit.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-navy mb-4">{benefit.title}</h3>
                <p className="text-navy/60 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-beige py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif text-navy text-center mb-16">Open Positions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {openPositions.map((job) => (
              <div key={job.id} className="bg-white border border-navy/10 p-8 rounded hover:shadow-xl transition-all group">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-2">{job.title}</h3>
                    <p className="text-teal font-bold text-xs uppercase tracking-widest">{job.level}</p>
                  </div>
                  <Briefcase className="text-navy/20 group-hover:text-teal transition-colors" size={32} />
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-sm text-navy/60">
                    <MapPin size={16} className="text-teal" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-navy/60">
                    <Clock size={16} className="text-teal" />
                    {job.type} • {job.experience}
                  </div>
                </div>

                <p className="text-navy/70 text-sm mb-6 leading-relaxed">
                  {job.description}
                </p>

                <a href="#/contact" className="text-teal font-bold text-sm inline-flex items-center gap-2 group/link">
                  Apply Now <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Program */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-serif text-navy mb-8">Summer Internship Program</h2>
              <p className="text-navy/60 mb-6 leading-relaxed">
                Our accelerated 12-week program gives university students hands-on experience in elite financial advisory. Interns work on real client engagements across audit, tax, and advisory services.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Full mentorship from partner-level professionals',
                  'Exposure to international clients and cross-border transactions',
                  'Competitive internship stipend and networking events',
                  'Potential conversion to full-time roles',
                  'Professional development and training budget'
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-navy/70">
                    <span className="text-teal font-bold mt-1">✓</span>
                    {feature}
                  </div>
                ))}
              </div>
              <a href="#/contact" className="bg-navy text-white px-8 py-4 rounded-sm font-bold hover:bg-teal transition-all inline-block">
                Apply for Internship
              </a>
            </div>
            <img
              src="https://picsum.photos/seed/intern/800/600"
              alt="Sterling & Vance internship program"
              className="rounded shadow-xl grayscale hover:grayscale-0 transition-all"
            />
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="bg-navy py-24 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif mb-16">Our Professional Culture</h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto mb-12 leading-relaxed">
            We believe professional excellence stems from a culture of integrity, continuous learning, and genuine collaboration. We invest in our people because our people drive our success.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { stat: '98%', label: 'Staff Retention Rate' },
              { stat: '£50K+', label: 'Average Training Budget' },
              { stat: '50%', label: 'Promoted to Manager (3yrs)' }
            ].map((metric, i) => (
              <div key={i} className="bg-white/5 p-8 rounded border border-white/10">
                <p className="text-4xl font-serif font-bold mb-2">{metric.stat}</p>
                <p className="text-sm text-white/70 uppercase tracking-widest font-bold">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-24 bg-beige">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif text-navy text-center mb-16">Our Application Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                { step: '01', title: 'Submit Application', desc: 'Upload your CV, cover letter, and relevant work samples.' },
                { step: '02', title: 'Initial Screening', desc: 'Our HR team reviews your application and credentials.' },
                { step: '03', title: 'Phone Interview', desc: 'Discuss your background and interest in the role.' },
                { step: '04', title: 'Panel Interview', desc: 'Meet with potential colleagues and partners to explore fit.' },
                { step: '05', title: 'Offer & Onboarding', desc: 'Receive your offer and begin your journey with us.' }
              ].map((process, i) => (
                <div key={i} className="flex gap-8 items-start">
                  <div className="w-20 h-20 bg-navy text-white rounded-full flex items-center justify-center text-2xl font-serif font-bold shrink-0">
                    {process.step}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-bold text-navy mb-2">{process.title}</h3>
                    <p className="text-navy/60">{process.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-8">Ready to Transform Your Career?</h2>
          <p className="text-xl text-navy/60 mb-12 max-w-2xl mx-auto">
            Join Sterling & Vance and work alongside elite financial strategists shaping the future of global advisory.
          </p>
          <a href="#/contact" className="bg-navy text-white px-12 py-4 rounded-sm font-bold text-lg hover:bg-teal transition-all inline-block">
            Explore Opportunities
          </a>
        </div>
      </section>
    </div>
  );
};

export default Careers;

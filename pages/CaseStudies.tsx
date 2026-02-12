import React from 'react';
import { ArrowRight, TrendingUp, Award, Globe } from 'lucide-react';
import useSEO from '../hooks/useSEO';

const CaseStudies: React.FC = () => {
  useSEO({
    title: 'Case Studies & Success Stories | Sterling & Vance',
    description: 'Explore our proven financial advisory case studies. See how we delivered transformational results for global enterprises through strategic auditing and tax optimization.',
    keywords: 'case studies, financial advisory results, tax optimization, audit success, enterprise transformation',
    ogImage: 'https://picsum.photos/seed/casestudy/1200/630',
  });

  const caseStudies = [
    {
      id: 1,
      title: 'Global SaaS Tax Strategy',
      challenge: 'Inefficient IP holding structure across 3 continents leading to excess withholding tax.',
      solution: 'Migration to centralized holding entity with R&D nexus benefits in favorable treaty jurisdiction.',
      result: '$4.2M annual tax savings',
      industry: 'Technology',
      impact: '18% ROI improvement'
    },
    {
      id: 2,
      title: 'International Manufacturing Restructure',
      challenge: 'Multi-jurisdiction manufacturing operations with redundant reporting overhead and compliance risk.',
      solution: 'Consolidated global reporting platform with automated GAAP and local IFRS harmonization.',
      result: '42% reduction in compliance costs, $8.7M cash freed',
      industry: 'Manufacturing',
      impact: '31% operational efficiency gain'
    },
    {
      id: 3,
      title: 'Private Equity Due Diligence',
      challenge: 'Complex pre-acquisition audit for $500M+ portfolio company acquisition.',
      solution: 'Forensic deep-dive analyzing 7-year financials, tax contingencies, and regulatory exposure.',
      result: 'Identified $23M hidden tax exposure, negotiated favorable purchase price adjustment',
      industry: 'Financial Services',
      impact: '4.6% deal value recovery'
    },
    {
      id: 4,
      title: 'Digital Asset Tax Framework',
      challenge: 'Cryptocurrency holdings and DeFi income with unclear tax classification.',
      solution: 'Pioneered compliant classification framework aligning with HMRC guidance.',
      result: 'Zero audit risk, optimized tax treatment valued at $2.1M',
      industry: 'Fintech',
      impact: 'First-mover advantage in emerging asset class'
    },
    {
      id: 5,
      title: 'Healthcare Group Consolidation',
      challenge: 'Fragmented healthcare provider network across 12 entities with complex intercompany eliminations.',
      solution: 'Unified consolidation methodology with automated intercompany netting.',
      result: '$6.3M identified intercompany reconciliation, streamlined to single statement',
      industry: 'Healthcare',
      impact: '52% faster closing timeline'
    },
    {
      id: 6,
      title: 'Cross-Border Startup Scaling',
      challenge: 'Pre-IPO growth company expanding from UK to US, EU, and APAC with jurisdictional tax complexity.',
      solution: 'Global tax-efficient operating structure with transfer pricing alignment.',
      result: '$18M tax optimization across 4 jurisdictions, IPO-ready structure',
      industry: 'Technology',
      impact: 'Successful $800M IPO at optimal valuation'
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-navy py-24 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-serif mb-8">Proven Strategic Excellence</h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Real transformations for global enterprises. Quantifiable results through elite financial strategy and rigorous execution.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {caseStudies.map((study) => (
              <div key={study.id} className="border border-navy/10 hover:border-teal/50 p-10 rounded-sm hover:shadow-2xl transition-all group">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-teal font-bold text-xs uppercase tracking-widest block mb-2">Case {study.id}</span>
                    <h3 className="text-2xl font-serif text-navy mb-2">{study.title}</h3>
                    <span className="text-xs font-bold text-navy/50 uppercase tracking-widest">{study.industry}</span>
                  </div>
                  <TrendingUp className="text-teal w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="text-xs font-bold text-navy/60 uppercase tracking-widest mb-2">The Challenge</h4>
                    <p className="text-sm text-navy/70">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-navy/60 uppercase tracking-widest mb-2">Strategic Solution</h4>
                    <p className="text-sm text-navy/70">{study.solution}</p>
                  </div>
                </div>

                <div className="border-t border-navy/10 pt-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-navy/50 uppercase">Financial Impact</span>
                      <span className="text-teal font-bold">{study.result}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-navy/50 uppercase">Business Impact</span>
                      <span className="text-navy font-bold text-sm">{study.impact}</span>
                    </div>
                  </div>
                </div>

                <a href="#/contact" className="text-teal font-bold text-sm mt-6 inline-flex items-center gap-2 group/link">
                  Request Full Report <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Summary */}
      <section className="bg-beige py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif text-navy text-center mb-16">Cumulative Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Award, label: 'Total Value Generated', value: '$100M+' },
              { icon: Globe, label: 'Jurisdictions Served', value: '28+' },
              { icon: TrendingUp, label: 'Avg ROI Improvement', value: '28%' },
              { icon: Award, label: 'Success Rate', value: '100%' }
            ].map((stat, i) => (
              <div key={i} className="bg-white p-8 rounded shadow-sm border border-navy/5 text-center hover:shadow-md transition-shadow">
                <stat.icon className="mx-auto text-teal w-8 h-8 mb-4" />
                <p className="text-sm text-navy/60 mb-2 uppercase tracking-widest font-bold">{stat.label}</p>
                <p className="text-3xl font-serif text-navy font-bold">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-serif mb-8">Ready to Achieve Similar Results?</h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
            Let our strategic advisors analyze your firm's unique situation and identify optimization opportunities.
          </p>
          <a href="#/contact" className="bg-skyblue text-navy px-12 py-4 rounded-sm font-bold text-lg hover:bg-white transition-all inline-block">
            Book Strategy Session
          </a>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;

import React from 'react';
import { Building2, Zap, BarChart3, Globe, DollarSign, ArrowRight } from 'lucide-react';
import useSEO from '../hooks/useSEO';

const Industries: React.FC = () => {
  useSEO({
    title: 'Industry Solutions | Accounting & Tax Advisory by Sector | Sterling & Vance',
    description: 'Specialized financial advisory services tailored to your industry. Technology, healthcare, manufacturing, fintech, and more with deep sector expertise.',
    keywords: 'industry solutions, technology accounting, healthcare financial advisory, fintech tax planning, sector-specific accounting',
    ogImage: 'https://picsum.photos/seed/industries/1200/630',
  });

  const industries = [
    {
      id: 1,
      name: 'Technology & SaaS',
      icon: Zap,
      description: 'Cloud-native financial operations for hypergrowth startups and established tech firms.',
      expertise: [
        'ASC 606 revenue recognition for complex contracts',
        'R&D tax credits and innovation incentives',
        'International tax structuring for global teams',
        'Equity compensation accounting (RSUs, options)',
        'ESOP and employee benefit structures'
      ],
      challenges: 'Complex revenue contracts, multi-jurisdiction payroll, rapid team scaling'
    },
    {
      id: 2,
      name: 'Healthcare & Life Sciences',
      icon: BarChart3,
      description: 'Specialized financial advisory for providers, payers, and biotech enterprises.',
      expertise: [
        'HMO/managed care contract analysis',
        'Medicare/Medicaid compliance and reimbursement',
        'Drug development and clinical trial accounting',
        'Hospital consolidation and M&A',
        'Long-term care facility operations'
      ],
      challenges: 'Regulatory compliance, complex reimbursement models, multi-facility operations'
    },
    {
      id: 3,
      name: 'Manufacturing & Supply Chain',
      icon: Building2,
      description: 'Integrated solutions for multi-facility, multi-jurisdiction production networks.',
      expertise: [
        'Inventory costing (FIFO, LIFO, absorption)',
        'Transfer pricing for inter-company production',
        'Supply chain optimization and cost reduction',
        'ERP system implementation and optimization',
        'Environmental and compliance accounting'
      ],
      challenges: 'Inventory complexity, tariff exposure, global supply chain disruptions'
    },
    {
      id: 4,
      name: 'Financial Services & Private Equity',
      icon: DollarSign,
      description: 'Specialized advisory for investment firms, asset managers, and alternative funds.',
      expertise: [
        'Fund accounting and NAV computation',
        'Fair value pricing and ASC 820 valuation',
        'AIFMD and SEC compliance for registered advisors',
        'Carry calculation and waterfall modeling',
        'Portfolio company due diligence'
      ],
      challenges: 'Complex valuation, regulatory oversight, deal structuring'
    },
    {
      id: 5,
      name: 'Fintech & Digital Assets',
      icon: Zap,
      description: 'Cutting-edge accounting for crypto, blockchain, and decentralized finance platforms.',
      expertise: [
        'Cryptocurrency accounting and tax treatment',
        'Smart contract audit trails and reconciliation',
        'DeFi protocol accounting and token economics',
        'HMRC and regulatory guidance alignment',
        'Staking income and transaction categorization'
      ],
      challenges: 'Emerging tax guidance, transaction complexity, regulatory uncertainty'
    },
    {
      id: 6,
      name: 'Retail & E-Commerce',
      icon: Globe,
      description: 'Financial solutions for omnichannel retailers and digital marketplace operators.',
      expertise: [
        'Multi-channel revenue consolidation',
        'Inventory accounting across warehouses and channels',
        'Sales tax compliance across jurisdictions',
        'Trademark and royalty structuring',
        'Logistics and fulfillment cost allocation'
      ],
      challenges: 'Sales tax complexity, inventory tracking, rapid channel expansion'
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-navy py-24 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-serif mb-8">Sector-Specific Expertise</h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Deep industry knowledge combined with elite financial strategy. We don't just understand your numbers; we understand your business model.
          </p>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {industries.map((industry) => (
              <div key={industry.id} className="border border-navy/10 hover:border-teal/50 rounded-sm p-10 hover:shadow-2xl transition-all group">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-teal/10 rounded-sm flex items-center justify-center text-teal shrink-0 group-hover:scale-110 transition-transform">
                    <industry.icon size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif text-navy">{industry.name}</h3>
                    <p className="text-sm text-navy/60 mt-1">{industry.description}</p>
                  </div>
                </div>

                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="text-xs font-bold text-navy/70 uppercase tracking-widest mb-3 flex items-center gap-2">
                      <span className="w-1 h-1 bg-teal rounded-full"></span> Core Expertise
                    </h4>
                    <ul className="space-y-2">
                      {industry.expertise.map((exp, i) => (
                        <li key={i} className="text-sm text-navy/60 flex items-start gap-2">
                          <span className="text-teal mt-1">✓</span> {exp}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-beige p-4 rounded-sm border border-navy/5">
                    <h4 className="text-xs font-bold text-navy/70 uppercase tracking-widest mb-2">Key Challenges We Solve</h4>
                    <p className="text-sm text-navy/60">{industry.challenges}</p>
                  </div>
                </div>

                <a href="#/contact" className="text-teal font-bold text-sm inline-flex items-center gap-2 group/link">
                  Explore Services <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vertical Expertise */}
      <section className="bg-beige py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif text-navy text-center mb-4">Cross-Industry Capabilities</h2>
          <p className="text-navy/60 text-center mb-16 max-w-2xl mx-auto">
            Beyond industry-specific expertise, we bring institutional knowledge across sectors to drive innovation and identify best practices.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'International Tax Planning',
              'GAAP to IFRS Conversion',
              'Merger & Acquisition Audit',
              'Forensic Investigation',
              'Regulatory Compliance',
              'Financial Modeling & Forecasting',
              'ERP Implementation',
              'Cost Optimization',
              'Risk Assessment & Mitigation'
            ].map((cap, i) => (
              <div key={i} className="bg-white p-6 rounded shadow-sm border border-navy/5 hover:shadow-md transition-shadow flex items-center gap-4">
                <div className="w-2 h-2 bg-teal rounded-full shrink-0"></div>
                <span className="font-bold text-navy text-sm">{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-serif mb-8">Let's Optimize Your Industry Strategy</h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
            Our specialists will conduct a comprehensive review of your firm's financial operations and identify sector-specific opportunities.
          </p>
          <a href="#/contact" className="bg-skyblue text-navy px-12 py-4 rounded-sm font-bold text-lg hover:bg-white transition-all inline-block">
            Request Industry Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default Industries;

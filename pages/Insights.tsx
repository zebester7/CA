import React from 'react';
import { Calendar, ArrowRight, BookOpen, TrendingUp, AlertCircle } from 'lucide-react';
import useSEO from '../hooks/useSEO';

const Insights: React.FC = () => {
  useSEO({
    title: 'Financial Insights & Advisory Blog | Sterling & Vance',
    description: 'Expert insights on tax strategy, accounting trends, and financial advisory. Stay updated on regulatory changes and industry best practices.',
    keywords: 'financial insights, accounting blog, tax advice, regulatory updates, business strategy',
    ogImage: 'https://picsum.photos/seed/insights/1200/630',
  });

  const articles = [
    {
      id: 1,
      title: 'HMRC Transfer Pricing Trends: What to Expect in 2026',
      date: 'February 2026',
      category: 'Tax Strategy',
      icon: AlertCircle,
      excerpt: 'New HMRC guidance on transfer pricing enforcement is tightening. We analyze the implications for multinational enterprises and recommended compliance strategies.',
      readTime: '8 min read'
    },
    {
      id: 2,
      title: 'The Rise of AI in Financial Auditing: Opportunities & Risks',
      date: 'January 2026',
      category: 'Innovation',
      icon: TrendingUp,
      excerpt: 'As AI transforms audit procedures, we explore implementation best practices, governance frameworks, and the future of assurance.'
      readTime: '12 min read'
    },
    {
      id: 3,
      title: 'Crypto Tax Treatment: Navigating the 2026 Regulatory Landscape',
      date: 'January 2026',
      category: 'Digital Assets',
      icon: BookOpen,
      excerpt: 'Regulatory clarity is finally emerging on crypto taxation. Here\'s what enterprises need to know about DeFi income, staking, and NFT treatment.'
      readTime: '10 min read'
    },
    {
      id: 4,
      title: 'ESOP Structuring for Pre-IPO Tech Companies',
      date: 'December 2025',
      category: 'Equity Planning',
      icon: TrendingUp,
      excerpt: 'Planning an IPO? Strategic ESOP structures can enhance valuation and employee retention. We break down the mechanics and tax implications.'
      readTime: '9 min read'
    },
    {
      id: 5,
      title: 'Healthcare M&A: Due Diligence Checklist for 2026',
      date: 'December 2025',
      category: 'Industry Solutions',
      icon: AlertCircle,
      excerpt: 'Healthcare providers face unique audit challenges in M&A transactions. Our comprehensive checklist covers regulatory, operational, and financial considerations.'
      readTime: '11 min read'
    },
    {
      id: 6,
      title: 'Global Tax Compliance: Managing GDPR & Data Privacy in Financial Reporting',
      date: 'November 2025',
      category: 'Compliance',
      icon: BookOpen,
      excerpt: 'GDPR intersects with financial reporting. Understand how data privacy obligations impact audit scope and personnel management.'
      readTime: '7 min read'
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-navy py-24 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-serif mb-8">Financial Intelligence Hub</h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Expert insights on tax strategy, regulatory trends, and financial advisory best practices. Stay ahead of market shifts.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {articles.map((article) => (
              <article
                key={article.id}
                className="border border-navy/10 rounded p-8 hover:border-teal/50 hover:shadow-xl transition-all group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 bg-teal/10 rounded flex items-center justify-center text-teal group-hover:scale-110 transition-transform">
                    <article.icon size={20} />
                  </div>
                  <span className="text-teal font-bold text-xs uppercase tracking-widest">{article.category}</span>
                </div>

                <h3 className="text-2xl font-serif text-navy mb-4 group-hover:text-teal transition-colors">
                  {article.title}
                </h3>

                <p className="text-navy/60 text-sm mb-6 leading-relaxed">
                  {article.excerpt}
                </p>

                <div className="border-t border-navy/10 pt-6 flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs text-navy/50">
                      <Calendar size={14} />
                      {article.date}
                    </div>
                    <p className="text-xs font-bold text-navy/40 uppercase">{article.readTime}</p>
                  </div>
                  <a href="#/insights" className="text-teal font-bold flex items-center gap-2 group/link">
                    Read <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-beige py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif text-navy text-center mb-16">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              'Tax Strategy',
              'Compliance',
              'Digital Assets',
              'Industry Solutions',
              'M&A & Transactions',
              'Innovation'
            ].map((cat, i) => (
              <button
                key={i}
                className="bg-white border border-navy/10 p-6 rounded text-center hover:border-teal/50 hover:shadow-md transition-all group"
              >
                <p className="font-bold text-navy text-sm group-hover:text-teal transition-colors">{cat}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto border border-navy/10 bg-beige p-12 rounded text-center">
            <h2 className="text-3xl font-serif text-navy mb-4">Stay Updated</h2>
            <p className="text-navy/60 mb-8">
              Get the latest financial insights, regulatory updates, and strategic advice delivered directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="your@enterprise.com"
                className="flex-1 px-6 py-4 bg-white border border-navy/20 rounded text-navy text-sm focus:border-teal focus:outline-none"
              />
              <button
                type="submit"
                className="bg-navy text-white px-8 py-4 rounded font-bold hover:bg-teal transition-all whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-navy/40 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-serif mb-8">Need Expert Guidance?</h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
            Our specialists are ready to discuss how these insights apply to your firm's specific situation.
          </p>
          <a href="#/contact" className="bg-skyblue text-navy px-12 py-4 rounded-sm font-bold text-lg hover:bg-white transition-all inline-block">
            Book a Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default Insights;

import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  structuredData?: Record<string, any>;
}

export const useSEO = ({
  title,
  description,
  keywords,
  ogImage,
  ogUrl,
  ogType = 'website',
  structuredData,
}: SEOProps) => {
  useEffect(() => {
    // Update title
    document.title = title;

    // Remove existing meta tags to avoid duplicates
    const existingMeta = Array.from(document.querySelectorAll('meta[name="description"], meta[property^="og:"], meta[name^="twitter:"]'));
    existingMeta.forEach(tag => tag.remove());

    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add meta description
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = description;
    document.head.appendChild(metaDescription);

    // Add keywords if provided
    if (keywords) {
      const metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      metaKeywords.content = keywords;
      document.head.appendChild(metaKeywords);
    }

    // Add Open Graph meta tags
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: ogType },
      ...(ogImage ? [{ property: 'og:image', content: ogImage }] : []),
      ...(ogUrl ? [{ property: 'og:url', content: ogUrl }] : []),
    ];

    ogTags.forEach(tag => {
      const meta = document.createElement('meta');
      meta.setAttribute('property', tag.property);
      meta.content = tag.content;
      document.head.appendChild(meta);
    });

    // Add Twitter Card meta tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      ...(ogImage ? [{ name: 'twitter:image', content: ogImage }] : []),
    ];

    twitterTags.forEach(tag => {
      const meta = document.createElement('meta');
      meta.name = tag.name;
      meta.content = tag.content;
      document.head.appendChild(meta);
    });

    // Add structured data if provided
    if (structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    return () => {
      // Cleanup is optional as we remove tags at the beginning of next effect
    };
  }, [title, description, keywords, ogImage, ogUrl, ogType, structuredData]);
};

export default useSEO;

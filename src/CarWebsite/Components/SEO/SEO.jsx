import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  ogImage, 
  ogUrl, 
  canonicalUrl,
  structuredData,
  noIndex = false,
  additionalMeta = []
}) => {
  const siteTitle = 'Car Marketplace';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const siteDescription = description || 'Discover your dream car at Car Marketplace. Browse our extensive collection of new and used cars, get competitive prices, and experience seamless online car shopping.';
  const siteKeywords = keywords || 'car marketplace, buy cars online, sell cars, used cars, new cars, car dealership, automotive, car sales, quality vehicles, best car prices';
  const baseUrl = 'https://SIMON-cloud-tech.github.io/Car-Marketplace';
  const defaultImage = `${baseUrl}/public/images/car3.jpeg`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={siteKeywords} />
      <meta name="author" content="Car Marketplace" />
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl || baseUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl || baseUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={ogImage || defaultImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={ogUrl || baseUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={siteDescription} />
      <meta property="twitter:image" content={ogImage || defaultImage} />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#2563eb" />
      <meta name="msapplication-TileColor" content="#2563eb" />
      
      {/* Additional dynamic meta tags */}
      {additionalMeta.map((meta, index) => (
        <meta key={index} {...meta} />
      ))}
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;

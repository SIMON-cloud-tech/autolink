
import Hero from '../Components/JSX/Hero';
import How from '../Components/JSX/How';
import SEO from '../Components/SEO/SEO';

const Works = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ServicePage",
    "name": "How Car Marketplace Works",
    "description": "Learn how Car Marketplace makes buying and selling cars easy. Our streamlined process ensures a smooth experience for all your automotive needs.",
    "url": "https://SIMON-cloud-tech.github.io/Car-Marketplace/works",
    "mainEntity": {
      "@type": "Service",
      "name": "Car Buying and Selling Service",
      "description": "Complete car marketplace service for buying and selling quality vehicles with competitive pricing and exceptional support.",
      "provider": {
        "@type": "AutomotiveBusiness",
        "name": "Car Marketplace",
        "url": "https://SIMON-cloud-tech.github.io/Car-Marketplace/"
      }
    }
  };

  return (
    <>
      <SEO 
        title="How Car Marketplace Works - Easy Car Buying & Selling"
        description="Learn how Car Marketplace makes buying and selling cars easy. Our streamlined process ensures a smooth experience for all your automotive needs. Discover our simple steps today."
        keywords="how car marketplace works, car buying process, car selling process, automotive marketplace, easy car selling, simple car buying"
        ogUrl="https://SIMON-cloud-tech.github.io/Car-Marketplace/works"
        canonicalUrl="https://SIMON-cloud-tech.github.io/Car-Marketplace/works"
        structuredData={structuredData}
      />
      <Hero />
      <How />
    </>
  );
};

export default Works;
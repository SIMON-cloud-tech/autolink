
import Hero from '../Components/JSX/Hero';
import Story from '../Components/JSX/Story';
import How from '../Components/JSX/How';
import Shop from '../Components/JSX/Shop';
import Reach from '../Components/JSX/Reach';
import Media from '../Components/JSX/Media';
import Choose from '../Components/JSX/Choose';
import Authority from '../Components/JSX/Authority';
import Commitment from '../Components/JSX/Commitment';
import SEO from '../Components/SEO/SEO';

const Home = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Car Marketplace",
    "url": "https://SIMON-cloud-tech.github.io/Car-Marketplace/",
    "description": "Premium car marketplace offering quality new and used vehicles with competitive pricing",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://SIMON-cloud-tech.github.io/Car-Marketplace/cars?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "mainEntity": {
      "@type": "AutomotiveBusiness",
      "name": "Car Marketplace",
      "url": "https://SIMON-cloud-tech.github.io/Car-Marketplace/",
      "description": "Premium car marketplace offering quality new and used vehicles with competitive pricing",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US"
      }
    }
  };

  return (
    <>
      <SEO 
        title="Premium Car Marketplace - Buy & Sell Quality Cars"
        description="Discover your dream car at Car Marketplace. Browse our extensive collection of new and used cars, get competitive prices, and experience seamless online car shopping with trusted dealers."
        keywords="car marketplace, buy cars online, sell cars, used cars, new cars, car dealership, automotive, car sales, quality vehicles, best car prices, premium cars"
        ogUrl="https://SIMON-cloud-tech.github.io/Car-Marketplace/"
        canonicalUrl="https://SIMON-cloud-tech.github.io/Car-Marketplace/"
        structuredData={structuredData}
      />
      <Hero />
      <Story />
      <How />
      <Shop />
      <Authority />
      <Commitment />
      <Reach />
      <Media />
      <Choose />
    </>
  );
};

export default Home;
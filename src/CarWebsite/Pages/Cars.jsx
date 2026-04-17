
import Hero from '../Components/JSX/Hero';
import Shop from '../Components/JSX/Shop';
import SEO from '../Components/SEO/SEO';

const Cars = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Car Collection - Browse Our Inventory",
    "description": "Browse our extensive collection of quality new and used cars. Find your perfect vehicle with competitive pricing and trusted service.",
    "url": "https://SIMON-cloud-tech.github.io/Car-Marketplace/cars",
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": "10",
      "itemListElement": [
        {
          "@type": "Car",
          "name": "Quality Used Cars",
          "description": "Premium selection of used vehicles"
        },
        {
          "@type": "Car", 
          "name": "New Cars",
          "description": "Latest models from top brands"
        }
      ]
    }
  };

  return (
    <>
      <SEO 
        title="Browse Our Car Collection - New & Used Cars"
        description="Browse our extensive collection of quality new and used cars. Find your perfect vehicle with competitive pricing and trusted service at Car Marketplace."
        keywords="car collection, browse cars, used cars, new cars, car inventory, car dealership, find cars, car search"
        ogUrl="https://SIMON-cloud-tech.github.io/Car-Marketplace/cars"
        canonicalUrl="https://SIMON-cloud-tech.github.io/Car-Marketplace/cars"
        structuredData={structuredData}
      />
      <Hero />
      <Shop />
    </>
  );
};

export default Cars;
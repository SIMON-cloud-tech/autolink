
import Story from '../Components/JSX/Story';
import SEO from '../Components/SEO/SEO';
import Hero from '../Components/JSX/Hero';

const About = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Car Marketplace",
    "description": "Learn about Car Marketplace - your trusted partner for buying and selling quality vehicles with exceptional service and competitive pricing.",
    "url": "https://SIMON-cloud-tech.github.io/Car-Marketplace/about",
    "mainEntity": {
      "@type": "Organization",
      "name": "Car Marketplace",
      "description": "Premium car marketplace offering quality new and used vehicles with competitive pricing",
      "url": "https://SIMON-cloud-tech.github.io/Car-Marketplace/",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "availableLanguage": "English"
      }
    }
  };

  return (
    <>
      <SEO 
        title="About Car Marketplace - Our Story & Mission"
        description="Learn about Car Marketplace - your trusted partner for buying and selling quality vehicles with exceptional service and competitive pricing. Discover our commitment to excellence."
        keywords="about car marketplace, car marketplace story, automotive dealership, car selling service, car buying service, trusted car dealer"
        ogUrl="https://SIMON-cloud-tech.github.io/Car-Marketplace/about"
        canonicalUrl="https://SIMON-cloud-tech.github.io/Car-Marketplace/about"
        structuredData={structuredData}
      />
      <Hero />
      <Story />

    </>
  );
};

export default About;
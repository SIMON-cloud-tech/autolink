
import Hero from '../Components/JSX/Hero';
import Reach from '../Components/JSX/Reach';
import SEO from '../Components/SEO/SEO';

const Contact = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Car Marketplace",
    "description": "Get in touch with Car Marketplace for all your automotive needs. Contact us for inquiries, support, or to schedule a visit to our dealership.",
    "url": "https://SIMON-cloud-tech.github.io/Car-Marketplace/contact",
    "mainEntity": {
      "@type": "AutomotiveBusiness",
      "name": "Car Marketplace",
      "url": "https://SIMON-cloud-tech.github.io/Car-Marketplace/",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "availableLanguage": "English"
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US"
      }
    }
  };

  return (
    <>
      <SEO 
        title="Contact Car Marketplace - Get in Touch"
        description="Get in touch with Car Marketplace for all your automotive needs. Contact us for inquiries, support, or to schedule a visit to our dealership. We're here to help you find your perfect car."
        keywords="contact car marketplace, car dealership contact, automotive support, car buying help, car selling assistance, customer service"
        ogUrl="https://SIMON-cloud-tech.github.io/Car-Marketplace/contact"
        canonicalUrl="https://SIMON-cloud-tech.github.io/Car-Marketplace/contact"
        structuredData={structuredData}
      />
      <Hero />
      <Reach />
    </>
  );
};

export default Contact;
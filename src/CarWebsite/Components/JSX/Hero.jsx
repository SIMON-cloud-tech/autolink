import React from "react";
import "../CSS/Hero.css";
import {useNavigate} from 'react-router-dom';


export default function Hero() {
  const navigate = useNavigate();

  const handleBrowseCars = ()=> {
    navigate('/Cars');
  }

  return (
    <section className="hero">
      <div className="hero-text">
        <h2>Your Dream Car, Just a Click Away</h2>
        <p>
          Discover quality vehicles from trusted sellers. We bridge the gap
          between buyers and sellers with transparency, fair pricing, and
          direct communication — so you drive home with confidence.
        </p>
        <button onClick={handleBrowseCars}>Browse Cars</button>
      </div>

      <div className="hero-image-house">
        <div className="hero-image">
          <img src={`${import.meta.env.BASE_URL}images/car10.jpeg`} alt="Luxury car" />
        </div>
      </div>
    </section>
  );
}
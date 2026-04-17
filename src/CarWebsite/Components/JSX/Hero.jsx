import React, { useState, useEffect } from "react";
import "../CSS/Hero.css";
import {useNavigate} from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 47, seconds: 12 });
  const [activeUsers, setActiveUsers] = useState(147);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const totalSeconds = prev.hours * 3600 + prev.minutes * 60 + prev.seconds - 1;
        if (totalSeconds <= 0) {
          return { hours: 23, minutes: 59, seconds: 59 };
        }
        return {
          hours: Math.floor(totalSeconds / 3600),
          minutes: Math.floor((totalSeconds % 3600) / 60),
          seconds: totalSeconds % 60
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const userTimer = setInterval(() => {
      setActiveUsers(prev => prev + Math.floor(Math.random() * 3) - 1);
    }, 5000);

    return () => clearInterval(userTimer);
  }, []);

  const handleBrowseCars = ()=> {
    navigate('/cars');
  }

  return (
    <section className="hero">
      <div className="hero-text">
        <div className="urgency-banner">
          <span className="pulse-dot"></span>
          <span className="urgency-text">{activeUsers} people browsing now</span>
        </div>
        
        <h2>Drive Home Your Dream Car Today - Unbeatable Prices Await!</h2>
        
        <div className="scarcity-alert">
          <span className="alert-icon">⚡</span>
          <span>Limited Time: Flash Sale Ends In</span>
        </div>
        
        <div className="countdown-timer">
          <span className="time-block">{String(timeLeft.hours).padStart(2, '0')}</span>
          <span className="time-separator">:</span>
          <span className="time-block">{String(timeLeft.minutes).padStart(2, '0')}</span>
          <span className="time-separator">:</span>
          <span className="time-block">{String(timeLeft.seconds).padStart(2, '0')}</span>
        </div>
        
        <p>
          Transform your driving experience with our premium selection of quality vehicles. 
          <strong> Over 2,847 happy customers</strong> have already found their dream cars through our platform. 
          We connect you directly with verified sellers, eliminating middlemen and hidden costs. 
          Get transparent pricing, comprehensive vehicle histories, and seamless transactions - 
          all designed to get you behind the wheel of your perfect car faster and more affordably than ever before.
        </p>
        
        <div className="social-proof">
          <div className="proof-item">
            <span className="proof-number">4.9/5</span>
            <span className="proof-label">★★★★★ Trust Score</span>
          </div>
          <div className="proof-item">
            <span className="proof-number">98%</span>
            <span className="proof-label">Customer Satisfaction</span>
          </div>
        </div>
        
        <div className="cta-container">
          <button onClick={handleBrowseCars} className="primary-cta">
            Browse Cars Now
            <span className="cta-urgency">🔥 Only 3 cars left at flash prices!</span>
          </button>
          <div className="trust-badges">
            <span className="badge">✓ Verified Sellers</span>
            <span className="badge">✓ Secure Payment</span>
            <span className="badge">✓ 24/7 Support</span>
          </div>
        </div>
      </div>

      <div className="hero-image-house">
        <div className="hero-image">
          <img src={`${import.meta.env.BASE_URL}images/car2.jpeg`} alt="Premium car" />
        </div>
      </div>
    </section>
  );
}
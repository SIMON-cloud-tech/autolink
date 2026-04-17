import React from 'react';
import '../CSS/Authority.css';

export default function Authority() {
  return (
    <section className="authority-section">
      <div className="authority-header">
        <h2>Trusted by Industry Leaders & Thousands of Happy Customers</h2>
        <p>Our commitment to excellence has earned us recognition from automotive experts and satisfied customers nationwide.</p>
      </div>

      <div className="authority-grid">
        <div className="authority-card">
          <div className="authority-icon">🏆</div>
          <h3>Award Winning Service</h3>
          <p>Voted "Best Car Marketplace 2024" by Kenya Automotive Association for exceptional customer service and transparency.</p>
          <div className="authority-badge">Official Recognition</div>
        </div>

        <div className="authority-card">
          <div className="authority-icon">🤝</div>
          <h3>Verified Partnerships</h3>
          <p>Official partnerships with 50+ authorized dealerships and certified mechanics across Kenya.</p>
          <div className="authority-badge">Certified Network</div>
        </div>

        <div className="authority-card">
          <div className="authority-icon">📋</div>
          <h3>ISO Certified Platform</h3>
          <p>Our platform meets international standards for security, data protection, and transaction safety.</p>
          <div className="authority-badge">ISO 27001:2013</div>
        </div>

        <div className="authority-card">
          <div className="authority-icon">👥</div>
          <h3>Expert Endorsements</h3>
          <p>"The most transparent car trading platform I've seen in East Africa" - John Kamau, Auto Expert.</p>
          <div className="authority-badge">Industry Approved</div>
        </div>

        <div className="authority-card">
          <div className="authority-icon">📊</div>
          <h3>Proven Track Record</h3>
          <p>Over 5,000 successful transactions with 98.7% customer satisfaction rate since 2023.</p>
          <div className="authority-badge">Data Driven</div>
        </div>

        <div className="authority-card">
          <div className="authority-icon">🛡️</div>
          <h3>Money-Back Guarantee</h3>
          <p>30-day satisfaction guarantee on all vehicles. If you're not happy, we'll make it right.</p>
          <div className="authority-badge">Risk-Free</div>
        </div>
      </div>

      <div className="trust-indicators">
        <div className="trust-item">
          <div className="trust-icon">✓</div>
          <span>Government Registered Business</span>
        </div>
        <div className="trust-item">
          <div className="trust-icon">✓</div>
          <span>SSL Secured Transactions</span>
        </div>
        <div className="trust-item">
          <div className="trust-icon">✓</div>
          <span>24/7 Customer Support</span>
        </div>
        <div className="trust-item">
          <div className="trust-icon">✓</div>
          <span>Verified Vehicle Documentation</span>
        </div>
      </div>

      <div className="social-proof-banner">
        <div className="proof-stats">
          <div className="stat-item">
            <span className="stat-number">5,000+</span>
            <span className="stat-label">Happy Customers</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label">Partner Dealerships</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">4.9/5</span>
            <span className="stat-label">Average Rating</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">98.7%</span>
            <span className="stat-label">Satisfaction Rate</span>
          </div>
        </div>
      </div>
    </section>
  );
}

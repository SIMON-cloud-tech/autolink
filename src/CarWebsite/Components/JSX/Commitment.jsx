import React, { useState, useEffect } from 'react';
import '../CSS/Commitment.css';

export default function Commitment() {
  const [committedUsers, setCommittedUsers] = useState(1247);
  const [userCommitment, setUserCommitment] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setCommittedUsers(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  const handleCommit = (e) => {
    e.preventDefault();
    if (email && !userCommitment) {
      setUserCommitment(true);
      setCommittedUsers(prev => prev + 1);
      
      // Store commitment in localStorage for persistence
      localStorage.setItem('userCommitted', 'true');
      localStorage.setItem('commitEmail', email);
    }
  };

  useEffect(() => {
    const hasCommitted = localStorage.getItem('userCommitted');
    const savedEmail = localStorage.getItem('commitEmail');
    if (hasCommitted === 'true' && savedEmail) {
      setUserCommitment(true);
      setEmail(savedEmail);
    }
  }, []);

  return (
    <section className="commitment-section">
      <div className="commitment-header">
        <h2>Join 1,247+ Smart Car Buyers Who Committed to Better Deals</h2>
        <p>Get exclusive access to flash sales and priority customer support when you commit to finding your dream car with us.</p>
      </div>

      <div className="commitment-container">
        <div className="commitment-benefits">
          <div className="benefit-card">
            <div className="benefit-icon">🎯</div>
            <h3>Priority Access</h3>
            <p>Be the first to know about new listings and limited-time offers before anyone else.</p>
          </div>
          
          <div className="benefit-card">
            <div className="benefit-icon">💎</div>
            <h3>Exclusive Deals</h3>
            <p>Get access to member-only discounts and special pricing not available to the public.</p>
          </div>
          
          <div className="benefit-card">
            <div className="benefit-icon">🚀</div>
            <h3>Fast Support</h3>
            <p>Priority customer service with guaranteed response times under 2 hours.</p>
          </div>
        </div>

        <div className="commitment-form-container">
          <div className="commitment-stats">
            <div className="stat-circle">
              <span className="big-number">{committedUsers.toLocaleString()}</span>
              <span className="stat-label">Committed Buyers</span>
            </div>
            <div className="commitment-message">
              <span className="pulse-text">🔥 People are committing right now!</span>
            </div>
          </div>

          {!userCommitment ? (
            <form onSubmit={handleCommit} className="commitment-form">
              <div className="form-header">
                <h4>Make Your Free Commitment Today</h4>
                <p>No credit card required • Cancel anytime • Instant benefits</p>
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="commitment-input"
                />
                <button type="submit" className="commitment-button">
                  <span className="button-main-text">Commit Now</span>
                  <span className="button-subtext">Get Instant Access</span>
                </button>
              </div>
              
              <div className="trust-elements">
                <div className="trust-item">
                  <span className="check-icon">✓</span>
                  <span>100% Free - No Hidden Fees</span>
                </div>
                <div className="trust-item">
                  <span className="check-icon">✓</span>
                  <span>Unsubscribe Anytime</span>
                </div>
                <div className="trust-item">
                  <span className="check-icon">✓</span>
                  <span>Join 1,247+ Smart Buyers</span>
                </div>
              </div>
            </form>
          ) : (
            <div className="commitment-success">
              <div className="success-icon">🎉</div>
              <h3>Welcome to the Exclusive Club!</h3>
              <p>You're now committed to getting the best car deals. Check your email for exclusive offers and priority access.</p>
              <div className="success-badges">
                <span className="badge">Priority Member</span>
                <span className="badge">Flash Sale Access</span>
                <span className="badge">Fast Support</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="social-proof-ticker">
        <div className="ticker-content">
          <span>🚗 John M. just saved KES 250,000 • </span>
          <span>🚗 Sarah K. committed 2 minutes ago • </span>
          <span>🚗 Michael T. bought a Toyota Land Cruiser • </span>
          <span>🚗 47 people viewing deals right now • </span>
          <span>🚗 Grace W. saved KES 180,000 yesterday • </span>
        </div>
      </div>
    </section>
  );
}

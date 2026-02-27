import React, { useEffect, useState } from "react";
import '../CSS/Choose.css';

export default function Choose() {
  const [reasons, setReasons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReasons = async () => {
      try {
        const res = await fetch(`${import.meta.env.BASE_URL}data/choose.json`);
        if (!res.ok) throw new Error("Failed to load data");

        const data = await res.json();
        setReasons(data.reasons || []);
      } catch (err) {
        console.error(err);
        setError("Could not load content");
      } finally {
        setLoading(false);
      }
    };

    fetchReasons();
  }, []);

  // SCROLL ANIMATION (IntersectionObserver)
  useEffect(() => {
    const cards = document.querySelectorAll(".choose-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [reasons]);

  if (loading) return <p className="choose-loading">Loading content...</p>;
  if (error) return <p className="choose-error">{error}</p>;

  return (
    <section className="choose-container">
      <h2>Why Choose Us</h2>

      <div className="choose-grid">
        {reasons.map((item, index) => (
          <div key={index} className="choose-card">
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
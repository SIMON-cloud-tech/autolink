import React, { useEffect, useState } from "react";
import "../CSS/Works.css";

export default function How() {
  const [items, setItems] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const res = await fetch(`${import.meta.env.BASE_URL}data/works.json`);
        if (!res.ok) throw new Error("Failed to load data");

        const data = await res.json();
        setItems(data.how || []);
      } catch (err) {
        console.error(err);
        setError("Could not load content");
      } finally {
        setLoading(false);
      }
    };

    fetchWorks();
  }, []);

  const visibleData = showAll ? items : items.slice(0,3);

  if (loading) return <p className="works-loading">Loading...</p>;
  if (error) return <p className="works-error">{error}</p>;

  return (
    <section className="why">
      <h2>How It Works</h2>

      <div className="show-more">
        <button onClick={()=> setShowAll(prev => !prev)}>
            {showAll ? "Show Less" : "Show More"}
        </button>
        </div>

      <div className="how-grid">
        {visibleData.map((item, index) => (
          <div key={index} className="item-card">
            <div className="icon">{item.icon}</div>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
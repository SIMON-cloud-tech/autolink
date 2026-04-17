import { useEffect, useState } from "react";
import '../CSS/Shop.css';

export default function Shop(){
    const [searchQuery, setSearchQuery] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showAll, setShowAll] = useState(false);
    const [cars, setCars] = useState([]);
    const [viewers, setViewers] = useState({});
    const [salesData, setSalesData] = useState({});

    const phone = import.meta.env.VITE_WHATSAPP_NUMBER;

    useEffect(()=> {
    
        const fetchCars = async ()=> {
            try{
                const res = await fetch(`${import.meta.env.BASE_URL}data/cars.json`);
                if(!res.ok) throw new Error("Failed to load data");
                const data = await res.json();
                setCars(data.cars || []);
                
                // Initialize realistic viewer counts and sales data for each car
                const initialViewers = {};
                const salesData = {};
                data.cars?.forEach((car, index) => {
                    // Realistic viewer counts based on car type and price
                    const baseViewers = car.price > 2000000 ? 15 : 8;
                    initialViewers[index] = baseViewers + Math.floor(Math.random() * 10);
                    
                    // Realistic and varied sales data
                    const salesRanges = {
                        'Toyota': { min: 12, max: 28 },
                        'Honda': { min: 8, max: 19 },
                        'Nissan': { min: 6, max: 15 },
                        'Mitsubishi': { min: 4, max: 11 },
                        'Subaru': { min: 3, max: 9 },
                        'default': { min: 2, max: 7 }
                    };
                    
                    const carBrand = car.name.split(' ')[0];
                    const range = salesRanges[carBrand] || salesRanges['default'];
                    salesData[index] = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
                });
                setViewers(initialViewers);
                setSalesData(salesData);
            } catch(err){
                console.error(err);
            setError("Could not load cars");
        } finally{
            setLoading(false);
        }
    }
    fetchCars();
    
    // Simulate realistic viewer count changes
    const viewerInterval = setInterval(() => {
        setViewers(prev => {
            const updated = { ...prev };
            Object.keys(updated).forEach(key => {
                const change = Math.random() > 0.5 ? 1 : -1;
                updated[key] = Math.max(1, updated[key] + change);
            });
            return updated;
        });
    }, 7000);
    
    return () => clearInterval(viewerInterval);
    }, []);

    const filtered = cars.filter((c)=> c.name.toLowerCase().includes(searchQuery.toLowerCase()) 
    || c.model.toLowerCase().includes(searchQuery.toLowerCase())
    || c.price.toString().includes(searchQuery));


    const visibleData = showAll ? filtered : filtered.slice(0, 3);

     const openWhatsApp = (car) => {
    if(!phone) return;

    const message = encodeURIComponent(
        `Hello, I am interested in buying ${car.name} at ${car.price}`
    );

    const url = `https://wa.me/${phone}?text=${message}`;
    window.open(url, "_blank");
  };

    if(loading){
        return(
            <div className="spinner-container">
                <div className="spinner">
                    <div></div>
                    <div></div>
                    <div></div>
                    </div>
                    <p>Loading cars...</p>
            </div>
        )
    }

    if(error){
        return(
            <p className="error">{error}</p>
        )
    }

    return(
        <section className="shop-container">
            <div className="shop-header">
                <h2>AutoLink Car Marketplace</h2>
                <p>Find your dream car and contact the seller directly</p>
            </div>

            <div className="search">
                <input type="text" value={searchQuery} 
                onChange={(e)=> setSearchQuery(e.target.value)}
                placeholder="Search vehicles here by name, price and model" />
            </div>

            <div className="show-more">
                <button onClick={()=> setShowAll(prev=> !prev)}>
                    {showAll ? "Show Less" : "Show More"}
                </button>
            </div>

            <div className="shop-grid">
                {visibleData.map((c, index)=> (
                    <div key={index} className="shop-card animate">
                        <div className="card-header">
                            <div className="viewer-count">
                                <span className="eye-icon">👁</span>
                                <span>{viewers[index] || 12} viewing now</span>
                            </div>
                            <div className="urgency-badge">
                                <span className="pulse-dot-small"></span>
                                <span>HOT DEAL</span>
                            </div>
                        </div>
                        
                        <div className="image-container">
                            <img src={`${import.meta.env.BASE_URL}${c.image.replace(/^\/+/, "")}`} alt={c.name} />
                            <div className="scarcity-overlay">
                                <span className="savings-tag">Save KES {(c.price * 0.15).toLocaleString()}</span>
                            </div>
                        </div>
                        
                        <div className="card-content">
                            <h3>{c.name}</h3>
                            <p>{c.description}</p>
                            
                            <div className="price-section">
                                <div className="price-wrapper">
                                    <span className="original-price">KES {(Number(c.price) * 1.2).toLocaleString()}</span>
                                    <span className="current-price">
                                        KES {Number(c.price).toLocaleString()}
                                    </span>
                                    <span className="discount-badge">20% OFF</span>
                                </div>
                            </div>
                            
                            <div className="social-proof-mini">
                                <span className="rating">★★★★★ 4.8</span>
                                <span className="sold-count">{salesData[index] || 5} sold this week</span>
                            </div>
                            
                            <div className="loss-aversion">
                                <span className="warning-text">⚠️ Only 2 left at this price!</span>
                            </div>
                            
                            <button onClick={() => openWhatsApp(c)} className="buy-button">
                                <span className="button-text">Buy Now Before Price Increases</span>
                                <span className="button-urgency">🔥 Deal ends in 2:47:12</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}
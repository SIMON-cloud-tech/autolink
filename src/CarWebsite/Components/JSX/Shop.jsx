import { useEffect, useState } from "react";
import '../CSS/Shop.css';

export default function Shop(){
    const [searchQuery, setSearchQuery] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showAll, setShowAll] = useState(false);
    const [cars, setCars] = useState([]);

    const phone = import.meta.env.VITE_WHATSAPP_NUMBER;

    useEffect(()=> {
    
        const fetchCars = async ()=> {
            try{
                const res = await fetch("/data/cars.json");
                if(!res.ok) throw new Error("Failed to load data");
                const data = await res.json();
                setCars(data.cars || []);
            } catch(err){
                console.error(err);
            setError("Could not load cars");
        } finally{
            setLoading(false);
        }
    }
    fetchCars();
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
                        <img src={c.image} alt={c.name} />
                        <h3>{c.name}</h3>
                        <p>{c.description}</p>
                        <small className="price">
                            KES {Number(c.price).toLocaleString()}
                        </small>
                        <button onClick={() => openWhatsApp(c)}>Buy now via WhatsApp</button>
                    </div>
                ))}
            </div>

        </section>
    )
}
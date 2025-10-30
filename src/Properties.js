import React from "react";
import "./Properties.css";

const Properties = () => {
  const listings = [
    {
      id: 1,
      title: "Modern Downtown Apartment",
      location: "New York, USA",
      rating: "4.8",
      price: "$210/night",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Luxury Hotel Suite",
      location: "Paris, France",
      rating: "4.9",
      price: "$270/night",
      image:
        "https://images.unsplash.com/photo-1600585153835-cf54dcf00b3d?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Cozy Mountain Retreat",
      location: "Aspen, USA",
      rating: "4.7",
      price: "$190/night",
      image:
        "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "Minimalist Living Space",
      location: "Tokyo, Japan",
      rating: "4.8",
      price: "$230/night",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      title: "Scandinavian Style Studio",
      location: "Copenhagen, Denmark",
      rating: "4.9",
      price: "$260/night",
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      title: "Urban Loft Experience",
      location: "Toronto, Canada",
      rating: "4.7",
      price: "$240/night",
      image:
        "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 7,
      title: "Beachfront Villa Escape",
      location: "Malibu, USA",
      rating: "5.0",
      price: "$420/night",
      image:
        "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 8,
      title: "Rustic Countryside Cabin",
      location: "Zurich, Switzerland",
      rating: "4.6",
      price: "$180/night",
      image:
        "https://images.unsplash.com/photo-1616627987554-8a6a9d2a7b75?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 9,
      title: "Tropical Ocean Bungalow",
      location: "Bali, Indonesia",
      rating: "4.9",
      price: "$320/night",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 10,
      title: "Classic Heritage Mansion",
      location: "Rome, Italy",
      rating: "4.8",
      price: "$350/night",
      image:
        "https://images.unsplash.com/photo-1600585153863-6afc8249c0f3?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="properties-section">
      <div className="properties-header">
        <p className="collection-tag">🏆 Premium Collection</p>
        <h2>
          Curated <span>Properties</span>
        </h2>
        <p className="subtitle">
          Discover our exclusive collection of premium accommodations,
          meticulously selected for exceptional quality and character.
        </p>
      </div>

      <div className="properties-stats">
        <div className="stat-box">
          <h3>10+</h3>
          <p>Properties</p>
        </div>
        <div className="stat-box">
          <h3>50+</h3>
          <p>Global Cities</p>
        </div>
        <div className="stat-box">
          <h3>4.9★</h3>
          <p>Avg Rating</p>
        </div>
        <div className="stat-box">
          <h3>24/7</h3>
          <p>Support</p>
        </div>
      </div>

      <div className="property-grid">
        {listings.map((item) => (
          <div key={item.id} className="property-card">
            <img src={item.image} alt={item.title} />
            <div className="property-info">
              <h4>{item.title}</h4>
              <p>{item.location}</p>
              <div className="property-meta">
                <span>⭐ {item.rating}</span>
                <span>{item.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="explore-more">
        <button className="explore-btn">Load More Properties</button>
      </div>
    </section>
  );
};

export default Properties;

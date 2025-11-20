import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaHeart, FaMapMarkerAlt } from 'react-icons/fa';
import './HomestayCard.css';

function HomestayCard({ homestay }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <Link to={`/homestay/${homestay.id}`} className="homestay-card">
      <div className="card-image">
        <img 
          src={homestay.image} 
          alt={homestay.name}
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400';
          }}
        />
        <button 
          className={`favorite-btn ${isFavorite ? 'favorited' : ''}`}
          onClick={toggleFavorite}
        >
          <FaHeart />
        </button>
        {homestay.isFeatured && (
          <div className="featured-badge">Nổi bật</div>
        )}
      </div>
      
      <div className="card-content">
        <div className="card-header">
          <h3 className="card-title">{homestay.name}</h3>
          <div className="rating">
            <FaStar className="star-icon" />
            <span className="rating-value">{homestay.rating}</span>
          </div>
        </div>
        
        <div className="card-location">
          <FaMapMarkerAlt className="location-icon" />
          <span>{homestay.location}</span>
        </div>
        
        <div className="card-details">
          <span>{homestay.guests} khách</span>
          <span>•</span>
          <span>{homestay.bedrooms} phòng ngủ</span>
          <span>•</span>
          <span>{homestay.bathrooms} phòng tắm</span>
        </div>
        
        <div className="card-amenities">
          {homestay.amenities?.slice(0, 3).map((amenity, index) => (
            <span key={index} className="amenity-tag">{amenity}</span>
          ))}
          {homestay.amenities?.length > 3 && (
            <span className="amenity-more">+{homestay.amenities.length - 3} more</span>
          )}
        </div>
        
        <div className="card-footer">
          <div className="price-section">
            <span className="price">{homestay.price.toLocaleString()} VND</span>
            <span className="price-period">/ đêm</span>
          </div>
          {homestay.discount && (
            <div className="discount-badge">-{homestay.discount}%</div>
          )}
        </div>
      </div>
    </Link>
  );
}

export default HomestayCard;
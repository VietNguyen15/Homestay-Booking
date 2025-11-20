import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaStar, FaUmbrellaBeach, FaMountain, FaCity, FaTree } from 'react-icons/fa';
import '../../styles/HomePage.css';

function HomePage() {
  const [searchData, setSearchData] = useState({
    location: '',
    checkIn: '',
    checkOut: '',
    guests: 1
  });
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const queryParams = new URLSearchParams({
      location: searchData.location,
      guests: searchData.guests
    }).toString();
    navigate(`/homestays?${queryParams}`);
  };

  const categories = [
    { icon: <FaUmbrellaBeach />, name: 'Biển', count: '123 homestay' },
    { icon: <FaMountain />, name: 'Núi', count: '89 homestay' },
    { icon: <FaCity />, name: 'Thành phố', count: '156 homestay' },
    { icon: <FaTree />, name: 'Nông thôn', count: '67 homestay' }
  ];

  const featuredHomestays = [
    {
      id: 1,
      name: 'Biệt thự biển Sầm Sơn',
      location: 'Sầm Sơn, Thanh Hóa',
      price: '1,500,000',
      rating: 4.8,
      reviews: 124,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400'
    },
    {
      id: 2,
      name: 'Homestay Đà Lạt View',
      location: 'Đà Lạt, Lâm Đồng',
      price: '800,000',
      rating: 4.9,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=400'
    },
    {
      id: 3,
      name: 'Căn hộ Quận 1',
      location: 'Quận 1, TP.HCM',
      price: '600,000',
      rating: 4.7,
      reviews: 203,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400'
    }
  ];

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="hero-overlay">
            <div className="container">
              <div className="hero-content">
                <h1 className="hero-title">
                  Tìm homestay tuyệt vời cho kỳ nghỉ của bạn
                </h1>
                <p className="hero-subtitle">
                  Khám phá những địa điểm độc đáo để ở tại các địa phương trên khắp Việt Nam
                </p>
                
                {/* Search Form */}
                <form onSubmit={handleSearch} className="hero-search-form">
                  <div className="search-fields">
                    <div className="form-group">
                      <label>Địa điểm</label>
                      <input
                        type="text"
                        placeholder="Bạn muốn đi đâu?"
                        value={searchData.location}
                        onChange={(e) => setSearchData({...searchData, location: e.target.value})}
                      />
                    </div>
                    
                    <div className="form-group">
                      <label>Nhận phòng</label>
                      <input
                        type="date"
                        value={searchData.checkIn}
                        onChange={(e) => setSearchData({...searchData, checkIn: e.target.value})}
                      />
                    </div>
                    
                    <div className="form-group">
                      <label>Trả phòng</label>
                      <input
                        type="date"
                        value={searchData.checkOut}
                        onChange={(e) => setSearchData({...searchData, checkOut: e.target.value})}
                      />
                    </div>
                    
                    <div className="form-group">
                      <label>Khách</label>
                      <select
                        value={searchData.guests}
                        onChange={(e) => setSearchData({...searchData, guests: e.target.value})}
                      >
                        {[1,2,3,4,5,6].map(num => (
                          <option key={num} value={num}>{num} khách</option>
                        ))}
                      </select>
                    </div>
                    
                    <button type="submit" className="search-submit-btn">
                      <FaSearch />
                      Tìm kiếm
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="container">
          <h2 className="section-title">Khám phá theo loại</h2>
          <div className="categories-grid">
            {categories.map((category, index) => (
              <div key={index} className="category-card">
                <div className="category-icon">
                  {category.icon}
                </div>
                <div className="category-info">
                  <h3>{category.name}</h3>
                  <p>{category.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Homestays */}
      <section className="featured-section">
        <div className="container">
          <h2 className="section-title">Homestay nổi bật</h2>
          <div className="featured-grid">
            {featuredHomestays.map(homestay => (
              <div key={homestay.id} className="featured-card">
                <div className="featured-image">
                  <img src={homestay.image} alt={homestay.name} />
                  <button className="favorite-btn">❤</button>
                </div>
                <div className="featured-content">
                  <h3>{homestay.name}</h3>
                  <p className="location">{homestay.location}</p>
                  <div className="rating">
                    <FaStar className="star" />
                    <span>{homestay.rating}</span>
                    <span className="reviews">({homestay.reviews})</span>
                  </div>
                  <p className="price">{homestay.price} VND/đêm</p>
                </div>
              </div>
            ))}
          </div>
          <div className="section-actions">
            <button 
              className="btn btn-secondary"
              onClick={() => navigate('/homestays')}
            >
              Xem tất cả homestay
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
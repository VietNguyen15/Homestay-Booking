import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/homestays?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="logo">
            <span className="logo-icon">🏠</span>
            HomestayBooking
          </Link>

          {/* Search Bar - Desktop */}
          <div className="search-bar-desktop">
            <form onSubmit={handleSearch} className="search-form">
              <div className="search-input-group">
                <input
                  type="text"
                  placeholder="Tìm kiếm homestay..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                />
                <button type="submit" className="search-btn">
                  <FaSearch />
                </button>
              </div>
            </form>
          </div>

          {/* Navigation */}
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <Link to="/homestays" className="nav-link">Khám phá</Link>
            <Link to="/profile" className="nav-link">Yêu thích</Link>
            <Link to="/login" className="nav-link">
              <FaUser className="user-icon" />
              Đăng nhập
            </Link>
            <Link to="/register" className="nav-link btn btn-primary">
              Đăng ký
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Search Bar - Mobile */}
        <div className="search-bar-mobile">
          <form onSubmit={handleSearch} className="search-form">
            <div className="search-input-group">
              <input
                type="text"
                placeholder="Tìm kiếm homestay..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <button type="submit" className="search-btn">
                <FaSearch />
              </button>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
}

export default Header;
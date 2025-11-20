import React from 'react';
import { FaTimes } from 'react-icons/fa';
import './FilterSidebar.css';

function FilterSidebar({ filters, onFilterChange, onClose }) {
  const handlePriceChange = (min, max) => {
    onFilterChange({
      ...filters,
      priceRange: [min, max]
    });
  };

  const handleGuestsChange = (guests) => {
    onFilterChange({
      ...filters,
      guests
    });
  };

  const handleBedroomsChange = (bedrooms) => {
    onFilterChange({
      ...filters,
      bedrooms
    });
  };

  const handleBathroomsChange = (bathrooms) => {
    onFilterChange({
      ...filters,
      bathrooms
    });
  };

  const priceRanges = [
    { label: 'Tất cả', min: 0, max: 5000000 },
    { label: 'Dưới 500K', min: 0, max: 500000 },
    { label: '500K - 1 triệu', min: 500000, max: 1000000 },
    { label: '1 - 2 triệu', min: 1000000, max: 2000000 },
    { label: 'Trên 2 triệu', min: 2000000, max: 5000000 }
  ];

  return (
    <div className="filter-sidebar">
      {/* Mobile Header */}
      {onClose && (
        <div className="filter-header-mobile">
          <h3>Bộ lọc</h3>
          <button className="close-btn" onClick={onClose}>
            <FaTimes />
          </button>
        </div>
      )}

      <div className="filter-content">
        {/* Price Range */}
        <div className="filter-section">
          <h4 className="filter-title">Khoảng giá</h4>
          <div className="price-options">
            {priceRanges.map((range, index) => (
              <button
                key={index}
                className={`price-option ${
                  filters.priceRange[0] === range.min && 
                  filters.priceRange[1] === range.max ? 'active' : ''
                }`}
                onClick={() => handlePriceChange(range.min, range.max)}
              >
                {range.label}
              </button>
            ))}
          </div>
        </div>

        {/* Guests */}
        <div className="filter-section">
          <h4 className="filter-title">Số khách</h4>
          <div className="number-options">
            {[1, 2, 3, 4, 5, 6].map(num => (
              <button
                key={num}
                className={`number-option ${
                  filters.guests === num ? 'active' : ''
                }`}
                onClick={() => handleGuestsChange(num)}
              >
                {num}+
              </button>
            ))}
          </div>
        </div>

        {/* Bedrooms */}
        <div className="filter-section">
          <h4 className="filter-title">Phòng ngủ</h4>
          <div className="number-options">
            <button
              className={`number-option ${
                filters.bedrooms === 0 ? 'active' : ''
              }`}
              onClick={() => handleBedroomsChange(0)}
            >
              Bất kỳ
            </button>
            {[1, 2, 3, 4].map(num => (
              <button
                key={num}
                className={`number-option ${
                  filters.bedrooms === num ? 'active' : ''
                }`}
                onClick={() => handleBedroomsChange(num)}
              >
                {num}+
              </button>
            ))}
          </div>
        </div>

        {/* Bathrooms */}
        <div className="filter-section">
          <h4 className="filter-title">Phòng tắm</h4>
          <div className="number-options">
            <button
              className={`number-option ${
                filters.bathrooms === 0 ? 'active' : ''
              }`}
              onClick={() => handleBathroomsChange(0)}
            >
              Bất kỳ
            </button>
            {[1, 2, 3].map(num => (
              <button
                key={num}
                className={`number-option ${
                  filters.bathrooms === num ? 'active' : ''
                }`}
                onClick={() => handleBathroomsChange(num)}
              >
                {num}+
              </button>
            ))}
          </div>
        </div>

        {/* Reset Filters */}
        <div className="filter-actions">
          <button 
            className="btn btn-secondary full-width"
            onClick={() => onFilterChange({
              priceRange: [0, 5000000],
              guests: 1,
              bedrooms: 0,
              bathrooms: 0,
              amenities: [],
              category: ''
            })}
          >
            Đặt lại bộ lọc
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterSidebar;
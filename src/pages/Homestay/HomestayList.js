import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import HomestayCard from '../../components/HomestayCard/HomestayCard';
import FilterSidebar from '../../components/FilterSideBar/FilterSidebar';
import { FaFilter, FaTimes, FaSort, FaSearch } from 'react-icons/fa';
import '../../styles/HomestayList.css';

function HomestayList() {
  const [homestays, setHomestays] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState('popular');
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    priceRange: [0, 5000000],
    guests: 1,
    bedrooms: 0,
    bathrooms: 0,
    amenities: [],
    category: ''
  });

  // Mock data với nhiều homestay hơn
  const mockHomestays = [
    {
      id: 1,
      name: 'Biệt thự biển Sầm Sơn view cực đẹp',
      location: 'Sầm Sơn, Thanh Hóa',
      price: 1500000,
      rating: 4.8,
      guests: 8,
      bedrooms: 4,
      bathrooms: 3,
      amenities: ['Wifi', 'Hồ bơi', 'Bếp', 'Máy lạnh', 'TV', 'Máy giặt'],
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400',
      isFeatured: true,
      discount: 10
    },
    {
      id: 2,
      name: 'Homestay Đà Lạt View Mountain',
      location: 'Đà Lạt, Lâm Đồng',
      price: 800000,
      rating: 4.9,
      guests: 4,
      bedrooms: 2,
      bathrooms: 2,
      amenities: ['Wifi', 'Lò sưởi', 'Bếp', 'Ban công', 'Máy lạnh'],
      image: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=400',
      isFeatured: true
    },
    {
      id: 3,
      name: 'Căn hộ cao cấp Quận 1',
      location: 'Quận 1, TP.HCM',
      price: 600000,
      rating: 4.7,
      guests: 4,
      bedrooms: 2,
      bathrooms: 1,
      amenities: ['Wifi', 'Máy giặt', 'Máy lạnh', 'TV', 'Bếp'],
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400'
    },
    {
      id: 4,
      name: 'Nhà vườn Ba Vì yên bình',
      location: 'Ba Vì, Hà Nội',
      price: 1200000,
      rating: 4.6,
      guests: 6,
      bedrooms: 3,
      bathrooms: 2,
      amenities: ['Vườn', 'BBQ', 'Bếp', 'Xe đạp miễn phí', 'Wifi'],
      image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=400',
      discount: 15
    },
    {
      id: 5,
      name: 'Studio gần biển Nha Trang',
      location: 'Nha Trang, Khánh Hòa',
      price: 500000,
      rating: 4.5,
      guests: 2,
      bedrooms: 1,
      bathrooms: 1,
      amenities: ['Wifi', 'Máy lạnh', 'Ban công', 'TV'],
      image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=400'
    },
    {
      id: 6,
      name: 'Biệt thự hồ bơi Phú Quốc',
      location: 'Phú Quốc, Kiên Giang',
      price: 2500000,
      rating: 4.9,
      guests: 10,
      bedrooms: 5,
      bathrooms: 4,
      amenities: ['Hồ bơi', 'Wifi', 'Bếp', 'BBQ', 'Máy giặt', 'TV'],
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400',
      isFeatured: true
    },
    {
      id: 7,
      name: 'Chalet Mộc Châu view đồi chè',
      location: 'Mộc Châu, Sơn La',
      price: 900000,
      rating: 4.7,
      guests: 4,
      bedrooms: 2,
      bathrooms: 2,
      amenities: ['Lò sưởi', 'Wifi', 'Bếp', 'Ban công', 'View núi'],
      image: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=400'
    },
    {
      id: 8,
      name: 'Căn hộ mini Hai Bà Trưng',
      location: 'Hai Bà Trưng, Hà Nội',
      price: 450000,
      rating: 4.4,
      guests: 2,
      bedrooms: 1,
      bathrooms: 1,
      amenities: ['Wifi', 'Máy lạnh', 'Máy giặt', 'Bếp'],
      image: 'https://images.unsplash.com/photo-1521783988139-aa2131482f57?w=400'
    }
  ];

  useEffect(() => {
    // Simulate API call
    const fetchHomestays = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Filter by search query
      let filtered = mockHomestays;
      const locationQuery = searchParams.get('location');
      if (locationQuery) {
        filtered = filtered.filter(h => 
          h.location.toLowerCase().includes(locationQuery.toLowerCase()) ||
          h.name.toLowerCase().includes(locationQuery.toLowerCase())
        );
      }
      
      setHomestays(filtered);
      setLoading(false);
    };

    fetchHomestays();
  }, [searchParams]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchParams({ location: searchQuery });
    }
  };

  const filteredHomestays = homestays.filter(homestay => {
    return homestay.price >= filters.priceRange[0] && 
           homestay.price <= filters.priceRange[1] &&
           homestay.guests >= filters.guests &&
           (filters.bedrooms === 0 || homestay.bedrooms >= filters.bedrooms) &&
           (filters.bathrooms === 0 || homestay.bathrooms >= filters.bathrooms);
  });

  const sortedHomestays = [...filteredHomestays].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'popular':
      default:
        return b.rating - a.rating;
    }
  });

  const searchLocation = searchParams.get('location');

  return (
    <div className="homestay-list-page">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <div className="header-content">
            <h1 className="page-title">
              {searchLocation ? `Homestay tại ${searchLocation}` : 'Tất cả homestay'}
            </h1>
            <p className="page-subtitle">
              {sortedHomestays.length} homestay được tìm thấy
              {searchLocation && ` • Tìm kiếm: "${searchLocation}"`}
            </p>
          </div>
          
          <div className="header-actions">
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="search-form">
              <div className="search-input-group">
                <input
                  type="text"
                  placeholder="Tìm thành phố, địa điểm..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-btn">
                  <FaSearch />
                </button>
              </div>
            </form>

            {/* Sort Dropdown */}
            <div className="sort-dropdown">
              <FaSort className="sort-icon" />
              <select value={sortBy} onChange={handleSortChange}>
                <option value="popular">Phổ biến nhất</option>
                <option value="rating">Đánh giá cao nhất</option>
                <option value="price-low">Giá: Thấp đến cao</option>
                <option value="price-high">Giá: Cao đến thấp</option>
              </select>
            </div>

            {/* Filter Toggle Button */}
            <button 
              className="filter-toggle-btn"
              onClick={() => setShowFilters(!showFilters)}
            >
              {showFilters ? <FaTimes /> : <FaFilter />}
              Bộ lọc
            </button>
          </div>
        </div>

        <div className="page-content">
          {/* Filter Sidebar */}
          {showFilters && (
            <div className="filter-sidebar-mobile">
              <FilterSidebar 
                filters={filters}
                onFilterChange={handleFilterChange}
                onClose={() => setShowFilters(false)}
              />
            </div>
          )}

          <div className="filter-sidebar-desktop">
            <FilterSidebar 
              filters={filters}
              onFilterChange={handleFilterChange}
            />
          </div>

          {/* Homestay Grid */}
          <div className="homestay-grid-section">
            {loading ? (
              <div className="loading-grid">
                {[1, 2, 3, 4, 5, 6].map(i => (
                  <div key={i} className="homestay-card-skeleton">
                    <div className="skeleton-image"></div>
                    <div className="skeleton-content">
                      <div className="skeleton-line short"></div>
                      <div className="skeleton-line medium"></div>
                      <div className="skeleton-line long"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : sortedHomestays.length > 0 ? (
              <>
                <div className="homestay-grid">
                  {sortedHomestays.map(homestay => (
                    <HomestayCard key={homestay.id} homestay={homestay} />
                  ))}
                </div>
                
                {/* Load More */}
                <div className="load-more-section">
                  <button className="btn btn-secondary">
                    Xem thêm homestay
                  </button>
                </div>
              </>
            ) : (
              <div className="no-results">
                <div className="no-results-content">
                  <h3>Không tìm thấy homestay phù hợp</h3>
                  <p>Hãy thử điều chỉnh bộ lọc hoặc tìm kiếm với từ khóa khác</p>
                  <div className="no-results-actions">
                    <button 
                      className="btn btn-primary"
                      onClick={() => {
                        setFilters({
                          priceRange: [0, 5000000],
                          guests: 1,
                          bedrooms: 0,
                          bathrooms: 0,
                          amenities: [],
                          category: ''
                        });
                        setSearchQuery('');
                        setSearchParams({});
                      }}
                    >
                      Đặt lại bộ lọc
                    </button>
                    <Link to="/" className="btn btn-secondary">
                      Về trang chủ
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomestayList;
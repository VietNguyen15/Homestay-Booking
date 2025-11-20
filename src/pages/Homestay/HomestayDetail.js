import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaStar, FaHeart, FaMapMarkerAlt, FaShare, FaBed, FaBath, FaUserFriends, FaWifi, FaSwimmingPool, FaCar, FaUtensils, FaTv, FaWind, FaPaw } from 'react-icons/fa';
import '../../styles/HomestayDetail.css';

function HomestayDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1
  });

  // Mock data - sau này sẽ fetch từ API
  const homestay = {
    id: 1,
    name: 'Biệt thự biển Sầm Sơn view cực đẹp',
    location: 'Sầm Sơn, Thanh Hóa',
    price: 1500000,
    rating: 4.8,
    reviews: 124,
    host: {
      name: 'Nguyễn Văn A',
      joined: '2022',
      verified: true,
      responseRate: 98,
      responseTime: 'trong vòng 1 giờ'
    },
    description: `Biệt thự sang trọng với view biển tuyệt đẹp, chỉ cách biển 100m. Không gian rộng rãi, đầy đủ tiện nghi, phù hợp cho gia đình và nhóm bạn.
    
• View biển cực đẹp từ phòng ngủ và phòng khách
• Hồ bơi riêng, vườn cây xanh mát
• Bếp đầy đủ dụng cụ, có thể nấu nướng
• Chỗ đỗ xe rộng rãi
• Gần các điểm du lịch, nhà hàng, siêu thị`,
    
    guests: 8,
    bedrooms: 4,
    bathrooms: 3,
    beds: 5,
    
    amenities: [
      { icon: <FaWifi />, name: 'Wifi', category: 'Tiện nghi cơ bản' },
      { icon: <FaSwimmingPool />, name: 'Hồ bơi', category: 'Tiện nghi giải trí' },
      { icon: <FaCar />, name: 'Bãi đỗ xe', category: 'Tiện nghi cơ bản' },
      { icon: <FaUtensils />, name: 'Bếp', category: 'Tiện nghi bếp' },
      { icon: <FaWind />, name: 'Máy lạnh', category: 'Tiện nghi cơ bản' },
      { icon: <FaTv />, name: 'TV', category: 'Tiện nghi giải trí' },
      { icon: <FaPaw />, name: 'Thú cưng', category: 'Quy tắc' }
    ],
    
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800',
      'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800'
    ],
    
    rules: {
      checkIn: '14:00 - 22:00',
      checkOut: '12:00',
      smoking: false,
      pets: true,
      parties: false,
      children: true
    }
  };

  const reviews = [
    {
      id: 1,
      user: 'Trần Thị B',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100',
      rating: 5,
      date: '2024-01-15',
      comment: 'Homestay tuyệt vời! View biển đẹp, chủ nhà nhiệt tình. Sẽ quay lại!'
    },
    {
      id: 2,
      user: 'Lê Văn C',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
      rating: 4,
      date: '2024-01-10',
      comment: 'Không gian rộng rãi, sạch sẽ. Vị trí thuận tiện, đi bộ ra biển rất gần.'
    }
  ];

  const handleBooking = (e) => {
    e.preventDefault();
    if (!bookingData.checkIn || !bookingData.checkOut) {
      alert('Vui lòng chọn ngày nhận phòng và trả phòng');
      return;
    }
    // Navigate to booking page or show booking modal
    alert('Chức năng đặt phòng sẽ được triển khai!');
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const calculateTotal = () => {
    if (!bookingData.checkIn || !bookingData.checkOut) return 0;
    const nights = Math.ceil((new Date(bookingData.checkOut) - new Date(bookingData.checkIn)) / (1000 * 60 * 60 * 24));
    return homestay.price * nights;
  };

  return (
    <div className="homestay-detail">
      <div className="container">
        {/* Image Gallery */}
        <div className="image-gallery">
          <div className="main-image">
            <img 
              src={homestay.images[selectedImage]} 
              alt={homestay.name}
            />
          </div>
          <div className="thumbnail-images">
            {homestay.images.map((image, index) => (
              <button
                key={index}
                className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                onClick={() => setSelectedImage(index)}
              >
                <img src={image} alt={`${homestay.name} ${index + 1}`} />
              </button>
            ))}
          </div>
        </div>

        <div className="detail-content">
          {/* Main Content */}
          <div className="main-content">
            {/* Header */}
            <div className="detail-header">
              <div>
                <h1 className="homestay-title">{homestay.name}</h1>
                <div className="location">
                  <FaMapMarkerAlt />
                  <span>{homestay.location}</span>
                </div>
              </div>
              <div className="header-actions">
                <button className="icon-btn" onClick={toggleFavorite}>
                  <FaHeart className={isFavorite ? 'favorited' : ''} />
                </button>
                <button className="icon-btn">
                  <FaShare />
                </button>
              </div>
            </div>

            {/* Basic Info */}
            <div className="basic-info">
              <div className="rating-info">
                <FaStar className="star" />
                <span className="rating">{homestay.rating}</span>
                <span className="reviews">({homestay.reviews} đánh giá)</span>
              </div>
              <div className="detail-stats">
                <span>{homestay.guests} khách</span>
                <span>•</span>
                <span>{homestay.bedrooms} phòng ngủ</span>
                <span>•</span>
                <span>{homestay.bathrooms} phòng tắm</span>
              </div>
            </div>

            {/* Host Info */}
            <div className="host-section">
              <div className="host-info">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100" 
                  alt="Host" 
                  className="host-avatar"
                />
                <div className="host-details">
                  <h4>Chủ nhà: {homestay.host.name}</h4>
                  <div className="host-stats">
                    <span>Đã tham gia: {homestay.host.joined}</span>
                    <span>•</span>
                    <span>Tỷ lệ phản hồi: {homestay.host.responseRate}%</span>
                  </div>
                </div>
              </div>
              {homestay.host.verified && (
                <div className="verified-badge">Đã xác minh</div>
              )}
            </div>

            {/* Description */}
            <div className="description-section">
              <h3>Mô tả</h3>
              <div className="description-content">
                {homestay.description.split('\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div className="amenities-section">
              <h3>Tiện nghi</h3>
              <div className="amenities-grid">
                {homestay.amenities.map((amenity, index) => (
                  <div key={index} className="amenity-item">
                    <div className="amenity-icon">{amenity.icon}</div>
                    <span>{amenity.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="reviews-section">
              <h3>Đánh giá ({reviews.length})</h3>
              <div className="reviews-grid">
                {reviews.map(review => (
                  <div key={review.id} className="review-card">
                    <div className="review-header">
                      <img src={review.avatar} alt={review.user} className="review-avatar" />
                      <div className="review-user">
                        <h4>{review.user}</h4>
                        <div className="review-rating">
                          <FaStar className="star" />
                          <span>{review.rating}</span>
                        </div>
                      </div>
                      <span className="review-date">{review.date}</span>
                    </div>
                    <p className="review-comment">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="booking-sidebar">
            <div className="booking-card">
              <div className="price-section">
                <span className="price">{homestay.price.toLocaleString()} VND</span>
                <span className="period">/ đêm</span>
              </div>
              
              <form onSubmit={handleBooking} className="booking-form">
                <div className="date-inputs">
                  <div className="input-group">
                    <label>NHẬN PHÒNG</label>
                    <input
                      type="date"
                      value={bookingData.checkIn}
                      onChange={(e) => setBookingData({...bookingData, checkIn: e.target.value})}
                      required
                    />
                  </div>
                  <div className="input-group">
                    <label>TRẢ PHÒNG</label>
                    <input
                      type="date"
                      value={bookingData.checkOut}
                      onChange={(e) => setBookingData({...bookingData, checkOut: e.target.value})}
                      required
                    />
                  </div>
                </div>
                
                <div className="input-group">
                  <label>KHÁCH</label>
                  <select
                    value={bookingData.guests}
                    onChange={(e) => setBookingData({...bookingData, guests: e.target.value})}
                  >
                    {[...Array(homestay.guests)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1} khách
                      </option>
                    ))}
                  </select>
                </div>

                <button type="submit" className="book-btn btn btn-primary">
                  Đặt phòng
                </button>

                {bookingData.checkIn && bookingData.checkOut && (
                  <div className="price-breakdown">
                    <div className="price-row">
                      <span>{homestay.price.toLocaleString()} VND x {Math.ceil((new Date(bookingData.checkOut) - new Date(bookingData.checkIn)) / (1000 * 60 * 60 * 24))} đêm</span>
                      <span>{calculateTotal().toLocaleString()} VND</span>
                    </div>
                    <div className="price-row total">
                      <span>Tổng</span>
                      <span>{calculateTotal().toLocaleString()} VND</span>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomestayDetail;
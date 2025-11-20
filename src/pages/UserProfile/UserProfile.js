import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaEdit, FaHistory, FaHeart, FaSignOutAlt } from 'react-icons/fa';
import '../../styles/UserProfile.css';

function UserProfile() {
  const [activeTab, setActiveTab] = useState('profile');
  const [editMode, setEditMode] = useState(false);
  
  const [userData, setUserData] = useState({
    fullName: 'Nguyễn Văn A',
    email: 'nguyenvana@email.com',
    phone: '0123456789',
    address: '123 Đường ABC, Quận 1, TP.HCM',
    dateOfBirth: '1990-01-01',
    gender: 'male'
  });

  const bookings = [
    {
      id: 1,
      homestayName: 'Biệt thự biển Sầm Sơn',
      checkIn: '2024-02-15',
      checkOut: '2024-02-18',
      guests: 4,
      total: 4500000,
      status: 'completed'
    },
    {
      id: 2,
      homestayName: 'Homestay Đà Lạt View',
      checkIn: '2024-03-01',
      checkOut: '2024-03-03',
      guests: 2,
      total: 1600000,
      status: 'upcoming'
    }
  ];

  const favorites = [
    {
      id: 1,
      name: 'Biệt thự biển Sầm Sơn',
      location: 'Sầm Sơn, Thanh Hóa',
      price: 1500000,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400'
    },
    {
      id: 2,
      name: 'Căn hộ Quận 1',
      location: 'Quận 1, TP.HCM',
      price: 600000,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400'
    }
  ];

  const handleSave = () => {
    setEditMode(false);
    // Save logic would go here
  };

  const handleCancel = () => {
    setEditMode(false);
    // Reset form logic would go here
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="profile-section">
            <div className="section-header">
              <h3>Thông tin cá nhân</h3>
              {!editMode && (
                <button 
                  className="btn btn-secondary"
                  onClick={() => setEditMode(true)}
                >
                  <FaEdit />
                  Chỉnh sửa
                </button>
              )}
            </div>

            <div className="profile-form">
              <div className="form-row">
                <div className="input-group">
                  <label>Họ và tên</label>
                  <input
                    type="text"
                    value={userData.fullName}
                    onChange={(e) => setUserData({...userData, fullName: e.target.value})}
                    disabled={!editMode}
                  />
                </div>
                <div className="input-group">
                  <label>Email</label>
                  <input
                    type="email"
                    value={userData.email}
                    disabled
                    className="disabled"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="input-group">
                  <label>Số điện thoại</label>
                  <input
                    type="tel"
                    value={userData.phone}
                    onChange={(e) => setUserData({...userData, phone: e.target.value})}
                    disabled={!editMode}
                  />
                </div>
                <div className="input-group">
                  <label>Ngày sinh</label>
                  <input
                    type="date"
                    value={userData.dateOfBirth}
                    onChange={(e) => setUserData({...userData, dateOfBirth: e.target.value})}
                    disabled={!editMode}
                  />
                </div>
              </div>

              <div className="input-group">
                <label>Địa chỉ</label>
                <input
                  type="text"
                  value={userData.address}
                  onChange={(e) => setUserData({...userData, address: e.target.value})}
                  disabled={!editMode}
                />
              </div>

              <div className="input-group">
                <label>Giới tính</label>
                <div className="radio-group">
                  <label className="radio">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={userData.gender === 'male'}
                      onChange={(e) => setUserData({...userData, gender: e.target.value})}
                      disabled={!editMode}
                    />
                    <span>Nam</span>
                  </label>
                  <label className="radio">
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked={userData.gender === 'female'}
                      onChange={(e) => setUserData({...userData, gender: e.target.value})}
                      disabled={!editMode}
                    />
                    <span>Nữ</span>
                  </label>
                  <label className="radio">
                    <input
                      type="radio"
                      name="gender"
                      value="other"
                      checked={userData.gender === 'other'}
                      onChange={(e) => setUserData({...userData, gender: e.target.value})}
                      disabled={!editMode}
                    />
                    <span>Khác</span>
                  </label>
                </div>
              </div>

              {editMode && (
                <div className="form-actions">
                  <button className="btn btn-primary" onClick={handleSave}>
                    Lưu thay đổi
                  </button>
                  <button className="btn btn-secondary" onClick={handleCancel}>
                    Hủy
                  </button>
                </div>
              )}
            </div>
          </div>
        );

      case 'bookings':
        return (
          <div className="bookings-section">
            <h3>Lịch sử đặt phòng</h3>
            <div className="bookings-list">
              {bookings.map(booking => (
                <div key={booking.id} className="booking-card">
                  <div className="booking-info">
                    <h4>{booking.homestayName}</h4>
                    <div className="booking-dates">
                      <span>{booking.checkIn} → {booking.checkOut}</span>
                    </div>
                    <div className="booking-details">
                      <span>{booking.guests} khách</span>
                      <span>•</span>
                      <span className={`status ${booking.status}`}>
                        {booking.status === 'completed' ? 'Đã hoàn thành' : 'Sắp tới'}
                      </span>
                    </div>
                  </div>
                  <div className="booking-total">
                    {booking.total.toLocaleString()} VND
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'favorites':
        return (
          <div className="favorites-section">
            <h3>Homestay yêu thích</h3>
            <div className="favorites-grid">
              {favorites.map(favorite => (
                <div key={favorite.id} className="favorite-card">
                  <img src={favorite.image} alt={favorite.name} />
                  <div className="favorite-info">
                    <h4>{favorite.name}</h4>
                    <p className="location">{favorite.location}</p>
                    <p className="price">{favorite.price.toLocaleString()} VND/đêm</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="user-profile">
      <div className="container">
        <div className="profile-container">
          {/* Sidebar */}
          <div className="profile-sidebar">
            <div className="user-summary">
              <div className="user-avatar">
                <FaUser />
              </div>
              <div className="user-info">
                <h3>{userData.fullName}</h3>
                <p>{userData.email}</p>
              </div>
            </div>

            <nav className="profile-nav">
              <button 
                className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`}
                onClick={() => setActiveTab('profile')}
              >
                <FaUser />
                Thông tin cá nhân
              </button>
              <button 
                className={`nav-item ${activeTab === 'bookings' ? 'active' : ''}`}
                onClick={() => setActiveTab('bookings')}
              >
                <FaHistory />
                Lịch sử đặt phòng
              </button>
              <button 
                className={`nav-item ${activeTab === 'favorites' ? 'active' : ''}`}
                onClick={() => setActiveTab('favorites')}
              >
                <FaHeart />
                Yêu thích
              </button>
              <button className="nav-item logout">
                <FaSignOutAlt />
                Đăng xuất
              </button>
            </nav>
          </div>

          {/* Main Content */}
          <div className="profile-content">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
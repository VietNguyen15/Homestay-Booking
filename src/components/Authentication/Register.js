import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaPhone, FaCheck } from 'react-icons/fa';
import './Register.css';

function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('Mật khẩu xác nhận không khớp!');
      return;
    }
    
    if (!formData.agreeToTerms) {
      alert('Vui lòng đồng ý với điều khoản sử dụng!');
      return;
    }
    
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // For demo purposes, just navigate to home
    navigate('/');
    setLoading(false);
  };

  const passwordStrength = () => {
    const password = formData.password;
    if (password.length === 0) return { strength: 0, text: '' };
    if (password.length < 6) return { strength: 1, text: 'Yếu' };
    if (password.length < 8) return { strength: 2, text: 'Trung bình' };
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) return { strength: 3, text: 'Khá' };
    return { strength: 4, text: 'Mạnh' };
  };

  const strength = passwordStrength();

  return (
    <div className="register-page">
      <div className="container">
        <div className="register-container">
          <div className="register-card">
            <div className="register-header">
              <h1>Tạo tài khoản</h1>
              <p>Đăng ký để bắt đầu trải nghiệm những homestay tuyệt vời</p>
            </div>

            <form onSubmit={handleSubmit} className="register-form">
              <div className="input-group">
                <div className="input-icon">
                  <FaUser />
                </div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Họ và tên"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <div className="input-icon">
                  <FaEnvelope />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <div className="input-icon">
                  <FaPhone />
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Số điện thoại"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <div className="input-icon">
                  <FaLock />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Mật khẩu"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              {/* Password Strength Meter */}
              {formData.password && (
                <div className="password-strength">
                  <div className="strength-meter">
                    <div 
                      className={`strength-bar ${strength.strength >= 1 ? 'active' : ''}`}
                      data-strength="1"
                    ></div>
                    <div 
                      className={`strength-bar ${strength.strength >= 2 ? 'active' : ''}`}
                      data-strength="2"
                    ></div>
                    <div 
                      className={`strength-bar ${strength.strength >= 3 ? 'active' : ''}`}
                      data-strength="3"
                    ></div>
                    <div 
                      className={`strength-bar ${strength.strength >= 4 ? 'active' : ''}`}
                      data-strength="4"
                    ></div>
                  </div>
                  <span className={`strength-text strength-${strength.strength}`}>
                    {strength.text}
                  </span>
                </div>
              )}

              <div className="input-group">
                <div className="input-icon">
                  <FaLock />
                </div>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  placeholder="Xác nhận mật khẩu"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                <div className="error-message">
                  Mật khẩu xác nhận không khớp
                </div>
              )}

              <div className="form-options">
                <label className="checkbox">
                  <input 
                    type="checkbox" 
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                  />
                  <span>
                    Tôi đồng ý với{' '}
                    <Link to="/terms" className="link">
                      Điều khoản sử dụng
                    </Link>{' '}
                    và{' '}
                    <Link to="/privacy" className="link">
                      Chính sách bảo mật
                    </Link>
                  </span>
                </label>
              </div>

              <button 
                type="submit" 
                className="register-btn btn btn-primary"
                disabled={loading}
              >
                {loading ? 'Đang tạo tài khoản...' : 'Đăng ký'}
              </button>
            </form>

            <div className="register-footer">
              <p>
                Đã có tài khoản?{' '}
                <Link to="/login" className="link">
                  Đăng nhập ngay
                </Link>
              </p>
            </div>
          </div>

          <div className="register-hero">
            <div className="hero-content">
              <div className="benefits">
                <h2>Tại sao nên đăng ký?</h2>
                <div className="benefit-item">
                  <FaCheck className="benefit-icon" />
                  <span>Đặt phòng nhanh chóng</span>
                </div>
                <div className="benefit-item">
                  <FaCheck className="benefit-icon" />
                  <span>Lưu danh sách yêu thích</span>
                </div>
                <div className="benefit-item">
                  <FaCheck className="benefit-icon" />
                  <span>Nhận ưu đãi đặc biệt</span>
                </div>
                <div className="benefit-item">
                  <FaCheck className="benefit-icon" />
                  <span>Quản lý đặt phòng dễ dàng</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
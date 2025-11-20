import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaFacebook, FaGoogle } from 'react-icons/fa';
import './Login.css';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // For demo purposes, just navigate to home
    navigate('/');
    setLoading(false);
  };

  return (
    <div className="login-page">
      <div className="container">
        <div className="login-container">
          <div className="login-card">
            <div className="login-header">
              <h1>Đăng nhập</h1>
              <p>Chào mừng trở lại! Vui lòng đăng nhập vào tài khoản của bạn.</p>
            </div>

            <form onSubmit={handleSubmit} className="login-form">
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

              <div className="form-options">
                <label className="checkbox">
                  <input type="checkbox" />
                  <span>Ghi nhớ đăng nhập</span>
                </label>
                <Link to="/forgot-password" className="forgot-link">
                  Quên mật khẩu?
                </Link>
              </div>

              <button 
                type="submit" 
                className="login-btn btn btn-primary"
                disabled={loading}
              >
                {loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
              </button>
            </form>

            <div className="divider">
              <span>Hoặc tiếp tục với</span>
            </div>

            <div className="social-login">
              <button className="social-btn facebook">
                <FaFacebook />
                Facebook
              </button>
              <button className="social-btn google">
                <FaGoogle />
                Google
              </button>
            </div>

            <div className="login-footer">
              <p>
                Chưa có tài khoản?{' '}
                <Link to="/register" className="link">
                  Đăng ký ngay
                </Link>
              </p>
            </div>
          </div>

          <div className="login-hero">
            <div className="hero-content">
              <h2>Khám phá homestay tuyệt vời</h2>
              <p>Đăng nhập để đặt phòng và trải nghiệm những kỳ nghỉ đáng nhớ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
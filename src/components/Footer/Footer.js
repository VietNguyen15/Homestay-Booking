import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-icon">🏠</span>
              HomestayBooking
            </div>
            <p className="footer-description">
              Kết nối bạn với những homestay tuyệt vời trên khắp Việt Nam. Trải nghiệm kỳ nghỉ đáng nhớ cùng chúng tôi.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <FaFacebook />
              </a>
              <a href="#" className="social-link">
                <FaTwitter />
              </a>
              <a href="#" className="social-link">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Liên kết nhanh</h4>
            <ul className="footer-links">
              <li><Link to="/">Trang chủ</Link></li>
              <li><Link to="/homestays">Khám phá</Link></li>
              <li><Link to="/about">Về chúng tôi</Link></li>
              <li><Link to="/contact">Liên hệ</Link></li>
              <li><Link to="/help">Trợ giúp</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="footer-section">
            <h4>Hỗ trợ</h4>
            <ul className="footer-links">
              <li><Link to="/faq">Câu hỏi thường gặp</Link></li>
              <li><Link to="/booking-guide">Hướng dẫn đặt phòng</Link></li>
              <li><Link to="/cancellation">Chính sách hủy</Link></li>
              <li><Link to="/privacy">Chính sách bảo mật</Link></li>
              <li><Link to="/terms">Điều khoản sử dụng</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4>Liên hệ</h4>
            <div className="contact-info">
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>123 Đường ABC, Quận 1, TP.HCM</span>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <span>+84 123 456 789</span>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <span>support@homestaybooking.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 HomestayBooking. Tất cả quyền được bảo lưu.</p>
            <div className="payment-methods">
              <span>Chấp nhận thanh toán:</span>
              <div className="payment-icons">
                <span>💳</span>
                <span>🏦</span>
                <span>📱</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
import React from "react";
import { NavLink } from "react-router-dom";
import logo from './assets/images/hanhannails.png';
import { FaFacebook, FaInstagram, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaClock, FaHeart } from 'react-icons/fa';
import "./Footer.css";

function Footer() {
    return (
        <footer className="modern-footer">
            <div className="footer-content">
                <div className="footer-container">
                    <div className="footer-section brand-section">
                        <div className="footer-logo">
                            <img src={logo} alt="HanHan Nails" className="logo-img" />
                            <h3 className="brand-name">HanHan Nails</h3>
                        </div>
                        <p className="footer-description">
                            Nơi mang đến cho bạn những trải nghiệm làm đẹp tuyệt vời nhất với đội ngũ chuyên nghiệp và dịch vụ chất lượng cao.
                        </p>
                        <div className="social-links">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link facebook">
                                <FaFacebook />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link instagram">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h3 className="section-title-footer">Liên kết nhanh</h3>
                        <nav className="footer-nav">
                            <NavLink to="/" className="footer-link">Trang chủ</NavLink>
                            <NavLink to="/services" className="footer-link">Dịch vụ</NavLink>
                            <NavLink to="/booking" className="footer-link">Đặt lịch</NavLink>
                            <NavLink to="/nailsbox" className="footer-link">Nailsbox</NavLink>
                            <NavLink to="/gallery" className="footer-link">Thư viện</NavLink>
                            <NavLink to="/about" className="footer-link">Về chúng tôi</NavLink>
                        </nav>
                    </div>

                    <div className="footer-section">
                        <h3 className="section-title-footer">Thông tin liên hệ</h3>
                        <div className="contact-info">
                            <div className="contact-item">
                                <FaMapMarkerAlt className="contact-icon" />
                                <span>160 ấp Trà Võ, xã Thạnh Đức, tỉnh Tây Ninh</span>
                            </div>
                            <div className="contact-item">
                                <FaPhoneAlt className="contact-icon" />
                                <span>0123 456 789</span>
                            </div>
                            <div className="contact-item">
                                <FaEnvelope className="contact-icon" />
                                <span>contact@hanhannails.com</span>
                            </div>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h3 className="section-title-footer">Giờ làm việc</h3>
                        <div className="working-hours">
                            <div className="hours-item">
                                <FaClock className="hours-icon" />
                                <div className="hours-text">
                                    <span className="days">Thứ 2 - Thứ 6</span>
                                    <span className="time">9:00 - 20:00</span>
                                </div>
                            </div>
                            <div className="hours-item">
                                <FaClock className="hours-icon" />
                                <div className="hours-text">
                                    <span className="days">Thứ 7 - Chủ nhật</span>
                                    <span className="time">9:00 - 21:00</span>
                                </div>
                            </div>
                        </div>
                        <div className="cta-section">
                            <NavLink to="/booking" className="cta-button">
                                Đặt lịch ngay
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-container">
                    <div className="copyright">
                        <p>© {new Date().getFullYear()} HanHan Nails. Tất cả quyền được bảo lưu.</p>
                    </div>
                    <div className="footer-heart">
                        <span>Made with</span>
                        <FaHeart className="heart-icon" />
                        <span>for beautiful nails</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
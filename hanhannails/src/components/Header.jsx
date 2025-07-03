import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from './assets/images/hanhannails.png';
import { FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';
import "./Header.css";

function Header() {
    const location = useLocation();
    const path = location.pathname;
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { path: '/', label: 'Trang chủ', exact: true },
        { path: '/intro', label: 'Giới thiệu' },
        { path: '/services', label: 'Dịch vụ', includes: '/service' },
        { path: '/nailsbox', label: 'Nailsbox' }
    ];

    return (
        <header className={`modern-header ${scrolled ? 'scrolled' : ''} ${(path === "/login" || path === "/register") ? 'login-page' : ''}`}>
            <div className="header-container">
                {/* Logo */}
                <NavLink to="/" className="logo-wrapper">
                    <img src={logo} alt="HanHan Nails" className="logo" />
                </NavLink>

                {/* Desktop Navigation */}
                <nav className="desktop-nav">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={`nav-item ${
                                item.exact ? (path === item.path ? 'active' : '') 
                                : (item.includes ? path.includes(item.includes) : path === item.path) ? 'active' : ''
                            }`}
                        >
                            <span className="nav-text">{item.label}</span>
                            <span className="nav-indicator"></span>
                        </NavLink>
                    ))}
                </nav>

                {/* User Actions */}
                <div className="user-actions">
                    <NavLink to="/booking" className="booking-btn">
                        Đặt lịch
                    </NavLink>
                    <NavLink to="/login" className="user-icon">
                        <FaUserCircle />
                    </NavLink>
                </div>

                {/* Mobile Menu Toggle */}
                <button 
                    className="mobile-menu-toggle"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={`mobile-nav-item ${
                            item.exact ? (path === item.path ? 'active' : '') 
                            : (item.includes ? path.includes(item.includes) : path === item.path) ? 'active' : ''
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        {item.label}
                    </NavLink>
                ))}
                <NavLink 
                    to="/booking" 
                    className="mobile-booking-btn"
                    onClick={() => setMobileMenuOpen(false)}
                >
                    Đặt lịch ngay
                </NavLink>
            </div>
        </header>
    );
}

export default Header;
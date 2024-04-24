import React from "react";
import "./Header.css";
import { NavLink, useLocation } from "react-router-dom";
import logo from './assets/images/hanhannails.png';
import { FaUserCircle } from 'react-icons/fa';


function Header() {
    const location = useLocation();
    const path = location.pathname;

    return (
        <div className={(path === "/login" || path === "/register" ? "header header-login w-100" : "header w-100")}>
            <img src={logo} alt="" className="header-logo" />
            <div className="header-item-container">
                <NavLink to='/' exact style={{textDecoration: 'none'}}>
                    <p className={(path === "/" ? "header-item header-item-selected" : "header-item")}>Trang chủ</p>
                </NavLink>
                <NavLink to='/intro' style={{textDecoration: 'none'}}>
                    <p className={(path === "/intro" ? "header-item header-item-selected" : "header-item")}>Giới thiệu</p>
                </NavLink>
                <NavLink to='/services' style={{textDecoration: 'none'}}>
                    <p className={(path.includes("/service") ? "header-item header-item-selected" : "header-item")}>Dịch vụ</p>
                </NavLink>
                <NavLink to='/nailsbox' style={{textDecoration: 'none'}}>
                    <p className={(path === "/nailsbox" ? "header-item header-item-selected" : "header-item")}>Nailsbox</p>
                </NavLink>
                <NavLink to='/login' style={{textDecoration: 'none'}}>
                    <FaUserCircle className="header-login-icon" />
                </NavLink>
                
            </div>
        </div>
    );
}

export default Header;

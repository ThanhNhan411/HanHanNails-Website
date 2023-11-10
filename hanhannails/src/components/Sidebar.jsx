import React, { useState } from "react";
import './Sidebar.css';
import { Link } from "react-router-dom";

function Sidebar () {
    const [type, setType] = useState("");
    return (
        <div className="sidebar-container">
            <h1 className="sidebar-title">Dịch vụ</h1>
            <ul className="sidebar-item-container">
            <Link to='/services/all' style={{textDecoration: 'none'}}><li  className={`sidebar-item ${type === "all" ? "sidebar-item-selected" : ""}`} onClick={() => setType("all")}>Tất cả</li></Link>
            <Link to='/services/nails' style={{textDecoration: 'none'}}><li  className={`sidebar-item ${type === "nails" ? "sidebar-item-selected" : ""}`} onClick={() => setType("nails")}>Nails</li></Link>
            <Link to='/services/goidau' style={{textDecoration: 'none'}}><li  className={`sidebar-item ${type === "goidau" ? "sidebar-item-selected" : ""}`} onClick={() => setType("goidau")}>Gội đầu</li></Link>
            <Link to='/services/chamsocda' style={{textDecoration: 'none'}}><li  className={`sidebar-item ${type === "chamsocda" ? "sidebar-item-selected" : ""}`} onClick={() => setType("chamsocda")}>Chăm sóc da</li></Link>
            </ul>
        </div>
    );
};

export default Sidebar;
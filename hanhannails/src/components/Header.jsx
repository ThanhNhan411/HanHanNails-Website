import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
    const [menu, setMenu] = useState("")
    return (
        <div className="header w-100">
            <Link to='/' style={{textDecoration: 'none'}}><p  className={`header-item ${menu === "" ? "header-item-selected" : ""}`} onClick={() => setMenu("")}>Trang chủ</p></Link>
            <p  className={`header-item ${menu === "intro" ? "header-item-selected" : ""}`} onClick={() => setMenu("intro")}>Giới thiệu</p>
            <Link to='/services' style={{textDecoration: 'none'}}><p  className={`header-item ${menu === "services" ? "header-item-selected" : ""}`} onClick={() => setMenu("services")}>Dịch vụ</p></Link>
            <p  className={`header-item ${menu === "nailsbox" ? "header-item-selected" : ""}`} onClick={() => setMenu("nailsbox")}>Nailsbox</p>
        </div>
    );
}

export default Header;
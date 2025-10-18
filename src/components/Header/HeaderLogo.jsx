import React from "react";
import "./styles/HeaderLogo.style.css";
import logo from "../../assets/logo/logo.png";

const HeaderLogo = () => {
  return (
    <div className="header__logo">
      <img src={logo} alt="RoPhim Logo" className="header__logo-image" />
    </div>
  );
};

export default HeaderLogo;

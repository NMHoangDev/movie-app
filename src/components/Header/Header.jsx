import React, { useState } from "react";
import "./styles/Header.style.css";
import HeaderLogo from "./HeaderLogo";
import HeaderSearch from "./HeaderSearchBar";
import HeaderNav from "./HeaderNav";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="header__container">
        <HeaderLogo />

        {/* Burger Menu Button */}
        <button
          className={`header__burger ${
            isMobileMenuOpen ? "header__burger--active" : ""
          }`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className="header__burger-line"></span>
          <span className="header__burger-line"></span>
          <span className="header__burger-line"></span>
        </button>

        <HeaderSearch />

        <div
          className={`header__nav-wrapper ${
            isMobileMenuOpen ? "header__nav-wrapper--active" : ""
          }`}
        >
          <HeaderNav />
        </div>
      </div>
    </header>
  );
};

export default Header;

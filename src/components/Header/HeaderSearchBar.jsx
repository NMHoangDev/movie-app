import React from "react";
import "./styles/HeaderSearchBar.style.css";
import { FaSearch } from "react-icons/fa";

const HeaderSearchBar = () => {
  return (
    <div className="header__search">
      <input
        type="text"
        className="header__search-input"
        placeholder="Tìm kiếm phim, diễn viên"
      />
      <button className="header__search-button" aria-label="Tìm kiếm">
        <FaSearch /> {/* icon từ react-icons */}
      </button>
    </div>
  );
};

export default HeaderSearchBar;

import React from "react";
import "./styles/HeaderNav.style.css";

const menuItems = [
  "Chủ Đề",
  "Thể Loại",
  "Phim Lẻ",
  "Phim Bộ",
  "Xem Chung",
  "Quốc Gia",
  "Diễn Viên",
  "Lịch Chiếu",
];

const HeaderNav = () => {
  return (
    <nav className="header__nav">
      {menuItems.map((item) => (
        <a key={item} href="#" className="header__nav-link">
          {item}
        </a>
      ))}
    </nav>
  );
};

export default HeaderNav;

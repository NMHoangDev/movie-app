import React from "react";
import "./Footer.style.css";
import { ReactComponent as VietNamIcon } from "../../assets/icons/VietNamIcon.svg";
import { ReactComponent as TelegramApp } from "../../assets/icons/TelegramApp.svg";
import { ReactComponent as Discord } from "../../assets/icons/Discord.svg";
import { ReactComponent as FacebookF } from "../../assets/icons/FacebookF.svg";
import { ReactComponent as TikTok } from "../../assets/icons/FacebookF.svg";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Banner pill */}
      <div className="footer__tag">
        <VietNamIcon />
        Hoàng Sa &amp; Trường Sa là của Việt Nam!
      </div>

      {/* Top row: Logo + socials */}
      <div className="footer__top">
        <a href="/" className="footer__logo" aria-label="Trang chủ">
          Logo
        </a>

        <nav className="footer__socials" aria-label="Mạng xã hội">
          <a className="footer__social" href="#" aria-label="Facebook">
            {/* f */}
            <TelegramApp />
          </a>
          <a className="footer__social" href="#" aria-label="Twitter">
            <Discord />
          </a>
          <a className="footer__social" href="#" aria-label="Telegram">
            <FacebookF />
          </a>
          <a className="footer__social" href="#" aria-label="Instagram">
            <TikTok />
          </a>
        </nav>
      </div>

      {/* Menu links */}
      <ul className="footer__menu">
        <li>
          <a href="#">Hỏi – Đáp</a>
        </li>
        <li>
          <a href="#">Chính sách bảo mật</a>
        </li>
        <li>
          <a href="#">Điều khoản sử dụng</a>
        </li>
        <li>
          <a href="#">Giới thiệu</a>
        </li>
        <li>
          <a href="#">Liên hệ</a>
        </li>
      </ul>

      {/* Description */}
      <p className="footer__desc">
        HoiPhim – Phim hay và chất lượng. Xem phim online miễn phí Vietsub,
        thuyết minh, tiếng Việt. Kho phim đa dạng: phim chiếu rạp, phim bộ, phim
        lẻ từ nhiều quốc gia như Việt Nam, Hàn Quốc, Trung Quốc, Thái Lan, Nhật
        Bản, Âu, Mỹ… Đa dạng thể loại. Khám phá nền tảng phim trực tuyến hay
        2024 chất lượng 4K!
      </p>

      {/* Copyright */}
      <div className="footer__copy">© 2024 HoiPhim</div>
    </footer>
  );
};

export default Footer;

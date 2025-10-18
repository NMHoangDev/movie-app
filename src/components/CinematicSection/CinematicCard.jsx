import React from "react";
import "./styles/CinematicCard.style.css";

const CinematicCard = ({
  titleVi = "Bầy Hồi Sinh",
  titleEn = "The Ghost Game",
  meta = "T18 • 2025 • 1h 35p",
  poster = "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200&q=80&auto=format&fit=crop", // ảnh ngang
  subPoster = "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&q=70&auto=format&fit=crop", // ảnh dọc nhỏ
  pills = ["P.Đề", "T.Minh"],
  active = false,
}) => {
  return (
    <article className={`cin-card ${active ? "cin-card--active" : ""}`}>
      {/* Poster chính (ngang) */}
      <div className="cin-card__media">
        <img className="cin-card__img" src={poster} alt={titleVi} />
      </div>

      {/* Khu vực info */}
      <div className="cin-card__footer">
        {/* Poster phụ (dọc) chồng góc trái */}
        <img className="cin-card__sub" src={subPoster} alt="" />

        {/* Nội dung chữ + pills bên phải poster phụ */}
        <div className="cin-card__body">
          <div className="cin-card__pills">
            {pills.map((p, i) => (
              <span
                key={p + i}
                className={`cin-card__pill ${
                  i === 1 ? "cin-card__pill--green" : ""
                }`}
              >
                {p}
              </span>
            ))}
          </div>

          <h4 className="cin-card__title text-ellipsis">{titleVi}</h4>
          <div className="cin-card__subtitle text-ellipsis">{titleEn}</div>
          <div className="cin-card__meta">{meta}</div>
        </div>
      </div>
    </article>
  );
};

export default CinematicCard;

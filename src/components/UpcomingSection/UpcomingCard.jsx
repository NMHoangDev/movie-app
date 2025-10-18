import React from "react";
import "./styles/UpcomingCard.style.css";

const UpcomingCard = ({
  title = "Năm Của Anh, Ngày Của Em",
  subtitle = "Measure In Love",
  poster = "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop",
}) => {
  return (
    <article className="up-card" role="listitem">
      <div className="up-card__poster">
        <img src={poster} alt={title} className="up-card__img" />
        <div className="up-card__fade" />
        <span className="up-card__badge">Sắp chiếu</span>
      </div>

      <h4 className="up-card__title text-ellipsis">{title}</h4>
      <div className="up-card__subtitle text-ellipsis">{subtitle}</div>
    </article>
  );
};

export default UpcomingCard;

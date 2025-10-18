import React from "react";
import "./styles/CategoryMovieCard.style.css";

const CategoryMovieCard = ({ title, subtitle, poster }) => {
  return (
    <article className="category-card" role="listitem" title={title}>
      <div className="category-card__poster">
        <img src={poster} alt={title} className="category-card__img" />
        {/* overlay tag mô phỏng “HD • 10 Tập” */}
        <div className="category-card__tags">
          <span className="category-card__tag">HD</span>
          <span className="category-card__tag category-card__tag--green">
            10 Tập
          </span>
        </div>
        {/* gradient đáy để chữ dễ đọc như ảnh mẫu */}
        <div className="category-card__fade" />
      </div>

      <h4 className="category-card__title">{title}</h4>
      <div className="category-card__subtitle">{subtitle}</div>
    </article>
  );
};

export default CategoryMovieCard;

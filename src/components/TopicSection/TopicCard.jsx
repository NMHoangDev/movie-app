import React from "react";
import "./styles/TopicCard.style.css";

const TopicCard = ({ label, subtitle, color = "blue", href = "#" }) => {
  return (
    <article
      className={`topic-card `}
      role="listitem"
      style={{ backgroundColor: color }}
    >
      <div className="topic-card__content">
        <h3 className="topic-card__title">{label}</h3>
        {subtitle && <p className="topic-card__subtitle">{subtitle}</p>}
        <button className="topic-card__button">
          <span className="topic-card__arrow">›</span>
          {` Xem chủ đề`}
        </button>
      </div>
    </article>
  );
};

export default TopicCard;

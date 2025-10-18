import React from "react";
import "./styles/ContinueWatchingCard.style.css";

const ContinueWatchingCard = ({
  id,
  title,
  provider,
  current,
  total,
  progress = 0,
  poster,
  onRemove,
}) => {
  const pct = Math.max(0, Math.min(1, progress)) * 100;

  return (
    <article className="continue-card" role="listitem">
      <div className="continue-card__poster">
        <img src={poster} alt={title} className="continue-card__img" />
        <button
          className="continue-card__remove"
          aria-label="Xoá khỏi xem tiếp"
          onClick={() => onRemove?.(id)}
        >
          ×
        </button>
      </div>

      {/* progress */}
      <div className="continue-card__progress">
        <div
          className="continue-card__progress-bar"
          style={{ width: `${pct}%` }}
        />
      </div>
      {/* thời lượng */}
      <div className="continue-card__meta">
        <span className="continue-card__time">
          {current} / {total}
        </span>
      </div>

      {/* tiêu đề + provider */}
      <h3 className="continue-card__title" title={title}>
        {title}
      </h3>
      <div className="continue-card__provider">{provider}</div>
    </article>
  );
};

export default ContinueWatchingCard;

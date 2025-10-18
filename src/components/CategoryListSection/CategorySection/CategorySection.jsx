import React, { useRef } from "react";
import "./styles/CategorySection.style.css";
import CategoryMovieCard from "./CategoryMovieCard";
import thoivangson from "../../../assets/image/thoivangson.png";

const CategorySection = ({
  title = "Phim Hàn Quốc mới",
  subtitleLink = "#",
  items = [],
  titleColor = "#FFFFFF",
}) => {
  const railRef = useRef(null);

  const scroll = (dir) => {
    const el = railRef.current;
    if (!el) return;
    const card = el.querySelector(".category-card");
    const step = card ? card.clientWidth + 16 : 240;
    el.scrollBy({
      left: (dir === "next" ? step : -step) * 3,
      behavior: "smooth",
    });
  };

  return (
    <section className="category-section">
      <div className="category-section__inner">
        {/* Left column */}
        <aside className="category-section__side">
          <h3
            className="category-section__title"
            style={{
              color: titleColor,
            }}
          >
            {title.split("\n").map((l, i) => (
              <span key={i} className="category-section__title-line">
                {l}
              </span>
            ))}
          </h3>
          <a href={subtitleLink} className="category-section__seeall">
            Xem toàn bộ <span className="category-section__arrow">›</span>
          </a>
        </aside>

        {/* Right column: slider */}
        <div className="category-section__content">
          <div className="category-section__rail" ref={railRef} role="list">
            {(items.length ? items : FAKE_ITEMS).map((m) => (
              <CategoryMovieCard
                key={m.id}
                title={m.title}
                subtitle={m.subtitle}
                poster={m.poster}
              />
            ))}
          </div>

          <button
            className="category-section__nav category-section__nav--next"
            aria-label="Sau"
            onClick={() => scroll("next")}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;

const FAKE_ITEMS = Array.from({ length: 5 }).map((_, i) => ({
  id: `m-${i + 1}`,
  title: "Thời Vàng Son",
  subtitle: "Our Golden Days",
  poster: [thoivangson, thoivangson, thoivangson, thoivangson][i % 4],
}));

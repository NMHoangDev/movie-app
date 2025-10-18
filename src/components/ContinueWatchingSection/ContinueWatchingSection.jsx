import React from "react";
import "./styles/ContinueWatchingSection.style.css";
import ContinueWatchingCard from "./ContinueWatchingCard";
import mobious from "../../assets/image/Mobious.png";
import summerHell from "../../assets/image/img-poster-film-mua-he-dia-nguc.png";
import theConjuring from "../../assets/image/img-poster-film-conjuring.png";

const items = [
  {
    id: "1",
    title: "Ngày Không Ngủ",
    provider: "Mobius",
    current: "1h 18m",
    total: "2h 33m",
    progress: 0.52,
    poster: mobious,
  },
  {
    id: "2",
    title: "Mùa Hè Địa Ngục",
    provider: "Mobius",
    current: "1h 10m",
    total: "2h 05m",
    progress: 0.46,
    poster: summerHell,
  },
  {
    id: "3",
    title: "The Conjuring",
    provider: "Mobius",
    current: "1h 08m",
    total: "2h 12m",
    progress: 0.41,
    poster: theConjuring,
  },
];

const ContinueWatchingSection = () => {
  const handleRemove = (id) => {
    console.log("remove item:", id);
  };

  return (
    <section className="continue-watching">
      <div className="continue-watching__header">
        <h2 className="continue-watching__title">Xem tiếp của bạn</h2>
      </div>

      <div className="continue-watching__list" role="list">
        {items.map((it) => (
          <ContinueWatchingCard
            key={it.id}
            id={it.id}
            title={it.title}
            provider={it.provider}
            current={it.current}
            total={it.total}
            progress={it.progress}
            poster={it.poster}
            onRemove={handleRemove}
          />
        ))}
      </div>
    </section>
  );
};

export default ContinueWatchingSection;

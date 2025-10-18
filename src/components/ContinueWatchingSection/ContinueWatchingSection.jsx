import React from "react";
import "./styles/ContinueWatchingSection.style.css";
import ContinueWatchingCard from "./ContinueWatchingCard";

const items = [
  {
    id: "1",
    title: "Ngày Không Ngủ",
    provider: "Mobius",
    current: "1h 18m",
    total: "2h 33m",
    progress: 0.52,
    poster:
      "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "Mùa Hè Địa Ngục",
    provider: "Mobius",
    current: "1h 10m",
    total: "2h 05m",
    progress: 0.46,
    poster:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963f?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "The Conjuring",
    provider: "Mobius",
    current: "1h 08m",
    total: "2h 12m",
    progress: 0.41,
    poster:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "4",
    title: "Xứ Sở Bóng Đêm",
    provider: "Mobius",
    current: "0h 44m",
    total: "2h 20m",
    progress: 0.31,
    poster:
      "https://images.unsplash.com/photo-1517602302552-471fe67acf66?q=80&w=600&auto=format&fit=crop",
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

import React, { useRef } from "react";
import "./styles/CinematicSection.style.css";
import CinematicCard from "./CinematicCard";

const demoItems = [
  {
    id: "1",
    titleVi: "Lời Chưa Nói",
    titleEn: "Family Secret",
    meta: "T18 • 2025 • 1h 45p",
    poster:
      "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=1200&q=80&auto=format&fit=crop",
    badge:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=200&q=60&auto=format&fit=crop",
    avatars: [
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=80&h=80&fit=crop",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop",
    ],
    pills: ["PG-13", "12 TẬP"],
  },
  {
    id: "2",
    titleVi: "Bầy Hôi Sinh",
    titleEn: "The Ghost Game",
    meta: "T18 • 2025 • 1h 35p",
    poster:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200&q=80&auto=format&fit=crop",
    badge:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200&q=60&auto=format&fit=crop",
    avatars: [
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=80&h=80&fit=crop",
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=80&h=80&fit=crop",
    ],
    pills: ["PG-16", "7 TẬP"],
  },
  {
    id: "3",
    titleVi: "Lời Chưa Nói",
    titleEn: "Family Secret",
    meta: "T18 • 2025 • 1h 45p",
    poster:
      "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=1200&q=80&auto=format&fit=crop",
    badge:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=200&q=60&auto=format&fit=crop",
    avatars: [
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=80&h=80&fit=crop",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop",
    ],
    pills: ["PG-13", "12 TẬP"],
  },
  {
    id: "4",
    titleVi: "Bầy Hôi Sinh",
    titleEn: "The Ghost Game",
    meta: "T18 • 2025 • 1h 35p",
    poster:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200&q=80&auto=format&fit=crop",
    badge:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200&q=60&auto=format&fit=crop",
    avatars: [
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=80&h=80&fit=crop",
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=80&h=80&fit=crop",
    ],
    pills: ["PG-16", "7 TẬP"],
  },
];

const CinematicSection = ({
  title = "Mãn Nhãn với Phim Chiếu Rạp",
  items = demoItems,
}) => {
  const railRef = useRef(null);
  const scroll = (dir) => {
    const el = railRef.current;
    if (!el) return;
    const step = (el.firstElementChild?.clientWidth || 360) + 16;
    el.scrollBy({
      left: (dir === "next" ? step : -step) * 2,
      behavior: "smooth",
    });
  };

  return (
    <section className="cinema">
      <div className="cinema__header">
        <h3 className="cinema__title">
          {title} <span className="cinema__title-arrow">›</span>
        </h3>
      </div>

      <div
        className="cinema__rail"
        ref={railRef}
        role="list"
        style={{ width: "100%" }}
      >
        {items.map((m) => {
          return (
            <div style={{ width: "100%" }}>
              <CinematicCard key={m.id} {...m} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CinematicSection;

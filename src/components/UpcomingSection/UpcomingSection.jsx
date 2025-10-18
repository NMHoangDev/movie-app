import React, { useRef } from "react";
import "./styles/UpcomingSection.style.css";
import UpcomingCard from "./UpcomingCard";
import { IoChevronForward } from "react-icons/io5";
import upcoming1 from "../../assets/image/upcoming1.png";
import upcoming2 from "../../assets/image/upcoming2.png";

const DEMO = [
  {
    id: "u1",
    title: "Năm Của Anh, Ngày Của Em",
    subtitle: "Measure In Love",
    poster:upcoming1
  },
  {
    id: "u2",
    title: "Trò Chơi Ảo Giác: Ares",
    subtitle: "TRON: Ares",
    poster:upcoming2
  },
  {
    id: "u3",
    title: "Năm Của Anh, Ngày Của Em",
    subtitle: "Measure In Love",
    poster:upcoming1
  },
  {
    id: "u4",
    title: "Trò Chơi Ảo Giác: Ares",
    subtitle: "TRON: Ares",
    poster:upcoming2
  },
];

const UpcomingSection = ({
  title = "Phim Sắp Tới Trên Hội Phim",
  items = DEMO,
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
    <section className="upcoming">
      <div className="movie-list-header">
        <h2 className="movie-list-title">{title}</h2>

        <button className="movie-list-redirect">
          <IoChevronForward className="redirect-icon" />
        </button>
      </div>

      <div className="upcoming__grid" role="list">
        {(items.length ? items : DEMO).slice(0, 10).map((m) => (
          <UpcomingCard key={m.id} {...m} />
        ))}
      </div>
    </section>
  );
};

export default UpcomingSection;

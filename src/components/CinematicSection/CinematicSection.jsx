import React, { useRef } from "react";
import { IoChevronForward } from 'react-icons/io5';
import "./styles/CinematicSection.style.css";
import CinematicCard from "./CinematicCard";
import theGhostGame from "../../assets/image/theGhostGame.png";
import theGhostGameSub from "../../assets/image/theGhostGameSub.png";
import familySecret from "../../assets/image/familySecret.png";
import familySecretSub from "../../assets/image/familySecretSub.png";

const demoItems = [
  {
    id: "1",
    titleVi: "Lời Chưa Nói",
    titleEn: "Family Secret",
    meta: "T18 • 2025 • 1h 45p",
    poster: familySecret,
    subPoster: familySecretSub,
    avatars: [
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=80&h=80&fit=crop",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop",
    ],
    pills: ["P. Đề", "Thuyết Minh"],
  },
  {
    id: "2",
    titleVi: "Bầy Hôi Sinh",
    titleEn: "The Ghost Game",
    meta: "T18 • 2025 • 1h 35p",
    poster: theGhostGame,
    subPoster: theGhostGameSub,
    avatars: [
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=80&h=80&fit=crop",
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=80&h=80&fit=crop",
    ],
    pills: ["P. Đề", "Thuyết Minh"],
  },
  {
    id: "3",
    titleVi: "Lời Chưa Nói",
    titleEn: "Family Secret",
    meta: "T18 • 2025 • 1h 45p",
    poster: familySecret,
    subPoster: familySecretSub,
    avatars: [
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=80&h=80&fit=crop",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop",
    ],
    pills: ["P. Đề", "Thuyết Minh"],
  },
  {
    id: "4",
    titleVi: "Bầy Hôi Sinh",
    titleEn: "The Ghost Game",
    meta: "T18 • 2025 • 1h 35p",
    poster: theGhostGame,
    subPoster: theGhostGameSub,
    avatars: [
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=80&h=80&fit=crop",
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=80&h=80&fit=crop",
    ],
    pills: ["P. Đề", "Thuyết Minh"],
  },
];

const CinematicSection = ({
  title = "Mãn Nhãn với Phim Chiếu Rạp",
  items = demoItems,
  isRedirect = false,
  onRedirect
}) => {
  const railRef = useRef(null);
  
  const handleRedirectClick = () => {
    if (onRedirect && typeof onRedirect === 'function') {
      onRedirect();
    }
  };
  
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
        <h3 className="cinema__title">{title}</h3>
        {isRedirect && (
          <button className="cinema__redirect" onClick={handleRedirectClick}>
            <IoChevronForward className="redirect-icon" />
          </button>
        )}
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

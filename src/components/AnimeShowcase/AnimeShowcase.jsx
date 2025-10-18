import React from "react";
import "./styles/AnimeShowcase.style.css";
import AnimeCardMini from "./AnimeCardMini";
import animeShowcase from "../../assets/image/anime-showcase.png";
import { ReactComponent as PlayIcon } from "../../assets/icons/PlayBlack.svg";
import { ReactComponent as FilledHeart } from "../../assets/icons/FilledHeart.svg";
import { ReactComponent as Info } from "../../assets/icons/Info.svg";
import { IoChevronForward } from "react-icons/io5";
import animeShowCaseMiniList1 from "../../assets/image/anime-show-case-mini-list-1.png";
import animeShowCaseMiniList2 from "../../assets/image/anime-show-case-mini-list-2.png";
import animeShowCaseMiniList3 from "../../assets/image/anime-show-case-mini-list-3.png";
import animeShowCaseMiniList4 from "../../assets/image/anime-show-case-mini-list-4.png";
import animeShowCaseMiniList5 from "../../assets/image/anime-show-case-mini-list-5.png";
import animeShowCaseMiniList6 from "../../assets/image/anime-show-case-mini-list-6.png";
import animeShowCaseMiniList7 from "../../assets/image/anime-show-case-mini-list-7.png";
import animeShowCaseMiniList8 from "../../assets/image/anime-show-case-mini-list-9.png";

const DEMO_MINI = [
  {
    id: 1,
    img: animeShowCaseMiniList1,
  },
  {
    id: 2,
    img: animeShowCaseMiniList2,
  },
  {
    id: 3,
    img: animeShowCaseMiniList3,
  },
  {
    id: 4,
    img: animeShowCaseMiniList4,
  },
  {
    id: 5,
    img: animeShowCaseMiniList5,
  },
  {
    id: 6,
    img: animeShowCaseMiniList6,
  },
  {
    id: 7,
    img: animeShowCaseMiniList7,
  },
  {
    id: 8,
    img: animeShowCaseMiniList8,
  },
];

const AnimeShowcase = ({
  title = "Kho Tàng Anime Mới Nhất",
  subtitle = "Hoa Thơm Kiêu Hãnh",
  subtitleEn = "The Fragrant Flower Blooms with Dignity",
  description = `Ở một nơi nào đó, có trường trung học Seis. Cao trung Chidori, một trường nam sinh, có thể nói là một trường học nổi tiếng với những chàng trai sinh động. Trường nữ sinh Kikyo, nơi những cô gái mang dáng vẻ đoan trang. Amararo Tsukimi, một nam sinh lớp 2 lo lắng về tình cảm, bắt gặp Kaoruko Wafuji...`,
  badges = ["Chính Kịch", "Anime", "Hài Hước", "Học Đường"],
  miniList = DEMO_MINI,
}) => {
  return (
    <section className="anime-showcase">
      <div className="movie-list-header">
        <h2 className="movie-list-title">{title}</h2>

        <button className="movie-list-redirect">
          <IoChevronForward className="redirect-icon" />
        </button>
      </div>

      <div className="anime-showcase__content">
        <div className="anime-showcase__info">
          <h3 className="anime-showcase__subtitle">{subtitle}</h3>
          <p className="anime-showcase__subtitle-en">{subtitleEn}</p>

          <div className="anime-showcase__meta">
            <span className="anime-showcase__rating">⭐ 8.6</span>
            <span className="anime-showcase__badge">T13</span>
            <span className="anime-showcase__time">23 Tập</span>
          </div>

          <div className="anime-showcase__tags">
            {badges.map((b, i) => (
              <span key={i} className="anime-showcase__tag">
                {b}
              </span>
            ))}
          </div>

          <p className="anime-showcase__desc">{description}</p>

          <div className="anime-showcase__actions">
            <button className="anime-showcase__play">
              <PlayIcon className="anime-showcase__play-icon" />
            </button>
            <span className="anime-showcase__action-icons">
              <button className="anime-showcase__icon-left">
                <FilledHeart className="anime-showcase__icon-filled-heart" />
              </button>
              <button className="anime-showcase__icon-right">
                <Info className="anime-showcase__icon-info" />
              </button>
            </span>
          </div>
        </div>

        <div className="anime-showcase__poster">
          <img src={animeShowcase} alt={subtitle} />
        </div>
      </div>

      <div className="anime-showcase__mini-list">
        {miniList.map((item) => (
          <AnimeCardMini key={item.id} img={item.img} />
        ))}
      </div>
    </section>
  );
};

export default AnimeShowcase;

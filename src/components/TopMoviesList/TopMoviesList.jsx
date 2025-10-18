import React from 'react';
import { IoChevronForward } from 'react-icons/io5';
import './TopMoviesList.style.css';
import TopMovieCard from './TopMovieCard';

import imgPosterFilmAdulthood from '../../assets/image/img-poster-film-adulthood.png';
import imgPosterFilmThanDen from '../../assets/image/img-poster-fim-than-den.png';
import imgPosterFilmKhongTamNhan from '../../assets/image/img-poster-film-khong-tam-nhan.png';
import imgPosterFilmMuaHe from '../../assets/image/img-poster-film-mua-he-dia-nguc.png';
import imgPosterFilmConjuring from '../../assets/image/img-poster-film-conjuring.png';

const defaultTopMoviesData = [
  {
    id: 1,
    rank: 1,
    title: "Mỹ Nhân Ngư",
    englishTitle: "The Toxic Avenger",
    poster: imgPosterFilmAdulthood,
    ageRating: "PĐ.18",
    category: "TM.16",
    episodeInfo: "T16 • Phần 1 • Tập 13"
  },
  {
    id: 2,
    rank: 2,
    title: "Thần Đèn ơi, Ước Đi",
    englishTitle: "The Toxic Avenger",
    poster: imgPosterFilmThanDen,
    ageRating: "PĐ.18",
    category: "TM.16",
    episodeInfo: "T16 • Phần 1 • Tập 13"
  },
  {
    id: 3,
    rank: 3,
    title: "Mỹ Nhân Ngư",
    englishTitle: "The Toxic Avenger",
    poster: imgPosterFilmKhongTamNhan,
    ageRating: "PĐ.18",
    category: "TM.16",
    episodeInfo: "T16 • Phần 1 • Tập 13"
  },
  {
    id: 4,
    rank: 4,
    title: "Thần Đèn ơi, Ước Đi",
    englishTitle: "The Toxic Avenger",
    poster: imgPosterFilmThanDen,
    ageRating: "PĐ.18",
    category: "TM.16",
    episodeInfo: "T16 • Phần 1 • Tập 13"
  },
  {
    id: 5,
    rank: 5,
    title: "Mỹ Nhân Ngư",
    englishTitle: "The Toxic Avenger",
    poster: imgPosterFilmMuaHe,
    ageRating: "PĐ.18",
    category: "TM.16",
    episodeInfo: "T16 • Phần 1 • Tập 13"
  },
  {
    id: 6,
    rank: 6,
    title: "Thần Đèn ơi, Ước Đi",
    englishTitle: "The Toxic Avenger",
    poster: imgPosterFilmThanDen,
    ageRating: "PĐ.18",
    category: "TM.16",
    episodeInfo: "T16 • Phần 1 • Tập 13"
  },
  {
    id: 7,
    rank: 7,
    title: "Mỹ Nhân Ngư",
    englishTitle: "The Toxic Avenger",
    poster: imgPosterFilmAdulthood,
    ageRating: "PĐ.18",
    category: "TM.16",
    episodeInfo: "T16 • Phần 1 • Tập 13"
  },
  {
    id: 8,
    rank: 8,
    title: "Thần Đèn ơi, Ước Đi",
    englishTitle: "The Toxic Avenger",
    poster: imgPosterFilmConjuring,
    ageRating: "PĐ.18",
    category: "TM.16",
    episodeInfo: "T16 • Phần 1 • Tập 13"
  },
  {
    id: 9,
    rank: 9,
    title: "Mỹ Nhân Ngư",
    englishTitle: "The Toxic Avenger",
    poster: imgPosterFilmKhongTamNhan,
    ageRating: "PĐ.18",
    category: "TM.16",
    episodeInfo: "T16 • Phần 1 • Tập 13"
  },
  {
    id: 10,
    rank: 10,
    title: "Thần Đèn ơi, Ước Đi",
    englishTitle: "The Toxic Avenger",
    poster: imgPosterFilmMuaHe,
    ageRating: "PĐ.18",
    category: "TM.16",
    episodeInfo: "T16 • Phần 1 • Tập 13"
  }
];

const TopMoviesList = ({ 
  title = "Top 10 phim bộ hôm nay",
  data = defaultTopMoviesData,
  showAllRanks = true,
  isRedirect = false,
  onRedirect
}) => {
  const handleRedirectClick = () => {
    if (onRedirect && typeof onRedirect === 'function') {
      onRedirect();
    }
  };

  return (
    <section className="top-movies-section">
      <div className="container">
        <div className="top-movies-header">
          <h2 className="top-movies-title">{title}</h2>
          {isRedirect && (
            <button className="top-movies-redirect" onClick={handleRedirectClick}>
              <IoChevronForward className="redirect-icon" />
            </button>
          )}
        </div>
        <div className="movies-carousel">
          <div className="movies-grid">
            {data.map((movie) => (
              <TopMovieCard 
                key={movie.id} 
                movie={movie} 
                showAllRanks={showAllRanks}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopMoviesList;

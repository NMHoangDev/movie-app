import React from "react";
import MovieList from "../MovieList/MovieList";
import { sampleMoviesData } from "../../data/sampleMoviesData";
import "./MovieSection.style.css";
import CinematicSection from "../CinematicSection/CinematicSection";

const MovieSection = () => {
  return (
    <div className="movie-section">
      <div className="movie-section-container">
        <MovieList
          title="Phim Điện Ảnh Mới"
          data={sampleMoviesData}
          isRedirect={true}
        />
        <CinematicSection />

        <MovieList
          title="Phim Nhật Mới Oanh Tạc Chốn Này"
          data={sampleMoviesData}
          isRedirect={true}
        />

        <MovieList
          title="Phim Thái New: Không Drama Đời Không Nể"
          data={sampleMoviesData}
          isRedirect={true}
        />

        <MovieList
          title="Điện Ảnh Hồng Kông ở Chỗ Này Này"
          data={sampleMoviesData}
          isRedirect={true}
        />

        <MovieList
          title="Tôi Sợ Con Người Em Rồi Đó, nhưng Không Bằng Sợ Ma"
          data={sampleMoviesData}
          isRedirect={true}
        />

        <MovieList
          title="Đường về nhà là vào tim ta..."
          data={sampleMoviesData}
          isRedirect={true}
        />
      </div>
    </div>
  );
};

export default MovieSection;

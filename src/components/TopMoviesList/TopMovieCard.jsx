import React from 'react';
import './TopMovieCard.style.css';

const TopMovieCard = ({ movie, showAllRanks = true }) => {
  const shouldShowRank = showAllRanks || movie.id % 2 === 1;
  
  return (
    <div className="top-movie-card">
      <div className="poster-container">
        <img 
          src={movie.poster} 
          alt={movie.title}
          className="movie-poster"
        />
        <div className="rating-labels">
          {movie.ageRating && (
            <div className="age-rating">
              {movie.ageRating}
            </div>
          )}
          {movie.category && (
            <div className="category-rating">
              {movie.category}
            </div>
          )}
        </div>
      </div>
      <div className="movie-info">
        <div className="movie-details">
          {shouldShowRank && <div className="rank-number">{movie.rank}</div>}
          <div className="text-content">
            <h3 className="movie-title">{movie.title}</h3>
            <p className="movie-subtitle">{movie.englishTitle}</p>
            <p className="episode-info">{movie.episodeInfo}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopMovieCard;

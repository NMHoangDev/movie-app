import React, { memo } from 'react';
import { IoChevronForward } from 'react-icons/io5';
import MovieCard from './MovieCard';
import './styles/MovieList.style.css';

const MovieList = memo(({ title, data = [], isRedirect = false, onRedirect }) => {
  const handleRedirectClick = () => {
    if (onRedirect && typeof onRedirect === 'function') {
      onRedirect();
    }
  };

  return (
    <div className="movie-list">
      <div className="movie-list-header">
        <h2 className="movie-list-title">{title}</h2>
        {isRedirect && (
          <button className="movie-list-redirect" onClick={handleRedirectClick}>
            <IoChevronForward className="redirect-icon" />
          </button>
        )}
      </div>
      
      <div className="movie-list-container">
        <div className="movie-list-scroll">
          {data.map((movie, index) => (
            <MovieCard key={movie.id || index} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
});

MovieList.displayName = 'MovieList';

export default MovieList;

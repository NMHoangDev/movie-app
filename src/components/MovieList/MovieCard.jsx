import React, { memo } from 'react';
import './styles/MovieCard.style.css';

const MovieCard = memo(({ movie }) => {
  const { 
    title, 
    subtitle, 
    image, 
    ageRating, 
    category 
  } = movie;

  return (
    <div className="movie-card">
      <div className="movie-card-image-container">
        <img 
          src={image} 
          alt={title}
          className="movie-card-image"
          loading="lazy"
        />
        
        {(ageRating || category) && (
          <div className="movie-card-badges">
            {ageRating && (
              <div className="movie-card-age-rating">
                {ageRating}
              </div>
            )}
            {category && (
              <div className="movie-card-category">
                {category}
              </div>
            )}
          </div>
        )}
      </div>
      
      <div className="movie-card-content">
        <h3 className="movie-card-title">{title}</h3>
        {subtitle && (
          <p className="movie-card-subtitle">{subtitle}</p>
        )}
      </div>
    </div>
  );
});

MovieCard.displayName = 'MovieCard';

export default MovieCard;

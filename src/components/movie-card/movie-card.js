import React from "react";
import "../../styles.css";

function MovieCard(props) {
  const { movie } = props;

  const handleError = (e) => {
    e.target.src = "images/default.jpg";
  };

  const getRatingClass = (rating) => {
    if (rating >= 8) {
      return "rating-good";
    } else if (rating >= 5 && rating < 8) {
      return "rating-ok";
    }
    return "rating-bad";
  };

  return (
    <div key={movie.id} className="movie-card">
      <img
        alt={movie.title}
        src={`images/${movie.image}`}
        onError={handleError}
      />
      <div className="movie-card-info">
        <h3 className="movie-card-title">{movie.title}</h3>
        <p className="movie-card-genre">{movie.genre}</p>
        <p className={`movie-card-rating ${getRatingClass(movie.rating)}`}>
          {movie.rating}
        </p>
      </div>
    </div>
  );
}

export default MovieCard;

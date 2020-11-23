import React from "react";
import movieListProps from "./movie-list.props";

const MovieList = ({movies, activeMovieID, renderSmallMovieCard, renderSmallVideoPlayer}) => (
  <div className="catalog__movies-list">
    {
      movies.map((movie, key) => {
        return (
          activeMovieID !== movie.id
            ? renderSmallMovieCard(movie, movie.id, key)
            : renderSmallVideoPlayer(movie, movie.id, key)
        );
      })
    }
  </div>
);

MovieList.propTypes = movieListProps;

export default MovieList;

import React from "react";
import movieListProps from "./movie-list.props";

const MovieList = ({movies, activeMovieID, renderSmallMovieCard, renderSmallVideoPlayer}) => (
  <div className="catalog__movies-list">
    {
      movies.map((movie) => {
        return (
          activeMovieID !== movie.id
            ? renderSmallMovieCard(movie, movie.id)
            : renderSmallVideoPlayer(movie, movie.id)
        );
      })
    }
  </div>
);

MovieList.propTypes = movieListProps;

export default MovieList;

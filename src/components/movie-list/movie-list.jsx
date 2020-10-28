import React from "react";
import {typesMap} from "../../prop-types/prop-types";

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

MovieList.propTypes = {
  activeMovieID: typesMap.activeMovieID,
  renderSmallMovieCard: typesMap.renderSmallMovieCard,
  renderSmallVideoPlayer: typesMap.renderSmallVideoPlayer,
  movies: typesMap.movies
};

export default MovieList;

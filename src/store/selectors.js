import {createSelector} from "reselect";
import {DEFAULT_GENRE} from "../const";

const getFilteredMovies = createSelector(
    (state) => state.movies,
    (state) => state.currentGenre,
    (movies, currentGenre) => {
      if (currentGenre === DEFAULT_GENRE) {
        return movies;
      }
      return movies.filter((movie) => movie.genre === currentGenre);
    });

export {getFilteredMovies};

import {DEFAULT_GENRE} from "../const";

const filterMovies = (movies, currentFilter) => {
  if (currentFilter === DEFAULT_GENRE) {
    return movies;
  }
  return movies.filter((movie) => movie.genre === currentFilter);
};

export {filterMovies};

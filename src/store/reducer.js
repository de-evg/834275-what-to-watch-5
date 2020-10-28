import {movies} from "../mocks/movies";
import {promoMovie} from "../mocks/promo";
import {filterMovies} from "../utils/filter";
import {getGenres} from "../utils/movies";
import {ActionType} from "./action";
import {DEFAULT_GENRE, DEFAULT_MOVIES_COUNT} from "../const";

const initialState = {
  currentGenre: DEFAULT_GENRE,
  movies: filterMovies(movies, DEFAULT_GENRE),
  genres: getGenres(movies),
  promo: promoMovie,
  showedMoviesCount: DEFAULT_MOVIES_COUNT
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.RESET:
      return Object.assign({}, state, initialState);

    case ActionType.CHANGE_GENRE_FILTER:
      return Object.assign({}, state, {currentGenre: action.payload});

    case ActionType.FILTER_MOVIES:
      const newMovies = filterMovies(movies, action.payload);
      return Object.assign({}, state, {movies: newMovies});
  }

  return state;
};

export {reducer};

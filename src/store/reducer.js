
import {promoMovie} from "../mocks/promo";
import {filterMovies} from "../utils/filter";
import {getGenres} from "../utils/movies";
import {ActionType} from "./action";
import {DEFAULT_GENRE} from "../const";
import {adaptServerToClient} from "../utils/adapter";

const initialState = {
  currentGenre: DEFAULT_GENRE,
  movies: [],
  filteredMovies: [],
  genres: [],
  promo: promoMovie
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.RESET:
      return Object.assign({}, state, initialState);

    case ActionType.CHANGE_GENRE_FILTER:
      return Object.assign({}, state, {currentGenre: action.payload});

    case ActionType.FILTER_MOVIES:
      const filteredMovies = filterMovies(state.movies, action.payload);
      return Object.assign({}, state, {filteredMovies});

    case ActionType.LOAD_MOVIES:
      const adaptedMovies = action.payload.map((movie) => adaptServerToClient(movie));
      const genres = getGenres(adaptedMovies);
      return Object.assign({}, state, {movies: adaptedMovies, genres, filteredMovies: adaptedMovies});
  }

  return state;
};

export {reducer};

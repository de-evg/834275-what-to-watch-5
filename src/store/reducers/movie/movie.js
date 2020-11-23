import {getGenres} from "../../../utils/movies";
import {ActionType} from "../../action";
import {DEFAULT_GENRE} from "../../../const";
import {adaptServerToClient} from "../../../utils/adapter";
import {updateMovies} from "../../../utils/movies";

const initialState = {
  currentGenre: DEFAULT_GENRE,
  movies: [],
  filteredMovies: [],
  genres: [],
  promo: {},
  movie: ``,
  movieIsLoaded: false
};

const movieData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.RESET:
      return Object.assign({}, state, initialState);

    case ActionType.CHANGE_GENRE_FILTER:
      return Object.assign({}, state, {currentGenre: action.payload});

    case ActionType.LOAD_MOVIES:
      const adaptedMovies = action.payload.map((movie) => adaptServerToClient(movie));
      const genres = getGenres(adaptedMovies);
      return Object.assign({}, state, {movies: adaptedMovies, genres, filteredMovies: adaptedMovies});

    case ActionType.LOAD_MOVIE:
      const loadedMovie = adaptServerToClient(action.payload);
      return Object.assign({}, state, {movie: loadedMovie, movieIsLoaded: true});

    case ActionType.LOAD_PROMO:
      const adaptedPromo = adaptServerToClient(action.payload);
      return Object.assign({}, state, {promo: adaptedPromo});

    case ActionType.UPDATE_MOVIE:
      const adaptedMovie = adaptServerToClient(action.payload);
      const updatedMovies = updateMovies(state.movies, adaptedMovie);
      return Object.assign({}, state, {movies: updatedMovies});

    case ActionType.CHANGE_PROMO_FAVORITE_STATUS:
      const {promo} = state;
      promo.isInWatchList = !state.promo.isInWatchList;
      return Object.assign({}, state, {promo});
  }

  return state;
};

export {movieData};

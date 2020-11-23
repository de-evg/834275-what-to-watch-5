import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../services/api";
import {movieData} from "./movie";
import {ActionType} from "../../action";
import {fetchMovieList, fetchMovie, fetchPromo, updateMovie} from "../../api-actions";
import {APIRoute} from "../../../const";
import {adaptServerToClient} from "../../../utils/adapter";
import {getGenres} from "../../../utils/movies";
import {DEFAULT_GENRE} from "../../../const";

const SERVER_URL = `https://5.react.pages.academy/wtw`;
const MOVIE_ID = 10;

const movieFromServer = {
  "id": 1,
  "name": `The Grand Budapest Hotel`,
  "poster_image": `img/the-grand-budapest-hotel-poster.jpg`,
  "preview_image": `img/the-grand-budapest-hotel.jpg`,
  "background_image": `img/the-grand-budapest-hotel-bg.jpg`,
  "background_color": `#ffffff`,
  "video_link": `https://some-link`,
  "preview_video_link": `https://some-link`,
  "description": `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
  "rating": 8.9,
  "scores_count": 240,
  "director": `Wes Andreson`,
  "starring": [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
  "run_time": 99,
  "genre": `Comedy`,
  "released": 2014,
  "is_favorite": false
};

const changeFavoriteStatus = (movie) => {
  movie.isInWatchList = !movie.isInWatchList;
  return movie;
};

const api = createAPI(() => {});

it(`Reducer without additional parameters should return initial state`, () => {
  expect(movieData(void 0, {})).toEqual({
    currentGenre: DEFAULT_GENRE,
    movies: [],
    filteredMovies: [],
    genres: [],
    promo: {},
    movie: ``,
    movieIsLoaded: false
  });
});

it(`Reducer should reset state`, () => {
  expect(movieData({
    currentGenre: `some genre`,
    movies: [adaptServerToClient(movieFromServer)],
    filteredMovies: [adaptServerToClient(movieFromServer)],
    genres: [`All genres`, `Comedy`],
    promo: adaptServerToClient(movieFromServer),
    movie: adaptServerToClient(movieFromServer),
    movieIsLoaded: true
  }, {
    type: ActionType.RESET
  })).toEqual({
    currentGenre: DEFAULT_GENRE,
    movies: [],
    filteredMovies: [],
    genres: [],
    promo: {},
    movie: ``,
    movieIsLoaded: false
  });
});

it(`Reducer should update movies`, () => {
  expect(movieData({
    movies: []
  }, {
    type: ActionType.LOAD_MOVIES,
    payload: [movieFromServer]
  })).toEqual({
    movies: [adaptServerToClient(movieFromServer)],
    filteredMovies: [adaptServerToClient(movieFromServer)],
    genres: getGenres([adaptServerToClient(movieFromServer)])
  });
});

it(`Reducer should update promo`, () => {
  expect(movieData({
    promo: {}
  }, {
    type: ActionType.LOAD_PROMO,
    payload: movieFromServer
  })).toEqual({
    promo: adaptServerToClient(movieFromServer)
  });
});

it(`Reducer should update movie`, () => {
  expect(movieData({
    movie: ``
  }, {
    type: ActionType.LOAD_MOVIE,
    payload: movieFromServer
  })).toEqual({
    movie: adaptServerToClient(movieFromServer),
    movieIsLoaded: true
  });
});

it(`Reducer should update favorite status in movie`, () => {
  expect(movieData({
    movies: []
  }, {
    type: ActionType.UPDATE_MOVIE,
    payload: movieFromServer
  })).toEqual({
    movies: [adaptServerToClient(movieFromServer)]
  });
});

it(`Reducer should change filter`, () => {
  expect(movieData({
    currentGenre: DEFAULT_GENRE,
  }, {
    type: ActionType.CHANGE_GENRE_FILTER,
    payload: `Comedy`
  })).toEqual({
    currentGenre: `Comedy`
  });
});

it(`Reducer should change favorite status in promo`, () => {
  expect(movieData({
    promo: adaptServerToClient(movieFromServer),
  }, {
    type: ActionType.CHANGE_PROMO_FAVORITE_STATUS
  })).toEqual({
    promo: changeFavoriteStatus(adaptServerToClient(movieFromServer))
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /films`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkFetchMovieList = fetchMovieList();

    apiMock
      .onGet(`${SERVER_URL}${APIRoute.FILMS}`)
      .reply(200, [movieFromServer]);

    return checkFetchMovieList(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_MOVIES,
          payload: [movieFromServer]
        });
      });
  });

  it(`Should make a correct API call to /films/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkFetchMovie = fetchMovie(MOVIE_ID);

    apiMock
      .onGet(`${SERVER_URL}${APIRoute.FILMS}/${MOVIE_ID}`)
      .reply(200, movieFromServer);

    return checkFetchMovie(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_MOVIE,
          payload: movieFromServer
        });
      });
  });

  it(`Should make a correct API call to /promo`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkFetchPromo = fetchPromo();

    apiMock
      .onGet(`${SERVER_URL}${APIRoute.PROMO}`)
      .reply(200, movieFromServer);

    return checkFetchPromo(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_PROMO,
          payload: movieFromServer
        });
      });
  });

  it(`Should make a correct API call to /films/:id for update movie`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkUpdateMovie = updateMovie(MOVIE_ID);

    apiMock
      .onGet(`${SERVER_URL}${APIRoute.FILMS}/${MOVIE_ID}`)
      .reply(200, movieFromServer);

    return checkUpdateMovie(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.UPDATE_MOVIE,
          payload: movieFromServer
        });
      });
  });
});

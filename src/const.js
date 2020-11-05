const DEFAULT_GENRE = `All genres`;
const DEFAULT_MOVIES_COUNT = 8;

const Rating = {
  BAD: `Bad`,
  NORMAL: `Normal`,
  GOOD: `Good`,
  VERY_GOOD: `Very good`,
  AWESOME: `Awesome`
};

const RatingRange = {
  BAD: 3,
  NORMAL: 5,
  GOOD: 8,
  VERY_GOOD: 10
};

const AuthorizationStatus = {
  NO_AUTH: `NO_AUTH`,
  AUTH: `AUTH`
};

const APIRoute = {
  FILMS: `/films`,
  FILM: `/films/:id`,
  PROMO: `films/promo`,
  FAVORITE: `/favorite`,
  CHANGE_FAVORITE: `/favorite/:film_id/:status`,
  COMMENTS: `/comments/:film_id`,
  LOGIN: `/login`,
};

const AppRoute = {
  ROOT: `/`,
  LOGIN: `/login`,
  MY_LIST: `/myList`
};

export {DEFAULT_GENRE, DEFAULT_MOVIES_COUNT, Rating, RatingRange, AuthorizationStatus, APIRoute, AppRoute};

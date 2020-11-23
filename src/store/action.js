const ActionType = {
  CHANGE_GENRE_FILTER: `CHANGE_GENRE_FILTER`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  LOAD_MOVIES: `LOAD_MOVIES`,
  SET_USER_INFO: `SET_USER_INFO`,
  LOAD_PROMO: `LOAD_PROMO`,
  SHOW_AUTHORIZATION_ERROR: `SHOW_AUTHORIZATION_ERROR`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  RESET_REVIEWS: `RESET_REVIEWS`,
  LOAD_MOVIE: `LOAD_MOVIE`,
  UPDATE_MOVIE: `UPDATE_MOVIE`,
  CHANGE_PROMO_FAVORITE_STATUS: `CHANGE_PROMO_FAVORITE_STATUS`,
};

const ActionCreator = {
  changeFilter: (filter) => ({
    type: ActionType.CHANGE_GENRE_FILTER,
    payload: filter
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status
  }),
  loadMovies: (movies) => ({
    type: ActionType.LOAD_MOVIES,
    payload: movies
  }),
  loadMovie: (movie) => ({
    type: ActionType.LOAD_MOVIE,
    payload: movie
  }),
  updateMovie: (movie) => ({
    type: ActionType.UPDATE_MOVIE,
    payload: movie
  }),
  setUserInfo: (userInfo) => ({
    type: ActionType.SET_USER_INFO,
    payload: userInfo
  }),
  loadPromo: (promo) => ({
    type: ActionType.LOAD_PROMO,
    payload: promo
  }),
  showAuthrizationError: () => ({
    type: ActionType.SHOW_AUTHORIZATION_ERROR
  }),
  loadReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews
  }),
  resetReviews: () => ({
    type: ActionType.RESET_REVIEWS
  }),
  changePromoFavoriteStatus: () => ({
    type: ActionType.CHANGE_PROMO_FAVORITE_STATUS
  })
};

export {ActionType, ActionCreator};

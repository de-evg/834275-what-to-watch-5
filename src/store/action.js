const ActionType = {
  CHANGE_GENRE_FILTER: `CHANGE_GENRE_FILTER`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  LOAD_MOVIES: `LOAD_MOVIES`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  ON_SUCCESS_AUTHORIZATION: `ON_SUCCESS_AUTHORIZATION`
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
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url
  }),
  onSuccessAuthorization: (userInfo) => ({
    type: ActionType.ON_SUCCESS_AUTHORIZATION,
    payload: userInfo
  })
};

export {ActionType, ActionCreator};

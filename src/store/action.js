const ActionType = {
  CHANGE_GENRE_FILTER: `CHANGE_GENRE_FILTER`,
  FILTER_MOVIES: `FILTER_MOVIES`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  LOAD_MOVIES: `LOAD_MOVIES`
};

const ActionCreator = {
  changeFilter: (filter) => ({
    type: ActionType.CHANGE_GENRE_FILTER,
    payload: filter
  }),
  filterMovies: (filter) => ({
    type: ActionType.FILTER_MOVIES,
    payload: filter
  }),
  requireAuthorization: () => ({
    type: ActionType.REQUIRED_AUTHORIZATION
  }),
  loadMovies: (movies) => ({
    type: ActionType.LOAD_MOVIES,
    payload: movies
  })
};

export {ActionType, ActionCreator};

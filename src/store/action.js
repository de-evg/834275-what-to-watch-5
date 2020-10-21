const ActionType = {
  CHANGE_GENRE_FILTER: `CHANGE_GENRE_FILTER`,
  FILTER_MOVIES: `FILTER_MOVIES`
};

const ActionCreator = {
  changeFilter: (filter) => ({
    type: ActionType.CHANGE_GENRE_FILTER,
    payload: filter
  }),
  filterMovies: (filter) => ({
    type: ActionType.FILTER_MOVIES,
    payload: filter
  })
};

export {ActionType, ActionCreator};

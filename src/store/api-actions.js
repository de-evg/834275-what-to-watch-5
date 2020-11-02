import {ActionCreator} from "./action";
import {APIRoute} from "../const";

const fetchMovieList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(
        ({data}) => dispatch(ActionCreator.loadMovies(data))
    )
);

const checkAuth = (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(
        (auth) => dispatch(ActionCreator.requireAuthorization[auth])
    )
);

export {fetchMovieList, checkAuth};

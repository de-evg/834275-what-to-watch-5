import {ActionCreator} from "./action";
import {APIRoute, AuthorizationStatus, AppRoute} from "../const";

const fetchMovieList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(
        ({data}) => dispatch(ActionCreator.loadMovies(data))
    )
);

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then((response) => dispatch(ActionCreator.setUserInfo(response.data)))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)))
);

const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then((response) => dispatch(ActionCreator.setUserInfo(response.data)))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(()=> dispatch(ActionCreator.redirectToRoute(AppRoute.MY_LIST)))
);

export {fetchMovieList, checkAuth, login};

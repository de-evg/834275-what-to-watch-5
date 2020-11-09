import {ActionCreator} from "./action";
import {APIRoute, AuthorizationStatus} from "../const";

const fetchMovieList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(
        ({data}) => dispatch(ActionCreator.loadMovies(data))
    )
);

const fetchPromo = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO)
    .then(
        ({data}) => dispatch(ActionCreator.loadPromo(data))
    )
);

const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}/${id}`)
    .then(
        ({data}) => dispatch(ActionCreator.loadReviews(data))
    )
);

const changeFavoriteStatus = (id, status) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE}/${id}/${status}`)
    .then(({data}) => dispatch(ActionCreator.loadMovie(data)))
);

const postReview = (id, body) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.COMMENTS}/${id}`, body)
    .then(({data}) => dispatch(ActionCreator.loadReviews(data)))
);

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then((response) => dispatch(ActionCreator.setUserInfo(response.data)))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch((err) => {
      Promise.reject(err.response);
    })
);

const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then((response) => dispatch(ActionCreator.setUserInfo(response.data)))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
);

export {fetchMovieList, fetchPromo, fetchReviews, changeFavoriteStatus, postReview, checkAuth, login};

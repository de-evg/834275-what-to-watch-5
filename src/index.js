import React from "react";
import {render} from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import App from "./components/app/app";
import Error from "./components/error/error";
import root from "./store/reducers/root";
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import {ActionCreator} from "./store/action";
import {AuthorizationStatus} from "./const";
import {fetchMovieList, checkAuth, fetchPromo} from "./store/api-actions";

const api = createAPI(
    () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)),
    () => store.dispatch(ActionCreator.showAuthrizationError())
);

const store = createStore(
    root,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

Promise.all([
  store.dispatch(fetchMovieList()),
  store.dispatch(fetchPromo()),
  store.dispatch(checkAuth())
])
  .then(() => {
    render(
        <Provider store={store}>
          <App />
        </Provider>,
        document.getElementById(`root`)
    );
  })
  .catch(() => {
    render(
        <Error />,
        document.getElementById(`root`)
    );
  });



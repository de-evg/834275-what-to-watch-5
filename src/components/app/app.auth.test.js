import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {App} from "./app";

describe(`Render App`, () => {
  const mockStore = configureStore([]);
  let store = null;
  let AppComponent = null;

  beforeEach(() => {
    store = mockStore({
      DATA: {
        currentGenre: `All genres`,
        movies: [],
        filteredMovies: [],
        genres: [],
        promo: {
          title: ``,
          genre: ``,
          release: 0,
          posterURL: ``,
          previewURL: ``,
          id: 0,
          isInWatchList: false
        },
        movie: ``,
        movieIsLoaded: false
      },
      REVIEW: {
        reviews: []
      },
      USER: {
        authorizationStatus: `AUTH`,
        userID: ``,
        userName: ``,
        userAvatar: ``,
        userEmail: ``,
        authError: false
      }
    });

    store.dispatch = jest.fn();

    AppComponent = renderer
        .create(
            <Provider store={store}>
              <App
                authorizationStatus={``}
              />)
            </Provider>
        );
  });

  it(`Should App connected to store render correctly`, () => {
    expect(AppComponent.toJSON()).toMatchSnapshot();
  });
});


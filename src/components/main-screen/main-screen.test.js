import React from "react";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import renderer from "react-test-renderer";
import {MainScreen} from "./main-screen";
import {BrowserRouter} from "react-router-dom";

const SHOWED_MOVIES_COUNT = 8;

describe(`Render MainScreen`, () => {
  const mockStore = configureStore([]);
  let store = null;
  let MainScreenComponent = null;

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

    MainScreenComponent = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <MainScreen
                filteredMovies={[]}
                promo={{
                  title: ``,
                  genre: ``,
                  release: 0,
                  posterURL: ``,
                  previewURL: ``,
                  id: 0,
                  isInWatchList: false
                }}
                currentGenre={``}
                genres={[]}
                showedMoviesCount={SHOWED_MOVIES_COUNT}
                authorizationStatus={``}
                onShowMoreClick={() => {}}
                onGenreFilterChange={() => {}}
                resetShowedMovies={() => {}}
                onFavoriteStatusChange={() => {}}
              />
            </BrowserRouter>
          </Provider>
      );
  });

  it(`Should MainScreen connected to store render correctly`, () => {
    expect(MainScreenComponent.toJSON()).toMatchSnapshot();
  });
});

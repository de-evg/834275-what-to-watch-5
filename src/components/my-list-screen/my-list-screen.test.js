import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {MyListScreen} from "./my-list-screen";
import {BrowserRouter} from "react-router-dom";

describe(`Render MyListScreen`, () => {
  const mockStore = configureStore([]);
  let store = null;
  let MyListScreenComponent = null;

  const movie = {
    id: 0,
    title: `The Grand Budapest`,
    genre: `Horror`,
    release: 2014,
    posterURL: `/img/the-grand-budapest-hotel-poster.jpg`,
    previewURL: `/img/bg-the-grand-budapest-hotel.jpg`,
    rating: `8,9`,
    ratingLevel: `Good`,
    ratingCount: 10,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege. Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
    director: `Wes Andreson`,
    actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    videoURL: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    isInWatchList: Math.random() <= 1,
    runTime: 146
  };

  const movies = [movie];

  beforeEach(() => {
    store = mockStore({
      MOVIE: {
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
      REVIEWS: {
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

    MyListScreenComponent = renderer
        .create(
            <Provider store={store}>
              <BrowserRouter>
                <MyListScreen
                  movies={movies}
                />)
              </BrowserRouter>
            </Provider>
        );
  });

  it(`Should MyListScreen connected to store render correctly`, () => {
    expect(MyListScreenComponent.toJSON()).toMatchSnapshot();
  });
});


import React from "react";
import {BrowserRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import {MainScreen} from "./main-screen";

const SHOWED_MOVIES_COUNT = 8;

describe(`Render MainScreen`, () => {
  it(`Render MainScreen`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <MainScreen
              filteredMovies={[]}
              promo={
                {
                  title: ``,
                  genre: ``,
                  release: 0,
                  posterURL: ``,
                  previewURL: ``,
                  id: 0,
                  isInWatchList: false
                }
              }
              currentGenre={``}
              genres={[]}
              showedMoviesCount={SHOWED_MOVIES_COUNT}
              authorizationStatus={`AUTH`}
              onShowMoreClick={() => {}}
              onGenreFilterChange={() => {}}
              resetShowedMovies={() => {}}
              onFavoriteStatusChange={() => {}}
            />
          </BrowserRouter>, {
            createNodeMock: () => {}
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {MainScreen} from "./main-screen";

const SHOWED_MOVIES_COUNT = 8;
const ID = 0;
const RELEASE = 2000;

configure({adapter: new Adapter()});

it(`on favorite btn click`, () => {
  const handleShowMoreClick = jest.fn();
  const handleGenreFilterChange = jest.fn();
  const handleShowedMoviesReset = jest.fn();
  const handleFavoriteStatusChange = jest.fn();
  const component = shallow(<MainScreen
    filteredMovies={[]}
    promo={{
      title: ``,
      genre: ``,
      release: RELEASE,
      posterURL: ``,
      previewURL: ``,
      id: ID,
      isInWatchList: false
    }}
    currentGenre={``}
    genres={[]}
    showedMoviesCount={SHOWED_MOVIES_COUNT}
    authorizationStatus={`AUTH`}
    onShowMoreClick={handleShowMoreClick}
    onGenreFilterChange={handleGenreFilterChange}
    resetShowedMovies={handleShowedMoviesReset}
    onFavoriteStatusChange={handleFavoriteStatusChange}
  />);

  const promoFavoriteBtn = component.find(`button.movie-card__button`);
  promoFavoriteBtn.simulate(`click`);
  expect(handleFavoriteStatusChange).toHaveBeenCalledTimes(1);
});

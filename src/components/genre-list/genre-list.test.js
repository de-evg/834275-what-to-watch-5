import React from "react";
import renderer from "react-test-renderer";
import GenreList from "./genre-list";
import {DEFAULT_GENRE} from "../../const";

const genres = new Array(10).fill(`genre`);

it(`Should GenreList render correctly`, () => {
  const tree = renderer
    .create(<GenreList
      currentGenre={DEFAULT_GENRE}
      genres={genres}
      onGenreFilterChange={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

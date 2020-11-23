import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Genre from "./genre";

const DEFAULT_GENRE = `Comedy`;
const ID = 0;

configure({adapter: new Adapter()});

it(`on genre filter change`, () => {
  const handleGenreChange = jest.fn();
  const component = shallow(<Genre
    genre={DEFAULT_GENRE}
    isActive={false}
    onGenreFilterChange={handleGenreChange}
  />);

  const genre = component.find(`a`);
  genre.simulate(`click`, {
    preventDefault: () => {},
    target: {ID}
  });

  expect(handleGenreChange).toHaveBeenCalledTimes(1);
});

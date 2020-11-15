import React from "react";
import renderer from "react-test-renderer";
import Details from "./details";

it(`Should NavItem render correctly`, () => {
  const tree = renderer
    .create(<Details
      movie={{release: null, genre: ``, runTime: null, director: ``, actors: []}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

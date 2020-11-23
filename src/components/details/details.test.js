import React from "react";
import renderer from "react-test-renderer";
import Details from "./details";

it(`Should Details render correctly`, () => {
  const tree = renderer
    .create(<Details
      movie={{release: 0, genre: ``, runTime: 0, director: ``, actors: []}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

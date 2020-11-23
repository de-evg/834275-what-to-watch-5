import React from "react";
import renderer from "react-test-renderer";
import ShowMore from "./show-more";

it(`Should ShowMore render correctly`, () => {
  const tree = renderer
    .create(<ShowMore
      onClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

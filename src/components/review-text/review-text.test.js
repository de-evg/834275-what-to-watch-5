import React from "react";
import renderer from "react-test-renderer";
import ReviewText from "./review-text";

it(`Should ReviewText render correctly`, () => {
  const tree = renderer
    .create(<ReviewText
      value={`Some value`}
      onTextInput={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

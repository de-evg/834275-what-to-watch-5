import React from "react";
import renderer from "react-test-renderer";
import RatingStars from "./rating-stars";


it(`Should RatingStars unactive render correctly`, () => {
  const tree = renderer
    .create(<RatingStars
      activeStar={`star-0`}
      onRatingInputChange={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

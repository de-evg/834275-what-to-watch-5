import React from "react";
import renderer from "react-test-renderer";
import Review from "./review";

const movieReview = {
  text: `Some text`,
  date: new Date(),
  author: `Author Name`,
  userRating: `10`
};

it(`Should Review render correctly`, () => {
  const tree = renderer
    .create(<Review
      movieReview={movieReview}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

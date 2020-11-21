import React from "react";
import renderer from "react-test-renderer";
import Review from "./review";

const movieReview = {
  text: `Some text`,
  date: new Date(`2019-05-08T14:13:56.569Z`),
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

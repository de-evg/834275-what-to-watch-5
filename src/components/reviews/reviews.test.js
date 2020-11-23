import React from "react";
import renderer from "react-test-renderer";
import Reviews from "./reviews";

const movieReview = {
  text: `Some text`,
  date: new Date(`2019-05-08T14:13:56.569Z`),
  author: `Author Name`,
  userRating: `10`
};

const movieReviews = new Array(10).fill(movieReview);

it(`Should Reviews render correctly`, () => {
  const tree = renderer
    .create(<Reviews
      movieReviews={movieReviews}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

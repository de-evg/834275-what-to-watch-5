import React from "react";
import renderer from "react-test-renderer";
import RatingStar from "./rating-star";


it(`Should RatingStar active render correctly`, () => {
  const tree = renderer
    .create(<RatingStar
      starId={`star-0`}
      starValue={1}
      isActive={true}
      onRatingInputChange={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

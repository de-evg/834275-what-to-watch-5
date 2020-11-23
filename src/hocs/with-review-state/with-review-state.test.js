import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withReviewState from "./with-review-state";

const noop = () => {};

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const MockComponentHOC = withReviewState(MockComponent);

it(`withReviewState is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentHOC
      textReview={`Some text`}
      rating={`10`}
      onReviewReset={noop}
      renderRatingStars={noop}
    >
      <React.Fragment />
    </MockComponentHOC>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});

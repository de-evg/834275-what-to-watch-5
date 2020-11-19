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

const MockComponentWrapped = withReviewState(MockComponent);

it(`withReviewState is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      textReview={`Some text`}
      rating={`10`}
      onReviewReset={noop}
      renderRatingStars={noop}
    >
      <React.Fragment />
    </MockComponentWrapped>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});

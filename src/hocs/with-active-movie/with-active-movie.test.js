import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withActiveMovie from "./with-active-movie";

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

const MockComponentHOC = withActiveMovie(MockComponent);

it(`withActiveMovie is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentHOC
      activeMovieID={0}
      renderSmallVideoPlayer={noop}
      renderSmallMovieCard={noop}
    >
      <React.Fragment />
    </MockComponentHOC>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});

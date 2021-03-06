import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withShowMoreCount from "./with-show-more-count";
const SHOW_MORE_STEP = 8;

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

const MockComponentHOC = withShowMoreCount(MockComponent);

it(`withShowMoreCount is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentHOC
      onShowMoreClick={noop}
      resetShowedMovies={noop}
      showedMoviesCount={SHOW_MORE_STEP}
    >
      <React.Fragment />
    </MockComponentHOC>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});

import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withActiveTab from "./with-active-tab";
const DEFAULT_ACTIVE = `Overview`;

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

const MockComponentHOC = withActiveTab(MockComponent);

it(`withActiveTab is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentHOC
      activeNavItem={DEFAULT_ACTIVE}
      handleNavItemChange={noop}
    >
      <React.Fragment />
    </MockComponentHOC>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});

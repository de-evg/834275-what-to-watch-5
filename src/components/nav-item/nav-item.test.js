import React from "react";
import renderer from "react-test-renderer";
import NavItem from "./nav-item";

it(`Should NavItem render correctly`, () => {
  const tree = renderer
    .create(<NavItem
      onNavItemChange={() => {}}
      isActive={Math.random < 0.5}
      title={`Overview`}
    />, {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});

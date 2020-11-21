import React from "react";
import renderer from "react-test-renderer";
import NavItem from "./nav-item";

const DEFAULT_TITLE = `Overview`;

it(`Should NavItem render correctly`, () => {
  const tree = renderer
    .create(<NavItem
      onNavItemChange={() => {}}
      isActive={Math.random < 0.5}
      title={DEFAULT_TITLE}
    />, {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});

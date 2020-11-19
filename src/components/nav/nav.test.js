import React from "react";
import renderer from "react-test-renderer";
import Nav from "./nav";

import {NAV_ITEMS} from "../../const";

it(`Should Nav render correctly`, () => {
  const tree = renderer
    .create(<Nav
      navItems={NAV_ITEMS}
      activeItem={`Overview`}
      onNavItemChange={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

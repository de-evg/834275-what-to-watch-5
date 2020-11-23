import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NavItem from "./nav-item";

const DEFAULT_TITLE = `Overview`;

configure({adapter: new Adapter()});

it(`on nav item change`, () => {
  const handleNavItemChange = jest.fn();
  const component = shallow(<NavItem
    onNavItemChange={handleNavItemChange}
    isActive={Math.random() < 0.5}
    title={DEFAULT_TITLE}
  />);

  const navItemLink = component.find(`a.movie-nav__link`);
  navItemLink.simulate(`click`, {
    preventDefault: () => {}
  });
  expect(handleNavItemChange).toHaveBeenCalledTimes(1);
});

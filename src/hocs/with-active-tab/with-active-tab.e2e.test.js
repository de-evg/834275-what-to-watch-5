import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withActiveTab from "./with-active-tab";

const DEFAULT_ACTIVE = `Overview`;

const MockComponent = () => <div />;
const MockComponentHOC = withActiveTab(MockComponent);

configure({adapter: new Adapter()});

it(`should activeNavItem eq Overview`, () => {
  const wrapper = shallow(<MockComponentHOC />);
  expect(wrapper.props().activeNavItem).toEqual(DEFAULT_ACTIVE);
});


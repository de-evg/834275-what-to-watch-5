import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withShowMoreCount from "./with-show-more-count";

const SHOW_MORE_STEP = 8;

const MockComponent = () => <div className={`component`} />;
const MockComponentHOC = withShowMoreCount(MockComponent);

configure({adapter: new Adapter()});

it(`should showedMoviesCount eq 8`, () => {
  const wrapper = shallow(<MockComponentHOC />);
  expect(wrapper.props().showedMoviesCount).toEqual(SHOW_MORE_STEP);
});

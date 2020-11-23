import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withReviewState from "./with-review-state";

const MockComponent = () => <div />;
const MockComponentHOC = withReviewState(MockComponent);

configure({adapter: new Adapter()});

describe(`state review`, () => {
  it(`should textReview eq ""`, () => {
    const wrapper = shallow(<MockComponentHOC />);
    expect(wrapper.state().textReview).toEqual(``);
  });

  it(`should rating eq ""`, () => {
    const wrapper = shallow(<MockComponentHOC />);
    expect(wrapper.state().rating).toEqual(``);
  });
});

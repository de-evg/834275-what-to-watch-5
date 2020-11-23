import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ReviewText from "./review-text";

const TEXTAREA = {
  VALUE: `some text`,
  NEW_VALUE: `new some text`
};

configure({adapter: new Adapter()});

it(`on text review change`, () => {
  const handleReviewTextChange = jest.fn();
  const component = shallow(<ReviewText
    value={TEXTAREA.VALUE}
    onTextInput={handleReviewTextChange}
  />);

  component.simulate(`input`, {
    target: {
      value: TEXTAREA.NEW_VALUE
    }
  });
  expect(handleReviewTextChange).toHaveBeenCalledTimes(1);
});

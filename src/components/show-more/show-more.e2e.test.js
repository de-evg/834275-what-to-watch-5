import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ShowMore from "./show-more";

configure({adapter: new Adapter()});

it(`on show more btn click`, () => {
  const handleButtonClick = jest.fn();
  const component = shallow(<ShowMore
    onClick={handleButtonClick}
  />);

  const showMoreBtn = component.find(`button.catalog__button`);
  showMoreBtn.simulate(`click`);
  expect(handleButtonClick).toHaveBeenCalledTimes(1);
});

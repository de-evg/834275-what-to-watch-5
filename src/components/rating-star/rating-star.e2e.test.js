import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import RatingStar from "./rating-star";

const STAR = {
  VALUE: 1,
  ID: `star-0`,
  ACTIVE: false
};

configure({adapter: new Adapter()});

it(`on rating star change`, () => {
  const handleActiveStarChange = jest.fn();
  const component = shallow(<RatingStar
    starId={STAR.ID}
    starValue={STAR.VALUE}
    isActive={STAR.ACTIVE}
    onRatingInputChange={handleActiveStarChange}
  />);

  const star = component.find(`input.rating__input`);
  star.simulate(`change`, {
    preventDefault: () => {},
    target: {
      value: STAR.VALUE
    }
  });
  expect(handleActiveStarChange).toHaveBeenCalledTimes(1);
});

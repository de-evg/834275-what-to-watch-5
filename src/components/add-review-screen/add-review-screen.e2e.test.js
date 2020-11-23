import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {AddReviewScreen} from "./add-review-screen";

const TextReview = {
  MIN_LENGTH: ``,
  MAX_LENGTH: new Array(41).fill(`0123456789`).join(``),
  MIDDLE_LENGTH: new Array(20).fill(`0123456789`).join(``),
};

const mockEvent = {
  preventDefault() {}
};

configure({adapter: new Adapter()});

it(`On form submit`, () => {
  const handleFormSubmit = jest.fn();
  const screen = shallow(<AddReviewScreen
    match={
      {
        params: {id: ``}
      }
    }
    history={{
      push: () => {}
    }}
    renderRatingStars={() => {}}
    renderReviewText={() => {}}
    textReview={TextReview.MAX_LENGTH}
    rating={`5`}
    movie={
      {
        title: ``,
        previewURL: ``,
        posterURL: ``,
        id: 0
      }
    }
    user={
      {
        authorizationStatus: `AUTH`,
        userAvatar: ``,
        userID: 0,
        userName: ``,
        userEmail: ``,
        authError: false
      }
    }
    loadMovie={() => {}}
    onFormSubmit={handleFormSubmit}
  />);

  const reviewForm = screen.find(`form`);
  reviewForm.simulate(`submit`, mockEvent);
  expect(handleFormSubmit).toHaveBeenCalledTimes(1);
});

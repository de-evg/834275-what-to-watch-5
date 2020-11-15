import React from "react";
import {BrowserRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import {AddReviewScreen} from "./add-review-screen";

const TextReview = {
  MIN_LENGTH: ``,
  MAX_LENGTH: new Array(41).fill(`0123456789`).join(``)
};

describe(`Render AddReviewScreen`, () => {
  it(`Should AddreviewScreen with disabled submit button render correctly`, () => {
    const tree = renderer
      .create(<BrowserRouter>
        <AddReviewScreen
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
          textReview={TextReview.MIN_LENGTH}
          rating={``}
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
          onReviewReset={() => {}}
          onFormSubmit={() => {}}
        />
      </BrowserRouter>, {
        createNodeMock: () => {
          return {};
        }
      })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

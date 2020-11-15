import React from "react";
import {BrowserRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import {AddReviewScreen} from "./add-review-screen";

const TextReview = {
  MIN_LENGTH: ``,
  MAX_LENGTH: new Array(41).fill(`0123456789`).join(``),
  MIDDLE_LENGTH: new Array(20).fill(`0123456789`).join(``),
};

describe(`Render AddReviewScreen`, () => {
  it(`Should AddreviewScreen with disabled (min length) submit button render correctly`, () => {
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

  it(`Should AddreviewScreen with disabled (max length) submit button render correctly`, () => {
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
          textReview={TextReview.MAX_LENGTH}
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

  it(`Should AddreviewScreen with enabled submit button render correctly`, () => {
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
          textReview={TextReview.MIDDLE_LENGTH}
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

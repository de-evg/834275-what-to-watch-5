import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../services/api";
import {reviewsData} from "./review";
import {ActionType} from "../../action";
import {fetchReviews} from "../../api-actions";
import {APIRoute} from "../../../const";
import {adaptReviewServerToClient} from "../../../utils/adapter";

const review = {
  id: 1,
  user: {
    id: 4,
    name: `Kate Muir`
  },
  rating: 8.9,
  comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
  date: `2019-05-08T14:13:56.569Z`
};

const api = createAPI(() => {});

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reviewsData(void 0, {})).toEqual({
    reviews: []
  });
});

it(`Reducer should reset reviews`, () => {
  expect(reviewsData({
    reviews: [adaptReviewServerToClient(review)]
  }, {
    type: ActionType.RESET_REVIEW,
  })).toEqual({
    reviews: []
  });
});

it(`Reducer should update reviews`, () => {
  expect(reviewsData({
    reviews: []
  }, {
    type: ActionType.LOAD_REVIEWS,
    payload: [review]
  })).toEqual({
    reviews: [adaptReviewServerToClient(review)]
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /comments`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const serverURL = `https://5.react.pages.academy/wtw`;
    const movieID = 10;
    const checkFetchReviews = fetchReviews(movieID);

    apiMock
      .onGet(`${serverURL}${APIRoute.COMMENTS}/${movieID}`)
      .reply(200, [review]);

    return checkFetchReviews(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: [review]
        });
      });
  });
});

import {ActionType} from "../action";
import {adaptReviewServerToClient} from "../../utils/adapter";

const initialState = {
  reviews: []
};

const reviewsData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.RESET_REVIEW:
      return Object.assign({}, state, initialState);

    case ActionType.LOAD_REVIEWS:
      const adaptedReviews = action.payload.map((review) => adaptReviewServerToClient(review));
      return Object.assign({}, state, {reviews: adaptedReviews});
  }

  return state;
};

export {reviewsData};

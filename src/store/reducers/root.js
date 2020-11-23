import {combineReducers} from "redux";
import {user} from "./user/user";
import {movieData} from "./movie-data/movie-data";
import {reviewsData} from "./reviews-data/reviews-data";

const NameSpace = {
  MOVIE: `MOVIE`,
  USER: `USER`,
  REVIEWS: `REVIEWS`
};

export {NameSpace};
export default combineReducers({
  [NameSpace.MOVIE]: movieData,
  [NameSpace.USER]: user,
  [NameSpace.REVIEWS]: reviewsData,
});

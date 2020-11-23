import {combineReducers} from "redux";
import {user} from "./user/user";
import {movieData} from "./movie/movie-data";
import {reviewsData} from "./review/reviews-data";

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

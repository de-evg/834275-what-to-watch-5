import {combineReducers} from "redux";
import {user} from "./user";
import {movieData} from "./movie";
import {reviewsData} from "./review";

const NameSpace = {
  DATA: `DATA`,
  USER: `USER`,
  REVIEW: `REVIEW`
};

export {NameSpace};
export default combineReducers({
  [NameSpace.DATA]: movieData,
  [NameSpace.USER]: user,
  [NameSpace.REVIEW]: reviewsData,
});

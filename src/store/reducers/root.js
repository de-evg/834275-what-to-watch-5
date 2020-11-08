import {combineReducers} from "redux";
import {user} from "./user";
import {gameData} from "./movie";
import {reviewsData} from "./review";

const NameSpace = {
  DATA: `DATA`,
  USER: `USER`,
  REVIEW: `REVIEW`
};

export {NameSpace};
export default combineReducers({
  [NameSpace.DATA]: gameData,
  [NameSpace.USER]: user,
  [NameSpace.REVIEW]: reviewsData,
});

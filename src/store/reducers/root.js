import {combineReducers} from "redux";
import {user} from "./user";
import {gameData} from "./movie-data";

const NameSpace = {
  DATA: `DATA`,
  USER: `USER`,
};

export {NameSpace};
export default combineReducers({
  [NameSpace.DATA]: gameData,
  [NameSpace.USER]: user,
});

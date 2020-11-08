import {AuthorizationStatus} from "../../const";
import {ActionType} from "../action";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userID: ``,
  userName: ``,
  userAvatar: ``,
  userEmail: ``,
  authError: false
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationStatus: action.payload,
      });
    case ActionType.SET_USER_INFO:
      return Object.assign({}, state, {
        userID: action.payload.id,
        userName: action.payload.name,
        userEmail: action.payload.email,
        userAvatar: action.payload.avatar_url,
        authError: false
      });
    case ActionType.SHOW_AUTHORIZATION_ERROR:
      return Object.assign({}, state, {
        authError: true
      });
  }

  return state;
};

export {user};

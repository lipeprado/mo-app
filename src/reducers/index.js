import { combineReducers } from "redux";
import initialState from "./initialState";

import posts from "./posts";

const appReducer = combineReducers({
  posts
});

const rootReducer = (state, action) => {
  if (action.type === "CLEAR_ALL") {
    state = initialState;
  }

  return appReducer(state, action);
};

export default rootReducer;

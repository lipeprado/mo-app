import initialState from "./initialState";
import * as types from "../actions/posts/types";

export default function(state = initialState.posts, action) {
  switch (action.type) {
    case types.FETCH_POSTS_REQUEST:
      return {
        ...state,
        isFetchingChart: true
      };
    case types.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        isFetchingChart: false,
        posts: action.posts
      };
    case types.FETCH_POSTS_FAILED:
      return {
        ...state,
        isFetchingChart: false
      };
    default:
      return state;
  }
}

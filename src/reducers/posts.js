import initialState from "./initialState";
import * as types from "../actions/posts/types";

export default function(state = initialState.posts, action) {
  switch (action.type) {
    case types.FETCH_POSTS_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case types.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: [...state.posts, ...action.posts],
        isFetching: false
      };
    case types.FETCH_POSTS_FAILED:
      return {
        ...state,
        isFetching: false
      };
    default:
      return state;
  }
}

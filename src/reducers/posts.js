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
    case types.FETCH_POST_BY_ID_REQUEST:
      return {
        ...state,
        isFetchingById: true
      };
    case types.FETCH_POST_BY_ID_SUCCESS:
      return {
        ...state,
        currentPost: action.post,
        isFetchingById: false
      };
    case types.FETCH_POST_BY_ID_FAILED:
      return {
        ...state,
        isFetchingById: false
      };
    case types.FETCH_COMMENTS_BY_POST_ID_REQUEST:
      return {
        ...state,
        isFetchingComments: true
      };
    case types.FETCH_COMMENTS_BY_POST_ID_SUCCESS:
      if (state.comments.length === action.comments.length) {
        return {
          ...state,
          comments: [...state.comments, ...action.comments].reverse(),
          isFetchingComments: false
        };
      } else {
        return {
          ...state,
          comments: action.comments.slice(0, 3).reverse(),
          isFetching: false
        };
      }

    case types.FETCH_COMMENTS_BY_POST_ID_FAILED:
      return {
        ...state,
        isFetchingComments: false
      };
    default:
      return state;
  }
}

import { API } from "../../utils/api";
import * as types from "./types";
import { paginate } from "../../utils/helpers";

// fetchPosts
export const fetchPostsRequest = () => {
  return { type: types.FETCH_POSTS_REQUEST };
};
export const fetchPostsSuccess = posts => {
  return { type: types.FETCH_POSTS_SUCCESS, posts };
};
export const fetchPostsFailed = () => {
  return { type: types.FETCH_POSTS_FAILED };
};

export const fetchPosts = (pageNumber = 0) => {
  return async dispatch => {
    try {
      dispatch(fetchPostsRequest());
      const response = await API.get(`posts`);
      const paginated = paginate({
        array: response.data,
        page_size: 10,
        page_number: pageNumber
      });
      setTimeout(() => dispatch(fetchPostsSuccess(paginated)), 2000);
    } catch (error) {
      dispatch(fetchPostsFailed(error));
    }
  };
};

// fetchPostById
export const fetchPostByIdRequest = () => {
  return { type: types.FETCH_POST_BY_ID_REQUEST };
};
export const fetchPostByIdSuccess = post => {
  return { type: types.FETCH_POST_BY_ID_SUCCESS, post };
};
export const fetchPostByIdFailed = () => {
  return { type: types.FETCH_POST_BY_ID_FAILED };
};

export const fetchPostById = id => {
  return async dispatch => {
    try {
      dispatch(fetchPostByIdRequest());
      const response = await API.get(`posts/${id}`);

      setTimeout(() => dispatch(fetchPostByIdSuccess(response.data)), 1000);
    } catch (error) {
      dispatch(fetchPostByIdFailed(error));
    }
  };
};

// fetchCommentsByPostId
export const fetchCommentsByPostIdRequest = () => {
  return { type: types.FETCH_COMMENTS_BY_POST_ID_REQUEST };
};
export const fetchCommentsByPostIdSuccess = comments => {
  return { type: types.FETCH_COMMENTS_BY_POST_ID_SUCCESS, comments };
};
export const fetchCommentsByPostIdFailed = () => {
  return { type: types.FETCH_COMMENTS_BY_POST_ID_FAILED };
};

export const fetchCommentsByPostId = id => {
  return async dispatch => {
    try {
      dispatch(fetchCommentsByPostIdRequest());
      const response = await API.get(`posts/${id}/comments`);

      setTimeout(
        () => dispatch(fetchCommentsByPostIdSuccess(response.data)),
        500
      );
    } catch (error) {
      dispatch(fetchCommentsByPostIdFailed(error));
    }
  };
};

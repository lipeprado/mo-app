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

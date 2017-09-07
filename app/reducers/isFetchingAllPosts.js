import {
  FETCH_ALL_POSTS_REQUEST,
  FETCH_ALL_POSTS_FAILURE,
  FETCH_ALL_POSTS_SUCCESS
} from "../resources/ActionTypes";

const isFetchingAllPosts = (state = false, action) => {
  switch (action.type) {
    case FETCH_ALL_POSTS_REQUEST:
      return true;
    case FETCH_ALL_POSTS_FAILURE:
      return false;
    case FETCH_ALL_POSTS_SUCCESS:
      return false;
    default:
      return state;
  }
};

export default isFetchingAllPosts;

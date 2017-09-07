import {
  FETCH_HOT_POSTS_REQUEST,
  FETCH_HOT_POSTS_FAILURE,
  FETCH_HOT_POSTS_SUCCESS
} from "../resources/ActionTypes";

const isFetchingHotPosts = (state = false, action) => {
  switch (action.type) {
    case FETCH_HOT_POSTS_REQUEST:
      return true;
    case FETCH_HOT_POSTS_FAILURE:
      return false;
    case FETCH_HOT_POSTS_SUCCESS:
      return false;
    default:
      return state;
  }
};

export default isFetchingHotPosts;

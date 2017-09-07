import {
  FETCH_MORE_POSTS_REQUEST,
  FETCH_MORE_POSTS_FAILURE,
  FETCH_MORE_POSTS_SUCCESS
} from "../resources/ActionTypes";

const isFetchingMorePosts = (state = false, action) => {
  switch (action.type) {
    case FETCH_MORE_POSTS_REQUEST:
      return true;
    case FETCH_MORE_POSTS_FAILURE:
      return false;
    case FETCH_MORE_POSTS_SUCCESS:
      return false;
    default:
      return state;
  }
};

export default isFetchingMorePosts;

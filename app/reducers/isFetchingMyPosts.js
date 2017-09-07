import {
  FETCH_MY_POSTS_REQUEST,
  FETCH_MY_POSTS_FAILURE,
  FETCH_MY_POSTS_SUCCESS
} from "../resources/ActionTypes";

const isFetchingMyPosts = (state = false, action) => {
  switch (action.type) {
    case FETCH_MY_POSTS_REQUEST:
      return true;
    case FETCH_MY_POSTS_FAILURE:
      return false;
    case FETCH_MY_POSTS_SUCCESS:
      return false;
    default:
      return state;
  }
};

export default isFetchingMyPosts;

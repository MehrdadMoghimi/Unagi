import {
  LIKE_POST_REQUEST,
  LIKE_POST_FAILURE,
  LIKE_POST_SUCCESS
} from "../resources/ActionTypes";

const isLikingPost = (state = false, action) => {
  switch (action.type) {
    case LIKE_POST_REQUEST:
      return true;
    case LIKE_POST_FAILURE:
      return false;
    case LIKE_POST_SUCCESS:
      return false;
    default:
      return state;
  }
};

export default isLikingPost;

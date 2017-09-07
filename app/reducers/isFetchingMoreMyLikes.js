import {
  FETCH_MORE_MY_LIKES_REQUEST,
  FETCH_MORE_MY_LIKES_FAILURE,
  FETCH_MORE_MY_LIKES_SUCCESS
} from "../resources/ActionTypes";

const isFetchingMoreMyLikes = (state = false, action) => {
  switch (action.type) {
    case FETCH_MORE_MY_LIKES_REQUEST:
      return true;
    case FETCH_MORE_MY_LIKES_FAILURE:
      return false;
    case FETCH_MORE_MY_LIKES_SUCCESS:
      return false;
    default:
      return state;
  }
};

export default isFetchingMoreMyLikes;

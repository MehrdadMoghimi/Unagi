import {
  SEND_POST_REQUEST,
  SEND_POST_FAILURE,
  SEND_POST_SUCCESS
} from "../resources/ActionTypes";

const isSendingPost = (state = false, action) => {
  switch (action.type) {
    case SEND_POST_REQUEST:
      return true;
    case SEND_POST_FAILURE:
      return false;
    case SEND_POST_SUCCESS:
      return false;
    default:
      return state;
  }
};

export default isSendingPost;

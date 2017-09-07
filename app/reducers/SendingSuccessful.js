import {
  SEND_POST_SUCCESS,
  SEND_POST_REQUEST,
  POST_SENT_AND_GOT_BACK
} from "../resources/ActionTypes";

const SendingSuccessful = (state = false, action) => {
  switch (action.type) {
    case SEND_POST_SUCCESS:
      return true;
    case SEND_POST_REQUEST:
      return false;
    case POST_SENT_AND_GOT_BACK:
      return false;
    default:
      return state;
  }
};

export default SendingSuccessful;

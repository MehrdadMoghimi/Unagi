import {
  CHANGE_SEND_TEXT,
  POST_SENT_AND_GOT_BACK
} from "../resources/ActionTypes";

const sendText = (state = "", action) => {
  switch (action.type) {
    case CHANGE_SEND_TEXT:
      return action.text;
    case POST_SENT_AND_GOT_BACK:
      return "";
    default:
      return state;
  }
};

export default sendText;

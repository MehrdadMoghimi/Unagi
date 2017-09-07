import {
  SEND_POST_REQUEST,
  SEND_POST_FAILURE,
  SEND_POST_SUCCESS,
  CHANGE_SEND_TEXT,
  POST_SENT_AND_GOT_BACK
} from "../resources/ActionTypes";
import { ToastAndroid } from "react-native";
var unagiServer = require("../api/unagiServer");

export function sendPostRequest() {
  return {
    type: SEND_POST_REQUEST
  };
}
export function sendPostSuccess(message) {
  return {
    type: SEND_POST_SUCCESS,
    message
  };
}
export function sendPostFailure(error) {
  return {
    type: SEND_POST_FAILURE,
    error
  };
}

export function changeSendText(text) {
  return {
    type: CHANGE_SEND_TEXT,
    text
  };
}
export function postSentAndGotBack() {
  return {
    type: POST_SENT_AND_GOT_BACK
  };
}
export function sendPost(parentId, parentName) {
  return (dispatch, getState) => {
    dispatch(sendPostRequest());
    return unagiServer
      .submitPost(
        getState().location,
        getState().accessToken,
        getState().sendText,
        parentId,
        getState().isAnonymous ? null : getState().user.name,
        parentName
      )
      .then(response => {
        dispatch(sendPostSuccess(response));
      })
      .catch(error => {
        ToastAndroid.showWithGravity(
          "Could not send post :(",
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM
        );
        dispatch(sendPostFailure(error));
      });
  };
}

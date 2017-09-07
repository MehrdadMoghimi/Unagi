import {
  LIKE_POST_REQUEST,
  LIKE_POST_FAILURE,
  LIKE_POST_SUCCESS,
  UNLIKE_POST_REQUEST,
  UNLIKE_POST_FAILURE,
  UNLIKE_POST_SUCCESS
} from "../resources/ActionTypes";
import { ToastAndroid } from "react-native";
var unagiServer = require("../api/unagiServer");

export function likePostRequest(postId) {
  return {
    type: LIKE_POST_REQUEST,
    postId
  };
}
export function likePostSuccess() {
  return {
    type: LIKE_POST_SUCCESS
  };
}
export function likePostFailure(postId) {
  return {
    type: LIKE_POST_FAILURE,
    postId
  };
}

export function unlikePostRequest(postId) {
  return {
    type: UNLIKE_POST_REQUEST,
    postId
  };
}
export function unlikePostSuccess() {
  return {
    type: UNLIKE_POST_SUCCESS
  };
}
export function unlikePostFailure(postId) {
  return {
    type: UNLIKE_POST_FAILURE,
    postId
  };
}

export function likePost(postId, isLike) {
  return (dispatch, getState) => {
    if (isLike) {
      dispatch(likePostRequest(postId));
      unagiServer
        .likePost(getState().location, getState().accessToken, postId)
        .then(response => {
          dispatch(likePostSuccess());
        })
        .catch(error => {
          ToastAndroid.showWithGravity(
            "Could not like post :(",
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM
          );
          dispatch(likePostFailure(postId));
        });
    } else {
      dispatch(unlikePostRequest(postId));
      unagiServer
        .unlikePost(getState().location, getState().accessToken, postId)
        .then(response => {
          dispatch(unlikePostSuccess());
        })
        .catch(error => {
          ToastAndroid.showWithGravity(
            "Could not unlike post :)",
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM
          );
          dispatch(unlikePostFailure(postId));
        });
    }
  };
}

import {
  FETCH_MY_LIKES_REQUEST,
  FETCH_MY_LIKES_FAILURE,
  FETCH_MY_LIKES_SUCCESS,
  FETCH_MORE_MY_LIKES_REQUEST,
  FETCH_MORE_MY_LIKES_FAILURE,
  FETCH_MORE_MY_LIKES_SUCCESS
} from "../resources/ActionTypes";
import { ToastAndroid } from "react-native";
import { POST_LIMIT } from "../resources/Strings";
var unagiServer = require("../api/unagiServer");

export function fetchMyLikesRequest() {
  return {
    type: FETCH_MY_LIKES_REQUEST
  };
}
export function fetchMyLikesSuccess(myLikes) {
  return {
    type: FETCH_MY_LIKES_SUCCESS,
    myLikes
  };
}
export function fetchMyLikesFailure(error) {
  return {
    type: FETCH_MY_LIKES_FAILURE,
    error
  };
}

export function getMyLikes() {
  return (dispatch, getState) => {
    dispatch(fetchMyLikesRequest());
    return unagiServer
      .getMyLikes(getState().location, getState().accessToken)
      .then(response => {
        dispatch(fetchMyLikesSuccess(response));
      })
      .catch(error => {
        ToastAndroid.showWithGravity(
          "Could not load posts :(",
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM
        );
        dispatch(fetchMyLikesFailure(error));
      });
  };
}

export function fetchMoreMyLikesRequest() {
  return {
    type: FETCH_MORE_MY_LIKES_REQUEST
  };
}
export function fetchMoreMyLikesSuccess(moreMyLikes) {
  return {
    type: FETCH_MORE_MY_LIKES_SUCCESS,
    moreMyLikes
  };
}
export function fetchMoreMyLikesFailure(error) {
  return {
    type: FETCH_MORE_MY_LIKES_FAILURE,
    error
  };
}

export function getMoreMyLikes(beforeDate) {
  return (dispatch, getState) => {
    dispatch(fetchMoreMyLikesRequest());
    return unagiServer
      .getMyLikes(getState().location, getState().accessToken)
      .then(response => {
        dispatch(fetchMoreMyLikesSuccess(response));
      })
      .catch(error => {
        ToastAndroid.showWithGravity(
          "Could not load more posts :(",
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM
        );
        dispatch(fetchMoreMyLikesFailure(error));
      });
  };
}

import {
  FETCH_REPLIES_REQUEST,
  FETCH_REPLIES_FAILURE,
  FETCH_REPLIES_SUCCESS,
  FETCH_MORE_REPLIES_REQUEST,
  FETCH_MORE_REPLIES_FAILURE,
  FETCH_MORE_REPLIES_SUCCESS,
  ADD_TO_REPLIES
} from "../resources/ActionTypes";
import { ToastAndroid } from "react-native";
var unagiServer = require("../api/unagiServer");

export function fetchRepliesRequest() {
  return {
    type: FETCH_REPLIES_REQUEST
  };
}
export function fetchRepliesSuccess(replies, postId) {
  return {
    type: FETCH_REPLIES_SUCCESS,
    replies,
    postId
  };
}
export function fetchRepliesFailure(error) {
  return {
    type: FETCH_REPLIES_FAILURE,
    error
  };
}

export function getReplies(postId) {
  return (dispatch, getState) => {
    dispatch(fetchRepliesRequest());
    return unagiServer
      .getReplies(getState().location, getState().accessToken, postId, null)
      .then(response => {
        dispatch(fetchRepliesSuccess(response, postId));
      })
      .catch(error => {
        dispatch(fetchRepliesFailure(error));
      });
  };
}

export function fetchMoreRepliesRequest() {
  return {
    type: FETCH_MORE_REPLIES_REQUEST
  };
}
export function fetchMoreRepliesSuccess(moreReplies, postId) {
  return {
    type: FETCH_MORE_REPLIES_SUCCESS,
    moreReplies
  };
}
export function fetchMoreRepliesFailure(error) {
  return {
    type: FETCH_MORE_REPLIES_FAILURE,
    error
  };
}

export function getMoreReplies(postId, beforeDate) {
  return (dispatch, getState) => {
    dispatch(fetchMoreRepliesRequest());
    return unagiServer
      .getReplies(
        getState().location,
        getState().accessToken,
        postId,
        beforeDate
      )
      .then(response => {
        dispatch(fetchMoreRepliesSuccess(response, postId));
      })
      .catch(error => {
        dispatch(fetchMoreRepliesFailure(error));
      });
  };
}
export function addToReplies(item) {
  return {
    type: ADD_TO_REPLIES,
    item
  };
}

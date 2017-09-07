import {
  FETCH_HOT_POSTS_REQUEST,
  FETCH_HOT_POSTS_FAILURE,
  FETCH_HOT_POSTS_SUCCESS,
  FETCH_MORE_HOT_POSTS_REQUEST,
  FETCH_MORE_HOT_POSTS_FAILURE,
  FETCH_MORE_HOT_POSTS_SUCCESS
} from "../resources/ActionTypes";
import { ToastAndroid } from "react-native";
import { POST_LIMIT } from "../resources/Strings";
var unagiServer = require("../api/unagiServer");

export function fetchHotPostsRequest() {
  return {
    type: FETCH_HOT_POSTS_REQUEST
  };
}
export function fetchHotPostsSuccess(hotPosts) {
  return {
    type: FETCH_HOT_POSTS_SUCCESS,
    hotPosts
  };
}
export function fetchHotPostsFailure(error) {
  return {
    type: FETCH_HOT_POSTS_FAILURE,
    error
  };
}

export function getHotPosts() {
  return (dispatch, getState) => {
    dispatch(fetchHotPostsRequest());
    return unagiServer
      .getAllPosts(
        getState().location,
        getState().accessToken,
        POST_LIMIT,
        null,
        true
      )
      .then(response => {
        dispatch(fetchHotPostsSuccess(response));
      })
      .catch(error => {
        dispatch(fetchHotPostsFailure(error));
      });
  };
}

export function fetchMoreHotPostsRequest() {
  return {
    type: FETCH_MORE_HOT_POSTS_REQUEST
  };
}
export function fetchMoreHotPostsSuccess(moreHotPosts) {
  return {
    type: FETCH_MORE_HOT_POSTS_SUCCESS,
    moreHotPosts
  };
}
export function fetchMoreHotPostsFailure(error) {
  return {
    type: FETCH_MORE_HOT_POSTS_FAILURE,
    error
  };
}

export function getMoreHotPosts(beforeScore) {
  return (dispatch, getState) => {
    dispatch(fetchMoreHotPostsRequest());
    return unagiServer
      .getAllPosts(
        getState().location,
        getState().accessToken,
        POST_LIMIT,
        beforeScore,
        true
      )
      .then(response => {
        dispatch(fetchMoreHotPostsSuccess(response));
      })
      .catch(error => {
        dispatch(fetchMoreHotPostsFailure(error));
      });
  };
}

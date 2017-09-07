import {
  FETCH_MY_POSTS_REQUEST,
  FETCH_MY_POSTS_FAILURE,
  FETCH_MY_POSTS_SUCCESS,
  FETCH_MORE_MY_POSTS_REQUEST,
  FETCH_MORE_MY_POSTS_FAILURE,
  FETCH_MORE_MY_POSTS_SUCCESS
} from "../resources/ActionTypes";
import { ToastAndroid } from "react-native";
import { POST_LIMIT } from "../resources/Strings";
var unagiServer = require("../api/unagiServer");

export function fetchMyPostsRequest() {
  return {
    type: FETCH_MY_POSTS_REQUEST
  };
}
export function fetchMyPostsSuccess(myPosts) {
  return {
    type: FETCH_MY_POSTS_SUCCESS,
    myPosts
  };
}
export function fetchMyPostsFailure(error) {
  return {
    type: FETCH_MY_POSTS_FAILURE,
    error
  };
}

export function getMyPosts() {
  return (dispatch, getState) => {
    dispatch(fetchMyPostsRequest());
    return unagiServer
      .getMyPosts(getState().location, getState().accessToken, POST_LIMIT, null)
      .then(response => {
        dispatch(fetchMyPostsSuccess(response));
      })
      .catch(error => {
        dispatch(fetchMyPostsFailure(error));
      });
  };
}

export function fetchMoreMyPostsRequest() {
  return {
    type: FETCH_MORE_MY_POSTS_REQUEST
  };
}
export function fetchMoreMyPostsSuccess(moreMyPosts) {
  return {
    type: FETCH_MORE_MY_POSTS_SUCCESS,
    moreMyPosts
  };
}
export function fetchMoreMyPostsFailure(error) {
  return {
    type: FETCH_MORE_MY_POSTS_FAILURE,
    error
  };
}

export function getMoreMyPosts(beforeDate) {
  return (dispatch, getState) => {
    dispatch(fetchMoreMyPostsRequest());
    return unagiServer
      .getMyPosts(
        getState().location,
        getState().accessToken,
        POST_LIMIT,
        beforeDate
      )
      .then(response => {
        dispatch(fetchMoreMyPostsSuccess(response));
      })
      .catch(error => {
        dispatch(fetchMoreMyPostsFailure(error));
      });
  };
}

import {
  FETCH_ALL_POSTS_REQUEST,
  FETCH_ALL_POSTS_FAILURE,
  FETCH_ALL_POSTS_SUCCESS,
  FETCH_MORE_POSTS_REQUEST,
  FETCH_MORE_POSTS_FAILURE,
  FETCH_MORE_POSTS_SUCCESS
} from "../resources/ActionTypes";
import { ToastAndroid } from "react-native";
import { POST_LIMIT } from "../resources/Strings";
var unagiServer = require("../api/unagiServer");

export function fetchAllPostsRequest() {
  return {
    type: FETCH_ALL_POSTS_REQUEST
  };
}
export function fetchAllPostsSuccess(posts) {
  return {
    type: FETCH_ALL_POSTS_SUCCESS,
    posts
  };
}
export function fetchAllPostsFailure(error) {
  return {
    type: FETCH_ALL_POSTS_FAILURE,
    error
  };
}

export function getAllPosts() {
  return (dispatch, getState) => {
    dispatch(fetchAllPostsRequest());
    return unagiServer
      .getAllPosts(
        getState().location,
        getState().accessToken,
        POST_LIMIT,
        null,
        false
      )
      .then(response => {
        dispatch(fetchAllPostsSuccess(response));
      })
      .catch(error => {
        dispatch(fetchAllPostsFailure(error));
      });
  };
}

export function fetchMorePostsRequest() {
  return {
    type: FETCH_MORE_POSTS_REQUEST
  };
}
export function fetchMorePostsSuccess(morePosts) {
  return {
    type: FETCH_MORE_POSTS_SUCCESS,
    morePosts
  };
}
export function fetchMorePostsFailure(error) {
  return {
    type: FETCH_MORE_POSTS_FAILURE,
    error
  };
}

export function getMorePosts(beforeDate) {
  return (dispatch, getState) => {
    dispatch(fetchMorePostsRequest());
    return unagiServer
      .getAllPosts(
        getState().location,
        getState().accessToken,
        POST_LIMIT,
        beforeDate,
        false
      )
      .then(response => {
        dispatch(fetchMorePostsSuccess(response));
      })
      .catch(error => {
        dispatch(fetchMorePostsFailure(error));
      });
  };
}

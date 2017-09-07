import { getLocation } from "./LocationActions";
import { getAllPosts } from "./AllPostsActions";
import { getHotPosts } from "./HotPostsActions";
import { getMyPosts } from "./MyPostsActions";
import { getMyLikes } from "./MyLikesActions";
import { sendPost } from "./SendPostActions";
import { signin } from "./SigninActions";
import { signup } from "./SignupActions";
import { getAccessToken } from "./AccessTokenActions";
import { TOGGLE_ANONYMOUS } from "../resources/ActionTypes";

export function updateLocationAndGetAllPosts() {
  return (dispatch, getState) =>
    dispatch(getLocation())
      .then(() => {
        if (typeof getState().location.longitude !== "string") {
          dispatch(getAllPosts()).catch();
        }
      })
      .catch();
}

export function updateLocationAndGetHotPosts() {
  return (dispatch, getState) =>
    dispatch(getLocation())
      .then(() => {
        if (typeof getState().location.longitude !== "string") {
          dispatch(getHotPosts()).catch();
        }
      })
      .catch();
}

export function updateLocationAndGetMyPosts() {
  return (dispatch, getState) =>
    dispatch(getLocation())
      .then(() => {
        if (typeof getState().location.longitude !== "string") {
          dispatch(getMyPosts()).catch();
        }
      })
      .catch();
}

export function updateLocationAndGetMyLikes() {
  return (dispatch, getState) =>
    dispatch(getLocation())
      .then(() => {
        if (typeof getState().location.longitude !== "string") {
          dispatch(getMyLikes()).catch();
        }
      })
      .catch();
}

export function updateLocationAndSendPost(parentId, parentName) {
  return (dispatch, getState) =>
    dispatch(getLocation())
      .then(() => {
        if (typeof getState().location.longitude !== "string") {
          dispatch(sendPost(parentId, parentName)).catch();
        }
      })
      .catch();
}

export function signupAndUpdateLocationAndGetAccessToken(user, pass, optional) {
  return (dispatch, getState) =>
    dispatch(getLocation())
      .then(() => {
        if (typeof getState().location.longitude !== "string") {
          dispatch(signup(user, pass, optional)).catch();
        }
      })
      .catch();
}

export function signinAndUpdateLocationAndGetAccessToken(user, pass) {
  return (dispatch, getState) => {
    dispatch(getLocation())
      .then(() => {
        if (typeof getState().location.longitude !== "string") {
          dispatch(signin(user, pass)).catch();
        }
      })
      .catch();
  };
}

export function toggleAnonymous() {
  return {
    type: TOGGLE_ANONYMOUS
  };
}

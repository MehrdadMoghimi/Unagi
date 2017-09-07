import {
  FETCH_MY_POSTS_SUCCESS,
  FETCH_MORE_MY_POSTS_SUCCESS,
  LIKE_POST_REQUEST,
  LIKE_POST_FAILURE,
  UNLIKE_POST_REQUEST,
  UNLIKE_POST_FAILURE
} from "../resources/ActionTypes";

var array = require("lodash/array");

const myPosts = (state = [], action) => {
  switch (action.type) {
    case FETCH_MY_POSTS_SUCCESS:
      return action.myPosts;
    case FETCH_MORE_MY_POSTS_SUCCESS:
      return Object.assign(
        [],
        state,
        array.unionBy(state, action.moreMyPosts, item => item.post.postId)
      );
    case LIKE_POST_REQUEST:
      return Object.assign(
        [],
        state,
        state.map(item => {
          if (item.post.postId !== action.postId) {
            return item;
          }
          return {
            post: Object.assign(item.post, { likes: item.post.likes + 1 }),
            likedByMe: true
          };
        })
      );
    case LIKE_POST_FAILURE:
      return Object.assign(
        [],
        state,
        state.map(item => {
          if (item.post.postId !== action.postId) {
            return item;
          }
          return {
            post: Object.assign(item.post, { likes: item.post.likes - 1 }),
            likedByMe: false
          };
        })
      );
    case UNLIKE_POST_REQUEST:
      return Object.assign(
        [],
        state,
        state.map(item => {
          if (item.post.postId !== action.postId) {
            return item;
          }
          return {
            post: Object.assign(item.post, { likes: item.post.likes - 1 }),
            likedByMe: false
          };
        })
      );
    case UNLIKE_POST_FAILURE:
      return Object.assign(
        [],
        state,
        state.map(item => {
          if (item.post.postId !== action.postId) {
            return item;
          }
          return {
            post: Object.assign(item.post, { likes: item.post.likes + 1 }),
            likedByMe: true
          };
        })
      );
    default:
      return state;
  }
};

export default myPosts;

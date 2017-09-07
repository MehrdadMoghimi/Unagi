import {
  FETCH_ALL_POSTS_SUCCESS,
  FETCH_MORE_POSTS_SUCCESS,
  LIKE_POST_REQUEST,
  LIKE_POST_FAILURE,
  UNLIKE_POST_REQUEST,
  UNLIKE_POST_FAILURE
} from "../resources/ActionTypes";

var array = require("lodash/array");

const posts = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_POSTS_SUCCESS:
      return action.posts;
    case FETCH_MORE_POSTS_SUCCESS:
      return Object.assign(
        [],
        state,
        array.unionBy(state, action.morePosts, item => item.post.postId)
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

export default posts;

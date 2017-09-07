import {
  FETCH_REPLIES_SUCCESS,
  FETCH_MORE_REPLIES_SUCCESS,
  LIKE_POST_REQUEST,
  LIKE_POST_FAILURE,
  UNLIKE_POST_REQUEST,
  UNLIKE_POST_FAILURE,
  ADD_TO_REPLIES
} from "../resources/ActionTypes";

var array = require("lodash/array");

const replies = (state = [], action) => {
  switch (action.type) {
    case FETCH_REPLIES_SUCCESS:
      return Object.assign(
        [],
        state,
        state.map(item => {
          if (item.post.post.postId !== action.postId) {
            return item;
          }
          return {
            post: item.post,
            replies: action.replies
          };
        })
      );
    case FETCH_MORE_REPLIES_SUCCESS:
      return Object.assign(
        [],
        state,
        state.map(item => {
          if (item.post.post.postId !== action.postId) {
            return item;
          }
          return {
            post: item.post,
            replies: array.unionBy(
              item.replies,
              action.moreReplies,
              item => item.post.postId
            )
          };
        })
      );
    case ADD_TO_REPLIES:
      return Object.assign([], state, [
        ...state,
        Object.assign({}, action.item)
      ]);
    case LIKE_POST_REQUEST:
      return Object.assign(
        [],
        state,
        state.map(item => {
          if (item.post.post.postId !== action.postId) {
            return {
              post: item.post,
              replies: item.replies.map(item2 => {
                if (item2.post.postId !== action.postId) {
                  return Object.assign({}, item2);
                }
                return {
                  post: Object.assign(item2.post, {
                    likes: item2.post.likes + 1
                  }),
                  likedByMe: true
                };
              })
            };
          }
          return {
            post: {
              post: Object.assign(item.post.post, {
                likes: item.post.post.likes + 1
              }),
              likedByMe: true
            },
            replies: item.replies
          };
        })
      );
    case LIKE_POST_FAILURE:
      return Object.assign(
        [],
        state,
        state.map(item => {
          if (item.post.post.postId !== action.postId) {
            return {
              post: item.post,
              replies: item.replies.map(item2 => {
                if (item2.post.postId !== action.postId) {
                  return Object.assign({}, item2);
                }
                return {
                  post: Object.assign(item2.post, {
                    likes: item2.post.likes - 1
                  }),
                  likedByMe: false
                };
              })
            };
          }
          return {
            post: {
              post: Object.assign(item.post.post, {
                likes: item.post.post.likes - 1
              }),
              likedByMe: false
            },
            replies: item.replies
          };
        })
      );
    case UNLIKE_POST_REQUEST:
      return Object.assign(
        [],
        state,
        state.map(item => {
          if (item.post.post.postId !== action.postId) {
            return {
              post: item.post,
              replies: item.replies.map(item2 => {
                if (item2.post.postId !== action.postId) {
                  return Object.assign({}, item2);
                }
                return {
                  post: Object.assign(item2.post, {
                    likes: item2.post.likes - 1
                  }),
                  likedByMe: false
                };
              })
            };
          }
          return {
            post: {
              post: Object.assign(item.post.post, {
                likes: item.post.post.likes - 1
              }),
              likedByMe: false
            },
            replies: item.replies
          };
        })
      );
    case UNLIKE_POST_FAILURE:
      return Object.assign(
        [],
        state,
        state.map(item => {
          if (item.post.post.postId !== action.postId) {
            return {
              post: item.post,
              replies: item.replies.map(item2 => {
                if (item2.post.postId !== action.postId) {
                  return Object.assign({}, item2);
                }
                return {
                  post: Object.assign(item2.post, {
                    likes: item2.post.likes + 1
                  }),
                  likedByMe: true
                };
              })
            };
          }
          return {
            post: {
              post: Object.assign(item.post.post, {
                likes: item.post.post.likes + 1
              }),
              likedByMe: true
            },
            replies: item.replies
          };
        })
      );
    default:
      return state;
  }
};

export default replies;

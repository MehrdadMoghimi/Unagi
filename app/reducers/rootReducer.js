import { combineReducers } from "redux";
import posts from "./posts";
import hotPosts from "./hotPosts";
import myPosts from "./myPosts";
import myLikes from "./myLikes";
import replies from "./replies";
import location from "./location";
import refreshToken from "./refreshToken";
import accessToken from "./accessToken";
import LocationError from "./LocationError";
import NetworkError from "./NetworkError";
import isAnonymous from "./isAnonymous";
import isGettingLocation from "./isGettingLocation";
import isFetchingAllPosts from "./isFetchingAllPosts";
import isFetchingMorePosts from "./isFetchingMorePosts";
import isFetchingHotPosts from "./isFetchingHotPosts";
import isFetchingMoreHotPosts from "./isFetchingMoreHotPosts";
import isFetchingReplies from "./isFetchingReplies";
import isFetchingMoreReplies from "./isFetchingMoreReplies";
import isFetchingMyPosts from "./isFetchingMyPosts";
import isFetchingMoreMyPosts from "./isFetchingMoreMyPosts";
import isFetchingMyLikes from "./isFetchingMyLikes";
import isFetchingMoreMyLikes from "./isFetchingMoreMyLikes";
import isSendingPost from "./isSendingPost";
import sendText from "./sendText";
import SendingSuccessful from "./SendingSuccessful";
import FetchingAllPostsSuccessful from "./FetchingAllPostsSuccessful";
import FetchingMorePostsSuccessful from "./FetchingMorePostsSuccessful";
import FetchingHotPostsSuccessful from "./FetchingHotPostsSuccessful";
import FetchingMoreHotPostsSuccessful from "./FetchingMoreHotPostsSuccessful";
import FetchingRepliesSuccessful from "./FetchingRepliesSuccessful";
import FetchingMoreRepliesSuccessful from "./FetchingMoreRepliesSuccessful";
import FetchingMyPostsSuccessful from "./FetchingMyPostsSuccessful";
import FetchingMoreMyPostsSuccessful from "./FetchingMoreMyPostsSuccessful";
import FetchingMyLikesSuccessful from "./FetchingMyLikesSuccessful";
import FetchingMoreMyLikesSuccessful from "./FetchingMoreMyLikesSuccessful";
import haveValidRefreshToken from "./haveValidRefreshToken";
import haveValidAccessToken from "./haveValidAccessToken";
import userId from "./userId";
import navReducer from "./navReducer";
import user from "./user";

const rootReducer = combineReducers({
  posts,
  hotPosts,
  replies,
  myPosts,
  myLikes,
  accessToken,
  haveValidAccessToken,
  refreshToken,
  haveValidRefreshToken,
  location,
  isFetchingAllPosts,
  isFetchingMorePosts,
  isFetchingHotPosts,
  isFetchingMoreHotPosts,
  isFetchingReplies,
  isFetchingMoreReplies,
  isFetchingMyPosts,
  isFetchingMoreMyPosts,
  isFetchingMyLikes,
  isFetchingMoreMyLikes,
  isGettingLocation,
  NetworkError,
  LocationError,
  sendText,
  isSendingPost,
  SendingSuccessful,
  FetchingAllPostsSuccessful,
  FetchingMorePostsSuccessful,
  FetchingHotPostsSuccessful,
  FetchingMoreHotPostsSuccessful,
  FetchingRepliesSuccessful,
  FetchingMoreRepliesSuccessful,
  FetchingMyPostsSuccessful,
  FetchingMoreMyPostsSuccessful,
  FetchingMyLikesSuccessful,
  FetchingMoreMyLikesSuccessful,
  userId,
  nav: navReducer,
  isAnonymous,
  user
});

export default rootReducer;

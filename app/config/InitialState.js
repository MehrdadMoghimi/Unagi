const initialState = {
  // isFirstTime: true,
  posts: [],
  // hotPosts: [],
  // postNumberShowing: 0,
  // hotPostNumberShowing: 0,
  sendText: "",
  // currentPage: "Tabs",
  location: {
    longitude: "unknown",
    latitude: "unknown"
  },
  LocationError: false,
  NetworkError: false,
  isGettingLocation: false,
  isFetchingAllPosts: false,
  FetchingAllPostsSuccessful: false,
  isFetchingHotPosts: false,
  FetchingHotPostsSuccessful: false,
  // isFetchingPost: false,
  isSendingPost: false,
  SendingSuccessful: false,
  isLikingPost: false,
  LikingSuccessful: false
  // error: ""
};
export default initialState;

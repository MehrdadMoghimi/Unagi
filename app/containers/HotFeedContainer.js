import { connect } from "react-redux";
import { updateLocationAndGetHotPosts } from "../actions/Actions";
import { getHotPosts } from "../actions/HotPostsActions";
import { getMoreHotPosts } from "../actions/HotPostsActions";
import { likePost } from "../actions/LikePostActions";
import { addToReplies } from "../actions/RepliesActions";
import HotFeed from "../screens/HotFeed";

const mapStateToProps = state => {
  return {
    isGettingLocation: state.isGettingLocation,
    LocationError: state.LocationError,
    isFetchingHotPosts: state.isFetchingHotPosts,
    isFetchingMoreHotPosts: state.isFetchingMoreHotPosts,
    NetworkError: state.NetworkError,
    hotPosts: state.hotPosts,
    location: state.location,
    FetchingHotPostsSuccessful: state.FetchingHotPostsSuccessful,
    FetchingMoreHotPostsSuccessful: state.FetchingMoreHotPostsSuccessful,
    sendText: state.sendText
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateLocationAndFetchHotPosts: dispatch(updateLocationAndGetHotPosts()),
    fetchHotPosts: () => {
      dispatch(getHotPosts());
    },
    fetchMoreHotPosts: beforeScore => {
      dispatch(getMoreHotPosts(beforeScore));
    },
    likePost: (postId, isLike) => {
      dispatch(likePost(postId, isLike));
    },
    addToReplies: item => {
      dispatch(addToReplies({ post: item, replies: [] }));
    }
  };
};

const HotFeedContainer = connect(mapStateToProps, mapDispatchToProps)(HotFeed);

export default HotFeedContainer;

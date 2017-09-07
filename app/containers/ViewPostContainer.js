import { connect } from "react-redux";
import { updateLocationAndGetReplies } from "../actions/Actions";
import { getReplies, getMoreReplies } from "../actions/RepliesActions";
import { likePost } from "../actions/LikePostActions";
import { addToReplies } from "../actions/RepliesActions";
import ViewPost from "../screens/ViewPost";

const mapStateToProps = state => {
  return {
    isGettingLocation: state.isGettingLocation,
    LocationError: state.LocationError,
    isFetchingReplies: state.isFetchingReplies,
    isFetchingMoreReplies: state.isFetchingMoreReplies,
    NetworkError: state.NetworkError,
    posts: state.posts,
    hotPosts: state.hotPosts,
    replies: state.replies,
    location: state.location,
    FetchingRepliesSuccessful: state.FetchingRepliesSuccessful,
    FetchingMoreRepliesSuccessful: state.FetchingMoreRepliesSuccessful,
    sendText: state.sendText
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchReplies: postId => {
      dispatch(getReplies(postId));
    },
    fetchMoreReplies: (postId, beforeDate) => {
      dispatch(getMoreReplies(postId, beforeDate));
    },
    likePost: (postId, isLike) => {
      dispatch(likePost(postId, isLike));
    },
    addToReplies: item => {
      dispatch(addToReplies({ post: item, replies: [] }));
    }
  };
};

const ViewPostContainer = connect(mapStateToProps, mapDispatchToProps)(
  ViewPost
);

export default ViewPostContainer;

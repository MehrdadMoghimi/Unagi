import { connect } from "react-redux";
import { updateLocationAndGetAllPosts } from "../actions/Actions";
import { getAllPosts } from "../actions/AllPostsActions";
import { getMorePosts } from "../actions/AllPostsActions";
import { likePost } from "../actions/LikePostActions";
import { addToReplies } from "../actions/RepliesActions";
import Feed from "../screens/Feed";

const mapStateToProps = state => {
  return {
    isGettingLocation: state.isGettingLocation,
    LocationError: state.LocationError,
    isFetchingAllPosts: state.isFetchingAllPosts,
    isFetchingMorePosts: state.isFetchingMorePosts,
    NetworkError: state.NetworkError,
    posts: state.posts,
    location: state.location,
    FetchingAllPostsSuccessful: state.FetchingAllPostsSuccessful,
    FetchingMorePostsSuccessful: state.FetchingMorePostsSuccessful,
    sendText: state.sendText
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateLocationAndFetchPosts: dispatch(updateLocationAndGetAllPosts()),
    fetchPosts: () => {
      dispatch(getAllPosts());
    },
    fetchMorePosts: beforeDate => {
      dispatch(getMorePosts(beforeDate));
    },
    likePost: (postId, isLike) => {
      dispatch(likePost(postId, isLike));
    },
    addToReplies: item => {
      dispatch(addToReplies({ post: item, replies: [] }));
    }
  };
};

const FeedContainer = connect(mapStateToProps, mapDispatchToProps)(Feed);

export default FeedContainer;

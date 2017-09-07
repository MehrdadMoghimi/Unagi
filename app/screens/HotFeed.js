import React, { Component } from "react";
import {
  AppRegistry,
  ScrollView,
  ActivityIndicator,
  Text,
  TextInput,
  Button,
  ToastAndroid,
  View
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import { StackNavigator } from "react-navigation";

import styles from "../style/FeedStyle";
import ListPost from "../components/ListPost";
import LoadingError from "../components/LoadingError";

export default class HotFeed extends Component {
  render() {
    const { navigate } = this.props.navigation;
    if (this.props.LocationError && this.props.hotPosts.length === 0) {
      return <LoadingError errorType={"gps"} />;
    }
    if (this.props.NetworkError && this.props.hotPosts.length === 0) {
      return <LoadingError errorType={"wifi"} />;
    }
    if (this.props.NetworkError) {
      ToastAndroid.showWithGravity(
        "Could not load posts :(",
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM
      );
    }
    if (this.props.LocationError) {
      ToastAndroid.showWithGravity(
        "Location error :(",
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM
      );
    }
    return (
      <View style={styles.container}>
        <ListPost
          inViewPost={false}
          pageName="HotFeed"
          posts={this.props.hotPosts}
          isFetchingPosts={this.props.isFetchingHotPosts}
          isFetchingMorePosts={this.props.isFetchingMoreHotPosts}
          NetworkError={this.props.NetworkError}
          navigate={navigate}
          sendText={this.props.sendText}
          fetchPosts={this.props.fetchHotPosts}
          fetchMorePosts={this.props.fetchMoreHotPosts}
          likePost={this.props.likePost}
          addToReplies={this.props.addToReplies}
          FetchingPostsSuccessful={this.props.FetchingHotPostsSuccessful}
          FetchingMorePostsSuccessful={
            this.props.FetchingMoreHotPostsSuccessful
          }
        />
      </View>
    );
  }

  componentWillMount() {
    console.log("hot feed called");
    this.props.updateLocationAndFetchHotPosts;
  }
}

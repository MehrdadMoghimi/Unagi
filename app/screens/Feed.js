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

import Icon from "react-native-vector-icons/MaterialIcons";
import ActionButton from "react-native-action-button";
import { StackNavigator } from "react-navigation";

import styles from "../style/FeedStyle";
import ListPost from "../components/ListPost";
import LoadingError from "../components/LoadingError";

export default class Feed extends Component {
  render() {
    const { navigate } = this.props.navigation;
    if (this.props.LocationError && this.props.posts.length === 0) {
      return <LoadingError errorType={"gps"} />;
    }
    if (this.props.NetworkError && this.props.posts.length === 0) {
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
          pageName="Feed"
          posts={this.props.posts}
          isFetchingPosts={this.props.isFetchingAllPosts}
          isFetchingMorePosts={this.props.isFetchingMorePosts}
          NetworkError={this.props.NetworkError}
          navigate={navigate}
          sendText={this.props.sendText}
          fetchPosts={this.props.fetchPosts}
          fetchMorePosts={this.props.fetchMorePosts}
          likePost={this.props.likePost}
          addToReplies={this.props.addToReplies}
          FetchingPostsSuccessful={this.props.FetchingAllPostsSuccessful}
          FetchingMorePostsSuccessful={this.props.FetchingMorePostsSuccessful}
        />
        <ActionButton
          style={styles.addButton}
          buttonColor="#d62d51"
          onPress={() =>
            navigate("SendPost", {
              parentId: null,
              parentName: null,
              updateLocationAndSendPost: () => {},
              RemainingCharNum: 160 - this.props.sendText.length,
              pageName: "Feed"
            })}
        />
      </View>
    );
  }

  componentWillMount() {
    console.log("feed called");
    this.props.updateLocationAndFetchPosts;
  }
}

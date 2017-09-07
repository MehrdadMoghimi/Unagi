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
import { StackNavigator } from "react-navigation";

import styles from "../style/FeedStyle";
import ListPost from "../components/ListPost";
import LoadingError from "../components/LoadingError";

export default class MyLikes extends Component {
  render() {
    const { navigate } = this.props.navigation;
    // return <Text> My Likes </Text>;
    return (
      <View style={styles.container}>
        <ListPost
          inViewPost={false}
          pageName="MyLikes"
          posts={this.props.myLikes}
          isFetchingPosts={this.props.isFetchingMyLikes}
          isFetchingMorePosts={this.props.isFetchingMoreMyLikes}
          NetworkError={this.props.NetworkError}
          navigate={navigate}
          sendText={this.props.sendText}
          fetchPosts={this.props.fetchMyLikes}
          fetchMorePosts={this.props.fetchMoreMyLikes}
          likePost={this.props.likePost}
          addToReplies={this.props.addToReplies}
          FetchingPostsSuccessful={this.props.FetchingMyLikesSuccessful}
          FetchingMorePostsSuccessful={this.props.FetchingMoreMyLikesSuccessful}
        />
      </View>
    );
  }

  componentWillMount() {
    console.log("My Likes called");
    this.props.updateLocationAndFetchMyLikes;
  }
}

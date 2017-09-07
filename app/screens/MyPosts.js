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
// import ActionButton from "react-native-action-button";
import { StackNavigator } from "react-navigation";

import styles from "../style/FeedStyle";
import ListPost from "../components/ListPost";
import LoadingError from "../components/LoadingError";

export default class MyPosts extends Component {
  render() {
    const { navigate } = this.props.navigation;
    // return <Text> My Posts </Text>;
    return (
      <View style={styles.container}>
        <ListPost
          inViewPost={false}
          pageName="MyPosts"
          posts={this.props.myPosts}
          isFetchingPosts={this.props.isFetchingMyPosts}
          isFetchingMorePosts={this.props.isFetchingMoreMyPosts}
          NetworkError={this.props.NetworkError}
          navigate={navigate}
          sendText={this.props.sendText}
          fetchPosts={this.props.fetchMyPosts}
          fetchMorePosts={this.props.fetchMoreMyPosts}
          likePost={this.props.likePost}
          addToReplies={this.props.addToReplies}
          FetchingPostsSuccessful={this.props.FetchingMyPostsSuccessful}
          FetchingMorePostsSuccessful={this.props.FetchingMoreMyPostsSuccessful}
        />
        {/* <ActionButton
          style={styles.addButton}
          buttonColor="#d62d51"
          onPress={() =>
            navigate("SendPost", {
              parentId: null,
              updateLocationAndSendPost: () => {},
              RemainingCharNum: 160 - this.props.sendText.length
            })}
        /> */}
      </View>
    );
  }

  componentWillMount() {
    console.log("My Posts called");
    this.props.updateLocationAndFetchMyPosts;
  }
}

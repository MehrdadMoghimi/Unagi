import React, { Component } from "react";
import { View } from "react-native";
import Signin from "./Signin";
import Signup from "./Signup";
import LoadingError from "../components/LoadingError";

export default class FirstPage extends Component {
  constructor(props) {
    super(props);
    this.changePageState = this.changePageState.bind(this);
    this.state = {
      inSignupPage: false
    };
  }
  static navigationOptions = {
    header: null
  };
  render() {
    return this.state.inSignupPage
      ? <Signup
          changePageState={this.changePageState}
          signup={this.props.signup}
          haveValidAccessToken={this.props.haveValidAccessToken}
          haveValidRefreshToken={this.props.haveValidRefreshToken}
        />
      : <Signin
          changePageState={this.changePageState}
          signin={this.props.signin}
          haveValidAccessToken={this.props.haveValidAccessToken}
          haveValidRefreshToken={this.props.haveValidRefreshToken}
        />;
  }

  changePageState() {
    this.setState({
      inSignupPage: !this.state.inSignupPage
    });
  }
}

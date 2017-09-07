import React, { Component } from "react";
import {
  StyleSheet,
  AppRegistry,
  Text,
  TextInput,
  Button,
  View,
  Image,
  textAlign,
  textAlignVertical,
  borderRadius,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import styles from "../style/LoginStyle";
import Icon from "react-native-vector-icons/FontAwesome";

var logo = require("../resources/img/logo.png");

export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      pass: ""
    };
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={logo} />
          <Text style={styles.text}>
            Welcome to our Social App... For using just walk !
          </Text>
        </View>
        <View style={styles.textboxes}>
          <TextInput
            style={styles.TextInput}
            returnKeyType="next"
            underlineColorAndroid="transparent"
            placeholder="نام کاربری"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={text => {
              this.setState({ user: text });
            }}
            onSubmitEditing={() => this.passwordInput.focus()}
          />
          <TextInput
            secureTextEntry
            returnKeyType="go"
            style={styles.TextInput}
            underlineColorAndroid="transparent"
            placeholder="رمز عبور"
            autoCapitalize="none"
            autoCorrect={false}
            ref={input => (this.passwordInput = input)}
            onChangeText={text => {
              this.setState({ pass: text });
            }}
          />

          <View style={styles.Buttons}>
            <TouchableOpacity
              style={styles.enterButton}
              onPress={() =>
                this.props.signin(this.state.user, this.state.pass)}
            >
              <Text style={{ fontFamily: "Vazir-Bold", color: "white" }}>
                ورود
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              marginTop: 55
            }}
          >
            <TouchableOpacity
              style={{
                borderRadius: 10,
                marginRight: 3,
                marginTop: 50,
                marginBottom: 17,
                alignItems: "center",
                backgroundColor: "#008080",
                paddingVertical: 10,
                flex: 1
              }}
              onPress={() => this.props.changePageState()}
            >
              <Text
                style={{
                  alignItems: "center",
                  fontFamily: "Vazir-Bold",
                  color: "white"
                }}
              >
                ثبت نام
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: 50,
              alignItems: "center"
            }}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

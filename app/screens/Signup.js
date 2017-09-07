import React, { Component } from "react";
import {
  StyleSheet,
  AppRegistry,
  Text,
  TextInput,
  Button,
  View,
  textAlign,
  textAlignVertical,
  borderRadius,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import styles from "../style/LoginStyle";

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      username: "",
      email: "",
      phone: "",
      password: "",
      textPlaceholderColorWarning: "#949899",
      warningText: ""
    };
  }
  render() {
    return (
      <View style={{ marginTop: 35 }}>
        <View style={styles.textboxes}>
          <View>
            <TextInput
              returnKeyType="go"
              style={styles.TextInput}
              underlineColorAndroid="transparent"
              placeholder="نام کاربری"
              autoCapitalize="none"
              placeholderTextColor={this.state.textPlaceholderColorWarning}
              autoCorrect={false}
              onChangeText={text => {
                this.setState({ username: text });
              }}
            />
          </View>
          <View>
            <TextInput
              secureTextEntry
              returnKeyType="go"
              style={styles.TextInput}
              underlineColorAndroid="transparent"
              placeholder="روز عبور"
              autoCapitalize="none"
              placeholderTextColor={this.state.textPlaceholderColorWarning}
              autoCorrect={false}
              onChangeText={text => {
                this.setState({ password: text });
              }}
            />
          </View>
          <View>
            <TextInput
              style={styles.TextInput}
              returnKeyType="next"
              underlineColorAndroid="transparent"
              placeholder="نام"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={text => {
                this.setState({ name: text });
              }}
            />
          </View>
          <View>
            <TextInput
              returnKeyType="next"
              style={styles.TextInput}
              underlineColorAndroid="transparent"
              placeholder="نام خانوادگی"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={text => {
                this.setState({ surname: text });
              }}
            />
          </View>
          <View>
            <TextInput
              style={styles.TextInput}
              returnKeyType="next"
              underlineColorAndroid="transparent"
              placeholder="ایمیل"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={text => {
                this.setState({ email: text });
              }}
            />
          </View>
          <View>
            <TextInput
              style={styles.TextInput}
              returnKeyType="next"
              underlineColorAndroid="transparent"
              placeholder="تلفن همراه"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={text => {
                this.setState({ phone: text });
              }}
            />
          </View>
          <View style={styles.Buttons}>
            <TouchableOpacity
              style={styles.enterButton}
              onPress={() => {
                if (
                  this.state.username.length == 0 ||
                  this.state.password.length == 0
                ) {
                  this.setState({ textPlaceholderColorWarning: "red" });
                } else {
                  this.props.signup(this.state.username, this.state.password, {
                    name: this.state.name,
                    surname: this.state.surname,
                    email: this.state.email,
                    phone: this.state.phone
                  });
                }
              }}
            >
              <Text
                style={{
                  alignItems: "center",
                  fontFamily: "Vazir-Bold",
                  color: "white"
                }}
              >
                اوناگیایی شو
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
                marginRight: 2,
                marginTop: 50,
                marginBottom: 17,
                alignItems: "center",
                backgroundColor: "#008080",
                paddingVertical: 10,
                flex: 1
              }}
              onPress={() => {
                this.props.changePageState();
              }}
            >
              <Text
                style={{
                  alignItems: "center",
                  fontFamily: "Vazir-Bold",
                  color: "white"
                }}
              >
                بازگشت
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

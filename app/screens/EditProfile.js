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

export default class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      username: "",
      email: "",
      phone: "",
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
              style={styles.TextInput}
              underlineColorAndroid="transparent"
              placeholder="نام"
              value={this.state.name}
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={text => {
                this.setState({ name: text });
              }}
            />
          </View>
          <View>
            <TextInput
              style={styles.TextInput}
              underlineColorAndroid="transparent"
              placeholder="نام خانوادگی"
              value={this.state.surname}
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
              underlineColorAndroid="transparent"
              placeholder="نام کاربری"
              value={this.state.username}
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
              style={styles.TextInput}
              underlineColorAndroid="transparent"
              placeholder="ایمیل"
              value={this.state.email}
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
              underlineColorAndroid="transparent"
              placeholder="تلفن همراه"
              value={this.state.phone}
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
                if (this.state.username.length == 0) {
                  this.setState({ textPlaceholderColorWarning: "red" });
                } else {
                  this.props.updateUser({
                    name: this.state.name,
                    surname: this.state.surname,
                    username: this.state.username,
                    email: this.state.email,
                    phone: this.state.phone
                  });
                }
              }}
            >
              <Text style={{ alignItems: "center", fontFamily: "Vazir" }}>
                تغییرات را ثبت کن
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

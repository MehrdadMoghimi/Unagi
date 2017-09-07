import React, { Component } from "react";
import { View, TextInput, Button, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "../style/SendPostStyle";
import toPersianNumber from "../utils/toPersianNumber";

var ButtonDisabled = false;
var CharacterCounterColor = "White";

export default class SendPost extends Component {
  constructor(props) {
    super(props);
    this.textChanged = this.textChanged.bind(this);
    this.state = {
      RemainingCharNum: 160 - this.props.sendText.length
    };
  }
  static navigationOptions = props => {
    var params = props.navigation.state.params;
    if (params) {
      if (params.RemainingCharNum < 0 || params.RemainingCharNum == 160) {
        ButtonDisabled = true;
      } else {
        ButtonDisabled = false;
      }
    }

    return {
      headerRight: (
        <View style={(style = { flexDirection: "row", paddingRight: 10 })}>
          <Text
            style={{
              color: params.RemainingCharNum >= 0 ? "white" : "red",
              fontFamily: "Vazir",
              fontSize: 20,
              flexDirection: "row",
              alignItems: "center",
              paddingRight: 10
            }}
          >
            {toPersianNumber(params.RemainingCharNum)}
          </Text>
          <TouchableOpacity
            disabled={ButtonDisabled}
            onPress={params.updateLocationAndSendPost}
          >
            <Icon style={(style = { color: "white" })} name="send" size={30} />
          </TouchableOpacity>
        </View>
      )
    };
  };

  render() {
    return (
      <TextInput
        multiline={true}
        style={styles.textInput}
        underlineColorAndroid="transparent"
        onChangeText={text => {
          this.textChanged(text);
          this.props.navigation.setParams({
            RemainingCharNum: 160 - text.length
          });
        }}
        value={this.props.sendText}
        placeholder="جدید مدید چه خبر...!؟"
        placeholderTextColor="#757575"
      />
    );
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.SendingSuccessful) {
      this.props.postSentAndGotBack(
        this.props.navigation.state.params.pageName
      );
    }
  }

  textChanged(text) {
    this.props.changeSendText(text);
  }

  componentWillMount() {
    this.props.navigation.setParams({
      updateLocationAndSendPost: () => {
        this.props.updateLocationAndSendPost(
          this.props.navigation.state.params.parentId,
          this.props.navigation.state.params.parentName
        );
      },
      RemainingCharNum: 160 - this.props.sendText.length
    });
  }
}

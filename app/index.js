import React, { Component } from "react";
import { AppWithNavigationState } from "./config/router";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import configureStore from "./config/configureStore";
import { AsyncStorage } from "react-native";
import SplashScreen from "./screens/SplashScreen";

var store = configureStore();

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHydrated: false
    };
  }
  render() {
    if (!this.state.isHydrated) {
      return <SplashScreen />;
    }
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
  componentWillMount() {
    persistStore(
      store,
      { storage: AsyncStorage, blacklist: ["replies"] },
      () => {
        this.setState({ isHydrated: true });
      }
    );
  }
}

export default Root;

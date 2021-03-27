import { StatusBar } from "expo-status-bar";
import * as Permissions from "expo-permissions";
import { Alert } from "react-native";
import React from "react";
import Loading from "./Loading";
import * as Location from "expo-location";

export default class App extends React.Component {
  state = {
    isLoading: true,
  };
  async getLocation() {
    try {
      const { status } = await Permissions.getAsync(Permissions.LOCATION);
      if (status === "granted") {
        const {
          coords: { latitude, longitude },
        } = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.High,
        });
        console.log(latitude, longitude);
        this.setState({ isLoading: false });
      } else {
        throw Error();
      }
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  }
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }
}

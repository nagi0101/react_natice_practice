import { StatusBar } from "expo-status-bar";
import * as Permissions from "expo-permissions";
import { Alert } from "react-native";
import React from "react";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";

const API_LEY = "e78b1fd4880832844cc81b985f21ad11";

export default class App extends React.Component {
  state = {
    isLoading: true,
  };
  getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_LEY}`
    );
    console.log(data);
  };
  getLocation = async () => {
    try {
      const { status } = await Permissions.getAsync(Permissions.LOCATION);
      if (status === "granted") {
        const {
          coords: { latitude, longitude },
        } = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.High,
        });
        console.log(latitude, longitude);
        this.getWeather(latitude, longitude);
        this.setState({ isLoading: false });
      } else {
        throw Error();
      }
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }
}

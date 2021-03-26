import { StatusBar } from "expo-status-bar";
import React from "react";
import Loading from "./Loading";
import * as Location from "expo-location";

export default class App extends React.Component {
  async getLocation() {
    return await Location.getCurrentPositionAsync(Location.Accuracy.High);
  }
  componentDidMount() {
    const location = this.getLocation();
    console.log(location);
  }
  render() {
    return <Loading />;
  }
}

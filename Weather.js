import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import PropTypes from "prop-types";

const weatherOptions = {
  Atmosphere: {
    iconName: "weather-fog",
    gradient: ["#BBD2C5", "#536976"],
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#00416A", "#E4E5E6"],
  },
  Thunderstorm: {
    iconName: "weather-lightening-rainy",
    gradient: ["#20002c", "#cbb4d4"],
  },
  Drizzle: {
    iconName: "weather-partly-rainy",
    gradient: ["", ""],
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#1c92d2", "#f2fcfe"],
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#8A2387", "#E94057", "#F27121"],
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#6190E8", "#A7BFE8"],
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={96}
          color="white"
        />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={styles.halfContainer}></View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 42,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

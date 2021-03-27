import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import PropTypes from "prop-types";
import {
  useFonts,
  Roboto_100Thin,
  Roboto_300Light,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";

const weatherOptions = {
  Atmosphere: {
    iconName: "weather-fog",
    gradient: ["#BBD2C5", "#536976"],
    title: "Fog",
    subTitle: "I like fog and haze. ",
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#00416A", "#E4E5E6"],
    title: "Rain",
    subTitle: "Oh rain, oh rain, beautiful rain",
  },
  Thunderstorm: {
    iconName: "weather-lightning-rainy",
    gradient: ["#20002c", "#cbb4d4"],
    title: "Thunderstorm",
    subTitle: "How long have I been in this storm?",
  },
  Drizzle: {
    iconName: "weather-partly-rainy",
    gradient: ["#43C6AC", "#F8FFAE"],
    title: "Drizzle",
    subTitle: "I hear the drizzle of the rain",
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#1c92d2", "#f2fcfe"],
    title: "Snow",
    subTitle: "Oh, let it snow, let it snow",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#8A2387", "#E94057", "#F27121"],
    title: "Clear",
    subTitle: "Sunny one so true\nI love you",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#9CECFB", "#65C7F7", "#0052D4"],
    title: "Clouds",
    subTitle: "I'm walking in this cloud",
  },
};

export default function Weather({ temp, condition }) {
  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_300Light,
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  } else {
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
        <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
          <Text style={styles.title}>{weatherOptions[condition].title}</Text>
          <Text style={styles.subTitle}>
            {weatherOptions[condition].subTitle}
          </Text>
        </View>
      </LinearGradient>
    );
  }
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
  title: {
    color: "white",
    fontFamily: "Roboto_100Thin",
    fontSize: 44,
    marginBottom: 8,
  },
  subTitle: {
    color: "white",
    fontFamily: "Roboto_300Light",
    fontSize: 24,
  },
  textContainer: {
    paddingHorizontal: 40,
    alignItems: "flex-start",
    width: "100%",
  },
});

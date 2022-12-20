import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { horizontalScale, verticalScale } from "../utils/Dimensions";
import { useFonts } from "expo-font";

// horizontal scroll

const BigCard = ({ card }) => {
  const [pressing, setPressing] = useState(false);

  const [fontsLoaded] = useFonts({
    "Spotify-Bold": require("../assets/fonts/Gotham-Bold.otf"),
    "Spotify-Light": require("../assets/fonts/Gotham-Light.otf"),
    "s-m": require("../assets/fonts/Gotham-Medium.ttf"),
    "s-b": require("../assets/fonts/Gotham-Book.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={{
        width: verticalScale(150),
        marginLeft: horizontalScale(12),
        transform: [{ scale: pressing ? 0.99 : 1 }],
      }}
      onPressIn={() => setPressing(true)}
      onPressOut={() => setPressing(false)}
    >
      <Image
        style={{
          height: verticalScale(150),
          width: verticalScale(150),
        }}
        source={card.image}
      ></Image>
      <Text
        style={{
          color: "rgba(167,167,167, 1)",
          marginTop: verticalScale(6),
          fontSize: horizontalScale(13),
          fontFamily: "s-b",
        }}
      >
        {card.title}
      </Text>
    </TouchableOpacity>
  );
};

export default BigCard;

const styles = StyleSheet.create({});

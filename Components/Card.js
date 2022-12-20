import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  PixelRatio,
  Dimensions,
} from "react-native";
import React, { useState } from "react";

import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../utils/Dimensions";
import { useFonts } from "expo-font";

// how to give dynamic font sizes

const Card = ({ image, title }) => {
  const [pressing, setPressing] = useState(false);
  const size = PixelRatio.getPixelSizeForLayoutSize();

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
        flexDirection: "row",
        height: verticalScale(55),
        // height: 60,
        width: "48%",
        transform: [{ scale: pressing ? 0.99 : 1 }],
        // opacity: pressing ? 0.6 : 1,
      }}
      onPressIn={() => setPressing(true)}
      onPressOut={() => setPressing(false)}
    >
      {/* 
            #4
            Font addition
            
        */}
      <Image
        style={{
          height: verticalScale(55),
          // height: 60,
          borderBottomLeftRadius: 6,
          borderTopLeftRadius: 6,
          resizeMode: "center",
          flex: 1,
        }}
        source={image}
      ></Image>
      <View
        style={{
          flex: 2,
          justifyContent: "center",
          height: "100%",
          borderBottomRightRadius: 6,
          borderTopRightRadius: 6,
          backgroundColor: "rgba(255,255,255,0.1)",
        }}
      >
        <Text
          style={{
            color: "white",
            marginLeft: 15,
            fontSize: verticalScale(13),
            fontFamily: "s-m",
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({});

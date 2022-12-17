import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import { horizontalScale, verticalScale } from "./utils/Dimensions";
import { TouchableOpacity } from "react-native-gesture-handler";

// Desgin the cards with images

const Search = () => {
  const [fontsLoaded] = useFonts({
    "Spotify-Bold": require("./assets/fonts/Gotham-Bold.otf"),
    "Spotify-Light": require("./assets/fonts/Gotham-Light.otf"),
    "s-m": require("./assets/fonts/Gotham-Medium.ttf"),
    "s-b": require("./assets/fonts/Gotham-Book.ttf"),
  });

  if (!fontsLoaded) return <></>;

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#1E1E1E" }}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <Text
        style={{
          marginTop: verticalScale(100),
          fontFamily: "Spotify-Bold",
          fontSize: verticalScale(36),
          color: "white",
          marginHorizontal: horizontalScale(12),
        }}
      >
        Search
      </Text>
      <View
        style={{
          marginHorizontal: horizontalScale(12),
          // borderColor: "red",
          // borderWidth: 2,
          marginTop: verticalScale(17),
        }}
      >
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            width: "75%",
            backgroundColor: "white",
            height: verticalScale(50),
            borderRadius: verticalScale(2),
          }}
        ></TouchableOpacity>
      </View>
      <Text
        style={{
          marginTop: verticalScale(30),
          fontFamily: "Spotify-Bold",
          fontSize: verticalScale(19),
          color: "white",
          marginHorizontal: horizontalScale(12),
          textAlign: "center",
        }}
      >
        Browse all
      </Text>
    </ScrollView>
  );
};

export default Search;

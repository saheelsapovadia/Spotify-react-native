import { View, Text, ScrollView } from "react-native";
import React, { useContext } from "react";
import { useFonts } from "expo-font";
import { horizontalScale, verticalScale } from "./utils/Dimensions";
import { TouchableOpacity } from "react-native-gesture-handler";
import MusicControlPanel from "./Components/MusicControlPanel";
import { ThemeContext } from "./utils/ThemeContext";

// Desgin the cards with images
// Data is ready, add basic 6 cards
const Search = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={{ flex: 1, backgroundColor: "#1E1E1E" }}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Text
          style={{
            marginTop: verticalScale(100),
            fontFamily: themeContext.fontNames.SPOTIFY_BOLD,
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
            fontFamily: themeContext.fontNames.SPOTIFY_BOLD,
            fontSize: verticalScale(19),
            color: "white",
            marginHorizontal: horizontalScale(12),
            textAlign: "center",
          }}
        >
          Browse all
        </Text>
      </ScrollView>
      <MusicControlPanel name={"settings"} />
    </View>
  );
};

export default Search;

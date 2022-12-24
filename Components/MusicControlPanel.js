import { Image, Pressable, View } from "react-native";
import React, { useContext, useEffect } from "react";
import { horizontalScale, verticalScale } from "../utils/Dimensions";
import { MusicContext } from "./MusicContext/MusicContext";
import Text from "../Abstracts/Text";
// icons
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const BACKGROUND_COLOR = "rgba(46,46,46,1)";

const MusicControlPanel = ({ name }) => {
  useEffect(() => {
    console.log("music bar ", name);
  }, []);
  const { musicState, setMusicState } = useContext(MusicContext);
  return (
    <View
      style={{
        position: "absolute",
        bottom: verticalScale(70),
        flex: 1,
        zIndex: 10,
        width: "100%",
        paddingHorizontal: horizontalScale(8),
        // alignItems: "center",
      }}
    >
      <View
        style={{
          width: "100%",
          backgroundColor: BACKGROUND_COLOR,
          height: verticalScale(60),
          flexDirection: "row",
          alignItems: "center",
          borderRadius: horizontalScale(4),
        }}
      >
        <Image
          source={require("../assets/Images/Spotify-Card.png")}
          style={{
            width: horizontalScale(40),
            height: horizontalScale(40),
            borderRadius: horizontalScale(4),
            marginLeft: horizontalScale(10),
          }}
        ></Image>
        <View style={{ marginLeft: horizontalScale(15) }}>
          <Text style={{ color: "white", fontSize: horizontalScale(14) }}>
            Love Story
          </Text>
          <Text style={{ color: "grey", fontSize: horizontalScale(12) }}>
            Taylor Swift
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginLeft: "auto" }}>
          <MaterialCommunityIcons
            name="monitor-speaker"
            size={horizontalScale(25)}
            color="grey"
            style={{ marginRight: horizontalScale(14) }}
          />
          <MaterialCommunityIcons
            name="heart-outline"
            size={horizontalScale(26)}
            color="grey"
            style={{ marginRight: horizontalScale(14) }}
          />
          <Pressable onPress={() => setMusicState(!musicState)}>
            {musicState ? (
              <FontAwesome5
                name="play"
                size={horizontalScale(25)}
                color="grey"
                style={{ marginRight: horizontalScale(14) }}
              />
            ) : (
              <FontAwesome5
                name="pause"
                size={horizontalScale(25)}
                color="grey"
                style={{ marginRight: horizontalScale(14) }}
              />
            )}
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default MusicControlPanel;

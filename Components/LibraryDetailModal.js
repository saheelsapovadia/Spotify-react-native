import { Pressable, StyleSheet, View } from "react-native";
import React, { useContext, useEffect } from "react";
import { horizontalScale, verticalScale } from "../utils/Dimensions";
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import Animated from "react-native-reanimated";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import FeatherIcon from "react-native-vector-icons/Feather";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import Text from "../Abstracts/Text";
import { ThemeContext } from "../utils/ThemeContext";

// fonts

const LibraryDetailModal = ({
  image,
  artist,
  title,
  setShowModal,
  showModal,
}) => {
  const themeContext = useContext(ThemeContext).theme;
  const opacity = useSharedValue(0);
  const transform = useSharedValue(50);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  }, []);
  const bottomTranslate = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: transform.value,
        },
      ],
    };
  });
  useEffect(() => {
    console.log("animating...", opacity.value, transform.value);
    opacity.value = withTiming(1, { duration: 300 });
    transform.value = withTiming(0, { duration: 200 });
  }, []);
  return (
    <Animated.View
      style={[
        {
          position: "absolute",
          width: "100%",
          height: "100%",
          justifyContent: "flex-end",
          paddingBottom: verticalScale(20),
        },
        { ...themeContext.screens },
        animatedStyles,
        bottomTranslate,
      ]}
    >
      <Pressable
        style={{ position: "absolute", width: "100%", height: "100%" }}
        onPress={() => {
          setShowModal(false);
        }}
      ></Pressable>
      <Animated.Image
        source={image}
        style={[
          {
            height: verticalScale(170),
            width: verticalScale(170),
            alignSelf: "center",
            marginBottom: verticalScale(20),
          },
        ]}
      ></Animated.Image>
      <Text
        style={{
          color: "white",
          fontSize: verticalScale(20),
          alignSelf: "center",
          marginBottom: verticalScale(5),
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          color: "rgb(160,160,160)",
          fontSize: verticalScale(15),
          alignSelf: "center",
          marginBottom: verticalScale(40),
        }}
      >
        {artist}
      </Text>

      <Option OptionIcon="heart" OptionText={"Liked"}>
        <FontAwesomeIcon
          name="heart"
          size={30}
          color="green"
          style={{ marginRight: horizontalScale(30), alignSelf: "center" }}
        />
      </Option>
      <Option OptionIcon="heart" OptionText={"Add to profile"}>
        <FeatherIcon
          name="globe"
          size={30}
          color="#A3A1A1"
          style={{ marginRight: horizontalScale(30), alignSelf: "center" }}
        />
      </Option>
      <Option OptionIcon="heart" OptionText={"Pin playlist"}>
        <AntDesignIcon
          name="pushpino"
          size={30}
          color="#A3A1A1"
          style={{
            marginRight: horizontalScale(30),
            // transform: [{ rotate: "90deg" }],
            alignSelf: "center",
          }}
        />
      </Option>
      <Option OptionIcon="heart" OptionText={"Share"}>
        <IoniconsIcon
          name="share-social-outline"
          size={30}
          color="#A3A1A1"
          style={{ marginRight: horizontalScale(30), alignSelf: "center" }}
        />
      </Option>
    </Animated.View>
  );
};

const Option = ({ OptionIcon, OptionText, children }) => {
  return (
    <View
      style={{
        width: "100%",
        height: verticalScale(60),
        paddingHorizontal: horizontalScale(12),
        flexDirection: "row",
        // borderColor: "red",
        // borderWidth: 2,
      }}
    >
      {/* Icons */}
      {children}
      <Text
        style={{
          color: "white",
          fontSize: horizontalScale(16),
          alignSelf: "center",
        }}
      >
        {OptionText}
      </Text>
    </View>
  );
};

export default LibraryDetailModal;

const styles = StyleSheet.create({});

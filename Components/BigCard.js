import { Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import { horizontalScale, verticalScale } from "../utils/Dimensions";
import { ThemeContext } from "../utils/ThemeContext";
import Text from "../Abstracts/Text";

// horizontal scroll

const BigCard = ({ card }) => {
  const [pressing, setPressing] = useState(false);
  const themeContext = useContext(ThemeContext).theme;
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
          fontFamily: themeContext.fontNames.SPOTIFY_REGULAR,
        }}
      >
        {card.title}
      </Text>
    </TouchableOpacity>
  );
};

export default BigCard;

const styles = StyleSheet.create({});

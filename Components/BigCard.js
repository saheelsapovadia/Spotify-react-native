import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { horizontalScale, verticalScale } from "../utils/Dimensions";

// horizontal scroll

const BigCard = ({ card }) => {
  const [pressing, setPressing] = useState(false);
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
        style={{ color: "rgba(167,167,167, 1)", marginTop: verticalScale(6) }}
      >
        {card.title}
      </Text>
    </TouchableOpacity>
  );
};

export default BigCard;

const styles = StyleSheet.create({});

import { View, Text } from "react-native";
import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const ScreenBottomMargin = () => {
  const themeContext = useContext(ThemeContext);
  return <View style={{ ...themeContext.spacing.screen }}></View>;
};

export default ScreenBottomMargin;

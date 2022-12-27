import { View } from "react-native";
import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const ScreenBottomMargin = () => {
  const themeContext = useContext(ThemeContext).theme;
  return <View style={{ ...themeContext.spacing.screen }}></View>;
};

export default ScreenBottomMargin;

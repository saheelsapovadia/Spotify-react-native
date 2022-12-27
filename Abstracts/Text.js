import { Text as RNText } from "react-native";
import React, { useContext } from "react";
import { ThemeContext } from "../utils/ThemeContext";

const Text = ({ children, style }) => {
  const themeContext = useContext(ThemeContext).theme;
  return <RNText style={[style, { ...themeContext.text }]}>{children}</RNText>;
};

export default Text;

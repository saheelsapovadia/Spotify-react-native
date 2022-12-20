import { useFonts } from "expo-font";
import React, { useState } from "react";
import Theme from "../data/Theme";

const ThemeContext = React.createContext({});

const ThemeContextProvider = (props) => {
  // Theme.fonts -> imports the font files
  const [fontsLoaded] = useFonts(Theme.fonts);
  // Easter egg
  const [magicMode, setMagicMode] = useState(false);
  if (!fontsLoaded) {
    return null;
  }
  return (
    <ThemeContext.Provider value={Theme}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };

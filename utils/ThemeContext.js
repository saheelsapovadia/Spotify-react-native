import { useFonts } from "expo-font";
import React, { useEffect, useState } from "react";
import { DarkTheme, MagicTheme } from "../data/Theme";
import RNShake from "react-native-shake";

const ThemeContext = React.createContext({});

const ThemeContextProvider = (props) => {
  // Theme.fonts -> imports the font files
  const [fontsLoaded] = useFonts(DarkTheme.fonts);
  // Easter egg
  const [magicMode, setMagicMode] = useState(false);
  const theme = MagicTheme;
  // const [theme, setTheme] = useState(MagicTheme);

  useEffect(() => {
    console.log("shake detected......................");
    const subscription = RNShake.addListener(() => {
      // Your code here...
      console.log("shake detected......................");
      if (magicMode) {
        setTheme(MagicTheme);
      } else {
        setTheme(DarkTheme);
      }
    }, []);

    return () => {
      // Your code here...
      subscription.remove();
    };
  }, []);

  // useEffect(() => {
  //   if (magicMode) {
  //     setTheme(MagicTheme);
  //   } else {
  //     setTheme(DarkTheme);
  //   }
  // }, [magicMode]);
  console.log(theme);
  if (!fontsLoaded) {
    return null;
  }
  return (
    <ThemeContext.Provider value={{ theme, setMagicMode }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };

import { horizontalScale, verticalScale } from "../utils/Dimensions";

const darkPalette = {
  SWIPE_GREEN_COLOR: "rgba(30,215,96,1)",
  SWIPE_GREY_COLOR: "rgba(127,127,127,1)",
  GREEN_COLOR: "rgba(30,215,96,1)",
  GREY_COLOR: "rgba(127,127,127,1)",
  LINEAR_GRADIENT_BLACK_START: "rgba(17,17,17,1)",
  LINEAR_GRADIENT_BLACK_END: "rgba(17,17,17,0.7)",
  BORDER_COLOR: "rgba(127,127,127,1)",
  SELECTED_BACKGROUND_COLOR: "rgba(20,132,60,1)",
  SELECTED_BORDER_COLOR: "rgba(41,178,90,1)",
  SELECTED_2_BACKGROUND_COLOR: "rgba(19,97,47,1)",
  SCREEN_BACKGROUND: "#1E1E1E",
  LINEAR_GRADIENT_PURPLE: "#3F13BE",
};

const lightPalette = {
  SWIPE_GREEN_COLOR: "#FF8511",
  SWIPE_GREY_COLOR: "rgba(127,127,127,1)",
  GREEN_COLOR: "#FF8511",
  GREY_COLOR: "rgba(127,127,127,1)",
  LINEAR_GRADIENT_BLACK_START: "rgba(17,17,17,1)",
  LINEAR_GRADIENT_BLACK_END: "rgba(17,17,17,0.7)",
  BORDER_COLOR: "rgba(127,127,127,1)",
  SELECTED_BACKGROUND_COLOR: "rgba(255,133,17,1)",
  SELECTED_BORDER_COLOR: "rgba(255,107,0,1)",
  SELECTED_2_BACKGROUND_COLOR: "#DF7130",
  SCREEN_BACKGROUND: "#F5F2F2",
  LINEAR_GRADIENT_PURPLE: "#DC5C00",
};
// const lightPalette = {
//   SWIPE_GREEN_COLOR: "#FF8511",
//   SWIPE_GREY_COLOR: "rgba(127,127,127,1)",
//   GREEN_COLOR: "#FF8511",
//   GREY_COLOR: "rgba(127,127,127,1)",
//   LINEAR_GRADIENT_BLACK_START: "rgba(17,17,17,1)",
//   LINEAR_GRADIENT_BLACK_END: "rgba(17,17,17,0.7)",
//   BORDER_COLOR: "rgba(127,127,127,1)",
//   SELECTED_BACKGROUND_COLOR: "#FF8511",
//   SELECTED_BORDER_COLOR: "#FF6B00",
//   SELECTED_2_BACKGROUND_COLOR: "#DF7130",
//   SCREEN_BACKGROUND: "#F5F2F2",
//   LINEAR_GRADIENT_PURPLE: "#3F13BE",
// };

// import Font files here for the project
const fonts = {
  SPOTIFY_BOLD: require("../assets/fonts/Gotham-Bold.otf"),
  SPOTIFY_LIGHT: require("../assets/fonts/Gotham-Light.otf"),
  SPOTIFY_MEDIUM: require("../assets/fonts/Gotham-Medium.ttf"),
  SPOTIFY_REGULAR: require("../assets/fonts/Gotham-Book.ttf"),
};

const fontSize = {
  XL: horizontalScale(24),
  S: horizontalScale(13),
};

const dark = {
  screens: {
    backgroundColor: darkPalette.SCREEN_BACKGROUND,
  },
  bottomtabs: {
    active: darkPalette.GREEN_COLOR,
    inactive: darkPalette.GREY_COLOR,
  },
  home: {
    linearGradient: darkPalette.LINEAR_GRADIENT_PURPLE,
    background: darkPalette.SCREEN_BACKGROUND,
  },
  yourlibrary: {
    pin: darkPalette.SWIPE_GREEN_COLOR,
    unpin: darkPalette.SWIPE_GREY_COLOR,
    filterBorder: darkPalette.BORDER_COLOR,
    selectedFilterBorder: darkPalette.SELECTED_BORDER_COLOR,
    selectedFilterBackground: darkPalette.SELECTED_BACKGROUND_COLOR,
    selectedSubFilterBackground: darkPalette.SELECTED_2_BACKGROUND_COLOR,
  },
};

const light = {
  text: {
    color: "black",
  },
  screens: {
    backgroundColor: lightPalette.SCREEN_BACKGROUND,
  },
  bottomtabs: {
    active: lightPalette.GREEN_COLOR,
    inactive: lightPalette.GREY_COLOR,
  },
  home: {
    linearGradient: lightPalette.LINEAR_GRADIENT_PURPLE,
    background: lightPalette.SCREEN_BACKGROUND,
  },
  yourlibrary: {
    pin: lightPalette.SWIPE_GREEN_COLOR,
    unpin: lightPalette.SWIPE_GREY_COLOR,
    filterBorder: lightPalette.BORDER_COLOR,
    selectedFilterBorder: lightPalette.SELECTED_BORDER_COLOR,
    selectedFilterBackground: lightPalette.SELECTED_BACKGROUND_COLOR,
    selectedSubFilterBackground: lightPalette.SELECTED_2_BACKGROUND_COLOR,
  },
};

// screen specific styles
const theme = {
  spacing: {
    screen: {
      height: verticalScale(90),
    },
  },
  fontNames: {
    SPOTIFY_BOLD: "SPOTIFY_BOLD",
    SPOTIFY_LIGHT: "SPOTIFY_LIGHT",
    SPOTIFY_MEDIUM: "SPOTIFY_MEDIUM",
    SPOTIFY_REGULAR: "SPOTIFY_REGULAR",
  },
  textvariants: {
    headingLarge: {
      fontFamily: "SPOTIFY_BOLD",
      fontSize: fontSize.XL,
    },
    cardTitle: {
      fontFamily: "SPOTIFY_LIGHT",
      fontSize: fontSize.S,
    },
    cardTitleBold: {
      fontSize: fontSize.S,
      fontFamily: "SPOTIFY_BOLD",
    },
  },
};

export const MagicTheme = {
  ...light,
  ...theme,
  fonts,
};
export const DarkTheme = {
  ...dark,
  ...theme,
  fonts,
};

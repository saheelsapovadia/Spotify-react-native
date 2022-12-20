import { horizontalScale, verticalScale } from "../utils/Dimensions";

const palette = {
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

// screen specific styles
const theme = {
  bottomtabs: {
    active: palette.GREEN_COLOR,
    inactive: palette.GREY_COLOR,
  },
  home: {
    linearGradient: palette.LINEAR_GRADIENT_PURPLE,
    background: palette.SCREEN_BACKGROUND,
  },
  yourlibrary: {
    pin: palette.SWIPE_GREEN_COLOR,
    unpin: palette.SWIPE_GREY_COLOR,
    filterBorder: palette.BORDER_COLOR,
    selectedFilterBorder: palette.SELECTED_BORDER_COLOR,
    selectedFilterBackground: palette.SELECTED_BACKGROUND_COLOR,
    selectedSubFilterBackground: palette.SELECTED_2_BACKGROUND_COLOR,
  },
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

export default Theme = {
  ...theme,
  fonts,
};

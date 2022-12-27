import {
  Image,
  ScrollView,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { horizontalScale, verticalScale } from "./utils/Dimensions";
import LibraryDetailModal from "./Components/LibraryDetailModal";
import LibraryList from "./Components/LibraryList";
// Icons
import FeatherIcon from "react-native-vector-icons/Feather";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import Animated, {
  FadeIn,
  FadeOut,
  interpolateColor,
  SlideInRight,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import MusicControlPanel from "./Components/MusicControlPanel";
import { ThemeContext } from "./utils/ThemeContext";
import Text from "./Abstracts/Text";

const BORDER_COLOR = "rgba(127,127,127,1)";
const SELECTED_BACKGROUND_COLOR = "rgba(20,132,60,1)";
const SELECTED_BORDER_COLOR = "rgba(41,178,90,1)";
const SELECTED_2_BACKGROUND_COLOR = "rgba(19,97,47,1)";

// Design the row cards better

// filter rows logic
// swap pins to top in v2

// deadline - 17 dec

const YourLibrary = () => {
  const themeContext = useContext(ThemeContext).theme;

  const [showModal, setShowModal] = useState(false);
  const [modalDetails, setModalDetails] = useState({
    artist: "Taylor Swift",
    title: "Eras Tour",
    image: require("./assets/Images/Spotify-Card.png"),
  });

  const [filterActive, setFilterActive] = useState(false);
  const [playlistSelected, setPlaylistSelected] = useState(false);
  const [byYouSelected, setByYouSelected] = useState(false);

  const filterCrossOpacity = useSharedValue(0);
  const filterCrossWidth = useSharedValue(0);
  const filterCrossMarginLeft = useState(0);

  const filterOptionsAnimation = useAnimatedStyle(() => {
    return {
      marginLeft: filterCrossMarginLeft.value,
    };
  }, []);

  useEffect(() => {
    if (filterActive) {
      filterCrossWidth.value = withTiming(verticalScale(35), {
        duration: 100,
      });
      filterCrossOpacity.value = withTiming(1, {
        duration: 100,
      });
      filterCrossMarginLeft.values = withTiming(horizontalScale(12), {
        duration: 100,
      });
    } else {
      filterCrossWidth.value = withTiming(0, { duration: 100 });
      filterCrossOpacity.value = withTiming(0, { duration: 100 });
      filterCrossMarginLeft.values = withTiming(12, {
        duration: 100,
      });
    }
    setPlaylistSelected(filterActive);
    if (!filterActive) setByYouSelected(false);
  }, [filterActive]);

  const onFilterPress = (label) => {
    console.log("filter pressed");
    setFilterActive(!filterActive);
  };

  const onFilterPress2 = () => {
    setByYouSelected(!byYouSelected);
  };

  const playlistAnimationProgress = useDerivedValue(() => {
    return byYouSelected ? 1 : 0;
  }, [byYouSelected]);

  const playlistAnimation = useAnimatedStyle(() => {
    const borderColor = interpolateColor(
      playlistAnimationProgress.value,
      [0, 1],
      [
        themeContext.yourlibrary.filterBorder,
        themeContext.yourlibrary.selectedFilterBorder,
      ]
    );
    const backgroundColor = interpolateColor(
      playlistAnimationProgress.value,
      [0, 1],
      ["transparent", themeContext.yourlibrary.selectedSubFilterBackground]
    );
    return {
      borderColor,
      backgroundColor,
    };
  }, []);

  const animationProgress = useDerivedValue(() => {
    console.log("animation progress", filterActive);
    return filterActive ? 1 : 0;
  }, [filterActive]);

  console.log("sasa", themeContext.yourlibrary);
  const filterOptionSelectedAnimation = useAnimatedStyle(() => {
    const borderColor = interpolateColor(
      animationProgress.value,
      [0, 1],
      [
        themeContext.yourlibrary.filterBorder,
        themeContext.yourlibrary.selectedFilterBorder,
      ]
    );
    const backgroundColor = interpolateColor(
      animationProgress.value,
      [0, 1],
      ["transparent", themeContext.yourlibrary.selectedFilterBackground]
    );

    return {
      borderColor,
      backgroundColor,
    };
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={[{ flex: 1 }, { ...themeContext.screens }]}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <StatusBar translucent backgroundColor="transparent" />
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: horizontalScale(12),
            marginTop: verticalScale(55),
            //   borderWidth: 2,
            //   borderColor: "red",
          }}
        >
          <Image
            style={{
              width: horizontalScale(35),
              height: horizontalScale(35),
              borderRadius: horizontalScale(40),
              alignSelf: "center",
            }}
            source={require("./assets/Images/taylor-swift.jpeg")}
          ></Image>
          <Text
            style={{
              alignSelf: "center",
              marginLeft: horizontalScale(10),
              fontSize: horizontalScale(24),
              color: "white",
              fontFamily: themeContext.fontNames.SPOTIFY_BOLD,
              fontWeight: "500",
            }}
          >
            Your Library
          </Text>

          <FeatherIcon
            name="search"
            size={30}
            color="#ffffff"
            style={{
              alignSelf: "center",
              marginLeft: "auto",
              marginRight: horizontalScale(15),
            }}
          />
          <AntDesignIcon
            name="plus"
            size={30}
            color="#ffffff"
            style={{
              alignSelf: "center",
              marginLeft: horizontalScale(10),
              marginRight: horizontalScale(15),
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: horizontalScale(12),
            marginTop: verticalScale(17),
          }}
        >
          {filterActive ? (
            <Animated.View entering={FadeIn}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={{
                  borderColor: BORDER_COLOR,
                  borderWidth: 1,
                  borderRadius: verticalScale(30),
                  height: verticalScale(35),
                  width: verticalScale(35),
                  marginTop: verticalScale(17),
                  marginRight: horizontalScale(8),
                  // display: "none",
                }}
                onPress={onFilterPress}
              >
                <AntDesignIcon
                  name="plus"
                  size={25}
                  color="#ffffff"
                  style={{
                    paddingTop: 3,
                    paddingLeft: 2,
                    height: verticalScale(35),
                    height: verticalScale(35),
                    transform: [
                      {
                        rotate: "45deg",
                      },
                    ],
                  }}
                />
              </TouchableOpacity>
            </Animated.View>
          ) : (
            <></>
          )}

          <Animated.View
            style={[
              filterOptionsAnimation,
              { flexDirection: "row", marginLeft: 12 },
            ]}
          >
            <Animated.View
              style={[
                filterOptionSelectedAnimation,
                // filterCardAnimation,
                {
                  borderColor: BORDER_COLOR,
                  borderWidth: 1,
                  borderRadius: verticalScale(50),
                  height: verticalScale(35),
                  justifyContent: "center",
                  marginTop: verticalScale(17),
                  marginRight: horizontalScale(8),
                  // marginLeft: "auto",
                },
              ]}
              // onLayout={measure}
            >
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => onFilterPress("Playlists")}
              >
                <Text
                  style={{
                    color: "white",
                    paddingHorizontal: horizontalScale(12),
                    fontFamily: themeContext.fontNames.SPOTIFY_REGULAR,
                  }}
                >
                  Playlists
                </Text>
              </TouchableOpacity>
            </Animated.View>
            {playlistSelected ? (
              <></>
            ) : (
              <>
                <Animated.View
                  style={[
                    {
                      borderColor: BORDER_COLOR,
                      borderWidth: 1,
                      borderRadius: verticalScale(50),
                      height: verticalScale(35),
                      justifyContent: "center",
                      marginTop: verticalScale(17),
                      marginRight: horizontalScale(8),
                    },
                  ]}
                  entering={FadeIn.delay(300)}
                  exiting={FadeOut}
                >
                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => onFilterPress("Artists")}
                  >
                    <Text
                      style={{
                        color: "white",
                        paddingHorizontal: horizontalScale(12),
                        fontFamily: themeContext.fontNames.SPOTIFY_REGULAR,
                      }}
                    >
                      Artists
                    </Text>
                  </TouchableOpacity>
                </Animated.View>
                <Animated.View
                  style={[
                    {
                      borderColor: BORDER_COLOR,
                      borderWidth: 1,
                      borderRadius: verticalScale(50),
                      height: verticalScale(35),
                      justifyContent: "center",
                      marginTop: verticalScale(17),
                      marginRight: horizontalScale(8),
                    },
                  ]}
                  entering={FadeIn.delay(300)}
                  exiting={FadeOut}
                >
                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => onFilterPress("Artists")}
                  >
                    <Text
                      style={{
                        color: "white",
                        paddingHorizontal: horizontalScale(12),
                        fontFamily: themeContext.fontNames.SPOTIFY_REGULAR,
                      }}
                    >
                      Albums
                    </Text>
                  </TouchableOpacity>
                </Animated.View>
              </>
            )}
            {playlistSelected ? (
              <>
                <Animated.View
                  style={[
                    playlistAnimation,
                    {
                      borderColor: BORDER_COLOR,
                      borderWidth: 1,
                      borderRadius: verticalScale(50),
                      height: verticalScale(35),
                      justifyContent: "center",
                      marginTop: verticalScale(17),
                      marginRight: horizontalScale(8),
                    },
                  ]}
                  entering={SlideInRight.delay(300)}
                >
                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => onFilterPress2()}
                  >
                    <Text
                      style={{
                        color: "white",
                        paddingHorizontal: horizontalScale(12),
                        fontFamily: themeContext.fontNames.SPOTIFY_REGULAR,
                      }}
                    >
                      By you
                    </Text>
                  </TouchableOpacity>
                </Animated.View>
                {byYouSelected ? (
                  <></>
                ) : (
                  <>
                    <Animated.View
                      style={[
                        {
                          borderColor: BORDER_COLOR,
                          borderWidth: 1,
                          borderRadius: verticalScale(50),
                          height: verticalScale(35),
                          justifyContent: "center",
                          marginTop: verticalScale(17),
                          marginRight: horizontalScale(8),
                        },
                      ]}
                      entering={SlideInRight.delay(300)}
                    >
                      <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => onFilterPress("Artists")}
                      >
                        <Text
                          style={{
                            color: "white",
                            paddingHorizontal: horizontalScale(12),
                            fontFamily: themeContext.fontNames.SPOTIFY_REGULAR,
                          }}
                        >
                          By Spotify
                        </Text>
                      </TouchableOpacity>
                    </Animated.View>
                  </>
                )}
              </>
            ) : (
              <></>
            )}
          </Animated.View>
        </View>
        <LibraryList
          setModalDetails={setModalDetails}
          setShowModal={setShowModal}
        />
      </ScrollView>
      {showModal && (
        <LibraryDetailModal
          {...modalDetails}
          setShowModal={setShowModal}
          showModal={showModal}
        />
      )}
      <MusicControlPanel name={"your library"} />
    </View>
  );
};

export default YourLibrary;

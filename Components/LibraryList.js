import { View, Image, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { horizontalScale, verticalScale } from "../utils/Dimensions";
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import Text from "../Abstracts/Text";
// icons
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { ThemeContext } from "../utils/ThemeContext";

const SWIPE_GREEN_COLOR = "rgba(30,215,96,1)";
const SWIPE_GREY_COLOR = "rgba(127,127,127,1)";

const LibraryList = ({ setModalDetails, setShowModal }) => {
  const themeContext = useContext(ThemeContext).theme;
  const [data, setData] = useState([
    {
      title: "BTS",
      artist: "Jimin",
      image: require("../assets/Images/Spotify-Card-bts.png"),
      pin: false,
    },
    {
      artist: "Taylor Swift",
      title: "Eras Tour",
      image: require("../assets/Images/Spotify-Card.png"),
      pin: true,
    },
    {
      title: "Jin, Suga",
      artist: "Jimin",
      image: require("../assets/Images/Spotify-Card-bts.png"),
      pin: true,
    },
    {
      artist: "Taylor Swift",
      title: "Eras Tour",
      image: require("../assets/Images/Spotify-Card.png"),
      pin: false,
    },
  ]);

  const setPin = (index, pin) => {
    const nData = data;
    nData[index]["pin"] = !pin;
    setData(nData);
    console.log(index, pin, data[index]);
  };

  return (
    <View
      style={[
        {
          flex: 1,
          marginVertical: verticalScale(50),
        },
        { ...themeContext.screens },
      ]}
    >
      {data != undefined &&
        data.map((row, index) => {
          return (
            <Row
              key={index}
              index={index}
              title={row.title}
              artist={row.artist}
              image={row.image}
              setModalDetails={setModalDetails}
              setShowModal={setShowModal}
              pin={row.pin}
              setPin={setPin}
              data={data}
              setData={setData}
            />
          );
        })}
    </View>
  );
};

const Row = ({
  index,
  title,
  artist,
  image,
  setModalDetails,
  setShowModal,
  pin,
}) => {
  const themeContext = useContext(ThemeContext).theme;
  const [pinState, setPinState] = useState(pin);

  const detailsModal = (data) => {
    setModalDetails(data);
    setShowModal(true);
  };

  const translateX = useSharedValue(0);

  const panGesture = useAnimatedGestureHandler({
    onActive: (event) => {
      if (event.translationX >= 0) {
        translateX.value = event.translationX;
        // runOnJS(horizontalScale)(event.translationX)
      }
    },
    onEnd: (event) => {
      console.log("enddd", event.translationX);
      if (event.translationX > 110) runOnJS(setPinState)(!pinState);
      translateX.value = 0;
    },
  });

  const swipeAnimationStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  }, []);

  return (
    <GestureHandlerRootView>
      <View
        style={[
          {
            marginBottom: verticalScale(20),
          },
        ]}
      >
        <TouchableOpacity
          activeOpacity={1}
          onLongPress={() => detailsModal({ artist, title, image })}
        >
          <PanGestureHandler onGestureEvent={panGesture}>
            <Animated.View
              style={[
                swipeAnimationStyles,
                {
                  flexDirection: "row",
                  paddingHorizontal: horizontalScale(12),
                  alignItems: "center",
                  position: "relative",
                },
                { ...themeContext.screens },
              ]}
              onPress={() => console.log("sda")}
            >
              <AntDesignIcon
                name="pushpino"
                size={30}
                color="#A3A1A1"
                style={{
                  alignSelf: "center",
                  position: "absolute",
                  left: horizontalScale(-50),
                  color: "white",
                }}
              />
              <Image
                source={image}
                style={{
                  width: horizontalScale(60),
                  height: horizontalScale(60),
                  borderRadius: horizontalScale(50),
                  marginRight: horizontalScale(12),
                }}
              ></Image>
              <View>
                <Text
                  style={{
                    color: "white",
                    fontSize: horizontalScale(15),
                    fontFamily: themeContext.fontNames.SPOTIFY_REGULAR,
                  }}
                >
                  {title}
                </Text>
                <Text
                  style={{
                    color: "rgba(160,160,160,1)",
                    fontFamily: themeContext.fontNames.SPOTIFY_REGULAR,
                  }}
                >
                  {artist}
                </Text>
              </View>
              <Pressable
                style={{
                  justifyContent: "flex-end",
                  marginLeft: "auto",
                  marginRight: horizontalScale(15),
                }}
                onPress={() =>
                  !pinState ? detailsModal({ artist, title, image }) : null
                }
              >
                {pinState ? (
                  <AntDesignIcon
                    name="pushpino"
                    size={30}
                    color="#A3A1A1"
                    style={{
                      alignSelf: "center",
                      color: themeContext.yourlibrary.pin,
                      marginLeft: "auto",
                      marginRight: horizontalScale(15),
                    }}
                  />
                ) : (
                  <Entypo
                    name="dots-three-vertical"
                    size={18}
                    color="rgba(160,160,160,1)"
                    style={{
                      justifyContent: "flex-end",
                      marginLeft: "auto",
                      marginRight: horizontalScale(15),
                      color: "white",
                    }}
                  />
                )}
              </Pressable>
            </Animated.View>
          </PanGestureHandler>
          <View
            style={{
              flex: 1,
              backgroundColor: pinState
                ? themeContext.yourlibrary.unpin
                : themeContext.yourlibrary.pin,
              position: "absolute",
              height: "100%",
              width: "100%",
              zIndex: -1,
            }}
          ></View>
        </TouchableOpacity>
      </View>
    </GestureHandlerRootView>
  );
};

export default LibraryList;

import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { horizontalScale, verticalScale } from "../utils/Dimensions";
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

const LibraryRowCard = ({
  artist,
  title,
  image,
  setModalDetails,
  setShowModal,
}) => {
  const detailsModal = (data) => {
    setModalDetails(data);
    setShowModal(true);
  };

  const translateX = useSharedValue(0);
  const panGesture = () =>
    useAnimatedGestureHandler({
      onActive: (event) => {
        console.log(event.translationX);
        translateX.value = event.translationX;
      },
      onEnd: (event) => {},
    });

  const swipeAnimationStyle = useAnimatedStyle(
    () => ({
      transform: [
        {
          translateX: translateX.value,
        },
      ],
    }),
    []
  );

  return (
    <GestureHandlerRootView>
      <PanGestureHandler onGestureEvent={panGesture}>
        <Animated.View
          style={[
            swipeAnimationStyle,
            {
              borderColor: "red",
              borderWidth: 2,
              flexDirection: "row",
              marginHorizontal: horizontalScale(12),
              marginBottom: horizontalScale(12),
            },
          ]}
        >
          {/* <TouchableOpacity
          activeOpacity={0.5}
          style={{
            flexDirection: "row",
            marginHorizontal: horizontalScale(12),
            marginBottom: horizontalScale(12),
          }}
          // onLongPress={() => detailsModal({ artist, title, image })}
        > */}
          <Image
            source={image}
            style={{
              width: horizontalScale(55),
              height: horizontalScale(55),
              borderRadius: horizontalScale(50),
              marginRight: horizontalScale(12),
            }}
          ></Image>
          <View>
            <Text style={{ color: "white", fontSize: horizontalScale(18) }}>
              {title}
            </Text>
            <Text style={{ color: "rgba(160,160,160,1)" }}>{artist}</Text>
          </View>
          <View></View>
          {/* </TouchableOpacity> */}
        </Animated.View>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
};

export default LibraryRowCard;

const styles = StyleSheet.create({});

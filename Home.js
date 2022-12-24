import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";

import React, { useContext } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Card from "./Components/Card";
import { horizontalScale, verticalScale } from "./utils/Dimensions";
import BigCard from "./Components/BigCard";
import { MadeForYou, NewReleases, Charts } from "./data/Playlist";

// icons
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MusicControlPanel from "./Components/MusicControlPanel";

// theme
import { ThemeContext } from "./utils/ThemeContext";
import ScreenBottomMargin from "./utils/Components/ScreenBottomMargin";
import Text from "./Abstracts/Text";

// touch effects
const HEADING_FONT_SIZE = horizontalScale(22);
const HEADING_FONT_SIZE_SUB = horizontalScale(12);

// onload animation
// first icons and bottonbar
// second heading
// third cards with loading placeholders
// fourth card images and top linear gradient

const Home = () => {
  const themeContext = useContext(ThemeContext).theme;
  const renderItem = ({ item }) => <BigCard card={item} />;
  console.log("themmmee homee", themeContext.home);
  return (
    <View style={[{ flex: 1 }]}>
      <ScrollView
        style={({ flex: 1 }, { ...themeContext.spacing.screen })}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <StatusBar translucent backgroundColor="transparent" />
        <LinearGradient
          colors={[
            themeContext.home.linearGradient,
            themeContext.home.background,
          ]}
          style={{ flex: 1 }}
          start={{ x: 0, y: 0 }}
          end={{ x: 0.5, y: 0.5 }}
          locations={[0, 0.3]}
        >
          <View style={styles.headers}>
            <Text
              style={[
                styles.headersIntro,
                { fontFamily: themeContext.fontNames.SPOTIFY_BOLD },
              ]}
            >
              Good evening
            </Text>
            <View style={styles.headersButtonContainer}>
              <View style={styles.headersButton}>
                <Ionicons
                  name="ios-notifications-outline"
                  size={26}
                  color="white"
                />
              </View>
              <View style={styles.headersButton}>
                <MaterialCommunityIcons
                  name="progress-clock"
                  size={26}
                  color="white"
                />
              </View>
              <View style={styles.headersButton}>
                <Ionicons name="ios-settings-outline" size={26} color="white" />
              </View>
            </View>
          </View>

          {/* small horizontal cards */}

          <View
            style={{
              flexDirection: "row",
              marginTop: verticalScale(20),
              justifyContent: "space-between",
              paddingHorizontal: horizontalScale(12),
            }}
          >
            <Card
              image={require("./assets/Images/Spotify-Card-bts.png")}
              title={"Daily Mix 2"}
            />
            <Card
              image={require("./assets/Images/Ritviz_Raahi.png")}
              title={"Liked Songs"}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              justifyContent: "space-between",
              paddingHorizontal: horizontalScale(12),
            }}
          >
            <Card
              image={require("./assets/Images/Woice.png")}
              title={"Liked Songs"}
            />
            <Card
              image={require("./assets/Images/Spotify-Card.png")}
              title={"Daily Mix 2"}
            />
          </View>

          {/* Made for mix cards horizontal scroll */}
          <View style={{ marginTop: verticalScale(35) }}>
            <Text
              style={{
                fontSize: HEADING_FONT_SIZE,
                fontFamily: themeContext.fontNames.SPOTIFY_BOLD,
                color: "#ffffff",
                marginBottom: verticalScale(20),
                marginLeft: horizontalScale(12),
              }}
            >
              Made For You
            </Text>
            {/* <BigCard card={cards[0]} /> */}
            <FlatList
              data={MadeForYou}
              renderItem={renderItem}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>

          {/* New Releases cards horizontal scroll */}
          <View style={{ marginTop: verticalScale(35) }}>
            <Text
              style={{
                fontSize: HEADING_FONT_SIZE,
                fontFamily: themeContext.fontNames.SPOTIFY_BOLD,
                color: "#ffffff",
                marginBottom: verticalScale(20),
                marginLeft: horizontalScale(12),
              }}
            >
              New releases for you
            </Text>
            {/* <BigCard card={cards[0]} /> */}
            <FlatList
              data={NewReleases}
              renderItem={renderItem}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>

          {/* Charts cards horizontal scroll */}
          <View style={{ marginTop: verticalScale(35) }}>
            <Text
              style={{
                fontSize: HEADING_FONT_SIZE,
                fontFamily: themeContext.fontNames.SPOTIFY_BOLD,
                color: "#ffffff",
                marginBottom: verticalScale(20),
                marginLeft: horizontalScale(12),
              }}
            >
              Charts
            </Text>
            {/* <BigCard card={cards[0]} /> */}
            <FlatList
              data={Charts}
              renderItem={renderItem}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <View style={{ flexDirection: "row", marginTop: verticalScale(30) }}>
            <Image
              source={require("./assets/Images/badshah.jpeg")}
              style={{
                width: horizontalScale(60),
                height: horizontalScale(60),
                borderRadius: horizontalScale(60),
                marginLeft: horizontalScale(12),
              }}
            ></Image>
            <View
              style={{
                marginLeft: horizontalScale(12),
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "rgba(167,167,167, 1)",
                  letterSpacing: horizontalScale(1),
                  marginBottom: verticalScale(0),
                  fontFamily: themeContext.fontNames.SPOTIFY_REGULAR,
                  fontSize: HEADING_FONT_SIZE_SUB,
                }}
              >
                MORE LIKE
              </Text>
              <Text
                style={{
                  fontSize: HEADING_FONT_SIZE,
                  fontFamily: themeContext.fontNames.SPOTIFY_BOLD,
                  color: "white",
                }}
              >
                Badshah
              </Text>
            </View>
          </View>

          {/* New Releases cards horizontal scroll */}
          <View
            style={{
              marginTop: verticalScale(15),
              marginBottom: verticalScale(60),
            }}
          >
            <FlatList
              data={NewReleases}
              renderItem={renderItem}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <ScreenBottomMargin />
        </LinearGradient>
      </ScrollView>
      <MusicControlPanel name={"home"} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  headers: {
    marginTop: verticalScale(40),
    flexDirection: "row",
    marginLeft: horizontalScale(12),
  },
  headersIntro: {
    fontSize: HEADING_FONT_SIZE,
    color: "#ffffff",
    flex: 1,
  },
  headersButtonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  headersButton: {
    marginHorizontal: 13,
    alignSelf: "center",
  },
  headersButtonText: {
    fontSize: 20,
    color: "white",
  },
});

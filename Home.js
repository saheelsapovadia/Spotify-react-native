import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Card from "./Components/Card";
import { horizontalScale, verticalScale } from "./utils/Dimensions";
import BigCard from "./Components/BigCard";

// icons
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const MadeForYou = [
  {
    title: "Jin, Suga, Jimin, V, Jungkook and more",
    image: require("./assets/Images/Spotify-Card-bts.png"),
  },
  {
    title: "Taylor Swift",
    image: require("./assets/Images/Spotify-Card.png"),
  },
  {
    title: "Jin, Suga, Jimin, V, Jungkook and more",
    image: require("./assets/Images/Spotify-Card-bts.png"),
  },
  {
    title: "Taylor Swift",
    image: require("./assets/Images/Spotify-Card.png"),
  },
];
const NewReleases = [
  {
    title: "Jin, Suga, Jimin, V, Jungkook and more",
    image: require("./assets/Images/Spotify-Card-bts.png"),
  },
  {
    title: "Taylor Swift",
    image: require("./assets/Images/Spotify-Card.png"),
  },
  {
    title: "Jin, Suga, Jimin, V, Jungkook and more",
    image: require("./assets/Images/Spotify-Card-bts.png"),
  },
  {
    title: "Taylor Swift",
    image: require("./assets/Images/Spotify-Card.png"),
  },
];

// Increase the data
// fonts
// touch effects
// bottom margin over the navigation bar bottom

const Home = () => {
  const renderItem = ({ item }) => <BigCard card={item} />;
  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
      <StatusBar translucent backgroundColor="transparent" />
      <LinearGradient
        colors={["#3F13BE", "#1E1E1E"]}
        style={{ flex: 1 }}
        //  Linear Gradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        locations={[0, 0.3]}
      >
        <View style={styles.headers}>
          <Text style={styles.headersIntro}>Good evening</Text>
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
            image={require("./assets/Images/Spotify-Card.png")}
            title={"Liked Songs"}
          />
          <Card
            image={require("./assets/Images/Spotify-Card-bts.png")}
            title={"Daily Mix 2"}
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
            image={require("./assets/Images/Spotify-Card-bts.png")}
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
              fontSize: 25,
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
              fontSize: 25,
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
          <View style={{ marginLeft: horizontalScale(12) }}>
            <Text
              style={{
                color: "rgba(167,167,167, 1)",
                letterSpacing: horizontalScale(2),
                marginBottom: verticalScale(0),
              }}
            >
              MORE LIKE
            </Text>
            <Text style={{ fontSize: horizontalScale(28), color: "white" }}>
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
      </LinearGradient>
    </ScrollView>
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
    fontSize: 25,
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

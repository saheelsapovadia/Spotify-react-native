import Home from "./Home";
import YourLibrary from "./YourLibrary";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Octicons from "react-native-vector-icons/Octicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { verticalScale } from "./utils/Dimensions";
import { LinearGradient } from "expo-linear-gradient";
import Search from "./Search";
import MusicContextProvider from "./Components/MusicContext/MusicContext";
import { ThemeContext, ThemeContextProvider } from "./utils/ThemeContext";
import { useContext } from "react";
import DetailViewContextProvider, {
  DetailViewContext,
} from "./Contexts/DetailViewContext";

// Improve asthetics design, animation later on - 18
// deadline saturday 2pm search screen and beta launch on github and linkedin after 5km run
// resume addition

// UNIFORM margin padding to all screen

// Add screen fade in animations
// media player interactions

const LINEAR_GRADIENT_BLACK_START = "rgba(17,17,17,1)";
const LINEAR_GRADIENT_BLACK_END = "rgba(17,17,17,0.7)";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <ThemeContextProvider>
      <DetailViewContextProvider>
        <MusicContextProvider>
          <Navigation />
        </MusicContextProvider>
      </DetailViewContextProvider>
    </ThemeContextProvider>
  );
}

const Navigation = () => {
  const themeContext = useContext(ThemeContext).theme;
  console.log(themeContext.bottomtabs);
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = "home";
              return <Octicons name={iconName} size={size} color={color} />;
            } else if (route.name === "Search") {
              iconName = "search";
              return <Octicons name={iconName} size={size} color={color} />;
            }
            return (
              <MaterialCommunityIcons
                name="library"
                size={size}
                color={color}
              />
            );
          },
          tabBarActiveTintColor: themeContext.bottomtabs.active,
          tabBarInactiveTintColor: themeContext.bottomtabs.inactive,
          tabBarStyle: {
            position: "absolute",
            backgroundColor: "transparent",
            shadowColor: "transparent",
            height: verticalScale(70),
            borderTopWidth: 0,
          },
          tabBarItemStyle: {
            // borderWidth: 2,
            // borderColor: "red",
            display: "flex",
            flex: 1,
            flexDirection: "column",
            paddingBottom: 10,
            justifyContent: "center",
            alignItems: "center",
          },
          tabBarBackground: () => (
            <LinearGradient
              colors={[LINEAR_GRADIENT_BLACK_END, LINEAR_GRADIENT_BLACK_START]}
              start={{ x: 1, y: 0 }}
              end={{ x: 1, y: 1 }}
              locations={[0, 0.7]}
              style={{ flex: 1 }}
            ></LinearGradient>
          ),
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="YourLibrary" component={YourLibrary} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

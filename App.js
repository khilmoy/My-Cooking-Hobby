import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  Keyboard
} from "react-native";

import {
  useState,
  useEffect
} from "react";

import {
  useFonts
} from "expo-font";

import {
  SafeAreaView
} from "react-native-safe-area-context";

import fontType
  from "./assets/theme/fonts";

import {
  ChefHat,
  Home,
  Plus,
  Star,
  User
} from "lucide-react-native";

import {
  colors
} from "./assets/theme";

import {
  NavigationContainer,
  createNavigationContainerRef
} from "@react-navigation/native";

import {
  ActionSheetProvider
} from "@expo/react-native-action-sheet";

import Router
  from "./src/navigation/Router";

export const navigationRef =
  createNavigationContainerRef();

export default function App() {

  const [fontsLoaded]
    = useFonts(fontType);

  const [activeRoute, setActiveRoute]
    = useState("SplashScreen");

  useEffect(() => {

    const show =
      Keyboard.addListener(
        "keyboardDidShow",
        () => {}
      );

    const hide =
      Keyboard.addListener(
        "keyboardDidHide",
        () => {}
      );

    return () => {

      show.remove();
      hide.remove();
    };

  }, []);

  if (!fontsLoaded) return null;

  // HEADER HIDE
  const hideHeader = [
    "SplashScreen",
    "Login",
    "Register"
  ];

  // NAVBAR HIDE
  const hideNavbar = [
    "SplashScreen",
    "Login",
    "Register",
    "Profile",
    "EditProfile",
    "EditMenu",
    "Detail"
  ];

  return (

    <ActionSheetProvider>

      <SafeAreaView
        style={styles.container}
        edges={["top"]}
      >

        <NavigationContainer
          ref={navigationRef}
          onStateChange={() => {

            const route =
              navigationRef.getCurrentRoute();

            if (route?.name) {
              setActiveRoute(route.name);
            }
          }}
        >

          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={
              Platform.OS === "ios"
                ? "padding"
                : undefined
            }
          >

            <StatusBar
              translucent={false}
              backgroundColor="#ffffff"
              barStyle="dark-content"
            />

            {/* HEADER */}
            {!hideHeader.includes(
              activeRoute
            ) && (

              <View style={styles.header}>

                <ChefHat
                  size={26}
                  color={colors.primary}
                />

                <Text style={styles.title}>
                  My Cooking Hobby
                </Text>

                <TouchableOpacity
                  onPress={() =>
                    navigationRef.navigate(
                      "Profile"
                    )
                  }
                >

                  <User
                    size={24}
                    color="#333"
                  />

                </TouchableOpacity>

              </View>

            )}

            {/* ROUTER */}
            <View style={{ flex: 1 }}>

              <Router />

            </View>

            {/* NAVBAR */}
            {!hideNavbar.includes(
              activeRoute
            ) && (

              <View style={styles.bottomBar}>

                {/* HOME */}
                <TouchableOpacity
                  onPress={() =>
                    navigationRef.navigate(
                      "Home"
                    )
                  }

                  style={
                    activeRoute === "Home"
                      ? styles.tabActive
                      : styles.tabItem
                  }
                >

                  <Home
                    size={20}
                    color={
                      activeRoute === "Home"
                        ? "#fff"
                        : "#999"
                    }
                  />

                  <Text
                    style={
                      activeRoute === "Home"
                        ? styles.tabTextActive
                        : styles.tabText
                    }
                  >
                    Home
                  </Text>

                </TouchableOpacity>

                {/* TAMBAH */}
                <TouchableOpacity
                  onPress={() =>
                    navigationRef.navigate(
                      "Tambah"
                    )
                  }

                  style={
                    activeRoute === "Tambah"
                      ? styles.tabActive
                      : styles.tabItem
                  }
                >

                  <Plus
                    size={20}
                    color={
                      activeRoute === "Tambah"
                        ? "#fff"
                        : "#999"
                    }
                  />

                  <Text
                    style={
                      activeRoute === "Tambah"
                        ? styles.tabTextActive
                        : styles.tabText
                    }
                  >
                    Tambah
                  </Text>

                </TouchableOpacity>

                {/* FAVORIT */}
                <TouchableOpacity
                  onPress={() =>
                    navigationRef.navigate(
                      "Favorit"
                    )
                  }

                  style={
                    activeRoute === "Favorit"
                      ? styles.tabActive
                      : styles.tabItem
                  }
                >

                  <Star
                    size={20}
                    color={
                      activeRoute === "Favorit"
                        ? "#fff"
                        : "#999"
                    }
                  />

                  <Text
                    style={
                      activeRoute === "Favorit"
                        ? styles.tabTextActive
                        : styles.tabText
                    }
                  >
                    Favorit
                  </Text>

                </TouchableOpacity>

              </View>

            )}

          </KeyboardAvoidingView>

        </NavigationContainer>

      </SafeAreaView>

    </ActionSheetProvider>
  );
}


// STYLE
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff"
  },

  header: {
    paddingHorizontal: 20,
    paddingTop:
      Platform.OS === "android"
        ? 10
        : 0,

    paddingBottom: 12,

    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "center",

    backgroundColor: "#fff",

    borderBottomWidth: 1,

    borderBottomColor: "#eee"
  },

  title: {
    fontSize: 20,
    fontFamily: "Pjs-Bold",
    color: "#2d2d2d"
  },

  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "#eee",
    backgroundColor: "#fff"
  },

  tabItem: {
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20
  },

  tabActive: {
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#ff7043"
  },

  tabText: {
    fontSize: 12,
    fontFamily: "Pjs-Regular",
    color: "#999"
  },

  tabTextActive: {
    fontSize: 12,
    fontFamily: "Pjs-Regular",
    color: "#fff"
  }

});
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

import { useState, useEffect } from "react";
import { useFonts } from "expo-font";
import fontType from "./assets/theme/fonts";
import { ChefHat, Home, Plus, Star, User } from "lucide-react-native";
import { colors } from "./assets/theme";

import { NavigationContainer, createNavigationContainerRef } from "@react-navigation/native";
import Router from "./src/navigation/Router";

export const navigationRef = createNavigationContainerRef();

export default function App() {

  const [fontsLoaded] = useFonts(fontType);
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  // state untuk halaman aktif
  const [activeRoute, setActiveRoute] = useState("Home");

  useEffect(() => {
    const show = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardVisible(true);
    });

    const hide = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardVisible(false);
    });

    return () => {
      show.remove();
      hide.remove();
    };
  }, []);

  if (!fontsLoaded) return null;

  return (
    <NavigationContainer
      ref={navigationRef}
      onStateChange={() => {
        const route = navigationRef.getCurrentRoute();
        if (route?.name) {
          setActiveRoute(route.name);
        }
      }}
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >

        <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

        {/* HEADER */}
        <View style={styles.header}>
          <ChefHat size={26} color={colors.primary} />
          <Text style={styles.title}>My Cooking Hobby</Text>

          <TouchableOpacity onPress={() => navigationRef.navigate("Profile")}>
            <User size={24} color="#333" />
          </TouchableOpacity>
        </View>

        {/* STACK */}
        <View style={{ flex: 1 }}>
          <Router setKeyboardVisible={setKeyboardVisible} />
        </View>

        {/* NAVBAR */}
        {!keyboardVisible && activeRoute !== "Profile" && (
          <View style={styles.bottomBar}>

            {/* HOME */}
            <TouchableOpacity
              onPress={() => navigationRef.navigate("Home")}
              style={activeRoute === "Home" ? styles.tabActive : styles.tabItem}
            >
              <Home size={20} color={activeRoute === "Home" ? "#fff" : "#999"} />
              <Text style={activeRoute === "Home" ? styles.tabTextActive : styles.tabText}>
                Home
              </Text>
            </TouchableOpacity>

            {/* TAMBAH */}
            <TouchableOpacity
              onPress={() => navigationRef.navigate("Tambah")}
              style={activeRoute === "Tambah" ? styles.tabActive : styles.tabItem}
            >
              <Plus size={20} color={activeRoute === "Tambah" ? "#fff" : "#999"} />
              <Text style={activeRoute === "Tambah" ? styles.tabTextActive : styles.tabText}>
                Tambah
              </Text>
            </TouchableOpacity>

            {/* FAVORIT */}
            <TouchableOpacity
              onPress={() => navigationRef.navigate("Favorit")}
              style={activeRoute === "Favorit" ? styles.tabActive : styles.tabItem}
            >
              <Star size={20} color={activeRoute === "Favorit" ? "#fff" : "#999"} />
              <Text style={activeRoute === "Favorit" ? styles.tabTextActive : styles.tabText}>
                Favorit
              </Text>
            </TouchableOpacity>

          </View>
        )}

      </KeyboardAvoidingView>
    </NavigationContainer>
  );
}


// STYLE (TIDAK DIUBAH)
const styles = StyleSheet.create({

  header: {
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
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
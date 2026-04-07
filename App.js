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

// ✅ FIX PATH (INI YANG PENTING)
import fontType from "./assets/theme/fonts";
import { ChefHat, Home, Plus, Star } from "lucide-react-native";
import { colors } from "./assets/theme";

// import screen
import HomeScreen from "./src/screens/Home";
import Favorit from "./src/screens/Favorit";
import TambahMenu from "./src/screens/TambahMenu";
import DetailMakanan from "./src/screens/DetailMakanan";

export default function App() {

  const [fontsLoaded] = useFonts(fontType);

  const [halaman, setHalaman] = useState("Home");
  const [kategori, setKategori] = useState("Semua");
  const [favorit, setFavorit] = useState([]);
  const [detailMakanan, setDetailMakanan] = useState(null);
  const [keyboardVisible, setKeyboardVisible] = useState(false);

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
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >

      {/* STATUS BAR */}
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* HEADER (HILANG DI DETAIL) */}
      {halaman !== "Detail" && (
        <View style={styles.header}>
          <ChefHat size={26} color={colors.primary} />
          <Text style={styles.title}>My Cooking Hobby</Text>
          <View style={{ width: 26 }} />
        </View>
      )}

      {/* SCREEN */}
      <View style={{ flex: 1 }}>

        {halaman === "Home" && (
          <HomeScreen
            kategori={kategori}
            setKategori={setKategori}
            favorit={favorit}
            setFavorit={setFavorit}
            setHalaman={setHalaman}
            setDetailMakanan={setDetailMakanan}
          />
        )}

        {halaman === "Favorit" && (
          <Favorit
            favorit={favorit}
            setFavorit={setFavorit}
          />
        )}

        {halaman === "Tambah" && (
          <TambahMenu setKeyboardVisible={setKeyboardVisible} />
        )}

        {halaman === "Detail" && (
          <DetailMakanan
            data={detailMakanan}
            setHalaman={setHalaman}
            favorit={favorit}
            setFavorit={setFavorit}
          />
        )}

      </View>

      {/* NAVBAR */}
      {!keyboardVisible && halaman !== "Detail" && (
        <View style={styles.bottomBar}>

          <TouchableOpacity
            onPress={() => setHalaman("Home")}
            style={halaman === "Home" ? styles.tabActive : styles.tabItem}
          >
            <Home size={20} color={halaman === "Home" ? "#fff" : "#999"} />
            <Text style={halaman === "Home" ? styles.tabTextActive : styles.tabText}>
              Home
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setHalaman("Tambah")}
            style={halaman === "Tambah" ? styles.tabActive : styles.tabItem}
          >
            <Plus size={20} color={halaman === "Tambah" ? "#fff" : "#999"} />
            <Text style={halaman === "Tambah" ? styles.tabTextActive : styles.tabText}>
              Tambah
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setHalaman("Favorit")}
            style={halaman === "Favorit" ? styles.tabActive : styles.tabItem}
          >
            <Star size={20} color={halaman === "Favorit" ? "#fff" : "#999"} />
            <Text style={halaman === "Favorit" ? styles.tabTextActive : styles.tabText}>
              Favorit
            </Text>
          </TouchableOpacity>

        </View>
      )}

    </KeyboardAvoidingView>
  );
}

// STYLE
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
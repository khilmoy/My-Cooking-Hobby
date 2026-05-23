import {
  ScrollView,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  Animated
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { fontType } from "../../assets/theme";
import { useFonts } from "expo-font";
import { useRef } from "react";
import CookingList from "../components/CookingList";

export default function Home({
  navigation,
  kategori,
  setKategori,
  favorit,
  setFavorit
}) {

  // LOAD FONT
  const [loaded] = useFonts(fontType);

  // ANIMATED SCROLL
  const scrollY =
    useRef(new Animated.Value(0)).current;

  // ANIMASI CATEGORY
  const translateY = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, -50],
    extrapolate: "clamp",
  });

  // FONT BELUM SIAP
  if (!loaded) return null;

  return (

    <SafeAreaView style={styles.container}>

      <StatusBar
        barStyle="dark-content"
        backgroundColor="#ffffff"
      />

      {/* KATEGORI */}
      <Animated.View
        style={[
          styles.listCategory,
          {
            transform: [{ translateY }],
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
          }
        ]}
      >

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >

          {/* SEMUA */}
          <TouchableOpacity
            onPress={() =>
              setKategori("Semua")
            }
            style={
              kategori === "Semua"
                ? styles.catActive
                : styles.catItem
            }
          >

            <Text
              style={
                kategori === "Semua"
                  ? styles.catTextActive
                  : styles.catText
              }
            >
              Semua
            </Text>

          </TouchableOpacity>

          {/* TERBARU */}
          <TouchableOpacity
            onPress={() =>
              setKategori("Terbaru")
            }
            style={
              kategori === "Terbaru"
                ? styles.catActive
                : styles.catItem
            }
          >

            <Text
              style={
                kategori === "Terbaru"
                  ? styles.catTextActive
                  : styles.catText
              }
            >
              Terbaru
            </Text>

          </TouchableOpacity>

          {/* MUDAH */}
          <TouchableOpacity
            onPress={() =>
              setKategori("Mudah")
            }
            style={
              kategori === "Mudah"
                ? styles.catActive
                : styles.catItem
            }
          >

            <Text
              style={
                kategori === "Mudah"
                  ? styles.catTextActive
                  : styles.catText
              }
            >
              Mudah
            </Text>

          </TouchableOpacity>

          {/* SEDANG */}
          <TouchableOpacity
            onPress={() =>
              setKategori("Sedang")
            }
            style={
              kategori === "Sedang"
                ? styles.catActive
                : styles.catItem
            }
          >

            <Text
              style={
                kategori === "Sedang"
                  ? styles.catTextActive
                  : styles.catText
              }
            >
              Sedang
            </Text>

          </TouchableOpacity>

          {/* SULIT */}
          <TouchableOpacity
            onPress={() =>
              setKategori("Sulit")
            }
            style={
              kategori === "Sulit"
                ? styles.catActive
                : styles.catItem
            }
          >

            <Text
              style={
                kategori === "Sulit"
                  ? styles.catTextActive
                  : styles.catText
              }
            >
              Sulit
            </Text>

          </TouchableOpacity>

        </ScrollView>

      </Animated.View>

      {/* SCROLL */}
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        contentContainerStyle={{
          paddingTop: 70
        }}

        onScroll={Animated.event(
          [{
            nativeEvent: {
              contentOffset: {
                y: scrollY
              }
            }
          }],
          {
            useNativeDriver: true
          }
        )}
      >

        {/* LIST MENU */}
        <CookingList
          kategori={kategori}
          favorit={favorit}
          setFavorit={setFavorit}
          navigation={navigation}
        />

      </Animated.ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },

  listCategory: {
    paddingVertical: 10,
    backgroundColor: "#fff",
    zIndex: 999,
    elevation: 5
  },

  catItem: {
    backgroundColor: "#ffe0b2",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 25,
    marginHorizontal: 6
  },

  catActive: {
    backgroundColor: "#ff7043",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 25,
    marginHorizontal: 6
  },

  catText: {
    color: "#bf360c",
    fontFamily: "Pjs-SemiBold"
  },

  catTextActive: {
    color: "#fff",
    fontFamily: "Pjs-SemiBold"
  }

});
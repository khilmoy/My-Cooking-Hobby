import { ScrollView, StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChefHat, Home, Plus, Star } from 'lucide-react-native';
import { colors, fontType } from './assets/theme';
import { useFonts } from 'expo-font';
import { useState } from 'react';
import CookingList from './src/components/CookingList';

export default function App() {

  // state untuk halaman
  const [halaman, setHalaman] = useState("Home");

  // state kategori
  const [kategori, setKategori] = useState("Semua");

  // state data favorit
  const [favorit, setFavorit] = useState([]);

  // load font
  const [loaded] = useFonts(fontType);
  if (!loaded) return null;

  return (
    <SafeAreaView style={styles.container}>

      {/* status bar */}
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* header */}
      <View style={styles.header}>
        <ChefHat size={26} color={colors.primary} />
        <Text style={styles.title}>My Cooking Hobby</Text>
        <View style={{ width: 26 }} />
      </View>

      {/* kategori hanya tampil di home */}
      {halaman === "Home" && (
        <View style={styles.listCategory}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>

            <TouchableOpacity onPress={() => setKategori("Semua")} style={kategori === "Semua" ? styles.catActive : styles.catItem}>
              <Text style={kategori === "Semua" ? styles.catTextActive : styles.catText}>Semua</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setKategori("Terbaru")} style={kategori === "Terbaru" ? styles.catActive : styles.catItem}>
              <Text style={kategori === "Terbaru" ? styles.catTextActive : styles.catText}>Terbaru</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setKategori("Mudah")} style={kategori === "Mudah" ? styles.catActive : styles.catItem}>
              <Text style={kategori === "Mudah" ? styles.catTextActive : styles.catText}>Mudah</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setKategori("Sedang")} style={kategori === "Sedang" ? styles.catActive : styles.catItem}>
              <Text style={kategori === "Sedang" ? styles.catTextActive : styles.catText}>Sedang</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setKategori("Sulit")} style={kategori === "Sulit" ? styles.catActive : styles.catItem}>
              <Text style={kategori === "Sulit" ? styles.catTextActive : styles.catText}>Sulit</Text>
            </TouchableOpacity>

          </ScrollView>
        </View>
      )}

      {/* kirim props ke komponen */}
      <CookingList
        kategori={
          halaman === "Home"
            ? kategori
            : halaman === "Favorit"
            ? "Favorit"
            : "Kosong"
        }
        favorit={favorit}
        setFavorit={setFavorit}
        halaman={halaman}
      />

      {/* bottom navigation */}
      <View style={styles.bottomBar}>

        <TouchableOpacity onPress={() => setHalaman("Home")} style={halaman === "Home" ? styles.tabActive : styles.tabItem}>
          <Home size={20} color={halaman === "Home" ? "#fff" : "#999"} />
          <Text style={halaman === "Home" ? styles.tabTextActive : styles.tabText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setHalaman("Tambah")} style={halaman === "Tambah" ? styles.tabActive : styles.tabItem}>
          <Plus size={20} color={halaman === "Tambah" ? "#fff" : "#999"} />
          <Text style={halaman === "Tambah" ? styles.tabTextActive : styles.tabText}>Tambah</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setHalaman("Favorit")} style={halaman === "Favorit" ? styles.tabActive : styles.tabItem}>
          <Star size={20} color={halaman === "Favorit" ? "#fff" : "#999"} />
          <Text style={halaman === "Favorit" ? styles.tabTextActive : styles.tabText}>Favorit</Text>
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },

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

  listCategory: {
    paddingVertical: 10
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
  },

  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 14,
    borderTopWidth: 1,
    borderColor: "#eee",
    backgroundColor: "#fff"
  },

  tabItem: {
    alignItems: "center",
    padding: 10,
    borderRadius: 20
  },

  tabActive: {
    alignItems: "center",
    padding: 10,
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
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Animated
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, fontType } from '../../assets/theme';
import { useFonts } from 'expo-font';
import { useRef } from 'react';
import CookingList from '../components/CookingList';

export default function Home({ navigation, kategori, setKategori, favorit, setFavorit }) {

  // load font custom dari assets
  const [loaded] = useFonts(fontType);

  // Animated value untuk menangkap posisi scroll (Y)
  const scrollY = useRef(new Animated.Value(0)).current;

  // interpolasi untuk menggeser kategori ke atas saat scroll
  // dari posisi 0 sampai -50
  const translateY = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, -50],
    extrapolate: "clamp",
  });

  // jika font belum dimuat, tampilkan null (kosong)
  if (!loaded) return null;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* KATEGORI*/}
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
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>

          {/* tombol kategori */}
          <TouchableOpacity
            onPress={() => setKategori("Semua")}
            style={kategori === "Semua" ? styles.catActive : styles.catItem}
          >
            <Text style={kategori === "Semua" ? styles.catTextActive : styles.catText}>
              Semua
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setKategori("Terbaru")}
            style={kategori === "Terbaru" ? styles.catActive : styles.catItem}
          >
            <Text style={kategori === "Terbaru" ? styles.catTextActive : styles.catText}>
              Terbaru
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setKategori("Mudah")}
            style={kategori === "Mudah" ? styles.catActive : styles.catItem}
          >
            <Text style={kategori === "Mudah" ? styles.catTextActive : styles.catText}>
              Mudah
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setKategori("Sedang")}
            style={kategori === "Sedang" ? styles.catActive : styles.catItem}
          >
            <Text style={kategori === "Sedang" ? styles.catTextActive : styles.catText}>
              Sedang
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setKategori("Sulit")}
            style={kategori === "Sulit" ? styles.catActive : styles.catItem}
          >
            <Text style={kategori === "Sulit" ? styles.catTextActive : styles.catText}>
              Sulit
            </Text>
          </TouchableOpacity>

        </ScrollView>
      </Animated.View>

      {/* SCROLL UTAMA*/}
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16} 
        contentContainerStyle={{ paddingTop: 70 }}

        // menangkap event scroll dan update nilai scrollY
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
      >
        {/* list masakan */}
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

  // container utama
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },

  // wrapper kategori
  listCategory: {
    paddingVertical: 10,
    backgroundColor: "#fff",
    zIndex: 999,
    elevation: 5
  },

  // kategori normal
  catItem: {
    backgroundColor: "#ffe0b2",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 25,
    marginHorizontal: 6
  },

  // kategori aktif
  catActive: {
    backgroundColor: "#ff7043",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 25,
    marginHorizontal: 6
  },

  // teks kategori biasa
  catText: {
    color: "#bf360c",
    fontFamily: "Pjs-SemiBold"
  },

  // teks kategori aktif
  catTextActive: {
    color: "#fff",
    fontFamily: "Pjs-SemiBold"
  }

});
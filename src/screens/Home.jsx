// import komponen dasar dari React Native
import { ScrollView, StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';

// Safe area biar tidak ketabrak notch / status bar
import { SafeAreaView } from 'react-native-safe-area-context';

// import warna & font custom
import { colors, fontType } from '../../assets/theme';

// hook untuk load font
import { useFonts } from 'expo-font';

// komponen list masakan
import CookingList from '../components/CookingList';


// komponen utama Home
export default function Home({ 
  kategori, 
  setKategori, 
  favorit, 
  setFavorit,
  setHalaman,            
  setDetailMakanan       
}) {

  // load font custom
  const [loaded] = useFonts(fontType);

  // jika font belum siap, tidak render apa-apa
  if (!loaded) return null;

  return (
    // Safe area supaya UI aman di semua device
    <SafeAreaView style={styles.container}>

      {/* mengatur warna status bar */}
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* bagian kategori */}
      <View style={styles.listCategory}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>

          {/* tombol kategori SEMUA */}
          <TouchableOpacity
            onPress={() => setKategori("Semua")}
            style={kategori === "Semua" ? styles.catActive : styles.catItem}
          >
            <Text style={kategori === "Semua" ? styles.catTextActive : styles.catText}>
              Semua
            </Text>
          </TouchableOpacity>

          {/* kategori TERBARU */}
          <TouchableOpacity
            onPress={() => setKategori("Terbaru")}
            style={kategori === "Terbaru" ? styles.catActive : styles.catItem}
          >
            <Text style={kategori === "Terbaru" ? styles.catTextActive : styles.catText}>
              Terbaru
            </Text>
          </TouchableOpacity>

          {/* kategori MUDAH */}
          <TouchableOpacity
            onPress={() => setKategori("Mudah")}
            style={kategori === "Mudah" ? styles.catActive : styles.catItem}
          >
            <Text style={kategori === "Mudah" ? styles.catTextActive : styles.catText}>
              Mudah
            </Text>
          </TouchableOpacity>

          {/* kategori SEDANG */}
          <TouchableOpacity
            onPress={() => setKategori("Sedang")}
            style={kategori === "Sedang" ? styles.catActive : styles.catItem}
          >
            <Text style={kategori === "Sedang" ? styles.catTextActive : styles.catText}>
              Sedang
            </Text>
          </TouchableOpacity>

          {/* kategori SULIT */}
          <TouchableOpacity
            onPress={() => setKategori("Sulit")}
            style={kategori === "Sulit" ? styles.catActive : styles.catItem}
          >
            <Text style={kategori === "Sulit" ? styles.catTextActive : styles.catText}>
              Sulit
            </Text>
          </TouchableOpacity>

        </ScrollView>
      </View>

      {/* menampilkan list masakan sesuai kategori */}
      <CookingList
        kategori={kategori}
        favorit={favorit}
        setFavorit={setFavorit}
        setHalaman={setHalaman}               
        setDetailMakanan={setDetailMakanan}   
      />

    </SafeAreaView>
  );
}


// styling komponen
const styles = StyleSheet.create({

  // container utama
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },

  // container kategori
  listCategory: {
    paddingVertical: 10
  },

  // style kategori biasa
  catItem: {
    backgroundColor: "#ffe0b2",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 25,
    marginHorizontal: 6
  },

  // style kategori aktif
  catActive: {
    backgroundColor: "#ff7043",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 25,
    marginHorizontal: 6
  },

  // text kategori biasa
  catText: {
    color: "#bf360c",
    fontFamily: "Pjs-SemiBold"
  },

  // text kategori aktif
  catTextActive: {
    color: "#fff",
    fontFamily: "Pjs-SemiBold"
  }

});
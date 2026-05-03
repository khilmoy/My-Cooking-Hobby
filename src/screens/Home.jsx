// import komponen dasar dari React Native
import { ScrollView, StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';

// Safe area agar tidak ketabrak notch / status bar
import { SafeAreaView } from 'react-native-safe-area-context';

// import warna & font custom
import { colors, fontType } from '../../assets/theme';

// hook untuk load font
import { useFonts } from 'expo-font';

// komponen list masakan
import CookingList from '../components/CookingList';


// komponen utama Home
export default function Home({ 
  navigation,
  kategori, 
  setKategori, 
  favorit, 
  setFavorit
}) {

  const [loaded] = useFonts(fontType);
  if (!loaded) return null;

  return (
    <SafeAreaView style={styles.container}>

      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* kategori */}
      <View style={styles.listCategory}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>

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
      </View>

      {/* list masakan */}
      <CookingList
        kategori={kategori}
        favorit={favorit}
        setFavorit={setFavorit}
        navigation={navigation} 
      />

    </SafeAreaView>
  );
}


// STYLE 
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#ffffff"
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
  }

});
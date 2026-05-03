import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet } from 'react-native';
import CookingList from '../components/CookingList';

export default function Favorit({ favorit, setFavorit, navigation }) {
  return (
    <SafeAreaView style={styles.container}>

      {/* kondisi jika belum ada favorit */}
      {favorit.length === 0 ? (

        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>
            Belum ada menu favorit
          </Text>
        </View>

      ) : (

        <>
          {/* judul halaman */}
          <Text style={styles.title}>
            Menu Favorit
          </Text>

          {/* list hanya menampilkan item favorit */}
          <CookingList
            kategori="Favorit"
            favorit={favorit}
            setFavorit={setFavorit}
            navigation={navigation}
          />
        </>

      )}

    </SafeAreaView>
  );
}


// STYLE
const styles = StyleSheet.create({

  // container utama
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 10
  },

  // tampilan saat kosong
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  // teks kosong
  emptyText: {
    fontSize: 16,
    color: "#999",
    fontFamily: "Pjs-Regular"
  },

  // judul halaman
  title: {
    fontSize: 20,
    marginHorizontal: 16,
    marginBottom: 10,
    fontFamily: "Pjs-Bold"
  }

});
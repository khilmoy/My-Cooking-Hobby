import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet } from 'react-native';
import CookingList from '../components/CookingList';

export default function Favorit({ favorit, setFavorit, navigation }) {
  return (
    <SafeAreaView style={styles.container}>

      {favorit.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Belum ada favorit</Text>
        </View>
      ) : (
        <>
          <Text style={styles.title}>Menu Favorit</Text>

          <CookingList
            kategori="Favorit"
            favorit={favorit}
            setFavorit={setFavorit}
            navigation={navigation} // 🔥 WAJIB DITAMBAH
          />
        </>
      )}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#fff"
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  emptyText: {
    fontSize: 16,
    color: "#999"
  },
  title: {
    fontSize: 20,
    marginHorizontal: 20,
    marginBottom: 10,
    fontFamily: "Pjs-Bold"
  }
});
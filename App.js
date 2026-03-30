import { ScrollView, StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChefHat, Home, Plus, Star } from 'lucide-react-native';
import { colors, fontType } from './assets/theme';
import { useFonts } from 'expo-font';
import CookingList from './src/components/CookingList.jsx';

export default function App() {

  const [loaded] = useFonts(fontType);
  if (!loaded) return null;

  return (
    <SafeAreaView style={styles.container}>

      {/* STATUS BAR */}
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#ffffff"
      />

      {/* HEADER */}
      <View style={styles.header}>
        <ChefHat size={26} color={colors.primary} />
        <Text style={styles.title}>My Cooking Hobby</Text>
        <View style={{ width: 26 }} />
      </View>

      {/* CATEGORY */}
      <View style={styles.listCategory}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>

          <View style={[styles.categoryItem, { marginLeft: 20 }]}>
            <Text style={[styles.categoryText, { color: colors.primary }]}>
              Favorit
            </Text>
          </View>

          <View style={styles.categoryItem}>
            <Text style={styles.categoryText}>Terbaru</Text>
          </View>

          <View style={styles.categoryItem}>
            <Text style={styles.categoryText}>Sulit</Text>
          </View>

          <View style={styles.categoryItem}>
            <Text style={styles.categoryText}>Mudah</Text>
          </View>

          <View style={[styles.categoryItem, { marginRight: 20 }]}>
            <Text style={styles.categoryText}>Sedang</Text>
          </View>

        </ScrollView>
      </View>

      {/* LIST MASAKAN */}
      <CookingList />

      {/* BOTTOM BAR */}
      <View style={styles.bottomBar}>

        <TouchableOpacity style={styles.tabItem}>
          <Home size={22} color={colors.primary} />
          <Text style={[styles.tabText, { color: colors.primary }]}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>
          <Plus size={22} color="#999" />
          <Text style={styles.tabText}>Tambah Menu</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>
          <Star size={22} color="#999" />
          <Text style={styles.tabText}>Favorit</Text>
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
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  title: {
    fontSize: 18,
    fontFamily: "Pjs-Bold",
    color: colors.black
  },

  listCategory: {
    paddingVertical: 10
  },

  categoryItem: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: "flex-start",
    backgroundColor: "#eee",
    marginHorizontal: 5
  },

  categoryText: {
    fontFamily: "Pjs-SemiBold",
    fontSize: 14,
    color: "#555"
  },

  greeting: {
    fontSize: 20,
    fontFamily: "Pjs-Bold",
    paddingBottom: 5,
  },

  sub: {
    fontSize: 14,
    fontFamily: "Pjs-Regular",
    color: "gray",
    paddingBottom: 10,
  },

  /*  BOTTOM BAR */
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "#eee",
    backgroundColor: "#fff"
  },

  tabItem: {
    alignItems: "center"
  },

  tabText: {
    fontSize: 12,
    fontFamily: "Pjs-Regular",
    color: "#999",
    marginTop: 3
  }

});
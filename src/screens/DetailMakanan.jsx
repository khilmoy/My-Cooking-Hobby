import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Calendar, Flame, Star, ArrowLeft, Pencil } from "lucide-react-native";
import { useRoute } from "@react-navigation/native";

export default function DetailMakanan({ navigation, favorit = [], setFavorit }) {

  // ambil data dari navigation
  const route = useRoute();
  const { data } = route.params || {};

  const { nama, gambar, tanggal, level, resep } = data || {};

  const isFavorit = favorit.includes(nama);

  const toggleFavorit = () => {
    if (isFavorit) {
      setFavorit(favorit.filter(item => item !== nama));
    } else {
      setFavorit([...favorit, nama]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* HERO IMAGE */}
        <ImageBackground source={{ uri: gambar }} style={styles.image}>

          {/* gradient */}
          <View style={styles.gradient} />

          {/* BACK BUTTON */}
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.goBack()} 
          >
            <ArrowLeft size={22} color="#fff" />
          </TouchableOpacity>

          {/* title */}
          <View style={styles.titleWrap}>
            <Text style={styles.title}>{nama}</Text>
          </View>

        </ImageBackground>

        {/* CONTENT */}
        <View style={styles.content}>

          {/* INFO CHIPS */}
          <View style={styles.chipsRow}>

            <View style={styles.chip}>
              <Calendar size={14} color="#666" />
              <Text style={styles.chipText}>{tanggal}</Text>
            </View>

            <View style={styles.chip}>
              <Flame size={14} color="#666" />
              <Text style={styles.chipText}>{level}</Text>
            </View>

            <TouchableOpacity style={styles.chip} onPress={toggleFavorit}>
              <Star size={14} color={isFavorit ? "#ffd700" : "#999"} />
              <Text style={styles.chipText}>
                {isFavorit ? "Favorit" : "Favorit"}
              </Text>
            </TouchableOpacity>

          </View>

          {/* RESEP */}
          <View style={styles.recipeCard}>
            <Text style={styles.section}>Resep Masakan</Text>
            <Text style={styles.resep}>{resep}</Text>
          </View>

          {/* BUTTON EDIT */}
          <TouchableOpacity style={styles.editBtn}>
            <Pencil size={18} color="#fff" />
            <Text style={styles.editText}>Edit Resep</Text>
          </TouchableOpacity>

        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

//  STYLE 
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff"
  },

  image: {
    height: 320,
    justifyContent: "flex-end"
  },

  gradient: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.3)"
  },

  backBtn: {
    position: "absolute",
    top: 20,
    left: 20,
    backgroundColor: "rgba(0,0,0,0.3)",
    padding: 10,
    borderRadius: 30
  },

  titleWrap: {
    padding: 20
  },

  title: {
    fontSize: 32,
    color: "#fff",
    fontFamily: "Pjs-Bold"
  },

  content: {
    padding: 20
  },

  chipsRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 20,
    flexWrap: "wrap"
  },

  chip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#f2f2f2",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20
  },

  chipText: {
    fontSize: 12,
    fontFamily: "Pjs-SemiBold",
    color: "#444"
  },

  recipeCard: {
    backgroundColor: "#fafafa",
    padding: 16,
    borderRadius: 16,
    marginBottom: 30
  },

  section: {
    fontSize: 18,
    fontFamily: "Pjs-Bold",
    marginBottom: 10
  },

  resep: {
    lineHeight: 24,
    color: "#444",
    fontFamily: "Pjs-Regular"
  },

  editBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#ff7043",
    paddingVertical: 14,
    borderRadius: 25,
    elevation: 3
  },

  editText: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "Pjs-SemiBold"
  }

});
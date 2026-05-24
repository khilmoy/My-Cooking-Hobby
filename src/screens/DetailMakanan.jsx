import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Animated
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import {
  Calendar,
  Flame,
  Star,
  ArrowLeft,
  Pencil,
  Trash2
} from "lucide-react-native";

import { useRoute } from "@react-navigation/native";
import { useRef } from "react";
import { supabase } from "../libs/supabase";

export default function DetailMakanan({
  navigation,
  favorit = [],
  setFavorit
}) {

  const route = useRoute();
  const { data } = route.params || {};

  const {
    id,
    name,
    image,
    date,
    level,
    recipe
  } = data || {};

  const isFavorit = favorit.includes(name);

  const toggleFavorit = () => {

    if (isFavorit) {

      setFavorit(
        favorit.filter(item => item !== name)
      );

    } else {

      setFavorit([
        ...favorit,
        name
      ]);
    }
  };

  // DELETE SUPABASE
  const handleDelete = async () => {

    try {

      console.log("DATA:", data);
      console.log("ID:", id);

      if (!id) {
        alert("ID tidak ditemukan");
        return;
      }

      const { error } = await supabase
        .from("recipes")
        .delete()
        .eq("id", id);

      if (error) throw error;

      navigation.goBack();

    } catch (error) {

      console.log(error.message);
    }
  };

  // ANIMASI SCROLL
  const scrollY = useRef(new Animated.Value(0)).current;

  const diffClampY = Animated.diffClamp(scrollY, 0, 100);

  const headerY = diffClampY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, -100],
  });

  return (

    <SafeAreaView style={styles.container}>

      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
      >

        {/* HERO IMAGE */}
        <Animated.View
          style={{
            transform: [{ translateY: headerY }]
          }}
        >

          <ImageBackground
            source={{ uri: image }}
            style={styles.image}
          >

            <View style={styles.gradient} />

            <TouchableOpacity
              style={styles.backBtn}
              onPress={() => navigation.goBack()}
            >
              <ArrowLeft size={22} color="#fff" />
            </TouchableOpacity>

            <View style={styles.titleWrap}>
              <Text style={styles.title}>
                {name}
              </Text>
            </View>

          </ImageBackground>

        </Animated.View>

        {/* CONTENT */}
        <View style={styles.content}>

          {/* INFO */}
          <View style={styles.chipsRow}>

            <View style={styles.chip}>
              <Calendar size={14} color="#666" />
              <Text style={styles.chipText}>
                {date}
              </Text>
            </View>

            <View style={styles.chip}>
              <Flame size={14} color="#666" />
              <Text style={styles.chipText}>
                {level}
              </Text>
            </View>

            <TouchableOpacity
              style={styles.chip}
              onPress={toggleFavorit}
            >
              <Star
                size={14}
                color={isFavorit ? "#ffd700" : "#999"}
              />

              <Text style={styles.chipText}>
                Favorit
              </Text>

            </TouchableOpacity>

          </View>

          {/* RESEP */}
          <View style={styles.recipeCard}>

            <Text style={styles.section}>
              Resep Masakan
            </Text>

            {recipe?.split("\n").map((item, index) => (

              <Text
                key={index}
                style={styles.resepItem}
              >
                {item}
              </Text>

            ))}

          </View>

          {/* EDIT BUTTON */}
          <TouchableOpacity
            style={styles.editBtn}
            onPress={() =>
              navigation.navigate("EditMenu", {
                data
              })
            }
          >

            <Pencil size={18} color="#fff" />

            <Text style={styles.editText}>
              Edit Resep
            </Text>

          </TouchableOpacity>

          {/* DELETE BUTTON */}
          <TouchableOpacity
            style={styles.deleteBtn}
            onPress={handleDelete}
          >

            <Trash2 size={18} color="#fff" />

            <Text style={styles.deleteText}>
              Hapus Resep
            </Text>

          </TouchableOpacity>

        </View>

      </Animated.ScrollView>

    </SafeAreaView>
  );
}


// STYLE
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

  resepItem: {
    fontSize: 14,
    lineHeight: 22,
    color: "#444",
    fontFamily: "Pjs-Regular",
    marginBottom: 6
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
  },

  deleteBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#ff5252",
    paddingVertical: 14,
    borderRadius: 25,
    marginTop: 12,
    elevation: 3
  },

  deleteText: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "Pjs-SemiBold"
  }

});
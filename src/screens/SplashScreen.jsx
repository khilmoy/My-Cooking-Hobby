import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ChefHat } from "lucide-react-native";

export default function SplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Login");
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>

      {/* ICON */}
      <View style={styles.iconBox}>
        <ChefHat size={55} color="#ff7043" />
      </View>

      {/* TITLE */}
      <Text style={styles.title}>My Cooking Hobby</Text>

      {/* SUBTITLE */}
      <Text style={styles.subtitle}>
        Temukan • Simpan Resep • Masak dengan mudah
      </Text>

      {/* LINE ACCENT */}
      <View style={styles.line} />

      {/* FOOTER */}
      <Text style={styles.footer}>
        by Muhammad Khilmi Lutfan Albab
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },

  iconBox: {
    backgroundColor: "#fff3ef",
    padding: 22,
    borderRadius: 50,
    marginBottom: 18,
    elevation: 4 
  },

  title: {
    fontSize: 25,
    fontFamily: "Pjs-Bold",
    color: "#222"
  },

  subtitle: {
    fontSize: 13,
    color: "#777",
    marginTop: 6,
    textAlign: "center"
  },

  line: {
    width: 60,
    height: 3,
    backgroundColor: "#ff7043",
    borderRadius: 10,
    marginTop: 15
  },

  footer: {
    position: "absolute",
    bottom: 35,
    fontSize: 12,
    color: "#aaa"
  }

});
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChefHat } from "lucide-react-native";

export default function Login({ navigation }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        <View style={styles.content}>

          {/* HEADER */}
          <View style={styles.header}>
            <View style={styles.iconBox}>
              <ChefHat size={32} color="#ff7043" />
            </View>

            <Text style={styles.title}>Selamat Datang</Text>
            <Text style={styles.subtitle}>
              Masuk untuk lanjut ke resep favoritmu
            </Text>
          </View>

          {/* FORM */}
          <View style={styles.form}>

            <TextInput
              placeholder="Email"
              placeholderTextColor="#999"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              style={styles.input}
            />

            <TextInput
              placeholder="Password"
              placeholderTextColor="#999"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              style={styles.input}
            />

          </View>

          {/* BUTTON */}
          <View style={styles.bottom}>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.replace("Home")}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text style={styles.link}>
                Belum punya akun? Daftar
              </Text>
            </TouchableOpacity>

          </View>

        </View>

      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff"
  },

  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 30,
    justifyContent: "space-between"
  },

  header: {
    alignItems: "center",
    marginTop: 40
  },

  iconBox: {
    backgroundColor: "#fff3ef",
    padding: 15,
    borderRadius: 50,
    marginBottom: 10
  },

  title: {
    fontSize: 24,
    fontFamily: "Pjs-Bold",
    color: "#222"
  },

  subtitle: {
    fontSize: 13,
    color: "#777",
    marginTop: 5,
    textAlign: "center"
  },

  form: {
    gap: 15
  },

  input: {
    backgroundColor: "#f5f5f5",
    padding: 14,
    borderRadius: 12,
    fontSize: 14
  },

  bottom: {
    marginBottom: 10
  },

  button: {
    backgroundColor: "#ff7043",
    padding: 16,
    borderRadius: 12,
    alignItems: "center"
  },

  buttonText: {
    color: "#fff",
    fontFamily: "Pjs-Bold"
  },

  link: {
    textAlign: "center",
    marginTop: 15,
    color: "#ff7043",
    fontSize: 13
  }

});
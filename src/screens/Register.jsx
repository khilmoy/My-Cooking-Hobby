import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { ChefHat } from "lucide-react-native";

export default function Register({ navigation }) {

  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  return (

    <SafeAreaView style={styles.container}>

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

          <ScrollView
            contentContainerStyle={styles.scroll}
            showsVerticalScrollIndicator={false}
          >

            <View style={styles.content}>

              {/* HEADER */}
              <View style={styles.header}>

                <View style={styles.iconBox}>
                  <ChefHat size={32} color="#ff7043" />
                </View>

                <Text style={styles.title}>
                  Buat Akun
                </Text>

                <Text style={styles.subtitle}>
                  Mulai simpan dan kelola resep favoritmu
                </Text>

              </View>

              {/* FORM */}
              <View style={styles.form}>

                <TextInput
                  placeholder="Nama lengkap"
                  placeholderTextColor="#999"
                  value={nama}
                  onChangeText={setNama}
                  style={styles.input}
                />

                <TextInput
                  placeholder="Email"
                  placeholderTextColor="#999"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  style={styles.input}
                />

                <TextInput
                  placeholder="No Telepon"
                  placeholderTextColor="#999"
                  value={phone}
                  onChangeText={setPhone}
                  keyboardType="phone-pad"
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
                  onPress={() => navigation.navigate("Login")}
                >
                  <Text style={styles.buttonText}>
                    Daftar
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => navigation.navigate("Login")}
                >
                  <Text style={styles.link}>
                    Sudah punya akun? Masuk
                  </Text>
                </TouchableOpacity>

              </View>

            </View>

          </ScrollView>

        </TouchableWithoutFeedback>

      </KeyboardAvoidingView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff"
  },

  scroll: {
    flexGrow: 1
  },

  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 30,
    justifyContent: "space-between"
  },

  header: {
    alignItems: "center",
    marginTop: 30
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
    gap: 15,
    marginTop: 40
  },

  input: {
    backgroundColor: "#f5f5f5",
    padding: 14,
    borderRadius: 12,
    fontSize: 14
  },

  bottom: {
    marginTop: 40,
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
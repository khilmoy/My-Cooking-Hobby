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
  ScrollView,
  Alert,
  ActivityIndicator
} from "react-native";

import {
  SafeAreaView
} from "react-native-safe-area-context";

import {
  ChefHat,
  Eye,
  EyeOff
} from "lucide-react-native";

import {
  supabase
} from "../libs/supabase";

export default function Register({
  navigation
}) {

  const [nama, setNama]
    = useState("");

  const [email, setEmail]
    = useState("");

  const [phone, setPhone]
    = useState("");

  const [password, setPassword]
    = useState("");

  const [loading, setLoading]
    = useState(false);

  const [showPassword,
    setShowPassword]
    = useState(false);

  // REGISTER
  const handleRegister = async () => {

    if (
      !nama ||
      !email ||
      !phone ||
      !password
    ) {

      Alert.alert(
        "Error",
        "Semua field wajib diisi"
      );

      return;
    }

    setLoading(true);

    try {

      // AUTH REGISTER
      const {
        data: authData,
        error: signUpError
      } = await supabase.auth.signUp({
        email,
        password,
      });

      if (signUpError)
        throw signUpError;

      // INSERT USER
      const { error: insertError }
        = await supabase
          .from("users")
          .insert([
            {
              id: authData.user.id,

              full_name: nama,

              phone: phone,

              email: email,

              created_at:
                new Date().toISOString(),
            }
          ]);

      if (insertError)
        throw insertError;

      setLoading(false);

      Alert.alert(
        "Berhasil",
        "Akun berhasil dibuat"
      );

      navigation.navigate("Login");

    } catch (error) {

      console.log(error.message);

      Alert.alert(
        "Error",
        error.message
      );

      setLoading(false);
    }
  };

  return (

    <SafeAreaView style={styles.container}>

      <KeyboardAvoidingView
        style={{ flex: 1 }}

        behavior={
          Platform.OS === "ios"
            ? "padding"
            : "height"
        }
      >

        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}
        >

          <ScrollView
            contentContainerStyle={
              styles.scroll
            }

            showsVerticalScrollIndicator={
              false
            }
          >

            <View style={styles.content}>

              {/* HEADER */}
              <View style={styles.header}>

                <View style={styles.iconBox}>

                  <ChefHat
                    size={32}
                    color="#ff7043"
                  />

                </View>

                <Text style={styles.title}>
                  Buat Akun
                </Text>

                <Text style={styles.subtitle}>
                  Mulai simpan dan
                  kelola resep favoritmu
                </Text>

              </View>

              {/* FORM */}
              <View style={styles.form}>

                {/* NAMA */}
                <TextInput
                  placeholder="Nama lengkap"
                  placeholderTextColor="#999"
                  value={nama}
                  onChangeText={setNama}
                  style={styles.input}
                />

                {/* EMAIL */}
                <TextInput
                  placeholder="Email"
                  placeholderTextColor="#999"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  style={styles.input}
                />

                {/* PHONE */}
                <TextInput
                  placeholder="No Telepon"
                  placeholderTextColor="#999"
                  value={phone}
                  onChangeText={setPhone}
                  keyboardType="phone-pad"
                  style={styles.input}
                />

                {/* PASSWORD */}
                <View
                  style={
                    styles.passwordContainer
                  }
                >

                  <TextInput
                    placeholder="Password"
                    placeholderTextColor="#999"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={
                      !showPassword
                    }
                    style={
                      styles.passwordInput
                    }
                  />

                  <TouchableOpacity
                    onPress={() =>
                      setShowPassword(
                        !showPassword
                      )
                    }
                  >

                    {showPassword ? (

                      <EyeOff
                        size={20}
                        color="#777"
                      />

                    ) : (

                      <Eye
                        size={20}
                        color="#777"
                      />

                    )}

                  </TouchableOpacity>

                </View>

              </View>

              {/* BUTTON */}
              <View style={styles.bottom}>

                <TouchableOpacity
                  style={styles.button}
                  onPress={
                    handleRegister
                  }

                  disabled={loading}
                >

                  {loading ? (

                    <ActivityIndicator
                      color="#fff"
                    />

                  ) : (

                    <Text
                      style={
                        styles.buttonText
                      }
                    >
                      Daftar
                    </Text>

                  )}

                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate(
                      "Login"
                    )
                  }
                >

                  <Text style={styles.link}>
                    Sudah punya akun?
                    Masuk
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

  passwordContainer: {
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },

  passwordInput: {
    flex: 1,
    paddingVertical: 14,
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
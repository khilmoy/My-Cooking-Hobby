import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Keyboard
} from "react-native";

import { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import * as ImagePicker from "expo-image-picker";
import { ImagePlus, Calendar } from "lucide-react-native";

export default function TambahMenu({ navigation }) {

  const [nama, setNama] = useState("");
  const [resep, setResep] = useState("");
  const [tanggal, setTanggal] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [level, setLevel] = useState("");
  const [gambar, setGambar] = useState(null);

  const pilihGambar = async () => {
    Keyboard.dismiss();

    setTimeout(async () => {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaType.Images,
        quality: 1
      });

      if (!result.canceled) {
        setGambar(result.assets[0].uri);
      }
    }, 200);
  };

  const onChangeTanggal = (event, selectedDate) => {
    setShowPicker(false);
    if (selectedDate) {
      setTanggal(selectedDate);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >

      <ScrollView contentContainerStyle={styles.container}>

        <Text style={styles.title}>Tambah Menu</Text>

        <TextInput
          placeholder="Nama makanan"
          value={nama}
          onChangeText={setNama}
          style={styles.input}
        />

        <TextInput
          placeholder="Tulis resep di sini..."
          value={resep}
          onChangeText={setResep}
          style={styles.textArea}
          multiline
          numberOfLines={5}
          textAlignVertical="top"
        />

        <TouchableOpacity style={styles.imagePicker} onPress={pilihGambar}>
          <ImagePlus size={40} color="#999" />
          <Text style={styles.imageText}>
            {gambar ? "Ganti Gambar" : "Pilih Gambar"}
          </Text>
        </TouchableOpacity>

        {gambar && (
          <Image source={{ uri: gambar }} style={styles.image} />
        )}

        <TouchableOpacity
          onPress={() => setShowPicker(true)}
          style={styles.dateInput}
        >
          <Calendar size={18} color="#666" />
          <Text style={{ marginLeft: 10 }}>
            {tanggal.toLocaleDateString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric"
            })}
          </Text>
        </TouchableOpacity>

        {showPicker && (
          <DateTimePicker
            value={tanggal}
            mode="date"
            display="default"
            onChange={onChangeTanggal}
          />
        )}

        <Text style={styles.label}>Tingkat Kesulitan</Text>

        <View style={styles.levelContainer}>
          {["Mudah", "Sedang", "Sulit"].map((item) => (
            <TouchableOpacity
              key={item}
              style={[
                styles.levelBtn,
                level === item && styles.active
              ]}
              onPress={() => setLevel(item)}
            >
              <Text style={level === item ? styles.textActive : styles.text}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* BUTTON */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Simpan</Text>
        </TouchableOpacity>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
    backgroundColor: "#fff"
  },

  title: {
    fontSize: 20,
    fontFamily: "Pjs-Bold",
    marginBottom: 15
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10
  },

  textArea: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    height: 190
  },

  imagePicker: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10
  },

  imageText: {
    marginTop: 8,
    color: "#666"
  },

  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 10
  },

  dateInput: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10
  },

  label: {
    marginTop: 10,
    marginBottom: 5,
    fontFamily: "Pjs-SemiBold"
  },

  levelContainer: {
    flexDirection: "row",
    gap: 10
  },

  levelBtn: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#eee"
  },

  active: {
    backgroundColor: "#ff7043"
  },

  text: {
    color: "#333"
  },

  textActive: {
    color: "#fff"
  },

  button: {
    marginTop: 20,
    backgroundColor: "#ff7043",
    padding: 12,
    borderRadius: 10
  },

  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontFamily: "Pjs-Bold"
  }
});
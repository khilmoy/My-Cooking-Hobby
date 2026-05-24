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
  Keyboard,
  ActivityIndicator
} from "react-native";

import { useState } from "react";

import DateTimePicker
  from "@react-native-community/datetimepicker";

import * as ImagePicker
  from "expo-image-picker";

import {
  ImagePlus,
  Calendar
} from "lucide-react-native";

import {
  supabase
} from "../libs/supabase";

export default function TambahMenu({
  navigation
}) {

  const [nama, setNama]
    = useState("");

  const [resep, setResep]
    = useState("");

  const [tanggal, setTanggal]
    = useState(new Date());

  const [showPicker, setShowPicker]
    = useState(false);

  const [level, setLevel]
    = useState("");

  const [gambar, setGambar]
    = useState(null);

  const [loading, setLoading]
    = useState(false);

  // PILIH GAMBAR
  const pilihGambar = async () => {

    Keyboard.dismiss();

    setTimeout(async () => {

      // IZIN GALERI
      const permission =
        await ImagePicker
          .requestMediaLibraryPermissionsAsync();

      if (!permission.granted) {

        alert(
          "Izin galeri diperlukan"
        );

        return;
      }

      // BUKA GALERI
      const result =
        await ImagePicker
          .launchImageLibraryAsync({
            mediaTypes:
              ImagePicker
                .MediaTypeOptions
                .Images,

            quality: 1
          });

      if (!result.canceled) {

        setGambar(
          result.assets[0].uri
        );
      }

    }, 200);
  };

  // DATE
  const onChangeTanggal = (
    event,
    selectedDate
  ) => {

    setShowPicker(false);

    if (selectedDate) {

      setTanggal(
        selectedDate
      );
    }
  };

  // INSERT SUPABASE
  const handleUpload = async () => {

    if (
      !nama ||
      !resep ||
      !gambar ||
      !level
    ) {

      alert(
        "Semua data wajib diisi"
      );

      return;
    }

    setLoading(true);

    try {

      const { error }
        = await supabase
          .from("recipes")
          .insert([
            {
              name: nama,

              // IMAGE
              image: gambar,

              date:
                tanggal.toLocaleDateString(
                  "id-ID",
                  {
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  }
                ),

              level: level,

              recipe: resep,

              favorite: false
            }
          ]);

      if (error) throw error;

      setLoading(false);

      navigation.goBack();

    } catch (error) {

      console.log(
        error.message
      );

      alert(
        error.message
      );

      setLoading(false);
    }
  };

  return (

    <KeyboardAvoidingView
      style={{ flex: 1 }}

      behavior={
        Platform.OS === "ios"
          ? "padding"
          : "height"
      }
    >

      <ScrollView
        contentContainerStyle={
          styles.container
        }
      >

        <Text style={styles.title}>
          Tambah Menu
        </Text>

        {/* INPUT NAMA */}
        <TextInput
          placeholder="Nama makanan"
          value={nama}
          onChangeText={setNama}
          style={styles.input}
        />

        {/* INPUT RESEP */}
        <TextInput
          placeholder="Tulis resep di sini..."
          value={resep}
          onChangeText={setResep}
          style={styles.textArea}
          multiline
          numberOfLines={5}
          textAlignVertical="top"
        />

        {/* PILIH GAMBAR */}
        <TouchableOpacity
          style={styles.imagePicker}
          onPress={pilihGambar}
        >

          {gambar ? (

            <View>

              {/* PREVIEW */}
              <Image
                source={{
                  uri: gambar
                }}

                style={
                  styles.previewImage
                }
              />

              {/* BUTTON GANTI */}
              <View
                style={
                  styles.changeImageBtn
                }
              >

                <ImagePlus
                  size={16}
                  color="#fff"
                />

                <Text
                  style={
                    styles.changeImageText
                  }
                >
                  Ganti Gambar
                </Text>

              </View>

            </View>

          ) : (

            <>

              <ImagePlus
                size={40}
                color="#999"
              />

              <Text
                style={
                  styles.imageText
                }
              >
                Pilih Gambar
              </Text>

            </>

          )}

        </TouchableOpacity>

        {/* DATE */}
        <TouchableOpacity
          onPress={() =>
            setShowPicker(true)
          }

          style={styles.dateInput}
        >

          <Calendar
            size={18}
            color="#666"
          />

          <Text
            style={{
              marginLeft: 10
            }}
          >

            {
              tanggal.toLocaleDateString(
                "id-ID",
                {
                  day: "numeric",
                  month: "long",
                  year: "numeric"
                }
              )
            }

          </Text>

        </TouchableOpacity>

        {/* DATE PICKER */}
        {showPicker && (

          <DateTimePicker
            value={tanggal}
            mode="date"
            display="default"
            onChange={
              onChangeTanggal
            }
          />

        )}

        {/* LEVEL */}
        <Text style={styles.label}>
          Tingkat Kesulitan
        </Text>

        <View
          style={
            styles.levelContainer
          }
        >

          {
            [
              "Mudah",
              "Sedang",
              "Sulit"
            ].map((item) => (

              <TouchableOpacity
                key={item}

                style={[
                  styles.levelBtn,

                  level === item
                  && styles.active
                ]}

                onPress={() =>
                  setLevel(item)
                }
              >

                <Text
                  style={
                    level === item
                      ? styles.textActive
                      : styles.text
                  }
                >

                  {item}

                </Text>

              </TouchableOpacity>

            ))
          }

        </View>

        {/* BUTTON */}
        <TouchableOpacity
          style={styles.button}
          onPress={handleUpload}
        >

          <Text
            style={styles.buttonText}
          >
            Simpan
          </Text>

        </TouchableOpacity>

      </ScrollView>

      {/* LOADING */}
      {loading && (

        <View
          style={
            styles.loadingOverlay
          }
        >

          <ActivityIndicator
            size="large"
            color="#ff7043"
          />

        </View>

      )}

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
    borderRadius: 12,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
    overflow: "hidden"
  },

  imageText: {
    marginTop: 8,
    color: "#666",
    fontFamily: "Pjs-Regular"
  },

  previewImage: {
    width: 320,
    height: 180,
    borderRadius: 12
  },

  changeImageBtn: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "#ff7043",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20
  },

  changeImageText: {
    color: "#fff",
    fontSize: 12,
    fontFamily: "Pjs-SemiBold"
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
  },

  loadingOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center"
  }

});
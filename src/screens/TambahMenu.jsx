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

export default function TambahMenu({ setKeyboardVisible }) {

    // state input nama makanan
    const [nama, setNama] = useState("");

    // state input resep
    const [resep, setResep] = useState("");

    // state tanggal
    const [tanggal, setTanggal] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);

    // state tingkat kesulitan
    const [level, setLevel] = useState("");

    // state gambar dari galeri
    const [gambar, setGambar] = useState(null);

    // fungsi untuk memilih gambar dari galeri
    const pilihGambar = async () => {
        // menutup keyboard agar tidak terjadi glitch
        Keyboard.dismiss();

        // delay agar keyboard benar-benar hilang sebelum buka galeri
        setTimeout(async () => {
            const result = await ImagePicker.launchImageLibraryAsync({
                // menggunakan API baru (tidak deprecated)
                mediaTypes: ImagePicker.MediaType.Images,
                quality: 1
            });

            // jika user memilih gambar
            if (!result.canceled) {
                setGambar(result.assets[0].uri);
            }
        }, 200);
    };

    // fungsi saat tanggal dipilih
    const onChangeTanggal = (event, selectedDate) => {
        setShowPicker(false);
        if (selectedDate) {
            setTanggal(selectedDate);
        }
    };

    return (
        // menghindari layout tertutup keyboard
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >

            {/* scroll agar tetap bisa digeser saat keyboard muncul */}
            <ScrollView contentContainerStyle={styles.container}>

                {/* judul halaman */}
                <Text style={styles.title}>Tambah Menu</Text>

                {/* input nama */}
                <TextInput
                    placeholder="Nama makanan"
                    value={nama}
                    onChangeText={setNama}
                    style={styles.input}
                    // saat focus, sembunyikan navbar
                    onFocus={() => setKeyboardVisible(true)}
                />

                {/* input Resep */}
                <TextInput
                    placeholder="Tulis resep di sini..."
                    value={resep}
                    onChangeText={setResep}
                    style={styles.textArea}
                    multiline
                    numberOfLines={5}
                    textAlignVertical="top" 
                    onFocus={() => setKeyboardVisible(true)}
                />

                {/* tombol pilih gambar */}
                <TouchableOpacity style={styles.imagePicker} onPress={pilihGambar}>
                    <ImagePlus size={40} color="#999" />
                    <Text style={styles.imageText}>
                        {gambar ? "Ganti Gambar" : "Pilih Gambar"}
                    </Text>
                </TouchableOpacity>

                {/* preview gambar */}
                {gambar && (
                    <Image source={{ uri: gambar }} style={styles.image} />
                )}

                {/* input tanggal dengan icon */}
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

                {/* date picker */}
                {showPicker && (
                    <DateTimePicker
                        value={tanggal}
                        mode="date"
                        display="default"
                        onChange={onChangeTanggal}
                    />
                )}

                {/* label */}
                <Text style={styles.label}>Tingkat Kesulitan</Text>

                {/* pilihan level */}
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
                            <Text
                                style={level === item ? styles.textActive : styles.text}
                            >
                                {item}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* tombol simpan */}
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Simpan</Text>
                </TouchableOpacity>

            </ScrollView>
        </KeyboardAvoidingView>
    );
}

// styling
const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 40
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
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function EditProfile({ navigation }) {

    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.title}>Edit Profile</Text>

            <TextInput
                style={styles.input}
                value={nama}
                onChangeText={setNama}
                placeholder="Nama"
            />

            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
            />

            <TextInput
                style={styles.input}
                value={phone}
                onChangeText={setPhone}
                placeholder="No HP"
                keyboardType="phone-pad"
            />

            <View style={styles.buttonContainer}>

                <TouchableOpacity
                    style={styles.saveBtn}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.saveText}>Simpan</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.cancelBtn}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.cancelText}>Batal</Text>
                </TouchableOpacity>

            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff"
    },

    title: {
        fontSize: 20,
        fontFamily: "Pjs-Bold",
        marginBottom: 20
    },

    input: {
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 10,
        padding: 12,
        marginBottom: 15
    },

    // WRAPPER BUTTON
    buttonContainer: {
        marginTop: 20,
        gap: 10
    },

    // SIMPAN
    saveBtn: {
        backgroundColor: "#ff7043",
        padding: 14,
        borderRadius: 10
    },

    saveText: {
        color: "#fff",
        textAlign: "center",
        fontFamily: "Pjs-Bold"
    },

    // BATAL
    cancelBtn: {
        borderWidth: 1.5,
        borderColor: "#ff5252",
        padding: 14,
        borderRadius: 10
    },

    cancelText: {
        color: "#ff5252",
        textAlign: "center",
        fontFamily: "Pjs-Bold"
    }
});
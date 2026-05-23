import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from "react-native";

import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";

export default function EditProfile({
    navigation,
    profile,
    setProfile
}) {

    const [nama, setNama] = useState(profile.nama);
    const [email, setEmail] = useState(profile.email);
    const [phone, setPhone] = useState(profile.phone);

    // PUT API
    const handleUpdate = async () => {

        try {

            // UPDATE API PROFILE
            await axios.put(
                "https://6a09c79ce7e3f433d4836e58.mockapi.io/Profiles/1",
                {
                    nama,
                    email,
                    phone
                }
            );

            // UPDATE STATE LOCAL
            setProfile({
                nama,
                email,
                phone
            });

            navigation.goBack();

        } catch (error) {

            console.log(error);
        }
    };

    return (

        <SafeAreaView style={styles.container}>

            <Text style={styles.title}>
                Edit Profile
            </Text>

            {/* NAMA */}
            <TextInput
                style={styles.input}
                value={nama}
                onChangeText={setNama}
                placeholder="Nama"
            />

            {/* EMAIL */}
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
            />

            {/* PHONE */}
            <TextInput
                style={styles.input}
                value={phone}
                onChangeText={setPhone}
                placeholder="No HP"
                keyboardType="phone-pad"
            />

            <View style={styles.buttonContainer}>

                {/* SIMPAN */}
                <TouchableOpacity
                    style={styles.saveBtn}
                    onPress={handleUpdate}
                >

                    <Text style={styles.saveText}>
                        Simpan
                    </Text>

                </TouchableOpacity>

                {/* BATAL */}
                <TouchableOpacity
                    style={styles.cancelBtn}
                    onPress={() => navigation.goBack()}
                >

                    <Text style={styles.cancelText}>
                        Batal
                    </Text>

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

    buttonContainer: {
        marginTop: 20,
        gap: 10
    },

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
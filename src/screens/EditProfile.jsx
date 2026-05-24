import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from "react-native";

import { useState } from "react";

import { SafeAreaView }
    from "react-native-safe-area-context";

import { supabase }
    from "../libs/supabase";

export default function EditProfile({
    navigation,
    route
}) {

    const { profile } =
        route.params;

    const [fullName, setFullName]
        = useState(
            profile.full_name
        );

    const [email, setEmail]
        = useState(
            profile.email
        );

    const [phone, setPhone]
        = useState(
            profile.phone
        );

    // UPDATE PROFILE
    const handleUpdate = async () => {

        try {

            const { error }
                = await supabase
                    .from("users")
                    .update({
                        full_name: fullName,
                        email: email,
                        phone: phone
                    })
                    .eq("id", profile.id);

            if (error) throw error;

            navigation.goBack();

        } catch (error) {

            console.log(
                error.message
            );
        }
    };

    return (

        <SafeAreaView
            style={styles.container}
        >

            <Text style={styles.title}>
                Edit Profile
            </Text>

            {/* FULL NAME */}
            <TextInput
                style={styles.input}
                value={fullName}
                onChangeText={setFullName}
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

            <View
                style={styles.buttonContainer}
            >

                {/* SIMPAN */}
                <TouchableOpacity
                    style={styles.saveBtn}
                    onPress={handleUpdate}
                >

                    <Text
                        style={styles.saveText}
                    >
                        Simpan
                    </Text>

                </TouchableOpacity>

                {/* BATAL */}
                <TouchableOpacity
                    style={styles.cancelBtn}
                    onPress={() =>
                        navigation.goBack()
                    }
                >

                    <Text
                        style={styles.cancelText}
                    >
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
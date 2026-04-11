import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { User, Mail, LogOut, Pencil, Phone, ArrowLeft } from "lucide-react-native";

export default function Profile({ setHalaman }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                {/* BACK BUTTON */}
                <TouchableOpacity
                    style={styles.backBtn}
                    onPress={() => setHalaman("Home")}
                >
                    <ArrowLeft size={22} color="#000" />
                </TouchableOpacity>

                {/* PROFILE HEADER */}
                <View style={styles.profileHeader}>

                    {/* AVATAR ICON */}
                    <View style={styles.avatar}>
                        <User size={50} color="#000000" />
                    </View>

                    <Text style={styles.name}>Muhammad Khilmi Lutfan Albab</Text>
                    <Text style={styles.email}>khilmi55@gmail.com</Text>
                </View>

                {/* INFO CARD */}
                <View style={styles.card}>

                    <View style={styles.row}>
                        <User size={20} color="#555" />
                        <Text style={styles.text}>Muhammad Khilmi Lutfan Albab</Text>
                    </View>

                    <View style={styles.row}>
                        <Mail size={20} color="#555" />
                        <Text style={styles.text}>khilmi55@gmail.com</Text>
                    </View>

                    <View style={styles.row}>
                        <Phone size={20} color="#555" />
                        <Text style={styles.text}>08536281234</Text>
                    </View>

                </View>

                {/* EDIT BUTTON */}
                <TouchableOpacity style={styles.editBtn}>
                    <Pencil size={18} color="#fff" />
                    <Text style={styles.editText}>Edit Profile</Text>
                </TouchableOpacity>

                {/* LOGOUT */}
                <TouchableOpacity style={styles.logoutBtn}>
                    <LogOut size={18} color="#ff5252" />
                    <Text style={styles.logoutText}>Logout</Text>
                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#ffffff"
    },

    backBtn: {
        position: "absolute",
        top: 40,
        left: 20,
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 30,
        elevation: 3
    },

    profileHeader: {
        alignItems: "center",
        marginTop: 60,
        marginBottom: 30
    },

    avatar: {
        width: 110,
        height: 110,
        borderRadius: 55,
        backgroundColor: "#e8e6e5",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
        elevation: 3
    },

    name: {
        fontSize: 22,
        fontFamily: "Pjs-Bold",
        color: "#222",
        marginTop: 5
    },

    email: {
        fontSize: 14,
        color: "#777",
        fontFamily: "Pjs-Regular"
    },

    card: {
        backgroundColor: "#fff",
        marginHorizontal: 20,
        padding: 16,
        borderRadius: 20,
        marginBottom: 20,
        elevation: 3
    },

    row: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        marginBottom: 15
    },

    text: {
        fontSize: 14,
        fontFamily: "Pjs-Regular"
    },

    editBtn: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
        backgroundColor: "#ff7043",
        marginHorizontal: 20,
        paddingVertical: 14,
        borderRadius: 25,
        marginBottom: 15,
        elevation: 2
    },

    editText: {
        color: "#fff",
        fontFamily: "Pjs-SemiBold"
    },

    logoutBtn: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
        marginHorizontal: 20,
        paddingVertical: 14,
        borderRadius: 25,
        borderWidth: 1.5,
        borderColor: "#ff5252"
    },

    logoutText: {
        color: "#ff5252",
        fontFamily: "Pjs-SemiBold"
    }

});
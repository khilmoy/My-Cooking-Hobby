import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { User, Mail, LogOut, Pencil, ContactIcon } from "lucide-react-native";
import { ArrowLeft } from "lucide-react-native";

export default function Profile({ setHalaman }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <TouchableOpacity
                    style={styles.backBtn}
                    onPress={() => setHalaman("Home")}
                >
                    <ArrowLeft size={22} color="#000000" />
                </TouchableOpacity>

                {/* FOTO PROFIL */}
                <View style={styles.profileHeader}>
                    <Image
                        source={{ uri: "https://i.pravatar.cc/150" }}
                        style={styles.avatar}
                    />
                    <Text style={styles.name}>Muhammad Khilmi Lutfan Albab</Text>
                    <Text style={styles.email}>khilmi55@gmail.com</Text>
                </View>

                {/* MENU */}
                <View style={styles.card}>

                    <TouchableOpacity style={styles.row}>
                        <User size={20} color="#555" />
                        <Text style={styles.text}>Data Diri</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.row}>
                        <Mail size={20} color="#555" />
                        <Text style={styles.text}>Email</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.row}>
                        <ContactIcon size={20} color="#555" />
                        <Text style={styles.text}>08536281234</Text>
                    </TouchableOpacity>

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

// STYLE
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#ffffff"
    },

    backBtn: {
        position: "absolute",
        top: 20,
        left: 20,
        padding: 10,
        borderRadius: 30
    },

    profileHeader: {
        alignItems: "center",
        marginTop: 30,
        marginBottom: 30
    },

    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10
    },

    name: {
        fontSize: 20,
        fontFamily: "Pjs-Bold",
        color: "#222"
    },

    email: {
        fontSize: 14,
        color: "#777",
        fontFamily: "Pjs-Regular"
    },

    card: {
        backgroundColor: "#fff",
        marginHorizontal: 20,
        padding: 15,
        borderRadius: 15,
        marginBottom: 20,
        elevation: 2
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
        marginBottom: 15
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
        borderWidth: 1,
        borderColor: "#ff5252"
    },

    logoutText: {
        color: "#ff5252",
        fontFamily: "Pjs-SemiBold"
    }

});
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from "react-native";

import {
    useEffect,
    useState
} from "react";

import {
    SafeAreaView
} from "react-native-safe-area-context";

import {
    supabase
} from "../libs/supabase";

import AsyncStorage
    from "@react-native-async-storage/async-storage";

import {
    useActionSheet
} from "@expo/react-native-action-sheet";

import {
    User,
    Mail,
    LogOut,
    Pencil,
    Phone,
    ArrowLeft
} from "lucide-react-native";

export default function Profile({
    navigation
}) {

    const {
        showActionSheetWithOptions
    } = useActionSheet();

    const [profile, setProfile]
        = useState({});

    // GET PROFILE
    const getProfile = async () => {

        try {

            const {
                data: { user }
            } = await supabase.auth.getUser();

            if (!user) return;

            const {
                data,
                error
            } = await supabase
                .from("users")
                .select("*")
                .eq("id", user.id)
                .single();

            if (error) throw error;

            setProfile(data);

        } catch (error) {

            console.log(
                error.message
            );
        }
    };

    // REFRESH PROFILE
    useEffect(() => {

        const unsubscribe =
            navigation.addListener(
                "focus",
                () => {
                    getProfile();
                }
            );

        return unsubscribe;

    }, [navigation]);

    // LOGOUT
    const handleLogout = async () => {

        try {

            await supabase
                .auth
                .signOut();

            await AsyncStorage.removeItem(
                "userData"
            );

            navigation.reset({
                index: 0,
                routes: [
                    {
                        name: "Login"
                    }
                ],
            });

        } catch (error) {

            console.log(
                error.message
            );
        }
    };

    // ACTION SHEET
    const openActionSheet = () => {

        const options = [
            "Log out",
            "Cancel"
        ];

        const destructiveButtonIndex = 0;

        const cancelButtonIndex = 1;

        showActionSheetWithOptions(
            {
                options,
                cancelButtonIndex,
                destructiveButtonIndex,
            },

            (selectedIndex) => {

                if (
                    selectedIndex === 0
                ) {

                    handleLogout();
                }
            }
        );
    };

    return (

        <SafeAreaView
            style={styles.container}
        >

            <ScrollView
                showsVerticalScrollIndicator={false}
            >

                {/* BACK BUTTON */}
                <TouchableOpacity
                    style={styles.backBtn}
                    onPress={() =>
                        navigation.goBack()
                    }
                >

                    <ArrowLeft
                        size={22}
                        color="#000"
                    />

                </TouchableOpacity>

                {/* PROFILE HEADER */}
                <View
                    style={styles.profileHeader}
                >

                    <View
                        style={styles.avatar}
                    >

                        <User
                            size={50}
                            color="#000"
                        />

                    </View>

                    <Text style={styles.name}>
                        {
                            profile?.full_name
                        }
                    </Text>

                    <Text style={styles.email}>
                        {
                            profile?.email
                        }
                    </Text>

                </View>

                {/* CARD */}
                <View style={styles.card}>

                    {/* FULL NAME */}
                    <View style={styles.row}>

                        <User
                            size={20}
                            color="#555"
                        />

                        <Text
                            style={styles.text}
                        >
                            {
                                profile?.full_name
                            }
                        </Text>

                    </View>

                    {/* EMAIL */}
                    <View style={styles.row}>

                        <Mail
                            size={20}
                            color="#555"
                        />

                        <Text
                            style={styles.text}
                        >
                            {
                                profile?.email
                            }
                        </Text>

                    </View>

                    {/* PHONE */}
                    <View style={styles.row}>

                        <Phone
                            size={20}
                            color="#555"
                        />

                        <Text
                            style={styles.text}
                        >
                            {
                                profile?.phone
                                || "-"
                            }
                        </Text>

                    </View>

                </View>

                {/* EDIT BUTTON */}
                <TouchableOpacity
                    style={styles.editBtn}

                    onPress={() =>
                        navigation.navigate(
                            "EditProfile",
                            {
                                profile
                            }
                        )
                    }
                >

                    <Pencil
                        size={18}
                        color="#fff"
                    />

                    <Text
                        style={styles.editText}
                    >
                        Edit Profile
                    </Text>

                </TouchableOpacity>

                {/* LOGOUT */}
                <TouchableOpacity
                    style={styles.logoutBtn}
                    onPress={
                        openActionSheet
                    }
                >

                    <LogOut
                        size={18}
                        color="#ff5252"
                    />

                    <Text
                        style={styles.logoutText}
                    >
                        Logout
                    </Text>

                </TouchableOpacity>

            </ScrollView>

        </SafeAreaView>
    );
}


// STYLE
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#fff"
    },

    backBtn: {
        position: "absolute",
        top: 40,
        left: 20,
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 30,
        elevation: 3,
        zIndex: 99
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
        backgroundColor: "#e8e5e5",
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
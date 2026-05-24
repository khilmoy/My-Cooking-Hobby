import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    ActivityIndicator
} from "react-native";

import { Calendar, Flame, Star } from "lucide-react-native";
import { useEffect, useState } from "react";
import { supabase } from "../libs/supabase";

export default function CookingList({
    kategori,
    favorit,
    setFavorit,
    navigation
}) {

    const [dataMenu, setDataMenu] = useState([]);
    const [loading, setLoading] = useState(true);

    // GET SUPABASE
    const getMenu = async () => {

        try {

            setLoading(true);

            const { data, error } = await supabase
                .from("recipes")
                .select("*");

            if (error) throw error;

            setDataMenu(data);

            setLoading(false);

        } catch (error) {

            console.log(error.message);

            setLoading(false);
        }
    };

    // REFRESH SAAT HALAMAN FOCUS
    useEffect(() => {

        const unsubscribe = navigation.addListener(
            "focus",
            () => {
                getMenu();
            }
        );

        return unsubscribe;

    }, [navigation]);

    // FAVORIT
    const toggleFavorit = (name) => {

        if (favorit.includes(name)) {

            setFavorit(
                favorit.filter(item => item !== name)
            );

        } else {

            setFavorit([
                ...favorit,
                name
            ]);
        }
    };

    // DETAIL
    const bukaDetail = (data) => {

        navigation.navigate("Detail", {
            data
        });
    };

    // SORT MENU TERBARU
    const sortedMenu =
        [...dataMenu].reverse();

    // DATA YANG DITAMPILKAN
    const filteredMenu =
        kategori === "Terbaru"
            ? sortedMenu
            : dataMenu;

    // LOADING
    if (loading) {

        return (

            <View style={styles.loadingContainer}>

                <ActivityIndicator
                    size="large"
                    color="#ff7043"
                />

            </View>
        );
    }

    return (

        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.container}
        >

            {filteredMenu.map((item) => (

                (
                    kategori === "Semua"
                    || kategori === "Terbaru"
                    || kategori === item.level
                    || (
                        kategori === "Favorit"
                        && favorit.includes(item.name)
                    )
                )

                && (

                    <Card
                        key={item.id}

                        id={item.id}
                        name={item.name}
                        image={item.image}
                        date={item.date}
                        level={item.level}
                        recipe={item.recipe}

                        favorit={favorit}
                        toggleFavorit={toggleFavorit}
                        bukaDetail={bukaDetail}
                    />

                )

            ))}

        </ScrollView>
    );
}


// CARD
function Card({
    id,
    name,
    image,
    date,
    level,
    favorit,
    toggleFavorit,
    bukaDetail,
    recipe
}) {

    return (

        <TouchableOpacity
            onPress={() =>
                bukaDetail({
                    id,
                    name,
                    image,
                    date,
                    level,
                    recipe
                })
            }
        >

            <View style={styles.card}>

                <ImageBackground
                    source={{ uri: image }}
                    style={styles.image}
                    imageStyle={styles.imageRadius}
                >

                    <View style={styles.overlay}>

                        <Text style={styles.title}>
                            {name}
                        </Text>

                        <View style={styles.row}>

                            <Calendar
                                size={14}
                                color="#fff"
                            />

                            <Text style={styles.info}>
                                {date}
                            </Text>

                        </View>

                        <View style={styles.row}>

                            <Flame
                                size={14}
                                color="#fff"
                            />

                            <Text style={styles.info}>
                                {level}
                            </Text>

                        </View>

                        <TouchableOpacity
                            onPress={() =>
                                toggleFavorit(name)
                            }
                            style={styles.favoriteRow}
                        >

                            <Star
                                size={14}
                                color={
                                    favorit.includes(name)
                                        ? "#ffd700"
                                        : "#fff"
                                }
                            />

                            <Text
                                style={
                                    favorit.includes(name)
                                        ? styles.favoriteActive
                                        : styles.favoriteInactive
                                }
                            >
                                Favorit
                            </Text>

                        </TouchableOpacity>

                    </View>

                </ImageBackground>

            </View>

        </TouchableOpacity>
    );
}


// STYLE
const styles = StyleSheet.create({

    container: {
        paddingBottom: 40
    },

    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    card: {
        marginBottom: 20,
        paddingHorizontal: 16
    },

    image: {
        width: "100%",
        height: 200,
        justifyContent: "flex-end"
    },

    imageRadius: {
        borderRadius: 16
    },

    overlay: {
        backgroundColor: "rgba(0,0,0,0.4)",
        padding: 14,
        borderRadius: 16
    },

    title: {
        color: "#fff",
        fontSize: 18,
        fontFamily: "Pjs-Bold"
    },

    row: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
        marginTop: 4
    },

    info: {
        color: "#fff",
        fontSize: 12,
        fontFamily: "Pjs-Regular"
    },

    favoriteRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 6
    },

    favoriteActive: {
        fontSize: 12,
        fontFamily: "Pjs-SemiBold",
        color: "#ffd700"
    },

    favoriteInactive: {
        fontSize: 12,
        fontFamily: "Pjs-SemiBold",
        color: "#ffffff"
    }

});
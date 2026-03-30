// import komponen utama
import { ScrollView, View, Text, StyleSheet, ImageBackground } from "react-native";

// import warna (opsional)
import { colors } from "../../assets/theme";

// import icon
import { Calendar, Flame, Star } from "lucide-react-native";

// komponen utama
export default function CookingList() {
    return (

        // scroll vertical
        <ScrollView showsVerticalScrollIndicator={false}>

            {/* ================= ITEM 1  ================= */}
            <View style={styles.card}>
                <ImageBackground
                    source={{ uri: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800" }}
                    style={styles.image}
                    imageStyle={{ borderRadius: 15 }}
                >
                    <View style={styles.overlay}>

                        <Text style={styles.title}>Nasi Goreng</Text>

                        <View style={styles.row}>
                            <Calendar size={14} color="#fff" />
                            <Text style={styles.info}>10 Maret 2026</Text>
                        </View>

                        <View style={styles.row}>
                            <Flame size={14} color="#fff" />
                            <Text style={styles.info}>Mudah</Text>
                        </View>

                        <View style={styles.favoriteRow}>
                            <Star size={14} color="#ffd700" />
                            <Text style={styles.favoriteActive}> Favorit</Text>
                        </View>

                    </View>
                </ImageBackground>
            </View>


            {/* ================= ITEM 2 ================= */}
            <View style={styles.card}>
                <ImageBackground
                    source={{ uri: "https://blog.alfagift.id/wp-content/uploads/2024/09/mie-ayam-goreng-1.jpg" }}
                    style={styles.image}
                    imageStyle={{ borderRadius: 15 }}
                >
                    <View style={styles.overlay}>

                        <Text style={styles.title}>Mie Ayam</Text>

                        <View style={styles.row}>
                            <Calendar size={14} color="#fff" />
                            <Text style={styles.info}>12 Maret 2026</Text>
                        </View>

                        <View style={styles.row}>
                            <Flame size={14} color="#fff" />
                            <Text style={styles.info}>Sedang</Text>
                        </View>

                        <View style={styles.favoriteRow}>
                            <Star size={14} color="#ffffff" />
                            <Text style={styles.favoriteInactive}> Favorit</Text>
                        </View>

                    </View>
                </ImageBackground>
            </View>


            {/* ================= ITEM 3 ================= */}
            <View style={styles.card}>
                <ImageBackground
                    source={{ uri: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=800" }}
                    style={styles.image}
                    imageStyle={{ borderRadius: 15 }}
                >
                    <View style={styles.overlay}>

                        <Text style={styles.title}>Pizza</Text>

                        <View style={styles.row}>
                            <Calendar size={14} color="#fff" />
                            <Text style={styles.info}>15 Maret 2026</Text>
                        </View>

                        <View style={styles.row}>
                            <Flame size={14} color="#fff" />
                            <Text style={styles.info}>Sulit</Text>
                        </View>

                        <View style={styles.favoriteRow}>
                            <Star size={14} color="#ffd700" />
                            <Text style={styles.favoriteActive}> Favorit</Text>
                        </View>

                    </View>
                </ImageBackground>
            </View>


            {/* ================= ITEM 4 ================= */}
            <View style={styles.card}>
                <ImageBackground
                    source={{ uri: "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/07/14053934/Mudah-Dibuat-di-Rumah-Ini-Resep-Sate-Ayam-Bumbu-Kacang-yang-Lezat-.jpg" }}
                    style={styles.image}
                    imageStyle={{ borderRadius: 15 }}
                >
                    <View style={styles.overlay}>

                        <Text style={styles.title}>Sate Ayam</Text>

                        <View style={styles.row}>
                            <Calendar size={14} color="#fff" />
                            <Text style={styles.info}>18 Maret 2026</Text>
                        </View>

                        <View style={styles.row}>
                            <Flame size={14} color="#fff" />
                            <Text style={styles.info}>Mudah</Text>
                        </View>

                        <View style={styles.favoriteRow}>
                            <Star size={14} color="#ffffff" />
                            <Text style={styles.favoriteInactive}> Favorit</Text>
                        </View>

                    </View>
                </ImageBackground>
            </View>


            {/* ================= ITEM 5 ================= */}
            <View style={styles.card}>
                <ImageBackground
                    source={{ uri: "https://wiratech.co.id/wp-content/uploads/2021/12/Ayam-Bakar.jpg" }}
                    style={styles.image}
                    imageStyle={{ borderRadius: 15 }}
                >
                    <View style={styles.overlay}>

                        <Text style={styles.title}>Ayam Bakar</Text>

                        <View style={styles.row}>
                            <Calendar size={14} color="#fff" />
                            <Text style={styles.info}>20 Maret 2026</Text>
                        </View>

                        <View style={styles.row}>
                            <Flame size={14} color="#fff" />
                            <Text style={styles.info}>Sedang</Text>
                        </View>

                        <View style={styles.favoriteRow}>
                            <Star size={14} color="#ffd700" />
                            <Text style={styles.favoriteActive}> Favorit</Text>
                        </View>

                    </View>
                </ImageBackground>
            </View>

        </ScrollView>
    );
}


// ================= STYLE =================
const styles = StyleSheet.create({

    card: {
        marginBottom: 20,
        paddingHorizontal: 20
    },

    image: {
        width: "100%",
        height: 200,
        justifyContent: "flex-end"
    },

    overlay: {
        backgroundColor: "rgba(0,0,0,0.5)",
        padding: 15,
        borderRadius: 15
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
        marginTop: 3
    },

    info: {
        color: "#fff",
        fontSize: 12,
        fontFamily: "Pjs-Regular"
    },

    favoriteRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5
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
// import
import { ScrollView, View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import { Calendar, Flame, Star } from "lucide-react-native";

// komponen menerima props
export default function CookingList({ kategori, favorit, setFavorit, setHalaman, setDetailMakanan }) {

    // fungsi toggle favorit
    const toggleFavorit = (nama) => {
        if (favorit.includes(nama)) {
            setFavorit(favorit.filter(item => item !== nama));
        } else {
            setFavorit([...favorit, nama]);
        }
    };

    // fungsi ke detail
    const bukaDetail = (data) => {
        setDetailMakanan(data);
        setHalaman("Detail");
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>

            {/* ITEM 1 */}
            {(kategori === "Semua" || kategori === "Mudah" || kategori === "Favorit") &&
            (kategori !== "Favorit" || favorit.includes("Nasi Goreng")) && (
                <TouchableOpacity onPress={() => bukaDetail({
                    nama: "Nasi Goreng",
                    gambar: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800",
                    tanggal: "10 Maret 2026",
                    level: "Mudah",
                    resep: "1. Siapkan nasi\n2. Tambahkan bumbu\n3. Goreng hingga matang"
                })}>
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

                                <TouchableOpacity onPress={() => toggleFavorit("Nasi Goreng")} style={styles.favoriteRow}>
                                    <Star size={14} color={favorit.includes("Nasi Goreng") ? "#ffd700" : "#fff"} />
                                    <Text style={favorit.includes("Nasi Goreng") ? styles.favoriteActive : styles.favoriteInactive}>
                                        Favorit
                                    </Text>
                                </TouchableOpacity>

                            </View>
                        </ImageBackground>
                    </View>
                </TouchableOpacity>
            )}

            {/* ITEM 2 */}
            {(kategori === "Semua" || kategori === "Sedang" || kategori === "Favorit") &&
            (kategori !== "Favorit" || favorit.includes("Mie Ayam")) && (
                <TouchableOpacity onPress={() => bukaDetail({
                    nama: "Mie Ayam",
                    gambar: "https://blog.alfagift.id/wp-content/uploads/2024/09/mie-ayam-goreng-1.jpg",
                    tanggal: "12 Maret 2026",
                    level: "Sedang",
                    resep: "1. Rebus mie\n2. Tambahkan ayam\n3. Sajikan"
                })}>
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

                                <TouchableOpacity onPress={() => toggleFavorit("Mie Ayam")} style={styles.favoriteRow}>
                                    <Star size={14} color={favorit.includes("Mie Ayam") ? "#ffd700" : "#fff"} />
                                    <Text style={favorit.includes("Mie Ayam") ? styles.favoriteActive : styles.favoriteInactive}>
                                        Favorit
                                    </Text>
                                </TouchableOpacity>

                            </View>
                        </ImageBackground>
                    </View>
                </TouchableOpacity>
            )}

            {/* ITEM 3 */}
            {(kategori === "Semua" || kategori === "Sulit" || kategori === "Favorit") &&
            (kategori !== "Favorit" || favorit.includes("Pizza")) && (
                <TouchableOpacity onPress={() => bukaDetail({
                    nama: "Pizza",
                    gambar: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=800",
                    tanggal: "15 Maret 2026",
                    level: "Sulit",
                    resep: "1. Siapkan adonan\n2. Tambahkan topping\n3. Panggang"
                })}>
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

                                <TouchableOpacity onPress={() => toggleFavorit("Pizza")} style={styles.favoriteRow}>
                                    <Star size={14} color={favorit.includes("Pizza") ? "#ffd700" : "#fff"} />
                                    <Text style={favorit.includes("Pizza") ? styles.favoriteActive : styles.favoriteInactive}>
                                        Favorit
                                    </Text>
                                </TouchableOpacity>

                            </View>
                        </ImageBackground>
                    </View>
                </TouchableOpacity>
            )}

            {/* ITEM 4 */}
            {(kategori === "Semua" || kategori === "Mudah" || kategori === "Favorit") &&
            (kategori !== "Favorit" || favorit.includes("Sate Ayam")) && (
                <TouchableOpacity onPress={() => bukaDetail({
                    nama: "Sate Ayam",
                    gambar: "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/07/14053934/Mudah-Dibuat-di-Rumah-Ini-Resep-Sate-Ayam-Bumbu-Kacang-yang-Lezat-.jpg",
                    tanggal: "18 Maret 2026",
                    level: "Mudah",
                    resep: "1. Tusuk ayam\n2. Bakar\n3. Sajikan dengan bumbu kacang"
                })}>
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

                                <TouchableOpacity onPress={() => toggleFavorit("Sate Ayam")} style={styles.favoriteRow}>
                                    <Star size={14} color={favorit.includes("Sate Ayam") ? "#ffd700" : "#fff"} />
                                    <Text style={favorit.includes("Sate Ayam") ? styles.favoriteActive : styles.favoriteInactive}>
                                        Favorit
                                    </Text>
                                </TouchableOpacity>

                            </View>
                        </ImageBackground>
                    </View>
                </TouchableOpacity>
            )}

            {/* ITEM 5 */}
            {(kategori === "Semua" || kategori === "Sedang" || kategori === "Favorit") &&
            (kategori !== "Favorit" || favorit.includes("Ayam Bakar")) && (
                <TouchableOpacity onPress={() => bukaDetail({
                    nama: "Ayam Bakar",
                    gambar: "https://wiratech.co.id/wp-content/uploads/2021/12/Ayam-Bakar.jpg",
                    tanggal: "20 Maret 2026",
                    level: "Sedang",
                    resep: "1. Bumbui ayam\n2. Bakar\n3. Sajikan"
                })}>
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

                                <TouchableOpacity onPress={() => toggleFavorit("Ayam Bakar")} style={styles.favoriteRow}>
                                    <Star size={14} color={favorit.includes("Ayam Bakar") ? "#ffd700" : "#fff"} />
                                    <Text style={favorit.includes("Ayam Bakar") ? styles.favoriteActive : styles.favoriteInactive}>
                                        Favorit
                                    </Text>
                                </TouchableOpacity>

                            </View>
                        </ImageBackground>
                    </View>
                </TouchableOpacity>
            )}

        </ScrollView>
    );
}

// styling komponen
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
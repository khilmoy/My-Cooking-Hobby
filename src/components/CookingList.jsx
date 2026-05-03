import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity
} from "react-native";
import { Calendar, Flame, Star } from "lucide-react-native";

export default function CookingList({ kategori, favorit, setFavorit, navigation }) {

    const toggleFavorit = (nama) => {
        if (favorit.includes(nama)) {
            setFavorit(favorit.filter(item => item !== nama));
        } else {
            setFavorit([...favorit, nama]);
        }
    };

    const bukaDetail = (data) => {
        navigation.navigate("Detail", { data });
    };

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.container}
        >

            {/* NASI GORENG */}
            {(kategori === "Semua" || kategori === "Mudah" || kategori === "Favorit") &&
                (kategori !== "Favorit" || favorit.includes("Nasi Goreng")) && (
                    <Card
                        nama="Nasi Goreng"
                        gambar="https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800"
                        tanggal="10 Maret 2026"
                        level="Mudah"
                        favorit={favorit}
                        toggleFavorit={toggleFavorit}
                        bukaDetail={bukaDetail}
                        resep={`1. Siapkan nasi putih dingin
2. Haluskan bawang putih dan bawang merah
3. Panaskan minyak di wajan
4. Tumis bumbu hingga harum
5. Masukkan telur lalu orak-arik
6. Tambahkan nasi dan aduk rata
7. Tuang kecap manis dan garam
8. Aduk hingga warna merata
9. Masukkan daun bawang
10. Koreksi rasa
11. Sajikan dengan kerupuk
12. Tambahkan telur mata sapi
13. Sajikan hangat`}
                    />
                )}

            {/* MIE AYAM */}
            {(kategori === "Semua" || kategori === "Sedang" || kategori === "Favorit") &&
                (kategori !== "Favorit" || favorit.includes("Mie Ayam")) && (
                    <Card
                        nama="Mie Ayam"
                        gambar="https://blog.alfagift.id/wp-content/uploads/2024/09/mie-ayam-goreng-1.jpg"
                        tanggal="12 Maret 2026"
                        level="Sedang"
                        favorit={favorit}
                        toggleFavorit={toggleFavorit}
                        bukaDetail={bukaDetail}
                        resep={`1. Rebus mie hingga matang lalu tiriskan
2. Panaskan minyak untuk menumis
3. Tumis bawang putih hingga harum
4. Masukkan ayam yang dipotong kecil
5. Tambahkan kecap dan saus tiram
6. Masak hingga ayam matang
7. Siapkan mangkuk saji
8. Masukkan mie ke mangkuk
9. Tambahkan ayam di atasnya
10. Siram kuah kaldu
11. Tambahkan daun bawang
12. Beri topping pangsit
13. Sajikan hangat`}
                    />
                )}

            {/* PIZZA */}
            {(kategori === "Semua" || kategori === "Sulit" || kategori === "Favorit") &&
                (kategori !== "Favorit" || favorit.includes("Pizza")) && (
                    <Card
                        nama="Pizza"
                        gambar="https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=800"
                        tanggal="15 Maret 2026"
                        level="Sulit"
                        favorit={favorit}
                        toggleFavorit={toggleFavorit}
                        bukaDetail={bukaDetail}
                        resep={`1. Siapkan adonan pizza
2. Diamkan hingga mengembang
3. Pipihkan di loyang
4. Oleskan saus tomat
5. Tambahkan keju mozzarella
6. Tambahkan topping
7. Panaskan oven
8. Panggang selama 15 menit
9. Angkat setelah matang
10. Potong pizza
11. Tambahkan oregano
12. Sajikan hangat`}
                    />
                )}

            {/* SATE AYAM */}
            {(kategori === "Semua" || kategori === "Mudah" || kategori === "Favorit") &&
                (kategori !== "Favorit" || favorit.includes("Sate Ayam")) && (
                    <Card
                        nama="Sate Ayam"
                        gambar="https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/07/14053934/Mudah-Dibuat-di-Rumah-Ini-Resep-Sate-Ayam-Bumbu-Kacang-yang-Lezat-.jpg"
                        tanggal="18 Maret 2026"
                        level="Mudah"
                        favorit={favorit}
                        toggleFavorit={toggleFavorit}
                        bukaDetail={bukaDetail}
                        resep={`1. Potong ayam kecil-kecil
2. Tusukkan ke tusuk sate
3. Haluskan bumbu kacang
4. Campurkan kecap dan bumbu
5. Lumuri sate
6. Panaskan arang
7. Bakar sate
8. Bolak-balik
9. Olesi bumbu
10. Masak hingga matang
11. Sajikan dengan lontong
12. Tambahkan bawang merah
13. Sajikan hangat`}
                    />
                )}

            {/* AYAM BAKAR */}
            {(kategori === "Semua" || kategori === "Sedang" || kategori === "Favorit") &&
                (kategori !== "Favorit" || favorit.includes("Ayam Bakar")) && (
                    <Card
                        nama="Ayam Bakar"
                        gambar="https://wiratech.co.id/wp-content/uploads/2021/12/Ayam-Bakar.jpg"
                        tanggal="20 Maret 2026"
                        level="Sedang"
                        favorit={favorit}
                        toggleFavorit={toggleFavorit}
                        bukaDetail={bukaDetail}
                        resep={`1. Bersihkan ayam
2. Rebus dengan bumbu
3. Haluskan bawang
4. Campur kecap dan gula
5. Lumuri ayam
6. Diamkan 30 menit
7. Panaskan grill
8. Bakar ayam
9. Bolak-balik
10. Olesi bumbu
11. Angkat
12. Sajikan dengan sambal
13. Nikmati hangat`}
                    />
                )}

        </ScrollView>
    );
}


// COMPONENT CARD
function Card({ nama, gambar, tanggal, level, favorit, toggleFavorit, bukaDetail, resep }) {
    return (
        <TouchableOpacity onPress={() => bukaDetail({ nama, gambar, tanggal, level, resep })}>
            <View style={styles.card}>
                <ImageBackground
                    source={{ uri: gambar }}
                    style={styles.image}
                    imageStyle={styles.imageRadius}
                >
                    <View style={styles.overlay}>

                        <Text style={styles.title}>{nama}</Text>

                        <View style={styles.row}>
                            <Calendar size={14} color="#fff" />
                            <Text style={styles.info}>{tanggal}</Text>
                        </View>

                        <View style={styles.row}>
                            <Flame size={14} color="#fff" />
                            <Text style={styles.info}>{level}</Text>
                        </View>

                        <TouchableOpacity onPress={() => toggleFavorit(nama)} style={styles.favoriteRow}>
                            <Star size={14} color={favorit.includes(nama) ? "#ffd700" : "#fff"} />
                            <Text style={favorit.includes(nama) ? styles.favoriteActive : styles.favoriteInactive}>
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
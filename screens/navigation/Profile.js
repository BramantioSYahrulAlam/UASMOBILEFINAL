import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import About from "./About";

export default function Profile() {
  // Dummy data untuk postingan
  const navigation = useNavigation();
  const postsData = [
    { id: "1", image: require("../../assets/images/tio.jpg") },
    { id: "2", image: require("../../assets/images/tioganteng.jpg") },
    { id: "3", image: require("../../assets/images/tioganteng2.jpg") },
    { id: "4", image: require("../../assets/images/tioganteng4.jpg") },
    { id: "5", image: require("../../assets/images/tioganteng3.jpg") },
    { id: "6", image: require("../../assets/images/tioganteng5.jpg") },
    { id: "7", image: require("../../assets/images/tioganteng6.jpg") },
    { id: "8", image: require("../../assets/images/tio.jpg") },
    // ... tambahkan lebih banyak postingan sesuai kebutuhan Anda
  ];
  const postsSingle = [
    { id: "1", image: require("../../assets/images/sorotan2.png") },
    { id: "2", image: require("../../assets/images/sorotantiga.jpg") },
    // ... tambahkan lebih banyak postingan sesuai kebutuhan Anda
  ];

  return (
    <View style={styles.container}>
      <View style={styles.profileInfodua}>
        <Image
          style={styles.avatargembok}
          source={require("../../assets/images/kunci.png")}
        />
        <View style={styles.statsdua}>
          <Text style={styles.headernama}>bramantio_sa</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image
            style={styles.avatarhome}
            source={require("../../assets/images/home3.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
        <View style={styles.profileInfo}>
          <Image
            style={styles.avatar}
            source={require("../../assets/images/tioo.jpeg")}
          />
          <View style={styles.stats}>
            <View style={styles.statItemContainer}>
              <Text style={styles.statNumber}>1049</Text>
              <Text style={styles.statText}>Postingan</Text>
            </View>
            <View style={styles.statItemContainer}>
              <Text style={styles.statNumber}>889k</Text>
              <Text style={styles.statText}>Pengikut</Text>
            </View>
            <View style={styles.statItemContainer}>
              <Text style={styles.statNumber}>1</Text>
              <Text style={styles.statText}>Mengikuti</Text>
            </View>
          </View>
        </View>
      </View>
      <Text style={styles.username}>Bramantio Syahrul Alam</Text>
      <Text style={styles.bio}>
        Halo Saya Tio Satoru, Kembaran Adipati Dolken, Berasal dari Korea dan
        Campuran dari Amerika,mempunyai adik perempuan yaitu Vonzy Ba onic
      </Text>
      <View style={styles.buttonRow}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.customButton}>
            <Text style={styles.buttonText}>Edit profil</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.customButton}>
            <Text style={styles.buttonText}>Bagikan profil</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.highlights}>Sorotan</Text>
      <FlatList
        data={postsSingle.slice(0, 2)}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("About");
            }}
          >
            <Image style={styles.circularHighlightImage} source={item.image} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        style={styles.highlightsContainer}
      />

      <Text style={styles.postsTitle}>Postingan</Text>
      <FlatList
        data={postsData}
        numColumns={3}
        renderItem={({ item }) => (
          <Image style={styles.postImage} source={item.image} />
        )}
        keyExtractor={(item) => item.id}
        style={styles.postsContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#000000", // Mengubah warna teks menjadi hitam
    textAlign: "center",
    lineHeight: 20,
  },

  buttonContainer: {
    margin: 10,
    marginVertical: 10,
    borderRadius: 5,
    width: 185, // Mengubah lebar menjadi lebih panjang
    height: 40, // Menyesuaikan ketinggian berdasarkan kebutuhan
  },
  customButton: {
    backgroundColor: "#D3D3D3",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  header: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "#eaeaea",
  },
  headernama: {
    fontWeight: "900",
    fontSize: 25,
    marginLeft: 10,
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  circularHighlightImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginHorizontal: 8,
    marginBottom: 80,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    marginLeft: 20,
  },
  avatarhome: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginBottom: -5,
    marginLeft: 160,
  },
  avatargembok: {
    width: 20,
    height: 20,
    marginBottom: -5,
    marginLeft: 15,
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    marginLeft: 8,
  },
  statItemContainer: {
    alignItems: "center", // Agar angka dan teks berada di tengah
  },
  bio: {
    fontSize: 14,
    color: "#0a0a0a",
    textAlign: "left",
    marginHorizontal: 10,
    marginBottom: 10,
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    paddingHorizontal: 35,
    borderBottomColor: "#eaeaea",
  },
  statsdua: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    paddingHorizontal: 1,
    borderBottomColor: "#eaeaea",
  },
  statItem: {
    fontSize: 16,
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileInfodua: {
    flexDirection: "row",
    alignItems: "center",
  },
  highlights: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
    marginLeft: 10,
  },
  highlightsContainer: {
    marginVertical: 10,
  },
  statText: {
    fontSize: 16,
    color: "#666",
    marginHorizontal: 5,
  },
  statNumber: {
    fontSize: 18,
    fontWeight: "bold",
  },
  highlightImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  postsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 8,
    marginLeft: 10,
  },
  postImage: {
    width: 126,
    height: 125,
    borderRadius: 10,
    margin: 5,
  },
});

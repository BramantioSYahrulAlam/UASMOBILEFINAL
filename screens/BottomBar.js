import React from "react";
import { View, TouchableOpacity, Image, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function BottomBar() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("KonversiUang")}
          style={styles.button}
        >
          <Image
            source={require("../assets/images/rupiah.png")}
            className="w-10 h-10 mb-2"
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Kalkulator")}
          style={styles.button}
        >
          <Image
            source={require("../assets/images/calculator.png")}
            className="w-10 h-10 mb-2"
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.buttonkhusus}
        >
          <Image
            source={require("../assets/images/home.png")}
            className="w-12 h-12 mt-2"
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("BMI")}
          style={styles.button}
        >
          <Image
            source={require("../assets/images/healthy.png")}
            className="w-10 h-10 mb-2"
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("BMKG")}
          style={styles.button}
        >
          <Image
            source={require("../assets/images/profile.png")}
            className="w-10 h-10 mb-2"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    transform: [{ translateY: 8 }], // Assuming maxWidth is 320
    width: "100%",
    height: 64,
    backgroundColor: "#ffffff",
    borderColor: "#e2e8f0",
    borderWidth: 1,
    borderRadius: 32,
    zIndex: 50,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
    height: "100%",
  },
  buttonkhusus: {
    backgroundColor: "#d5ded7", // Warna latar belakang hitam
    borderRadius: 30, // Agar tombol menjadi bulat
    paddingVertical: 15, // Padding vertikal untuk memberikan ruang di dalam tombol
    paddingHorizontal: 35, // Padding horizontal yang lebih besar untuk membuatnya meleleh ke kiri dan kanan
    margin: 5, // Margin antara tombol
    justifyContent: "center", // Untuk mengatur konten di tengah tombol
    alignItems: "center", // Untuk mengatur konten di tengah tombol
    // Elevasi untuk shadow di Android
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#4a5568",
    fontSize: 14,
    fontWeight: "500",
  },
  actionButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#4299e1",
    justifyContent: "center",
    alignItems: "center",
  },
  actionButtonText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  },
});

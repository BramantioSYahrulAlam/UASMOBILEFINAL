import {
  View,
  TextInput,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import BottomBar from "../BottomBar";

export default function BMI() {
  const [beratBadan, setBeratBadan] = useState("");
  const [tinggiBadan, setTinggiBadan] = useState("");
  const [gender, setGender] = useState("");
  const [bmiResult, setBmiResult] = useState("");
  const [bmiStatus, setBmiStatus] = useState("");

  const clearInputs = () => {
    setBeratBadan("");
    setTinggiBadan("");
    setGender("");
    setBmiResult("");
    setBmiStatus("");
  };

  const calculateBMI = () => {
    const berat = parseFloat(beratBadan);
    const tinggi = parseFloat(tinggiBadan);

    if (
      isNaN(berat) ||
      isNaN(tinggi) ||
      berat <= 0 ||
      tinggi <= 0 ||
      (gender !== "L" && gender !== "P")
    ) {
      // Validasi input
      setBmiResult("Input tidak valid");
      setBmiStatus("");
      return;
    }

    const tinggiM = tinggi / 100; // Konversi tinggi dari cm ke m
    const bmi = berat / (tinggiM * tinggiM);

    // Tentukan status BMI
    let status = "";
    if (gender === "L") {
      if (bmi < 20.7) {
        status = "Kurus ANDA TIDAK SEHAT";
      } else if (bmi < 26.4) {
        status = "Normal";
      } else {
        status = "Gemuk Olahraga Cuy";
      }
    } else if (gender === "P") {
      if (bmi < 19.1) {
        status = "Kurus, Kamu TIDAK SEHAT";
      } else if (bmi < 25.8) {
        status = "Normal";
      } else {
        status = "Gemuk, Olahraga cuy";
      }
    }

    setBmiResult(bmi.toFixed(2));
    setBmiStatus(status);
  };

  return (
    <View style={styles.bg}>
      <View style={styles.spacedua}></View>
      <Text style={styles.font}>BMI Kalkulator</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Berat Badan (kg)"
          value={beratBadan}
          onChangeText={(text) => setBeratBadan(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Tinggi Badan (cm)"
          value={tinggiBadan}
          onChangeText={(text) => setTinggiBadan(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Jenis Kelamin (L/P)"
          value={gender}
          onChangeText={(text) => setGender(text)}
        />
        <Text style={styles.resultText}>BMI:</Text>
        <TextInput
          style={styles.input}
          value={bmiResult}
          onChangeText={(text) => setBmiResult(text)}
        />
        <Text style={styles.resultText}>Status BMI:</Text>
        <TextInput
          style={styles.input}
          value={bmiStatus}
          onChangeText={(text) => setBmiStatus(text)}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={calculateBMI} style={styles.customButton}>
          <Text style={styles.buttonText}>Hitung BMI</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={clearInputs} style={styles.customButton}>
          <Text style={styles.buttonText}>Clear</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.space}></View>
      <BottomBar />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    margin: 20,
    padding: 10,
    borderWidth: 2,
    borderColor: "green",
    borderRadius: 10,
  },
  customButton: {
    backgroundColor: "#436e43",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 50,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#ffffff",
    textAlign: "center",
  },
  input: {
    height: 45,
    borderColor: "green",
    borderWidth: 2,
    borderRadius: 5,
    marginVertical: 8,
    padding: 10,
    fontSize: 18,
  },
  resultText: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 11,
  },

  buttonContainer: {
    backgroundColor: "green",
    margin: 20,
    marginVertical: 12,
    borderRadius: 50,
    width: 150,
    alignSelf: "center", // Menyusun tombol di tengah horizontal
  },

  bg: {
    backgroundColor: "#d5ded7",
  },
  font: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  space: {
    marginVertical: 42,
  },
  spacedua: {
    marginVertical: 16,
  },
});

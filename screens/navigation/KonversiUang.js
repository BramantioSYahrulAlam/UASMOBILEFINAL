import {
  Image,
  View,
  TextInput,
  ScrollView,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import BottomBar from "../BottomBar";
import ScreenWrapper from "../../components/screenWrapper";

export default function KonversiUang() {
  const [input1, setInput1] = useState("");
  const [result, setResult] = useState("");

  const clearInputs = () => {
    setInput1("");
    setResult("");
  };

  const convertToEuro = () => {
    const valueRP = parseFloat(input1) || 0;

    const exchangeRate = 17000;

    // Hitung jumlah Euro
    const valueEUR = (valueRP / exchangeRate).toFixed(1);

    setResult(valueEUR.toString());
  };

  return (
    <ScreenWrapper>
      <View style={styles.bg}>
        <View style={styles.spacedua}></View>
        <Text style={styles.text}>Konversi Mata Uang Rupiah</Text>
        <View style={styles.container}>
          <Text style={styles.title}>Konversi Mata Uang RP ke Euro</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={input1}
            onChangeText={(text) => setInput1(text)}
          />
          <Text style={styles.resultText}>Hasilnya Adalah (EUR):</Text>
          <TextInput
            style={styles.input}
            value={result}
            onChangeText={(text) => setResult(text)}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={convertToEuro} style={styles.customButton}>
            <Text style={styles.buttonText}>Konversi</Text>
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
      <View style={styles.space}></View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  bgGradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 255, 0, 0.2)", // Hijau muda dengan opacity rendah
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    textDecorationColor: "red",
  },
  inputContainer: {
    margin: 20,
    padding: 10,
    borderWidth: 2,
    borderColor: "green",
    borderRadius: 10,
  },
  input: {
    height: 50,
    borderColor: "green",
    borderWidth: 2,
    borderRadius: 5,
    marginVertical: 10,
    padding: 10,
    fontSize: 18,
  },
  resultText: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },

  buttonContainer: {
    backgroundColor: "green",
    margin: 40,
    marginVertical: 11,
    borderRadius: 29,
  },

  text: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontSize: 25,
  },
  bg: {
    backgroundColor: "#d5ded7",
  },

  space: {
    marginVertical: 161,
  },
  spacedua: {
    marginVertical: 16,
  },
  customButton: {
    backgroundColor: "#436e43",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 29,
  },
  buttonText: {
    fontSize: 18,
    color: "#ffffff", // warna teks
    textAlign: "center",
  },
});

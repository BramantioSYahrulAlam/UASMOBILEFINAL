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

export default function Kalkulator() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [result, setResult] = useState("");

  const clearInputs = () => {
    setInput1("");
    setInput2("");
    setResult("");
  };

  const performOperation = (operator) => {
    const value1 = parseFloat(input1) || 0;
    const value2 = parseFloat(input2) || 0;

    let resultValue = 0;

    switch (operator) {
      case "+":
        resultValue = value1 + value2;
        break;
      case "-":
        resultValue = value1 - value2;
        break;
      case "*":
        resultValue = value1 * value2;
        break;
      case "/":
        if (value2 !== 0) {
          resultValue = value1 / value2;
        }
        break;
      default:
        break;
    }

    setResult(resultValue.toString());
  };

  return (
    <View style={styles.bg}>
      <View style={styles.spacedua}></View>
      <Text style={styles.font}>Kalkulator Sederhana</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={input1}
          onChangeText={(text) => setInput1(text)}
        />
        <TextInput
          style={styles.input}
          value={input2}
          onChangeText={(text) => setInput2(text)}
        />
        <Text style={styles.resultText}>Hasilnya Adalah:</Text>
        <TextInput
          style={styles.input}
          value={result}
          onChangeText={(text) => setResult(text)}
        />
      </View>

      <View style={styles.buttonRow}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => performOperation("*")}
            style={styles.customButton}
          >
            <Text style={styles.buttonText}>x</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => performOperation("-")}
            style={styles.customButton}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.buttonRow}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => performOperation("+")}
            style={styles.customButton}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => performOperation("/")}
            style={styles.customButton}
          >
            <Text style={styles.buttonText}>/</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.buttonContainer2}>
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

  buttonContainer: {
    backgroundColor: "green",
    margin: 20,
    marginVertical: 11,
    borderRadius: 50,
    width: 100,
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

  buttonContainer2: {
    backgroundColor: "green",
    margin: 20,
    marginVertical: 11,
    borderRadius: 50,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
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
    marginVertical: 77,
  },
  spacedua: {
    marginVertical: 17,
  },
});

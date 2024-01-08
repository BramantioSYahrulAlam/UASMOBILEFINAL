import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import ScreenWrapper from "../../components/screenWrapper";
import { Svg, Rect, Text as SvgText, Line } from "react-native-svg";
import BottomBar from "../BottomBar";

export default function BMKG() {
  const [earthquakeData, setEarthquakeData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://data.bmkg.go.id/DataMKG/TEWS/gempaterkini.json")
      .then((response) => response.json())
      .then((data) => {
        setEarthquakeData(data.Infogempa.gempa);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Terjadi kesalahan saat mengambil data:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#2E8B57" />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }
  return (
    <ScreenWrapper style={styles.container}>
      <View style={styles.bg}>
        <View style={styles.spacedua}></View>
        <Text style={styles.title}>Data Gempa Terkini</Text>
        <ScrollView horizontal={true} style={styles.scrollView}>
          {earthquakeData.map((item, index) => (
            <View key={index} style={styles.itemContainer}>
              <Text style={styles.itemText}>Tanggal: {item.Tanggal}</Text>
              <Text style={styles.itemText}>Jam: {item.Jam}</Text>
              <View style={styles.graphContainer}>
                <Svg height="150" width="300">
                  {/* Garis Kotak */}
                  {Array.from({ length: 15 }).map((_, index) => (
                    <Line
                      key={index}
                      x1={index * 20}
                      y1="0"
                      x2={index * 20}
                      y2="130"
                      stroke="#ccc" // Warna garis kotak
                      strokeWidth="0.5"
                    />
                  ))}
                  {Array.from({ length: 7 }).map((_, index) => (
                    <Line
                      key={index}
                      x1="0"
                      y1={index * 20}
                      x2="300"
                      y2={index * 20}
                      stroke="#ccc" // Warna garis kotak
                      strokeWidth="0.5"
                    />
                  ))}

                  {/* Axis */}
                  <Line x1="0" y1="130" x2="300" y2="130" stroke="black" />
                  <Line x1="0" y1="130" x2="0" y2="0" stroke="black" />

                  {/* Magnitude Bar */}
                  <Rect
                    x="10"
                    y={130 - item.Magnitude * 15}
                    width="50"
                    height={item.Magnitude * 15}
                    fill="#2E8B57" // Warna hijau tosca
                  />
                  <SvgText x="25" y="145" fontSize="14" fill="black">
                    {item.Magnitude}
                  </SvgText>
                </Svg>
              </View>
              <Text style={styles.itemText}>Wilayah: {item.Wilayah}</Text>
            </View>
          ))}
        </ScrollView>
        <View style={styles.space}></View>
        <BottomBar />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  scrollView: {
    flexGrow: 0,
    paddingLeft: 15,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  itemContainer: {
    width: 320, // Lebar setiap item
    backgroundColor: "#ffffff",
    padding: 15,
    marginRight: 10, // Jarak antar item
    borderRadius: 8,
    elevation: 4,
  },

  itemText: {
    fontSize: 16,
    marginBottom: 5,
  },
  graphContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  bg: {
    backgroundColor: "#d5ded7",
  },
  space: {
    marginVertical: 199,
  },
  spacedua: {
    marginVertical: 16,
  },
});

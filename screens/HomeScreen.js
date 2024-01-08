import { View, TouchableOpacity, Text, Image, FlatList } from "react-native";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import ScreenWrapper from "../components/screenWrapper";
import { colorsdua } from "../theme";
import randomImage from "../assets/images/randomImage";
import EmptyList from "../components/emptyList";

const items = [
  {
    id: 1,
    place: "Cibeunying",
    country: "Bandung",
  },
  {
    id: 2,
    place: "UjungBerung",
    country: "BandungBarat",
  },
  {
    id: 3,
    place: "Pasteur",
    country: "BandungTimur",
  },
  {
    id: 4,
    place: "BuahBatu",
    country: "BandungUtara",
  },
];

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <ScreenWrapper className="flex-1">
      <View className="flex-row justify-between items-center p-4">
        <TouchableOpacity onPress={() => navigation.navigate("KonversiUang")}>
          <Image
            source={require("../assets/images/list.png")}
            className="w-7 h-7"
          />
        </TouchableOpacity>

        <Text className={`${colorsdua.heading} font-bold text-3xl shadow-sm`}>
          Perjalanan
        </Text>

        {/* Navigasi ke "Chat" */}
        <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
          <Image
            source={require("../assets/images/chat.png")}
            className="w-9 h-9"
          />
        </TouchableOpacity>
      </View>

      {/* Banner */}
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <View className="flex-row justify-center items-center bg-blue-200 rounded-xl mx-4 mb-4">
          <Image
            source={require("../assets/images/tiohome.png")}
            className="w-60 h-60"
          />
        </View>
      </TouchableOpacity>
      {/* Konten utama */}
      <View className="px-4 space-y-3">
        {/* Judul Perjalanan Baru dan Tombol "Add Trip" */}
        <View className="flex-row justify-between items-center">
          <Text className={`${colorsdua.heading} font-bold text-xl`}>
            Perjalanan Baru
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("AddTrip")}
            className="p-2 px-3 bg-white border-grey-200 rounded-full"
          >
            <Text className={colorsdua.heading}>Add Trip</Text>
          </TouchableOpacity>
        </View>

        {/* Daftar Perjalanan */}
        <View style={{ height: 400 }}>
          <FlatList
            data={items}
            numColumns={2}
            ListEmptyComponent={
              <EmptyList message={"Belum ada perjalanan Tuan Tio Ganteng"} />
            }
            keyExtractor={(item) => item.id.toString()} // Ubah key menjadi string
            showVerticalScrollIndicator={false}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            className="mx-1"
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("TripExpenses", { ...item })
                  }
                  className="bg-white p-3 rounded-2xl mb-3 shadow-sm"
                >
                  <View>
                    <Image source={randomImage()} className="w-36 h-36 mb-2" />
                    <Text className={`${colorsdua.heading} font-bold`}>
                      {item.place}
                    </Text>
                    <Text className={`${colorsdua.heading} text-xs`}>
                      {item.country}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
}

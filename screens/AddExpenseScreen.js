import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import ScreenWrapper from "../components/screenWrapper";
import BackButton from "../components/backButton";
import { colorsdua } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { categories } from "../constants/index";

export default function AddExpenseScreen() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const navigation = useNavigation();

  const handleAddExpense = async () => {
    if (title && amount && category) {
      // good to go

      navigation.goBack();
    } else {
    }
  };
  return (
    <ScreenWrapper>
      <View className="flex justify-between h-full mx-4">
        <View>
          <View className="relative mt-3">
            <View className="absolute top-0 left-0 z-10">
              <BackButton />
            </View>

            <Text
              className={`${colorsdua.heading} text-xl font-bold text-center`}
            >
              Add Pengeluaran
            </Text>
          </View>

          <View className="flex-row justify-center my-3 mt-1">
            <Image
              className="h-72 w-72"
              source={require("../assets/images/expenseBanner.png")}
            />
          </View>
          <View className="space-y-2 mx-2">
            <Text className={`${colorsdua.heading} text-lg font-bold`}>
              apa keperluan nya
            </Text>
            <TextInput
              value={title}
              onChangeText={(value) => setTitle(value)}
              className="p-4 bg-white rounded-full mb-3"
            />
            <Text className={`${colorsdua.heading} text-lg font-bold`}>
              Berapa duit
            </Text>
            <TextInput
              value={amount}
              onChangeText={(value) => setAmount(value)}
              className="p-4 bg-white rounded-full mb-3"
            />
          </View>
        </View>
        <Text className="text-lg font-bold">Kategori</Text>
        <View className="flex-row flex-wrap items-center">
          {categories.map((cat) => {
            let bgColor = "bg-white";
            if (cat.value == category) bgColor = "bg-green-200";
            return (
              <TouchableOpacity
                onPress={() => setCategory(cat.value)}
                key={cat.value}
                className={`rounded-full ${bgColor} px-4 p-3 mb-2 mr-2`}
              >
                <Text>{cat.title}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <View>
          <TouchableOpacity
            onPress={handleAddExpense}
            style={{ backgroundColor: colorsdua.button }}
            className="my-2 rounded-full p-3 shadow-sm mx-2"
          >
            <Text className="text-center text-white text-lg font-bold">
              Tambahkan Pengeluaran
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
}

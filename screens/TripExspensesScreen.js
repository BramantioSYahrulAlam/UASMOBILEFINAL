import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import React from "react";
import ScreenWrapper from "../components/screenWrapper";
import { colorsdua } from "../theme";
import randomImage from "../assets/images/randomImage";
import EmptyList from "../components/emptyList";
import { useNavigation } from "@react-navigation/native";
import AddTrip from "./AddTripScreen";
import BackButton from "../components/backButton";
import ExpenseCard from "../components/expenseCard";

const items = [
  {
    id: 1,
    title: "Seblak",
    amount: 15000,
    category: "food",
  },
  {
    id: 2,
    title: "Ngopi",
    amount: 35000,
    category: "shopping",
  },
  {
    id: 3,
    title: "Biokop",
    amount: 10000,
    category: "entertainment",
  },
];

export default function TripExspensesScreen(props) {
  const { id, place, country } = props.route.params;
  const navigation = useNavigation();
  return (
    <ScreenWrapper className="flex-1">
      <View className="px-4">
        <View className="relative mt-5">
          <View className="absolute top-0 left-0 z-10">
            <BackButton />
          </View>

          <View>
            <Text
              className={`${colorsdua.heading} text-xl font-bold text-center`}
            >
              {place}
            </Text>
            <Text className={`${colorsdua.heading} text-xs text-center`}>
              {country}
            </Text>
          </View>
        </View>
        <View className="flex-row justify-center items-center rounded-xl mb-4">
          <Image
            source={require("../assets/images/banner.png")}
            className="w-80 h-80"
          />
        </View>
        <View className="space-y-3">
          <View className="flex-row justify-between items-center">
            <Text className={`${colorsdua.heading} font-bold text-xl`}>
              Pengeluaran
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("AddExpense")}
              className="p-2 px-3 bg-white border-grey-200 rounded-full"
            >
              <Text className={colorsdua.heading}>Add Pengeluaran</Text>
            </TouchableOpacity>
          </View>
          <View style={{ height: 430 }}>
            <FlatList
              data={items}
              ListEmptyComponent={
                <EmptyList
                  message={"Belum ada Tambahan biaya baru Tuan Tio Ganteng"}
                />
              }
              keyExtractor={(item) => item.id}
              showVerticalScrollIndicator={false}
              className="mx-1"
              renderItem={({ item }) => {
                return <ExpenseCard item={item} />;
              }}
            />
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
}

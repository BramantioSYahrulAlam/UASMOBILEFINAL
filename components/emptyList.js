import {View, Text, Image, message} from 'react-native';
import React from 'react';

export default function EmptyList() {
  return (
    <View className="flex justify-center items-center my-5 space-y-3">
      <Image
        className="w-36 h-36 shadow"
        source={require('../assets/images/empty.png')}
      />
      <Text className="font-bold text-gray-400">
        {message || 'Data not Found Tuan tio'}
      </Text>
    </View>
  );
}

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeScreen from './HomeScreen';

export default function AboutProfile() {
  return <HomeScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

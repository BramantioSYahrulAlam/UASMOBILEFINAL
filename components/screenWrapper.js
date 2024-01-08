import {View, Text, StatusBar} from 'react-native';
import React from 'react';

export default function ScreenWrapper({children}) {
  let statusBarHeight = StatusBar.currentHeight;
  return <View>{children}</View>;
}

//style={{paddingTop: statusBarHeight}}

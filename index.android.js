import React from 'react';
import { AppRegistry, View, Text } from 'react-native';

const App = () => (
  <View>
    <Text>This is the App Container</Text>
  </View>
);

AppRegistry.registerComponent('firstNativeApp', () => App);

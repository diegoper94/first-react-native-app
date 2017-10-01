import React from 'react';
import { AppRegistry, View, Text } from 'react-native';
import Header from './src/components/header';

const App = () => (
  <View>
    <Header />
  </View>
);

AppRegistry.registerComponent('firstNativeApp', () => App);

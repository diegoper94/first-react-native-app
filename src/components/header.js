import React from 'react';
import { Text, View } from 'react-native';

const Header = props => (
  <View style={styles.viewStyle}>
    <Text style={styles.textStyle}>{props.headerText}</Text>
  </View>
);

const styles = {
  viewStyle: {
    backgroundColor: '#d0ddf2',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2
  },
  textStyle: {
    fontSize: 20
  }
};

export default Header;

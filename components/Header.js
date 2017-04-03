import React from 'react';
import { Text, View } from 'react-native';
import styles from '../styles/Header-styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text>Hello! I am the header.</Text>
    </View>
  );
}

export default Header;

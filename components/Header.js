import React from 'react';
import { Text, View, Linking } from 'react-native';
import styles from '../styles/Header-styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>FlashcardFE</Text>
      <Text style={styles.attributionText}>
        Info courtesy of: &nbsp;
        <Text
          onPress={() => { Linking.openURL('https://github.com/lrknaff/frontend-interview-prep') }}
          style={styles.link}
        >
          this repo
        </Text>
      </Text>
    </View>
  );
}

export default Header;

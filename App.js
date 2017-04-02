import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./components/Header";
import styles from './styles/App-styles';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
      </View>
    );
  }
}

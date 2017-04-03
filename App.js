import React from 'react';
import { View } from 'react-native';
import Header from './components/Header';
import Navigation from './components/Navigation';
import styles from './styles/App-styles';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Navigation />
      </View>
    );
  }
}

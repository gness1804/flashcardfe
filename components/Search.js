import React, { Component } from 'react';
import { ScrollView, View, Button, TouchableOpacity, Text } from 'react-native';
// import styles from '../styles/HomeScreen-styles';

class Search extends Component {
  static navigationOptions = {
    title: 'Search',
  }

  render() {
    return (
      <View>
        <Text>I am the Search component.</Text>
      </View>
    );
  }

}

export default Search;

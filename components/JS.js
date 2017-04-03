import React, { Component } from 'react';
import { Text, View } from 'react-native';

class JS extends Component {
  static navigationOptions = {
    title: 'JavaScript Questions',
  }

  render() {
    return (
      <View>
        <Text>I am the JS Component.</Text>
      </View>
    );
  }

}

export default JS;

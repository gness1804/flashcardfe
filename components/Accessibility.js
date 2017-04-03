import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Accessibility extends Component {
  static navigationOptions = {
    title: 'Accessibility Questions',
  }

  render() {
    return (
      <View>
        <Text>I am the Accessibility Component.</Text>
      </View>
    );
  }

}

export default Accessibility;

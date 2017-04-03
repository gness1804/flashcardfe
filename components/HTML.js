import React, { Component } from 'react';
import { Text, Navigator, TouchableHighlight, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

class HTML extends Component {
  static navigationOptions = {
    title: 'HTML Questions',
  }

  render() {
    return (
      <View>
      <Text>I am the HTML Component.</Text>
      </View>
    );
  }

}

export default HTML;

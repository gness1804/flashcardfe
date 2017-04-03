import React, { Component } from 'react';
import { Text, Navigator, TouchableHighlight, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Choose Your Poison!',
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View>
        <Button
          title="HTML"
          onPress={() => {
            navigate('HTML')
          }}
        />
        <Button
          title="CSS"
          onPress={() => {
            navigate('CSS')
          }}
        />
        <Button
          title="JS"
          onPress={() => {
            navigate('JS')
          }}
        />
      </View>
    );
  }

}

export default HomeScreen;

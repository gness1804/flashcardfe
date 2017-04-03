import React, { Component } from 'react';
import { View, Button } from 'react-native';

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

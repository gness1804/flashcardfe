import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

class Accessibility extends Component {
  static navigationOptions = {
    title: 'Accessibility Questions',
  }

  goToQuestion = () => {
    this.props.navigation.navigate('Answer')
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={this.goToQuestion}
        >
          <Text>What is ARIA? How does it aid in accessibility?</Text>
        </TouchableOpacity>
      </View>
    );
  }

}

export default Accessibility;

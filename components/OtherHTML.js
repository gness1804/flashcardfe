import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import answers from '../helpers/answers';

class OtherHTML extends Component {
  static navigationOptions = {
    title: 'Other HTML Questions',
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            navigate('Answer', { question: answers.attr })
          }}
        >
          <Text>What are data attributes good for?</Text>
        </TouchableOpacity>
      </View>
    );
  }

}

export default OtherHTML;

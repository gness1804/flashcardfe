import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
// import styles from '../styles/HTML-styles';

class Answer extends Component {
  static navigationOptions = {
    title: 'Answer',
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View>
        <Text>I am an answer.</Text>
      </View>
    );
  }

}

export default Answer;

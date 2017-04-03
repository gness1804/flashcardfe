import React, { Component } from 'react';
import { View, Text } from 'react-native';
// import styles from '../styles/HTML-styles';

class Answer extends Component {
  static navigationOptions = {
    title: 'Answer',
  }

  constructor(props) {
    super(props)
    this.state = {
      entireQuestion: this.props.navigation.state.params.question,
      main: this.props.navigation.state.params.question.main,
    }
  }

  render() {
    const { entireQuestion, main } = this.state
    return (
      <View>
        <Text>{main}</Text>
      </View>
    );
  }

}

export default Answer;

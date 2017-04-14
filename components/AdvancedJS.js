import React, { Component } from 'react';
import { Text, ScrollView, TouchableOpacity } from 'react-native';
import answers from '../helpers/answers';
import styles from '../styles/Question-styles';

class AdvancedJS extends Component {
  static navigationOptions = {
    title: 'Advanced JavaScript',
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigate('Answer', { question: answers.delegation })
          }}
        >
          <Text
            style={styles.text}
          >
          What is event bubbling/delegation? Can you give an example?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigate('Answer', { question: answers.promises })
          }}
        >
          <Text
            style={styles.text}
          >
          What are promises, and why use them?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigate('Answer', { question: answers.cors })
          }}
        >
          <Text
            style={styles.text}
          >
          What does CORS stand for and what issue does it address?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigate('Answer', { question: answers.hoisting })
          }}
        >
          <Text
            style={styles.text}
          >
          What is hoisting, and why does it matter?
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }

}

export default AdvancedJS;

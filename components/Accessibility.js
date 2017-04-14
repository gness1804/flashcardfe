import React, { Component } from 'react';
import { Text, ScrollView, TouchableOpacity } from 'react-native';
import answers from '../helpers/answers';
import styles from '../styles/Question-styles';

class Accessibility extends Component {
  static navigationOptions = {
    title: 'Accessibility Questions',
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigate('Answer', { question: answers.aria })
          }}
        >
          <Text style={styles.text}>What is ARIA? How does it aid in accessibility?</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }

}

export default Accessibility;

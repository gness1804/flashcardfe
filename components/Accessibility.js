import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import answers from '../helpers/answers';
import styles from '../styles/Question-styles';

class Accessibility extends Component {
  static navigationOptions = {
    title: 'Accessibility Questions',
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            navigate('Answer', { question: answers.aria })
          }}
        >
          <Text style={styles.text}>What is ARIA? How does it aid in accessibility?</Text>
        </TouchableOpacity>
      </View>
    );
  }

}

export default Accessibility;

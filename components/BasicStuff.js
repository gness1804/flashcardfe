import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import answers from '../helpers/answers';
import styles from '../styles/Question-styles';

class BasicStuff extends Component {
  static navigationOptions = {
    title: 'CSS Fundamentals',
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            navigate('Answer', { question: answers.boxModel })
          }}
        >
          <Text style={styles.text}>What is the box model?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigate('Answer', { question: answers.inlineBlock })
          }}
        >
          <Text
            style={styles.text}
          >
          What is the difference between inline, inline-block, and block elements?
        </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigate('Home')
          }}
        >
          <Image
            source={require('../images/home.png')}
            style={styles.homeButton}
          />
        </TouchableOpacity>
      </View>
    );
  }

}

export default BasicStuff;

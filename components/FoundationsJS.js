import React, { Component } from 'react';
import { Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import answers from '../helpers/answers';
import styles from '../styles/Question-styles';
import homeButtonStyles from '../styles/HomeButton-Styles';

class FoundationsJS extends Component {
  static navigationOptions = {
    title: 'JavaScript Foundations',
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigate('Answer', { question: answers.paradigms })
          }}
        >
          <Text style={styles.text}>What are the 2 most important paradigms of JS? Why?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigate('Answer', { question: answers.dataTypes })
          }}
        >
          <Text style={styles.text}>What are the six main data types in JS?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigate('Answer', { question: answers.varLetConst })
          }}
        >
          <Text
            style={styles.text}
          >
          Describe the difference between var, let and const
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigate('Home')
          }}
        >
          <Image
            source={require('../images/home.png')}
            style={homeButtonStyles.homeButton}
          />
        </TouchableOpacity>
      </ScrollView>
    );
  }

}

export default FoundationsJS;

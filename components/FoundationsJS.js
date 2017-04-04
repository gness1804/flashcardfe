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
          Describe the difference between var, let and const.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigate('Answer', { question: answers.es6 })
          }}
        >
          <Text
            style={styles.text}
          >
          Name and describe some new features of ES6.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigate('Answer', { question: answers.storage })
          }}
        >
          <Text
            style={styles.text}
          >
          Describe the difference between a cookie, sessionStorage and localStorage.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigate('Answer', { question: answers.equality })
          }}
        >
          <Text
            style={styles.text}
          >
          What is the difference between == and ===?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigate('Answer', { question: answers.hog })
          }}
        >
          <Text
            style={styles.text}
          >
          What value is returned from the following statement?
          "i'm a lasagna hog".split("").reverse().join("");
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigate('Answer', { question: answers.useStrict })
          }}
        >
          <Text
            style={styles.text}
          >
          What is "use strict";? what are the advantages and disadvantages to using it?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigate('Answer', { question: answers.ajax })
          }}
        >
          <Text
            style={styles.text}
          >
          What is AJAX and why is it useful?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigate('Answer', { question: answers.functions })
          }}
        >
          <Text
            style={styles.text}
          >
          What is a function declaration versus function expression?
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

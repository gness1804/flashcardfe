import React, { Component } from 'react';
import { Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import answers from '../helpers/answers';
import styles from '../styles/Question-styles';
import homeButtonStyles from '../styles/HomeButton-Styles';

class IntermediateJS extends Component {
  static navigationOptions = {
    title: 'Intermediate JavaScript',
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigate('Answer', { question: answers.inheritance })
          }}
        >
          <Text
            style={styles.text}
          >
          What is the difference between prototypal and class inheritance?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigate('Answer', { question: answers.objects })
          }}
        >
          <Text
            style={styles.text}
          >
          Why are functions and arrays considered objects in JS?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigate('Answer', { question: answers.callback })
          }}
        >
          <Text
            style={styles.text}
          >
          What is a callback?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigate('Answer', { question: answers.closure })
          }}
        >
          <Text
            style={styles.text}
          >
        What is a closure?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigate('Answer', { question: answers.bindCallApply })
          }}
        >
          <Text
            style={styles.text}
          >
          What are Apply, Call and Bind methods? Why are they an essential part of JS?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigate('Answer', { question: answers.dataBinding })
          }}
        >
          <Text
            style={styles.text}
          >
          What is two-way data binding and one-way data flow? How are they different?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigate('Answer', { question: answers.shimming })
          }}
        >
          <Text
            style={styles.text}
          >
          What is console shimming?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigate('Answer', { question: answers.iife })
          }}
        >
          <Text
            style={styles.text}
          >
          What are Immediately Invoked Function Expressions (IIFEs)?
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

export default IntermediateJS;

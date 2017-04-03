import React, { Component } from 'react';
import {
  ScrollView,
  TouchableOpacity,
  Image,
  Linking,
  Text,
  } from 'react-native';
import styles from '../styles/Links-styles';

class Links extends Component {
  static navigationOptions = {
    title: 'Useful Links',
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL('http://dom.events/')
          }}
        >
          <Text
            style={styles.text}
          >
          DOM Events
        </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL('https://medium.com/javascript-scene/10-interview-questions-every-javascript-developer-should-know-6fa6bdf5ad95')
          }}
        >
          <Text
            style={styles.text}
          >
          Ten interview questions every JavaScript developer should know
        </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL('https://www.interviewcake.com/')
          }}
        >
          <Text
            style={styles.text}
          >
          Interview Cake
        </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL('http://javascriptissexy.com/16-javascript-concepts-you-must-know-well/')
          }}
        >
          <Text
            style={styles.text}
          >
          JavaScript is Sexy: 16 Core Concepts for JS Professionals
        </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL('https://addyosmani.com/resources/essentialjsdesignpatterns/book/')
          }}
        >
          <Text
            style={styles.text}
          >
          Learning JavaScript Design Patterns (Full Book Online)
        </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL('http://www.skilledup.com/articles/25-css-interview-questions-answers')
          }}
        >
          <Text
            style={styles.text}
          >
          25 Helpful CSS Interview Questions and Answers
        </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL('https://tylermcginnis.com/react-interview-questions/')
          }}
        >
          <Text
            style={styles.text}
          >
          React Interview Questions
        </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL('https://blog.risingstack.com/node-js-interview-questions-and-answers-2017/')
          }}
        >
          <Text
            style={styles.text}
          >
          Node.js Interview Questions and Answers (2017 Edition)
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
      </ScrollView>
    );
  }

}

export default Links;

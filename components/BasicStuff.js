import React, { Component } from 'react';
import { Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import answers from '../helpers/answers';
import styles from '../styles/Question-styles';
import homeButtonStyles from '../styles/HomeButton-Styles';

class BasicStuff extends Component {
  static navigationOptions = {
    title: 'CSS Fundamentals',
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
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
            navigate('Answer', { question: answers.zIndex })
          }}
        >
          <Text style={styles.text}>What is the z-index? How is it used?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigate('Answer', { question: answers.positioning })
          }}
        >
          <Text
            style={styles.text}
          >
          What is the difference between a
          relative, fixed, absolute and statically positioned element?
        </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigate('Answer', { question: answers.mediaQueries })
          }}
        >
          <Text
            style={styles.text}
          >
        What are Media Queries?
        </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigate('Answer', { question: answers.applyStyles })
          }}
        >
          <Text
            style={styles.text}
          >
          Explain the 3 main ways to apply CSS styles to a Web page:
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

export default BasicStuff;

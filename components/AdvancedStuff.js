import React, { Component } from 'react';
import { Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import answers from '../helpers/answers';
import styles from '../styles/Question-styles';

class AdvancedStuff extends Component {
  static navigationOptions = {
    title: 'More Advanced CSS',
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigate('Answer', { question: answers.floatChallenge })
          }}
        >
          <Text
            style={styles.text}
          >
          If you have two elements inside of an outer containing element,
          one with float: left; and other with float: right;,
          how can you ensure that the containing element expands
          around the floated elements and does not collapse?
        </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigate('Answer', { question: answers.preProcessor })
          }}
        >
          <Text
            style={styles.text}
          >
          What are the positives and negatives of using a CSS pre-processor?
        </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigate('Answer', { question: answers.pseudoClass })
          }}
        >
          <Text
            style={styles.text}
          >
          What is a pseudo class? What are they used for?
        </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigate('Answer', { question: answers.pseudoElement })
          }}
        >
          <Text
            style={styles.text}
          >
          What are pseudo-elements and how are they made?
        </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigate('Answer', { question: answers.newFeatures })
          }}
        >
          <Text
            style={styles.text}
          >
          What are some of the new features of CSS3?
        </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigate('Answer', { question: answers.shorthand })
          }}
        >
          <Text
            style={styles.text}
          >
          Why and how are shorthand properties used?
        </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigate('Answer', { question: answers.hideContent })
          }}
        >
          <Text
            style={styles.text}
          >
          What are the different ways to visually hide
          content (and make it available only for screen readers)?
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

export default AdvancedStuff;

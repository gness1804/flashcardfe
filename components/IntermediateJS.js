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
          What is the difference between Prototypal and Class inheritance?
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
          Why are Functions and Arrays considered Objects in JS?
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

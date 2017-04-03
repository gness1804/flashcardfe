import React, { Component } from 'react';
import { Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import answers from '../helpers/answers';
import styles from '../styles/Question-styles';
import homeButtonStyles from '../styles/HomeButton-Styles';

class OtherHTML extends Component {
  static navigationOptions = {
    title: 'Other HTML Questions',
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigate('Answer', { question: answers.attr })
          }}
        >
          <Text style={styles.text}>What are data attributes good for?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigate('Home')
          }}
        >
          <Image
            source={require('../images/home.png')}w
            style={homeButtonStyles.homeButton}
          />
        </TouchableOpacity>
      </ScrollView>
    );
  }

}

export default OtherHTML;

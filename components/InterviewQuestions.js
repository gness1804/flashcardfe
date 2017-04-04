import React, { Component } from 'react';
import { Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/InterviewQuestions-Styles';
import homeButtonStyles from '../styles/HomeButton-Styles';

class InterviewQuestions extends Component {
  static navigationOptions = {
    title: 'Questions for Interviews',
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.sectionHeader}>General Questions:</Text>
        <Text style={styles.text}>
        What opportunities for mentorship are available at XYZ Company?</Text>
        <Text style={styles.text}>Which product/product line are you most proud of? Why?</Text>
        <Text style={styles.text}>What professional development opportunities
        are there in the company (things like conference funding, code retreats, etc)?</Text>
        <Text style={styles.text}>Where do you see the company in five years?</Text>

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

export default InterviewQuestions;

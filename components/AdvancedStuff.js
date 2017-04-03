import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import answers from '../helpers/answers';
import styles from '../styles/Question-styles';

class AdvancedStuff extends Component {
  static navigationOptions = {
    title: 'More Advanced CSS',
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigate('Answer', { question: answers.floatChallenge })
          }}
        >
          <Text style={styles.text}>If you have two elements inside of an outer containing element, one with float: left; and other with float: right;, how can you ensure that the containing element expands around the floated elements and does not collapse?</Text>
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

export default AdvancedStuff;

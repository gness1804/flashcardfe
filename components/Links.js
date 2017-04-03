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

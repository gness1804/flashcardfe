import React, { Component } from 'react';
import { View, Button, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/HTML-styles';
import homeButtonStyles from '../styles/HomeButton-Styles';

class HTML extends Component {
  static navigationOptions = {
    title: 'HTML Questions',
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View>
        <View style={styles.topButton}>
          <Button
            title="Accessibility"
            onPress={() => {
              navigate('Accessibility')
            }}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Other"
            onPress={() => {
              navigate('OtherHTML')
            }}
          />
        </View>
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
      </View>
    );
  }

}

export default HTML;

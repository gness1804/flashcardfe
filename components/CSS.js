import React, { Component } from 'react';
import { View, Button, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/CSS-styles';
import homeButtonStyles from '../styles/HomeButton-Styles';

class CSS extends Component {
  static navigationOptions = {
    title: 'CSS Questions',
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View>
        <View style={styles.topButton}>
          <Button
            title="Basic Stuff"
            onPress={() => {
              navigate('BasicStuff')
            }}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="More Advanced Stuff"
            onPress={() => {
              navigate('AdvancedStuff')
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

export default CSS;

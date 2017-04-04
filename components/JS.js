import React, { Component } from 'react';
import { View, Button, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/JS-styles';
import homeButtonStyles from '../styles/HomeButton-Styles';

class JS extends Component {
  static navigationOptions = {
    title: 'JavaScript Questions',
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View>
        <View style={styles.button}>
          <Button
            title="Foundations"
            onPress={() => {
              navigate('FoundationsJS')
            }}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Intermediate"
            onPress={() => {
              navigate('')
            }}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Advanced"
            onPress={() => {
              navigate('')
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

export default JS;

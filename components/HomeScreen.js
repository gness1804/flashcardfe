import React, { Component } from 'react';
import { View, Button } from 'react-native';
import styles from '../styles/HomeScreen-styles';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Choose Your Poison!',
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View>
        <View style={styles.button}>
          <Button
            title="HTML"
            onPress={() => {
              navigate('HTML')
            }}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="CSS"
            onPress={() => {
              navigate('CSS')
            }}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="JavaScript"
            onPress={() => {
              navigate('JS')
            }}
          />
        </View>
      </View>
    );
  }

}

export default HomeScreen;

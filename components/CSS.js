import React, { Component } from 'react';
import { View, Button } from 'react-native';
import styles from '../styles/CSS-styles';

class CSS extends Component {
  static navigationOptions = {
    title: 'CSS Questions',
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View>
        <View style={styles.button}>
          <Button
            title="Basic Stuff"
            onPress={() => {
              navigate('BasicStuff')
            }}
          />
        </View>
      </View>
    );
  }

}

export default CSS;

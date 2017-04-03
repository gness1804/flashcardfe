import React, { Component } from 'react';
import { View, Button } from 'react-native';
import styles from '../styles/HTML-styles';

class HTML extends Component {
  static navigationOptions = {
    title: 'HTML Questions',
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View>
        <View style={styles.button}>
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
      </View>
    );
  }

}

export default HTML;

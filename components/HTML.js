import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import styles from '../styles/HTML-styles';

class HTML extends Component {
  static navigationOptions = {
    title: 'HTML Questions',
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View>
        <Text>I am the HTML Component.</Text>
        <View style={styles.button}>
          <Button
            title="Accessibility"
            onPress={() => {
              navigate('Accessibility')
            }}
          />
        </View>
      </View>
    );
  }

}

export default HTML;

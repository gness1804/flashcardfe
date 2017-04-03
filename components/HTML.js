import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

class HTML extends Component {
  static navigationOptions = {
    title: 'HTML Questions',
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View>
        <Text>I am the HTML Component.</Text>
        <Button
          title="Accessibility"
          onPress={() => {
            navigate('Accessibility')
          }}
        />
      </View>
    );
  }

}

export default HTML;

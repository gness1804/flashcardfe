import React, { Component } from 'react';
import { ScrollView, Button, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/Links-styles';

class Links extends Component {
  static navigationOptions = {
    title: 'Useful Links',
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <ScrollView>

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

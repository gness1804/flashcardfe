import React from 'react';
import { View, Linking, Image, TouchableOpacity, Alert } from 'react-native';
import styles from '../styles/Footer-styles';

class Footer extends React.Component {

  goToPRPage = () => {
    Alert.alert('hello!')
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => { Linking.openURL('https://github.com/gness1804/front-end-interview-prep-app') }}
        >
          <Image
            source={require('../images/github.png')}
            style={styles.github}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.goToPRPage}
        >
          <Image
            source={require('../images/plus.png')}
            style={styles.github}
          />
        </TouchableOpacity>
      </View>
    );
  }

}

export default Footer;

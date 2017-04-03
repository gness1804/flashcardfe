import React from 'react';
import { Text, View, Linking, Image } from 'react-native';
import styles from '../styles/Footer-styles';

class Footer extends React.Component {

  render() {
    return (
      <View>
        <Image
           source={require('../images/github.png')}
           style={styles.github}
        />
      </View>
    );
  }

}

export default Footer;

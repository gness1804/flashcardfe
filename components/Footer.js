import React from 'react';
import { View, Linking, Image, TouchableOpacity, Alert } from 'react-native';
import styles from '../styles/Footer-styles';

class Footer extends React.Component {

  goToPRPage = () => {
    Alert.alert(
      'Make a Pull Request!',
      'We love contributions! Click OK to go to a site where you can easily submit a pull request to add a question (or an update/correction) to this project. Thanks for contributing!',
      [
        {
          text: 'OK',
          onPress: () => {
            Linking.openURL('https://github.com/gness1804/front-end-interview-prep-app/pulls')
          },
        },
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ],
    )
  }

  showHelpScreen = () => {
    Alert.alert(
      'About this App',
      'This app exists to help job seekers prepare for front end developer interviews. From the Home screen, you can select from three categories of questions: HTML, CSS, and JavaScript. These in turn are divided by category (typically difficulty). You can use this app to quiz yourself or others. Also, there is a section with links to useful interview-related sites and a section with questions to ask an interviewer. Good luck!',
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => { Linking.openURL('https://github.com/gness1804/front-end-interview-prep-app') }}
        >
          <Image
            source={require('../images/github.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.goToPRPage}
        >
          <Image
            source={require('../images/plus.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.showHelpScreen}
        >
          <Image
            source={require('../images/question.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    );
  }

}

export default Footer;

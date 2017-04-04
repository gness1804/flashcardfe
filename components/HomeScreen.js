import React, { Component } from 'react';
import { ScrollView, View, Button, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/HomeScreen-styles';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Choose Your Poison!',
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <ScrollView>
        <View style={styles.topButton}>
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
        <TouchableOpacity
          onPress={() => {
            navigate('Search')
          }}
        >
          <Image
            source={require('../images/search.png')}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
        <View style={styles.topButton}>
          <Button
            title="Useful Links"
            onPress={() => {
              navigate('Links')
            }}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Questions to Ask an Interviewer"
            onPress={() => {
              navigate('InterviewQuestions')
            }}
          />
        </View>
      </ScrollView>
    );
  }

}

export default HomeScreen;

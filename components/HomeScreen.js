import React, { Component } from 'react';
import { ScrollView, View, Button, TouchableOpacity, Text } from 'react-native';
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
        <TouchableOpacity
          onPress={() => {
            navigate('Search')
          }}
        >
          <Text>Search</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }

}

export default HomeScreen;

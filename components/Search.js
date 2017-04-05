import React, { Component } from 'react';
import { View, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/Search-styles';
import answers from '../helpers/answers';
import homeButtonStyles from '../styles/HomeButton-Styles';

class Search extends Component {
  static navigationOptions = {
    title: 'Search',
  }

  constructor() {
    super()
    this.state = {
      search: '',
    }
  }

  getAnswersArray = () => {
    const arr = []
    for (let key in answers) { // eslint-disable-line
      if (answers.hasOwnProperty(key)) { // eslint-disable-line
        arr.push(answers[key])
      }
    }
    return arr
  }

  clearInputField = () => {
    this.setState({ search: '' })
  }

  runSearch = () => {
    const promise = new Promise((resolve) => {
      resolve(this.getAnswersArray())
    })

    promise
    .then((result) => {
      return result.filter((a) => {
        return a.question.toLowerCase().includes(this.state.search.toLowerCase())
      })
    })
    .then((filtered) => {
      this.props.navigation.navigate('SearchResults', { results: filtered })
    })
    .then(() => { this.clearInputField() })
    .catch((error) => { throw new Error(error) })
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.box}
            onChangeText={(text) => { this.setState({ search: text }) }}
            value={this.state.search}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            this.clearInputField()
          }}
        >
          <Image
            source={require('../images/cancel-circle.png')}
            style={styles.cancel}
          />
        </TouchableOpacity>
        <View style={styles.button}>
          <Button
            title="Run Search!"
            onPress={this.runSearch}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigate('Home')
          }}
        >
          <Image
            source={require('../images/home.png')}
            style={homeButtonStyles.homeButton}
          />
        </TouchableOpacity>
      </View>
    );
  }

}

export default Search;

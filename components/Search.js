import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from '../styles/Search-styles';
import answers from '../helpers/answers';

class Search extends Component {
  static navigationOptions = {
    title: 'Search',
  }

  constructor() {
    super()
    this.state = {
      search: '',
      answersArr: [],
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
    .catch((error) => { throw new Error(error) })
  }

  render() {
    return (
      <View>
        <Text>Search for info:</Text>
        <TextInput
          style={styles.box}
          onChangeText={(text) => { this.setState({ search: text }) }}
        />
        <Button
          style={styles.button}
          title="Run Search!"
          onPress={this.runSearch}
        />
      </View>
    );
  }

}

export default Search;

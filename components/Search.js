import React, { Component } from 'react';
import {
  ScrollView,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  Alert,
  Linking,
} from 'react-native';
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
    if (!this.state.search) {
      Alert.alert('Oops, you must enter a search term.')
      return
    }
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

  searchMDN = () => {
    if (!this.state.search) {
      Alert.alert('Oops, you must enter a search term.')
      return
    }
    Linking.openURL(`https://developer.mozilla.org/en-US/search?q=${this.state.search}`)
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <ScrollView>
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
            title="Search this App"
            onPress={this.runSearch}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Search MDN"
            onPress={this.searchMDN}
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
      </ScrollView>
    );
  }

}

export default Search;

import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from '../styles/Search-styles';

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

  runSearch = () => {

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
          title="Run Search!"
          onPress={this.runSearch}
        />
      </View>
    );
  }

}

export default Search;

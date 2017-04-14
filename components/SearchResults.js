import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import styles from '../styles/SearchResults-styles';
import SearchItem from './SearchItem';

class SearchResults extends Component {
  static navigationOptions = {
    title: 'Search Results',
  }

  render() {
    const { results } = this.props.navigation.state.params
    let display
    if (results.length) {
      display = results.map((item) => {
        return (
          <SearchItem {...item} key={item.id} />
        )
      })
    } else {
      display = (
        <View>
          <Text
            style={styles.errorMssg}
          >
            Oops, no results to display. Please try again.
          </Text>
        </View>
      )
    }

    return (
      <ScrollView style={styles.container}>
        {display}
      </ScrollView>
    );
  }

}

export default SearchResults;

import React, { Component } from 'react';
import { ScrollView, TouchableOpacity, Image, View, Text } from 'react-native';
import styles from '../styles/SearchResults-styles';
import homeButtonStyles from '../styles/HomeButton-Styles';
import SearchItem from './SearchItem';

class SearchResults extends Component {
  static navigationOptions = {
    title: 'Search Results',
  }

  render() {
    const { navigate } = this.props.navigation
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
          <Text style={styles.errorMssg}>Oops, no results to display. Please try again.</Text>
        </View>
      )
    }

    return (
      <ScrollView style={styles.container}>
        {display}
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

export default SearchResults;

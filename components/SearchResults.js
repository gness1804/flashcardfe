import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
// import styles from '../styles/Search-styles';
import homeButtonStyles from '../styles/HomeButton-Styles';

class SearchResults extends Component {
  static navigationOptions = {
    title: 'Search Results',
  }

  render() {
    const { navigate } = this.props.navigation
    const { results } = this.props.navigation.state.params
    const display = results.map((item) => {
      return (
        <View>
          <Text>{item.question}</Text>
        </View>
      )
    })

    return (
      <ScrollView>
        <Text>I am the search result page.</Text>
        <TouchableOpacity
          onPress={() => {
            navigate('Home')
          }}
        >
          {display}
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

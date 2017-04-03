import React, { Component } from 'react';
import { View, Text, Image, Linking } from 'react-native';
// import styles from '../styles/HTML-styles';

class Answer extends Component {
  static navigationOptions = {
    title: 'Answer',
  }

  constructor(props) {
    super(props)
    this.state = {
      entireQuestion: this.props.navigation.state.params.question,
      main: this.props.navigation.state.params.question.main,
      firstPoint: this.props.navigation.state.params.question.firstPoint,
      secondPoint: this.props.navigation.state.params.question.secondPoint,
      thirdPoint: this.props.navigation.state.params.question.thirdPoint,
      fourthPoint: this.props.navigation.state.params.question.fourthPoint,
      image: this.props.navigation.state.params.question.image,
      firstLinkName: this.props.navigation.state.params.question.firstLinkName,
      firstLinkURL: this.props.navigation.state.params.question.firstLinkURL,
      secondLinkName: this.props.navigation.state.params.question.secondLinkName,
      secondLinkURL: this.props.navigation.state.params.question.secondLinkURL,
    }
  }

  render() {
    const { main, firstPoint, secondPoint, thirdPoint, fourthPoint, image, firstLinkName, firstLinkURL, secondLinkName, secondLinkURL } = this.state
    return (
      <View>
        <Text>{main}</Text>
        <Text>{firstPoint}</Text>
        <Text>{secondPoint}</Text>
        <Text>{thirdPoint}</Text>
        <Text>{fourthPoint}</Text>
        <Text
          onPress={() => { Linking.openURL(`${firstLinkURL}`) }}
        >
          {firstLinkName}
        </Text>
        <Text
          onPress={() => { Linking.openURL(`${secondLinkURL}`) }}
        >
          {secondLinkName}
        </Text>
      </View>
    );
  }

}

export default Answer;

import React, { Component } from 'react';
import { ScrollView, Text, Image, Linking } from 'react-native';
import styles from '../styles/Answer-styles';

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
      <ScrollView style={styles.container}>
        <Text style={styles.main}>{main}</Text>
        <Text style={styles.ordinaryText}>{firstPoint}</Text>
        <Text style={styles.ordinaryText}>{secondPoint}</Text>
        <Text style={styles.ordinaryText}>{thirdPoint}</Text>
        <Text style={styles.ordinaryText}>{fourthPoint}</Text>
        <Text
          onPress={() => { Linking.openURL(`${firstLinkURL}`) }}
          style={styles.link}
        >
          {firstLinkName}
        </Text>
        <Text
          onPress={() => { Linking.openURL(`${secondLinkURL}`) }}
          style={styles.link}
        >
          {secondLinkName}
        </Text>
      </ScrollView>
    );
  }

}

export default Answer;

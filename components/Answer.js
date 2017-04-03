import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
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
    }
  }

  render() {
    const { main, firstPoint, secondPoint, thirdPoint, fourthPoint, image } = this.state
    return (
      <View>
        <Text>{main}</Text>
        {firstPoint ? <Text>{firstPoint}</Text> : ''}
        {secondPoint ? <Text>{secondPoint}</Text> : ''}
        {thirdPoint ? <Text>{thirdPoint}</Text> : ''}
        {fourthPoint ? <Text>{fourthPoint}</Text> : ''}
      </View>
    );
  }

}

export default Answer;

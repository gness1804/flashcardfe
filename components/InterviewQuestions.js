import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import styles from '../styles/InterviewQuestions-Styles';

class InterviewQuestions extends Component {
  static navigationOptions = {
    title: 'Questions for Interviews',
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.sectionHeader}>General Questions:</Text>
        <Text style={styles.text}>
        What opportunities for mentorship are available at XYZ Company?</Text>
        <Text style={styles.text}>Which product/product line are you most proud of? Why?</Text>
        <Text style={styles.text}>What professional development opportunities
        are there in the company (things like conference funding, code retreats, etc)?</Text>
        <Text style={styles.text}>Where do you see the company in five years?</Text>

        <Text style={styles.sectionHeader}>Code Questions:</Text>
        <Text style={styles.text}>Do you test? If so, which framework(s) do you use?</Text>
        <Text style={styles.text}>
        Why are you using the framework/language/libraries that you use?</Text>
        <Text style={styles.text}>To your knowledge, what is one of the toughest
        technical problems that your company/unit has faced, and how have you overcome it?</Text>
        <Text style={styles.text}>
        Tell me a little about the linting and code best practices
        that your company employs.</Text>

        <Text style={styles.sectionHeader}>Agile/Teamwork:</Text>
        <Text style={styles.text}>
        How long is your sprint cycle, typically?</Text>
        <Text style={styles.text}>
        What tool(s) do you use for version control, and why?</Text>
        <Text style={styles.text}>
        What is your pull review process like?</Text>
        <Text style={styles.text}>
        Do your developers do most of their programming individually,
        in pairs, in larger teams, or in some other way?</Text>
        <Text style={styles.text}>
        (If remote) How often would I interact with colleagues?
        What forms would evaluations take?</Text>

        <Text style={styles.sectionHeader}>Other:</Text>
        <Text style={styles.text}>
        What do you see as the best aspect of working at XYZ Company?</Text>
        <Text style={styles.text}>
        (As appropriate) How does your company fit in with/contribute
        to the larger community?</Text>
      </ScrollView>
    );
  }

}

export default InterviewQuestions;

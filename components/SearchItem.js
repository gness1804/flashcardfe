import React from 'react';
import { View, Text, Linking } from 'react-native';
import styles from '../styles/SearchItem-styles';

const SearchItem = ({ ...props }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.question}>{props.question}</Text>
      <Text style={styles.text}>
        <Text style={styles.span}>
          The gist: &nbsp;
        </Text>
        {props.main}
      </Text>
      <Text style={styles.text}>
        {props.firstPoint}
      </Text>
      <Text style={styles.text}>
        {props.secondPoint}
      </Text>
      <Text style={styles.text}>
        {props.thirdPoint}
      </Text>
      <Text style={styles.text}>
        {props.fourthPoint}
      </Text>
      <Text style={styles.text}>
        {props.fifthPoint}
      </Text>
      <Text style={styles.text}>
        {props.sixthPoint}
      </Text>
      <Text
        onPress={() => { Linking.openURL(`${props.firstLinkURL}`) }}
        style={styles.link}
      >
        {props.firstLinkName}
      </Text>
      <Text
        onPress={() => { Linking.openURL(`${props.secondLinkURL}`) }}
        style={styles.link}
      >
        {props.secondLinkName}
      </Text>
    </View>
  );
}

export default SearchItem;

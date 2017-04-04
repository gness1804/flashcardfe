import React from 'react';
import { View, Text } from 'react-native';

const SearchItem = ({ ...props }) => {
  return (
    <View>
      <Text>{props.question}</Text>
    </View>
  );
}

export default SearchItem;

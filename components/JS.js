import React, { Component } from 'react';
import { View, Button } from 'react-native';
import styles from '../styles/JS-styles';

class JS extends Component {
  static navigationOptions = {
    title: 'JavaScript Questions',
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View>
        <View style={styles.topButton}>
          <Button
            title="Foundations"
            onPress={() => {
              navigate('FoundationsJS')
            }}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Intermediate"
            onPress={() => {
              navigate('IntermediateJS')
            }}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Advanced"
            onPress={() => {
              navigate('AdvancedJS')
            }}
          />
        </View>
      </View>
    );
  }

}

export default JS;

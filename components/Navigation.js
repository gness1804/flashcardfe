import React, { Component } from 'react';
import { Text, Navigator, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from "./HomeScreen";

const Navigation = StackNavigator({
  Home: { screen: HomeScreen },
});

export default Navigation;

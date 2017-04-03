import React, { Component } from 'react';
import { Text, Navigator, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from "./HomeScreen";
import HTML from "./HTML";

const Navigation = StackNavigator({
  Home: { screen: HomeScreen },
  HTML: { screen: HTML },
});

export default Navigation;

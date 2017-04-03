import React, { Component } from 'react';
import { Text, Navigator, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from "./HomeScreen";
import HTML from "./HTML";
import CSS from "./CSS";
import JS from "./JS";

const Navigation = StackNavigator({
  Home: { screen: HomeScreen },
  HTML: { screen: HTML },
  CSS: { screen: CSS },
  JS: { screen: JS },
});

export default Navigation;

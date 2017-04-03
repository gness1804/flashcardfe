import { StackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import HTML from './HTML';
import CSS from './CSS';
import JS from './JS';
import Accessibility from './Accessibility';

const Navigation = StackNavigator({
  Home: { screen: HomeScreen },
  HTML: { screen: HTML },
  CSS: { screen: CSS },
  JS: { screen: JS },
  Accessibility: { screen: Accessibility },
});

export default Navigation;

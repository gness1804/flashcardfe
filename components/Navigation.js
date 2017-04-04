import { StackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import HTML from './HTML';
import CSS from './CSS';
import JS from './JS';
import Accessibility from './Accessibility';
import Answer from './Answer';
import OtherHTML from './OtherHTML';
import BasicStuff from './BasicStuff';
import AdvancedStuff from './AdvancedStuff';
import Links from './Links';
import FoundationsJS from './FoundationsJS';
import IntermediateJS from './IntermediateJS';
import AdvancedJS from './AdvancedJS';

const Navigation = StackNavigator({
  Home: { screen: HomeScreen },
  HTML: { screen: HTML },
  CSS: { screen: CSS },
  JS: { screen: JS },
  Accessibility: { screen: Accessibility },
  Answer: { screen: Answer },
  OtherHTML: { screen: OtherHTML },
  BasicStuff: { screen: BasicStuff },
  AdvancedStuff: { screen: AdvancedStuff },
  Links: { screen: Links },
  FoundationsJS: { screen: FoundationsJS },
  IntermediateJS: { screen: IntermediateJS },
  AdvancedJS: { screen: AdvancedJS },
});

export default Navigation;

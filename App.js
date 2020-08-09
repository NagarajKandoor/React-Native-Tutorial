import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ImageScreen from "./src/screens/ImageScreen"
import ListScreen from "./src/screens/ListScreen"
import CounterScreen from "./src/screens/CounterScreen"
import ComponentScreen from "./src/screens/ComponentsScreen"

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    ImageScreen:ImageScreen,
    List:ListScreen,
    CounterScreen:CounterScreen,
    Components:ComponentScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);

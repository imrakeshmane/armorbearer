import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import AuthNavigation from './authNavigation';
import AppStack from './AppStack';
import Home from '../screens/home/home'
const SwitchNavigator = createSwitchNavigator(
  {


    //Mynew
    Auth: AuthNavigation,
    AppNav: AppStack,
    // Hotel: Hotel
    Home:Home
  },
  {
    initialRouteName: 'Auth'
  }
)

const AppContainer = createAppContainer(SwitchNavigator)

export default AppContainer
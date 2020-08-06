import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import AuthNavigation from './authNavigation';
import AppStack from './AppStack';

const SwitchNavigator = createSwitchNavigator(
  {


    //Mynew
    Auth: AuthNavigation,
    AppNav: AppStack,
    // Hotel: Hotel
  },
  {
    initialRouteName: 'Auth'
  }
)

const AppContainer = createAppContainer(SwitchNavigator)

export default AppContainer
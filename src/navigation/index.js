import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import AuthNavigation from './authNavigation';
import AppStack from './AppStack';
import Home from '../screens/home/home';
import Informmative from '../screens/home/informative';
import Drawer from './drawer/drawer';

const SwitchNavigator = createSwitchNavigator(
  {


    //Mynew
    Auth: AuthNavigation,
    AppNav: AppStack,
    Home:Home,
    Informmative:Informmative,
    Drawer:Drawer
  },
  {
    initialRouteName: 'Auth'
  }
)

const AppContainer = createAppContainer(SwitchNavigator)

export default AppContainer
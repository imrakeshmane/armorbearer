import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import AuthNavigation from './authNavigation';
import AppStack from './AppStack';
import Home from '../screens/home/home';
import Informmative from '../screens/home/informative';
import Drawer from './drawer/drawer';
import barbottomStack from './barbottomStack/bartableStack'
const SwitchNavigator = createSwitchNavigator(
  {


    //Mynew
    Auth: AuthNavigation,
    AppNav: barbottomStack,
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
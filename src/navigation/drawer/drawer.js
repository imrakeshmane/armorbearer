import { createDrawerNavigator } from 'react-navigation-drawer';
import Home from '../../screens/home/home';
import CustomDrawer from '../../components/customeDrower';
import appHomeNavigation from '../homeNavigation';
import BarNavigation from '../barNavigation'
const Drawer = createDrawerNavigator(
    {
        Home:Home,
        appHomeNavigation:BarNavigation
    },
    {
        initialRouteName: 'appHomeNavigation',
        contentComponent: CustomDrawer,
        drawerWidth: 300,
    }
);



export default Drawer;
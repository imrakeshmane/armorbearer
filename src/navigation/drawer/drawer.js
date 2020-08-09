import { createDrawerNavigator } from 'react-navigation-drawer';
import Home from '../../screens/home/home';
import CustomDrawer from '../../components/customeDrower';
import appHomeNavigation from '../homeNavigation'
const Drawer = createDrawerNavigator(
    {
        Home:Home,
        appHomeNavigation:appHomeNavigation
    },
    {
        initialRouteName: 'appHomeNavigation',
        contentComponent: CustomDrawer,
        drawerWidth: 300,
    }
);



export default Drawer;
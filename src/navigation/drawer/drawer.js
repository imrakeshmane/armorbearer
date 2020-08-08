import { createDrawerNavigator } from 'react-navigation-drawer';
import Home from '../../screens/home/home';
import CustomDrawer from '../../components/customeDrower';

const Drawer = createDrawerNavigator(
    {
        Home:Home
    },
    {
        initialRouteName: 'Home',
        contentComponent: CustomDrawer,
        drawerWidth: 300,
    }
);



export default Drawer;
import { createDrawerNavigator } from 'react-navigation-drawer';
import testStart from '../../screens/test/exam/exam';
import changeView from '../../screens/test/ataglanceView/ataglanceView';

import Query from '../../screens/query/Query';
// import AppNavigation from '../appNavigation';
import AppStack from '../AppStack';
import CustomDrawer from '../../component/CustomDrawer';
import report from '../../screens/test/detailedreport/report';

import NestedTabs from '../../navigation/nestedTab'

const Drawer = createDrawerNavigator(
    {
        App: AppStack,
        Query: Query,
        testStart: testStart,
        changeView: changeView,
        NestedTabs: NestedTabs,
        report:report

    },
    {
        initialRouteName: 'App',
        contentComponent: CustomDrawer,
        drawerWidth: 300,
    }
);



export default Drawer;
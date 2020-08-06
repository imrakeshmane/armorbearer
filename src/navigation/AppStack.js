import { createNavigator } from 'react-navigation';

import PostPostLoginAppContainer from './PostLoginAppContainer';
import BarNavigation from './barNavigation';
import HotelNavigation from './hotelNavigation';

const AppStack = createNavigator(PostPostLoginAppContainer, BarNavigation.router, {});

export default AppStack;
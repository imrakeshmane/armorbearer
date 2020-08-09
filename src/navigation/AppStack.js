import { createNavigator } from 'react-navigation';

import PostPostLoginAppContainer from './PostLoginAppContainer';
import HomeNavigation from './homeNavigation';

const AppStack = createNavigator(PostPostLoginAppContainer, HomeNavigation.router, {});

export default AppStack;
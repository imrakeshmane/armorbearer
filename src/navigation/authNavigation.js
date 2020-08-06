import { createStackNavigator } from 'react-navigation-stack';
import Login from '../screens/auth/login';
import Register from '../screens/auth/register'
import Starter from '../screens/auth/starter'


const AuthStack = createStackNavigator({

    Login:
    {
        screen: Login
    }, 
     Starter:
    {
        screen: Starter
    },
    Register:
    {
        screen: Register
    }

},
    {
        initialRouteName: 'Starter',
        headerMode: 'none'
    }

)
export default AuthStack;
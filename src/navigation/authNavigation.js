import { createStackNavigator } from 'react-navigation-stack';
import Login from '../screens/auth/login';
import Register from '../screens/auth/register'
import Starter from '../screens/auth/starter'
import Slider from '../screens/auth/slider';


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
    },
    Slider:{
        screen:Slider
    }

},
    {
        initialRouteName: 'Starter',
        headerMode: 'none'
    }

)
export default AuthStack;
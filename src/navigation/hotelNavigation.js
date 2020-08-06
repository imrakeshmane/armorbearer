
import { createStackNavigator } from 'react-navigation-stack';
import HotelScreen from '../screens/hotel/hotel_dashboard'

const HotelNavigation = createStackNavigator({

    Hotel:
    {
        screen: HotelScreen
    }

},
    {
        initialRouteName: 'Hotel',
        headerMode: 'none'
    }

)
export default HotelNavigation;







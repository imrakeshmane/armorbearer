
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home/home'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import React from 'react';
import { View, Text } from 'react-native';
import Stocks from '../screens/bar/stocks';;
import Inventry from '../screens/bar/inventry';
import Bils from '../screens/bar/bils';

import Icon from 'react-native-vector-icons/Ionicons';

// import Icon from 'react-native-vector-icons/Ionicons';

const appHomeNavigation = createBottomTabNavigator({

    Home:
    {
        screen: Home,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor, focused }) => (
                <View>
                    {/* <Icon name="ios-person" size={30} color="#4F8EF7" /> */}
                    <Icon name="home" size={30} color="white"  />
                </View>
            ),
        }
    },
    Stocks:
    {
        screen: Stocks,
        navigationOptions: {
            tabBarLabel: 'Explore',
            tabBarIcon: ({ tintColor, focused }) => (
                <View>
                                        <Icon name="search" size={30} color="white"  />

                </View>
            ),
        }
    },
    Inventry:
    {
        screen: Inventry,
        navigationOptions: {
            tabBarLabel: 'Books',
            tabBarIcon: ({ tintColor, focused }) => (
                <View>
                                      <Icon name="book" size={30} color="white"  />

                </View>
            ),
        }
    },
    Bilss:
    {
        screen: Bils,
        navigationOptions: {
            tabBarLabel: 'Account',
            tabBarIcon: ({ tintColor, focused }) => (
                <View>
                                        <Icon name="people" size={30} color="white"  />

                </View>
            ),


        }
    },

},
    {
        tabBarOptions: {
            activeTintColor: 'white',
            // activeBackgroundColor: '#5abd8c',
            inactiveTintColor: '#5abd8c',
            
            style: {
                borderWidth: 0,
                borderTopWidth: 0,
                borderBottomWidth: 0,
                // margin: 2,
                borderTopEndRadius: 20,
                borderTopStartRadius: 20,
                // paddingTop: 5,
                height: 50,
                shadowOffset: {
                    width: 0,
                    height: 0,
                },
                shadowOpacity: 0.5,
                shadowRadius: 5,
                elevation: 2,
                ...Platform.select({
                    android: {
                        backgroundColor: '#5abd8c',
                        paddingTop: 5
                    },
                })
            },
            labelStyle: {
                fontSize: 12,

            },
        }

    },
    {
        initialRouteName: 'Home',
        // headerMode: ''
    }


)
export default appHomeNavigation;





















// import React from 'react';
// import { Image } from 'react-native';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
// import Bar from '../screens/bar/bar_dashboard'

// const AppNavigation = createBottomTabNavigator(
// 	{
// 		Bar:
// 		{
// 			screen: Bar,
// 			navigationOptions: {
// 				tabBarLabel: 'Learning',
// 				tabBarIcon: ({ tintColor, focused }) => (
// 					// <Icon name='terminal' size={25} color={Colors.white} />
// 					// <Image
// 					// 	source={require('../assets/TabBarIcon/Learning_96px.png')}
// 					// 	style={{ width: 45, height: '90%', }}
// 					// />
// 				),

// 			}
// 		},
// 	},

// 	{
// 		defaultNavigationOptions: ({ navigation }) => ({
// 			tabBarOnPress: ({ navigation, defaultHandler }) => {
// 				if (navigation.state.routeName === "Feeds") {
// 					return null;
// 				}
// 				defaultHandler();
// 			},
// 		}),

// 		tabBarOptions: {
// 			activeTintColor: 'red',
// 			activeBackgroundColor: '#ccebff',
// 			inactiveTintColor: 'grren',
// 			// tabStyle:{
// 			// 	backgroundColor:
// 			// }
// 			// activeBackgroundColor: '#e1e1e1',
// 			style: {
// 				borderWidth: 0,
// 				borderTopWidth: 0,
// 				borderBottomWidth: 0,
// 				// margin: 2,
// 				borderTopEndRadius: 20,
// 				borderTopStartRadius: 20,
// 				// paddingTop: 5,
// 				height: 70,
// 				shadowOffset: {
// 					width: 0,
// 					height: 0,
// 				},
// 				shadowOpacity: 0.5,
// 				shadowRadius: 5,
// 				elevation: 2,
// 				...Platform.select({
// 					android: {
// 						backgroundColor: 'Transparent',
// 						paddingTop: 5
// 					},
// 				})
// 			},
// 			labelStyle: {
// 				// color: assets.colors.tabTextColor,
// 				// color: Colors.skyColor,
// 				fontSize: 12,

// 			},
// 		}

// 	}
// );




// export default AppNavigation;
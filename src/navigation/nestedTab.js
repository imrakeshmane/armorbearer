import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import RelatedVideoStack from '../navigation/nestedTabsbottom/relatedVideosStack';
import QuizStack from '../navigation/nestedTabsbottom/quizStack';
import FAQStack from '../navigation/nestedTabsbottom/faqStack';

import color from '../utils/colors';
import Icon from 'react-native-vector-icons/Octicons';
import DOCStack from './nestedTabsbottom/docStack';


const NestedTabs = createBottomTabNavigator(
    {
        Test: {
            screen: RelatedVideoStack,
            navigationOptions: {
                tabBarLabel: 'Related Videos',
                tabBarIcon: ({ tintColor }) => (
                    <Icon name='play' size={25} color='white' />
                )
            }
        },
        Quiz: {
            screen: QuizStack,
            navigationOptions: {
                tabBarLabel: 'Quiz',
                tabBarIcon: ({ tintColor }) => (
                    <Icon name='book' size={25} color='white' />
                )
            }
        },
        Doc: {
            screen: DOCStack,
            navigationOptions: {
                tabBarLabel: 'Doc',
                tabBarIcon: ({ tintColor }) => (
                    <Icon name='file' size={25} color='white' />
                )
            }
        },
        FAQ: {
            screen: FAQStack,
            navigationOptions: {
                tabBarLabel: 'FAQ',
                tabBarIcon: ({ tintColor }) => (
                    <Icon name='italic' size={25} color='white' />
                )
            }

        },
    }, {

    tabBarOptions: {
        activeTintColor: '#e91e63',
        activeTintBorderTop: 'red',
        style: {
            backgroundColor: 'red',
            height: 50
        },
        labelStyle: {
            color: color.whiteColor,
            fontSize: 12,

        },
        tabBarSelectedItemStyle: {
            borderTopColor: "red",
            borderTopWidth: 5
        },

    }

}
);



export default NestedTabs;
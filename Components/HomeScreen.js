/**
 * @Author: wangkongfei
 * @Date:   2017-07-29T17:27:43+08:00
 * @Last modified by:   wangkongfei
 * @Last modified time: 2017-07-29T17:44:50+08:00
 */

 import React, { Component } from 'react';
 import {
   AppRegistry,
   StyleSheet,
   Text,
   View
 } from 'react-native';

 import { StackNavigator,TabNavigator } from 'react-navigation';

 import  HomeTab from './HomeTab';
 import  SecondTab from './SecondTab';
 import  SelfInfoTab from './SelfInfoTab';

// export default class HomeScreen extends Component {
//     render() {
//         return (
//             <HomeTab/>
//         );
//     }
// }

export  default  TabNavigator({
    Home:{screen:HomeTab},
    Second:{screen:SecondTab},
    SelfInfo:{screen:SelfInfoTab},
});

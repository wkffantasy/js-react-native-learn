/**
 * @Author: wangkongfei
 * @Date:   2017-07-29T17:27:43+08:00
 * @Last modified by:   wangkongfei
 * @Last modified time: 2017-07-31T21:32:10+08:00
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

 import TabBarItem from '../Common/TabBarItem';

export  default  TabNavigator({
    Home:{
      screen:HomeTab,
      navigationOptions:({navigation}) => ({
        tabBarLabel:'首页',
        tabBarIcon:({focused,tintColor}) => (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            normalImage={require('../Images/message_notificationNomal.png')}
            selectedImage={require('../Images/message_notificationSeleted.png')}
          />
        )
      }),
    },
    Second:{
      screen:SecondTab,
      navigationOptions:({navigation}) => ({
        tabBarLabel:'第二个',
        tabBarIcon:({focused,tintColor}) => (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            normalImage={require('../Images/message_responseNormal.png')}
            selectedImage={require('../Images/message_responseSelected.png')}
          />
        )
      }),
    },
    SelfInfo:{
      screen:SelfInfoTab,
      navigationOptions:({navigation}) => ({
        tabBarLabel:'我的',
        tabBarIcon:({focused,tintColor}) => (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            normalImage={require('../Images/message_zanNormal.png')}
            selectedImage={require('../Images/message_zanSelected.png')}
          />
        )
      }),
    },
});

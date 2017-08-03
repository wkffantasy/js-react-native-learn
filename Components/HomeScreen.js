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
},{
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
  //// tabBar 显示的位置 ，android 默认是显示在页面顶端的
  tabBarPosition: 'bottom',
  animationEnabled:false, // 切换页面时是否有动画效果
  swipeEnabled: true, // 是否可以左右滑动切换tab 如果设置这个属性，这事例中下面设置的按钮 Go back home | Go to notifications就不好使了
  backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
  //第一次加载时，显示的tab
  tabBarOptions: {
          activeTintColor: 'rgb(78,187,251)', // 文字和图片选中颜色
          inactiveTintColor: '#999', // 文字和图片未选中颜色
          showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
          showLabel: true, // android 是否展现文字 默认 true
          upperCaseLabel : false, //android 文字是否需要大写 默认true
          pressColor : 'blue', // android 按压时显示的颜色
          scrollEnabled : false,
          indicatorStyle: {
              height: 2  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
          },
          style: {
              backgroundColor: 'white', // TabBar 背景色
          },
          labelStyle: {
              fontSize: 12, // 文字大小
              paddingTop:0,
              marginTop:0,
          },
          tabStyle:{
              marginTop:10,
              height: 50,
          },
  },
}
);

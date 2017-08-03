/**
 * @Author: wangkongfei
 * @Date:   2017-07-29T17:53:46+08:00
 * @Last modified by:   wangkongfei
 * @Last modified time: 2017-07-29T19:37:47+08:00
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import HomeScreen from './Components/HomeScreen';

class kfProject extends Component {
  
  render() {
    return (
        <HomeScreen/>
    );
  }
}

AppRegistry.registerComponent('kfProject', () => kfProject);

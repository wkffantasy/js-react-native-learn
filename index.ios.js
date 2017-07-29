/**
 * @Author: wangkongfei
 * @Date:   2017-07-29T17:53:46+08:00
 * @Last modified by:   wangkongfei
 * @Last modified time: 2017-07-29T19:37:47+08:00
 */



/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import HomeScreen from './Components/HomeScreen';

export default class kfProject extends Component {
  render() {
    return (
        <HomeScreen/>
    );
  }
}


AppRegistry.registerComponent('kfProject', () => kfProject);

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


export default class Test1Component extends Component {
    static navigationOptions = {
        title:'test1',
    };
    render() {
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text >test1</Text>
            </View>
        );
    }
}


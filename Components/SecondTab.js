/**
 * @Author: wangkongfei
 * @Date:   2017-07-29T17:27:43+08:00
 * @Last modified by:   wangkongfei
 * @Last modified time: 2017-07-31T22:06:18+08:00
 */

import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';

export default class SecondTab extends Component {
    static navigationOptions = {
        title:'Second',
    };
    render() {
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text >secondTab</Text>
            </View>
        );
    }
}

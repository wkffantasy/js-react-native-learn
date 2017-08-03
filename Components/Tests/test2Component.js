/**
 * @Author: wangkongfei
 * @Date:   2017-07-29T17:27:43+08:00
 * @Last modified by:   wangkongfei
 * @Last modified time: 2017-07-29T17:44:50+08:00
 */

import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';

export default class Test2Component extends Component {
    static navigationOptions = {
        title:'test2',
    };
    render() {
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text >test2</Text>
            </View>
        );
    }
}

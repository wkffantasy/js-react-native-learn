/**
 * @Author: wangkongfei
 * @Date:   2017-07-29T17:27:43+08:00
 * @Last modified by:   wangkongfei
 * @Last modified time: 2017-07-31T22:06:28+08:00
 */

import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';

export default class SelfInfoTab extends Component {
    static navigationOptions = {
        title:'SelfInfo',
    };
    _jumpToTest2(){
      const { navigate } = this.props.navigation;
      navigate('Test2');
    }
    render() {
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text >SelfInfoTab</Text>
                <Text
                  style={{margin:10,fontSize:20}}
                  onPress={()=>{this._jumpToTest2()}}
                >
                  {'click this to jump'}
                </Text>
            </View>
        );
    }
}

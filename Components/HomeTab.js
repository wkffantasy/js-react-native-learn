/**
 * @Author: wangkongfei
 * @Date:   2017-07-29T17:27:43+08:00
 * @Last modified by:   wangkongfei
 * @Last modified time: 2017-07-31T22:02:28+08:00
 */

import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';

export default class HomeTab extends Component {
    static navigationOptions = {
        title:'Home',
    };
    _jumpToTest1(){
      const { navigate } = this.props.navigation;
      navigate('Test1',{name:'fantasy'});
    }
    render() {
        return (
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Text >{'HomeTab'}</Text>
                <Text
                  style={{margin:10,fontSize:20}}
                  onPress={()=>{this._jumpToTest1()}}
                >
                  {'click this to jump'}
                </Text>
            </View>
        );
    }
}

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

export default class Test1Component extends Component {
    static navigationOptions = {
        title:'test1',
    };
    render() {
      const { params } = this.props.navigation.state;
      const { navigate } = this.props.navigation;
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'red'}}>
                <Text >test1</Text>
                <Text style={{margin:20,color:'yellow',fontSize:22}}>
                 {`${params.name}`}
                 </Text>
            </View>
        );
    }
}

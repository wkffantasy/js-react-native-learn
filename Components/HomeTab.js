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

class HomeTab extends Component {
    static navigationOptions = {
        title:'Home',
    };
    render() {
        return (
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Text >{'HomeTab'}</Text>
            </View>
        );
    }
}
export default StackNavigator({
    Home: { screen: HomeTab },
});

// export default class HomeTab extends Component {
//     static navigationOptions = {
//         title:'Home',
//     };
//     render() {
//         return (
//             <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#F5FCFF'}}>
//                 <Text >{'HomeTab'}</Text>
//             </View>
//         );
//     }
// }




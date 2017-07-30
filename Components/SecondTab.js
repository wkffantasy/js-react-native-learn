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

// class SecondTab extends Component {
//     static navigationOptions = {
//         title:'Second',
//     };
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text >secondTab</Text>
//             </View>
//         );
//     }
// }
// export default StackNavigator({
//     Home: { screen: SecondTab },
// });

/*
*
*
*
*
*
* */


export default class SecondTab extends Component {
    static navigationOptions = {
        title:'Second',
    };
    render() {
        return (
            <View style={styles.container}>
                <Text >secondTab</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

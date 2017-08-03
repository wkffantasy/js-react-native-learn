

import React,{Component} from 'react';
import {Image} from 'react-native';

const tabbarImageWH = 25;

export default class TabBarItem extends Component {
  render (){
    return(
      <Image
       source={this.props.focused ? this.props.selectedImage:this.props.normalImage}
       style={{tintColor:this.props.tintColor,width:tabbarImageWH,height:tabbarImageWH}}
      />
    )
  }
}

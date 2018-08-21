import React,{Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';

export default class App extends Component {
 render() {
   return <TouchableOpacity onPress={()=>this.props.navigation.navigate('Trending',{age:29})}>
       <Text>Go to Trending</Text>
     </TouchableOpacity>;
 }
}
import React,{Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';

export default class App extends Component {
 /*componentDidMount(){
alert(this.props.navigation.state.params.age)
 }*/
 render() {
   /*return <TouchableOpacity  onPress={()=>this.props.navigation.goBack()}>
       <Text>Go to Screen 1</Text>
     </TouchableOpacity>;*/

     return <TouchableOpacity onPress={()=>this.props.navigation.navigate('CommentPage',{age:29})}>
       <Text>Go to Comment Page</Text>
     </TouchableOpacity>;
 }
}

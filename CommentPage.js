import React,{Component} from 'react';
import {Text, TouchableOpacity, View, TextInput, Keyboard} from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  componentDidMount () {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow () {
    //alert('Keyboard Shown');
  }

  _keyboardDidHide () {
    //alert('Keyboard Hidden');
  }
 
  render() {
   
    return ( /*<TouchableOpacity onPress={()=>this.props.navigation.navigate('Trending',{age:29})}>
        <Text>Go to Trending</Text>
  </TouchableOpacity>*/
      <View style={{padding: 10}}>
        
        <TextInput
          style={{height: 40}}
          placeholder="Add Complaint"
          onChangeText={(text) => this.setState({text})}
        />

        <TouchableOpacity style={{backgroundColor:'green'}} onPress={()=>this.props.navigation.navigate('Home',{age:29})}>
        <Text>POST</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'red'}} onPress={()=>this.props.navigation.navigate('Home',{age:29})}>
        <Text>CANCEL</Text>
        </TouchableOpacity>

  </View>);
 }
}
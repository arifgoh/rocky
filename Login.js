import React,{Component} from 'react';
import {Text, TouchableOpacity, View, TextInput} from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {username: '',
    password: '',
    };
  }


  render() {
    return (<View>
        <View>
          <Text>ROCKY</Text>
          <Text>username:</Text>
          <TextInput
          style={{height: 40, backgroundColor: 'yellow'}}
          placeholder="enter username"
          onChangeText={(username) => this.setState({username})}
          />
          <Text>password:</Text>
          <TextInput
          secureTextEntry={true}
          style={{height: 40, backgroundColor: 'yellow'}}
          placeholder="enter password"
          onChangeText={(password) => this.setState({password})}
          />
        </View>
        <TouchableOpacity style={{backgroundColor:'green'}} onPress={()=>this.props.navigation.navigate('Home',{age:29})}>
        <Text>Login</Text>
        </TouchableOpacity>
        
    </View>);
  }
}

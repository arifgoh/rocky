import React, {Component} from 'react';
import {View} from 'react-native';
import RouteBeforeLogin from './routeBeforeLogin'

export default class App extends Component {
 render() {
   return (
     <View style={{flex:1}}>
       <RouteBeforeLogin/>
     </View>
   );
 }
}

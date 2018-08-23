import React,{Component} from 'react';
import {Text, TouchableOpacity, View, FlatList} from 'react-native';


const data = [
  {key:1,sender:'Fattah',receiver:'Myself',message:'Hi welcome to my class'},
  {key:2,sender:'Ali',receiver:'Myself',message:'Yeah'},
  {key:3,sender:'John',receiver:'Myself',message:'abc'},
  {key:4,sender:'Abu',receiver:'Myself',message:'bla bla'},
]

// const database = [
//   {username:'Fattah', date:'21/8/2018', complain:'Hi welcome to my class', noupvote:'3',nodownvote:'2',nocomment:'0'},
//   {username:'Fattah', date:'21/8/2018', complain:'Hi welcome to my class', noupvote:'3',nodownvote:'2',nocomment:'0'},
//   {username:'Fattah', date:'21/8/2018', complain:'Hi welcome to my class', noupvote:'3',nodownvote:'2',nocomment:'0'},
//   {username:'Fattah', date:'21/8/2018', complain:'Hi welcome to my class', noupvote:'3',nodownvote:'2',nocomment:'0'},
//   ]

export default class App extends Component {
 /*componentDidMount(){
alert(this.props.navigation.state.params.age)
 }*/

 keyExtractor = item => item.sender.toString();
 renderItem = ({item}) => 
        // (<View style={{backgroundColor:'red',margin:10,height:3}}>
        <Text>{item.key}</Text>
          //{/* <Text>From {item.sender}</Text>
          //<Text>To {item.receiver}</Text>
          //<Text>Message : {item.message}</Text> */}
        // </View>);

//  renderRow = item => 
//         (<View style={{backgroundColor:'green',margin:10}}>
//         <Text>gggggg</Text>
//           <Text>username: {item.username}</Text>
//           <Text>date: {item.date}</Text>
//           <Text>complain: {item.complain}</Text>
//           <Text>no upvote: {item.noupvote}</Text>
//           <Text>no downvote: {item.nodownvote}</Text>
//           <Text>no comments: {item.nocomment}</Text>
//         </View>);

 render() {
   /*return <TouchableOpacity  onPress={()=>this.props.navigation.goBack()}>
       <Text>Go to Screen 1</Text>
     </TouchableOpacity>;*/

     return (
      <View>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('CommentPage',{age:29})}>
          <Text>Go to Komen Page</Text>
        </TouchableOpacity>
        {/* <View style={{flex:1,paddingTop:100}}>
            <Text>What is wrong?</Text>
            <FlatList
              data={database}
              renderItem={this.renderRow}
            />
        </View> */}

        <View style={{flex:1,paddingTop:100}}>
            <Text>What is wrong?</Text>
            <FlatList
              data={data}
              renderItem={this.renderItem}
              keyExtractor={this.keyExtractor}
            />
        </View>

     </View>);
 }
}

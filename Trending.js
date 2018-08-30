import React,{Component} from 'react';
import {Text, TouchableOpacity, View, FlatList, Image} from 'react-native';

const database = [
  {image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPSmB_7wJ_ypq2On_VNrLIeEAz5hnd7fKKtXhzhmpuys8ZAt6y',username:'Fattah', date:'21/8/2018', complain:'Hi welcome to my class', noupvote:'3',nodownvote:'2',nocomment:'0'},
  {image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPSmB_7wJ_ypq2On_VNrLIeEAz5hnd7fKKtXhzhmpuys8ZAt6y',username:'Fattah', date:'21/8/2018', complain:'Hi welcome to my class', noupvote:'3',nodownvote:'2',nocomment:'0'},
  {image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPSmB_7wJ_ypq2On_VNrLIeEAz5hnd7fKKtXhzhmpuys8ZAt6y',username:'Fattah', date:'21/8/2018', complain:'Hi welcome to my class', noupvote:'3',nodownvote:'2',nocomment:'0'},
  {image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPSmB_7wJ_ypq2On_VNrLIeEAz5hnd7fKKtXhzhmpuys8ZAt6y',username:'Fattah', date:'21/8/2018', complain:'Hi welcome to my class', noupvote:'3',nodownvote:'2',nocomment:'0'},
  {image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbvZyVHr1TH8UwBthEZBW8UPEPByqTp_fI8nDCU_VacMTpICWV',username:'Fiqri', date:'21/8/2018', complain:'I hate this class', noupvote:'100',nodownvote:'2',nocomment:'0'},
  ]

export default class App extends Component {

    renderRow = ({item}) => 
      (<View style={{backgroundColor:'green',margin:10}}>
              <Image source={{uri:item.image}} style={{width:100,height:100,borderRadius:100}}/>
              <Text>username: {item.username}</Text>
              <Text>date: {item.date}</Text>
              <Text>complain: {item.complain}</Text>
              <Text>no upvote: {item.noupvote}</Text>
              <Text>no downvote: {item.nodownvote}</Text>
              <Text>no comments: {item.nocomment}</Text>
      </View>);



 render() {
   return (

    <View style={{flex:1}}>

      <View style={{flex:3, paddingTop:50}}>
        <FlatList
          data={database}
          renderItem={this.renderRow}
        />
      </View>

      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
        <TouchableOpacity style={{width: 100, height: 100, backgroundColor: 'blue'}} onPress={()=>this.props.navigation.navigate('Home',{age:29})}>
          <Text>HOME</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width: 100, height: 100, backgroundColor: 'red'}} onPress={()=>this.props.navigation.navigate('CommentPage',{age:29})}>
          <Text>ADD COMPLAIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width: 100, height: 100, backgroundColor: 'yellow'}} onPress={()=>this.props.navigation.navigate('Trending',{age:29})}>
          <Text>TRENDING</Text>
        </TouchableOpacity>
      </View> 
   
   </View>);
 }
}
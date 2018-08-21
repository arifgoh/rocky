import { createStackNavigator } from 'react-navigation';
import Login from './Login'
import Home from './Home'
import CommentPage from './CommentPage'
import Trending from './Trending'
import Profile from './Profile'
import DetailComplain from './DetailComplain'

export default createStackNavigator({
 Login: {screen: Login,navigationOptions:{title:'Login'}},
 Home: {screen: Home,navigationOptions:{title:'Home'}},
 CommentPage: {screen: CommentPage,navigationOptions:{title:'Comment'}},
 Trending: {screen: Trending,navigationOptions:{title:'Trending'}},
 Profile: {screen: Profile,navigationOptions:{title:'Profile'}},
 DetailComplain: {screen: DetailComplain,navigationOptions:{title:'DetailComplains'}},
});

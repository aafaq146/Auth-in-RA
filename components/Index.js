import React ,{Component} from 'react';
import{Text,View,Button} from 'react-native';
import  firebase from "firebase";
import LoginForm from './LoginForm';
import Header  from './common/Header';
import Spinner from './common/Spinner';

class Index extends Component{

   componentWillMount(){
       state={loggedIn:null}
     if (!firebase.apps.length){
        firebase.initializeApp({
            
            apiKey: "AIzaSyBeBmqHe2eUCwFnD3dEjF7aLhhC7bKmCyk",
            authDomain: "authentication-ed6d1.firebaseapp.com",
            databaseURL: "https://authentication-ed6d1.firebaseio.com",
            projectId: "authentication-ed6d1",
            storageBucket: "authentication-ed6d1.appspot.com",
            messagingSenderId: "42265159648",
            appId: "1:42265159648:web:bbcadda054c8014d8bad85",
            measurementId: "G-KWM5XKWQY9"

    });
    firebase.auth().onAuthStateChanged((user)=>{
         if(user){
             this.setState({loggedIn:true});
         }else{
             this.setState({loggedIn:false});
         }
    });
  }
}
renderContent(){
    switch(this.state.loggedIn){
        case true:
       return( 
       <Button onPress={()=>firebase.auth().signOut()}>
          Log Out
       </Button>
       );
        case false:
         <LoginForm/>;
        default:
          <Spinner size="large"/>;
    }
}
    render(){
        return(
            <View>
            <Header headerText="Authentication"/>
            {this.renderContent()}
            </View>
        );
    }
}
export default Index;
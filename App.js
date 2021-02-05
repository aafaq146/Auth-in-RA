import React ,{Component} from 'react';
import {Text,View} from 'react-native';
import Index from './components/Index';

class App extends  Component{
   render(){
  return(
    <View style={{flex:1}}>
    <Index />
    </View>
  );
   }
}
export default App;



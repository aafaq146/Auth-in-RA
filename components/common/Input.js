import React from 'react';
import {TextInput,Text,View} from 'react-native';

const Input=(props)=>{
  return(
    <View style={Styles.containerStyle}>
     <Text style={Styles.labelStyle}>{props.label}</Text>
     <TextInput
     secureTextEntry={props.secureTextEntry}
     placeholder={props.placeholder}
     autoCorrect={false}
     style={Styles.inputStyle}
     value={props.value}
     onChangeText={props.onChangeText}
     />
    </View>
  );
};
const Styles={ 
  containerStyle :{
    height:40,
    flex:1,
    flexDirection:'row',
    alignItems:'center'
  },
  inputStyle:{
    color:'#000',
    paddingLeft:5,
    paddingRight:5,
    flex:2,
    fontSize:18,
    lineHeight:23
  },
  labelStyle:{
    flex:1,
    fontSize:18,
    paddingLeft:20

  }
}
export default Input;
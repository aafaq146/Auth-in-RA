import React from 'react';
import {Text,View,ActivityIndicator} from 'react-native';

const Spinner=(props)=>{
    return(
        <View style={Styles.spinnerStyle}> 
            <ActivityIndicator size={props.size|| 'large'} />
        </View>
    );
};

const Styles={
    spinnerStyle:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
}

export default Spinner;

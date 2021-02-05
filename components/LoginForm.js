import React,{Component} from 'react';
import {Text,TextInput} from 'react-native';
import firebase from 'firebase';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Button from './common/Button';
import Input from './common/Input';
import Spinner from './common/Spinner';

class LoginForm extends Component{
  state= {email:'',password: '',error:'', loading: false};
  onButtonPress(){
    this.setState({error:'',loading: true});
    const {email,password}=this.state;
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(this.onLoginSuccess.bind(this))
    .catch(()=>{
          firebase.auth().createUserWithEmailAndPassword(email,password)
          .catch(this.onLoginFailed.bind(this));
    });
  }
  onLoginFailed(){
    this.setState({
      error:'Authentiation Failed',
      loading:false
    }
    );
  }
  onLoginSuccess(){
    this.setState({
      email:'',
      password:'',
      loading:false,
      error:''
    }
    );

  }
  renderButton(){
    if(this.returnSpinner.loading){
      return <Spinner size="large"/>;
    }

    return(
      <Button onPress={this.onButtonPress()}>
                    Login
                </Button>

    );
  }
    render(){
        return(
            <Card>
            <CardSection>
            <Input 
            placeholder="user@gmail.com"
            label="Email:"
            value={this.state.email}
            onChangeText={email=> this.setState({email})}
            />
            </CardSection>
            <Text>
              {this.state.error}
            </Text>
            <CardSection>
             <Input
            secureTextEntry
            placeholder="password"
            label="Passw:"
            value={this.state.password}
            onChangeText={password=> this.setState({password})}
            />
            </CardSection>
            <CardSection>
                {this.renderButton()}
            </CardSection>

            </Card>
    
        );

    }
}
const Styles={
  errorTextStyle:{
    fontSize:20,
    alignSelf:'center',
    color:'red'
  }
}
export default LoginForm;
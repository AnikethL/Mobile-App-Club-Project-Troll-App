import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  useWindowDimensions,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert
} 
from 'react-native';
import { AuthInputs } from './AuthInputs';
import { Buttons } from './buttons';
import { useNavigation } from '@react-navigation/native';
import {SocialSignIn} from './SocialSignin';
//new imports
import { KeyboardAvoidingView } from 'react-native'

export function SignIn() {
  const [password, setPassword] = useState('');
  const { height } = useWindowDimensions();
  const navigator=useNavigation()

  const onSignIn = () => {

    navigator.navigate('Main')
  };
  const onForgot = () => {

    navigator.navigate('ResetPassword')
  };
  
  const onSignUp = () => {
    navigator.navigate('SignUp')
  };
  const onContinueWithoutSignIn = () => {
    alert("make an account bozo")
    navigator.navigate('Main')
  };
  
  const createTwoButtonAlert = () =>{
    Alert.alert(
      "You're lacking LBOZO",
      "You typed your password or username wrong",
      [
        
        { text: "OK"}
      ]
      
    );
  }
  // new stuff
  

  const [email, setEmail] = useState('')
  const handleLogin = () => {
    if(email=="123" && password=="123"){
      onSignIn()   
    }
    else{
      createTwoButtonAlert()
    }
  }

  

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          style={[styles.logo, { height: height * 2 }]}
          source={{
            uri: 'https://img.freepik.com/free-vector/hand-drawn-flat-design-bookstore-logo-template_23-2149337115.jpg?w=2000',
          }}
          resizeMode="contain"
        />
        <AuthInputs
          placeholder="Email"
          value={email}
          setValue={setEmail}
        />
        <AuthInputs
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <Buttons text="Sign In" onPress={handleLogin} />
        <SocialSignIn />
        <Buttons text="Continue without signing in" onPress={onContinueWithoutSignIn} type="TERETIARY" />
      </View>
    </ScrollView>
  );
    
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 80,
    backgroundColor: '#F9FBFC',
  },
  logo: {
    width: '70%',
    maxHeight: 200,
    maxWidth: 300,
  },
  
});

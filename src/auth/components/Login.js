//Social Login component
import React, { Component } from 'react';
import {
    View
} from 'react-native'
import firebase from 'react-native-firebase';
const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
  AccessToken,
  LoginManager
} = FBSDK;
 const ref = firebase.firestore().collection('users');

const Login = (props) => {
   
    console.log(ref)
    return(
        <View style={{margin: 80}}>
            <LoginButton
                publishPermissions={["publish_actions"]}
                onLoginFinished={() =>
                    onLoginOrRegister(props)
                }
                onLogoutFinished={() => {}}
            />
        </View>
    )
        
}

onLoginOrRegister = (props) => {
  LoginManager.logInWithReadPermissions(['public_profile', 'email'])
    .then((result) => {
      if (result.isCancelled) {
        return Promise.reject(new Error('The user cancelled the request'));
      }
      // Retrieve the access token
      return AccessToken.getCurrentAccessToken();
    })
    .then((data) => {
      const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
      // Login with the credential
      return firebase.auth().signInAndRetrieveDataWithCredential(credential);
    })
    .then((user) => {
      
      let ifPresent = ref.where('user_name', '==', user.user._user.providerData[0].displayName)
      if(!ifPresent) {
         ref.add({
          user_name: user.user._user.providerData[0].displayName,
          email: user.user._user.providerData[0].email,
          provider_id: user.user._user.providerData[0].providerId
        })
      }
      props.navigation.navigate('Entry', {name: user.user._user.providerData[0].displayName})


        
    })
    .catch((error) => {
      const { code, message } = error;
      console.log(error)
      // For details of error codes, see the docs
      // The message contains the default Firebase string
      // representation of the error
    });
}

export default Login
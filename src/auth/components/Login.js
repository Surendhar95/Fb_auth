//Social Login component
import React, { Component } from 'react';
import {
    View
} from 'react-native'
//import firebase from 'react-native-firebase';
const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
  AccessToken,
  LoginManager
} = FBSDK;


const Login = () => {

    return(
        <View>
            <LoginButton
                publishPermissions={["publish_actions"]}
                onLoginFinished={
                    this.onLoginOrRegister
                }
                onLogoutFinished={() => alert("logout.")}
            />
        </View>
    )
        
}

onLoginOrRegister = () => {
  LoginManager.logInWithReadPermissions(['public_profile', 'email'])
    .then((result) => {
      if (result.isCancelled) {
        return Promise.reject(new Error('The user cancelled the request'));
      }
      // Retrieve the access token
      return AccessToken.getCurrentAccessToken();
    })
    .then((data) => {
      // Create a new Firebase credential with the token
      const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
      // Login with the credential
      return firebase.auth().signInWithCredential(credential);
    })
    .then((user) => {
      // If you need to do anything with the user, do it here
      // The user will be logged in automatically by the
      // `onAuthStateChanged` listener we set up in App.js earlier
    })
    .catch((error) => {
      const { code, message } = error;
      // For details of error codes, see the docs
      // The message contains the default Firebase string
      // representation of the error
    });
}

export default Login
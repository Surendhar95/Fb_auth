import React, { Component } from 'react';
import {View} from 'react-native';
import Login from './components/Login'

class Auth extends Component {

	// componentDidMount() {
	//     this.authSubscription = firebase.auth().onAuthStateChanged((user) => console.log(user));
	// }
  // *
  //  * Don't forget to stop listening for authentication state changes
  //  * when the component unmounts.
   
	// componentWillUnmount() {
	//     this.authSubscription();
	// }
    render(){
        return (
            <View>
                <Login 
                  navigation = {this.props.navigation}
                />
            </View>
        )
    }
}

export default Auth
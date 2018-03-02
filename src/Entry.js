import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native'

class Entry extends Component {
	render() {
		return (
			<View style={{margin: 80}}>
				<Text>{`Welcome ${this.props.navigation.state.params.name}!`}</Text>
			</View>
		)
	}
	
}

export default Entry
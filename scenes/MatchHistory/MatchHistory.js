import React, { Component } from 'react';
import { View, Button } from 'react-native';
 export default class MatchHistory extends Component {
 	_NavigateToChampion() {
 		return false;
 	}

  	render() {
	    return (
	    	<View style={{flex: 1, backgroundColor: '#000'}}>
	     		<Button onPress={this._NavigateToChampion}
	  					title="Navigate to Champ"
	  					color="#FFF"
	  			/>
	     	</View>

	    );
  	}
}
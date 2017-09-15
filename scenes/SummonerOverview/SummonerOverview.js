import React, { Component } from 'react';
import { View, Button } from 'react-native';
 export default class SummonerOverview extends Component {
 	_NavigateToChampion() {
 		return false;
 	}

  	render() {
	    return (
	    	<View style={{flex: 1, backgroundColor: '#82ABC2'}}>
	     		<Button onPress={this._NavigateToChampion}
	  					title="Navigate to Champ"
	  					color="#841584"
	  			/>
	     	</View>

	    );
  	}
}
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import configs from './configs';
export default class SummonerSearch extends Component {

	static navigationOptions = configs.navigationOptions;

  	render() {
	    return (
	    	<View>
	     		<Text>SummonerSearch</Text>
	     	</View>
	    );
  	}
}

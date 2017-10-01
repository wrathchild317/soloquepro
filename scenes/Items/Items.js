import React, { Component } from 'react';
import { Text, View, Button, Picker } from 'react-native';
import configs from './configs';
import styles from './styles';

export default class Items extends Component {

	static navigationOptions = configs.navigationOptions;

  	render() {
	    return (
	     	<View style={styles.container}>
	     		<Text style={{color: 'white'}}>Items</Text>
	     	</View>
	    );
	}
}

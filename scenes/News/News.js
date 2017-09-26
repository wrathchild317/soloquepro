import React, { Component } from 'react';
import { Text, View, Button, Picker } from 'react-native';
import configs from './configs';
import styles from './styles';

export default class News extends Component {

	static navigationOptions = configs.navigationOptions;

  	render() {
	    return (
	     	<View style={styles.container}>
	     		<Text style={{color: 'white'}}>News</Text>
	     		<Picker
	     			style={{color: 'white'}}
	     		>
	  				<Picker.Item label="Java" value="java" />
	  				<Picker.Item label="JavaScript" value="js" />
				</Picker>
	     	</View>
	    );
	}
}

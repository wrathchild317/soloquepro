import React, { Component } from 'react';
import { Text, View, Button, Picker } from 'react-native';
import configs from './configs';
import styles from './styles';

export default class News extends Component {

	static navigationOptions = configs.navigationOptions;

	onPress = () => {
	}

  	render() {
  		

	    return (
	     	<View style={styles.container}>
	     		<Text style={{color: 'white'}}>News</Text>
	     		<Button title="Items Page" onPress={this.onPress} />
	     	</View>
	    );
	}
}

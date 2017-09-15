import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import configs from './configs';
import styles from './styles';

export default class News extends Component {

	static navigationOptions = configs.navigationOptions;
	
	_onPress = () => {
		const { navigate } = this.props.navigation;
		navigate('Champion');
	}

  	render() {
	    return (
	     	<View style={styles.container}>
	     		<Text style={{color: 'white'}}>News</Text>
	     		<Button title={'Click Me!'}onPress={this._onPress} />
	     	</View>
	    );
	}
}

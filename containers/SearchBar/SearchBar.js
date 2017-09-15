import React, { Component } from 'react';
import {View, StyleSheet } from 'react-native';
import styles from './styles'
import Search from 'react-native-searchbar'
import Icon from 'react-native-vector-icons/FontAwesome';

var props = {
	ref: (ref) => this.searchBar = ref,
	showOnLoad: true,
	focusOnLayout: false,
	placeholder: 'Summoner Search',
	onBack: () => {},
	backButton: <Icon name="search" size={22} color="#FFF"/>,
	heightadjust: 0,
	fontSize: 18,
	backgroundColor: 'black',
	selectionColor: 'white',
	textColor: 'white',
}
 
export default class SearchBar extends Component {
	render() {
		return(
			<View style={styles.container}>
				<Search {...props}/>
			</View>
		)
	}
}
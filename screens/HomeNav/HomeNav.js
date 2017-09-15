/*---------------React------------------*/
import React, { Component } from 'react';
import {View, StyleSheet } from 'react-native';
/*-------------------Redux------------------*/
import { connect } from 'react-redux';
/*---------------Navigation------------------*/
import { HomeNavigation } from './configs';
import { addNavigationHelpers } from 'react-navigation';
/*------------------Styles------------------*/
import styles from './styles';



class HomeNav extends Component {
	static navigationOptions = {
		title: 'Home',
		header: null
	}

	render() {
		const { dispatch, navigationState } = this.props;
		return (
	      	<View style={styles.container}>
	        	<HomeNavigation
	        		navigation={
	        			addNavigationHelpers({
	        				dispatch: dispatch,
	        				state: navigationState,
	        			})
	        		} 
	        	/>
	      	</View>
    	);
	}
}

const mapStateToProps = (state) => {
	return {
		navigationState: state.homeNavigation,
	}
}

export default connect(mapStateToProps)(HomeNav)



/*---------------React------------------*/
import React, { Component } from 'react';
import {View, StyleSheet } from 'react-native';
/*-------------------Redux------------------*/
import { connect } from 'react-redux';
/*---------------Navigation------------------*/
import { ChampionsNavigation, navigationOptions } from './configs';
import { addNavigationHelpers } from 'react-navigation';
/*------------------Styles------------------*/
import styles from './styles';



class ChampionsNav extends Component {

	static navigationOptions = navigationOptions;

	render() {
		const { dispatch, navigationState } = this.props;
		return (
	      	<View style={styles.container}>
	        	<ChampionsNavigation
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
		navigationState: state.championsNavigation,
	}
}

export default connect(mapStateToProps)(ChampionsNav)
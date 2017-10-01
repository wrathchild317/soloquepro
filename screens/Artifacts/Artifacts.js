/*---------------React------------------*/
import React, { Component } from 'react';
import {View, StyleSheet, Text } from 'react-native';
/*-------------------Redux------------------*/
import { connect } from 'react-redux';
/*---------------Navigation------------------*/
import { ArtifactsNavigation, navigationOptions } from './configs';
import { addNavigationHelpers } from 'react-navigation';
/*------------------Styles------------------*/
import styles from './styles';

class Artifacts extends Component {

	static navigationOptions = navigationOptions;

	render() {
		const { dispatch, navigationState } = this.props;
		return (
	      	<View style={styles.container}>
	      		<View style={{ height: 49, width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: 'black', borderStyle: 'solid', borderBottomColor: 'rgba(255,255,255,0.2)', borderBottomWidth: 1 }}>
	      			<Text style={{ fontFamily: 'Elianto', fontSize: 20, color: 'white'}}>ARTIFACTS</Text>
	      		</View>
	        	<ArtifactsNavigation
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
		navigationState: state.artifactsNavigation,
	}
}

export default connect(mapStateToProps)(Artifacts)
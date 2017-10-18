import React, { Component } from 'react';
import { View, BackHandler } from 'react-native';
//---------------redux----------------------
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//-----------import Navigator----------------
import { AppNavigator } from './configs';
import { addNavigationHelpers,  NavigationActions } from 'react-navigation';
//-----------import styles ----------------------
import styles from './styles';
//------------actions-----------------------------//
import { getChampionData, } from '../../redux/actions';


class App extends Component {

	onBackPress = () => {
	   	const { dispatch, navigationState } = this.props;

	   	const { index, routes } = navigationState;

	   	switch(routes[index].routeName) {
	   		case 'Home': 
	   			return false;
	   		case 'MapItems': 
	   			dispatch(NavigationActions.back({
				  key: routes[index].key,
				}));
	   			return true;
	   		default: 
	   			dispatch(NavigationActions.back());
	   			return true;
	   	}
	}

	componentDidMount() {
		BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
	}

	componentWillUnmount(){
		BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
	}

  	render() {
  		const { dispatch, navigationState } = this.props;

		return(
			<View style={styles.container}>
				<View style={styles.statusBar}/>
				<View style={styles.container}>
					<AppNavigator 
						navigation={
		        			addNavigationHelpers({
		        				dispatch: dispatch,
		        				state: navigationState,
		        			})
		        		}
					/>
				</View>
			</View>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		navigationState: state.appNavigation,
	}
}


export default connect(mapStateToProps)(App)
